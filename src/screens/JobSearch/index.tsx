import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import axios from 'axios';

import {NearbyJobCard} from '../../components';
import {COLORS, icons, SIZES} from '../../constants';
import styles from '../../styles/search';
import {useNavigation, useRoute} from '@react-navigation/native';
import {IDaum} from '../../types';
import {rapidApiKey} from '../../hooks/useFetch.ts';

const JobSearch = () => {
  const params = useRoute();
  // @ts-ignore
  const query = params.params.q;
  const router = useNavigation();

  const [searchResult, setSearchResult] = useState<IDaum[]>([]);
  const [searchLoader, setSearchLoader] = useState(false);
  const [searchError, setSearchError] = useState(null);
  const [page, setPage] = useState(1);

  const handleSearch = async () => {
    setSearchLoader(true);
    setSearchResult([]);

    try {
      const options = {
        method: 'GET',
        url: 'https://jsearch.p.rapidapi.com/search',
        headers: {
          'X-RapidAPI-Key': rapidApiKey,
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
        },
        params: {
          query,
          page: page.toString(),
        },
      };

      const response = await axios.request(options);
      setSearchResult(response.data.data);
    } catch (error) {
      setSearchError(error as any);
      console.log(error);
    } finally {
      setSearchLoader(false);
    }
  };

  const handlePagination = (direction: string) => {
    if (direction === 'left' && page > 1) {
      setPage(page - 1);
      handleSearch();
    } else if (direction === 'right') {
      setPage(page + 1);
      handleSearch();
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
      <FlatList
        data={searchResult}
        renderItem={({item}) => (
          <NearbyJobCard
            job={item}
            handleNavigate={() =>
              router.navigate('JobDetails', {id: item.job_id})
            }
          />
        )}
        keyExtractor={item => item.job_id}
        contentContainerStyle={{padding: SIZES.medium, rowGap: SIZES.medium}}
        ListHeaderComponent={() => (
          <>
            <View style={styles.container}>
              <Text style={styles.searchTitle}>{query}</Text>
              <Text style={styles.noOfSearchedJobs}>Job Opportunities</Text>
            </View>
            <View style={styles.loaderContainer}>
              {searchLoader ? (
                <ActivityIndicator size="large" color={COLORS.primary} />
              ) : (
                searchError && <Text>Oops something went wrong</Text>
              )}
            </View>
          </>
        )}
        ListFooterComponent={() => (
          <View style={styles.footerContainer}>
            <TouchableOpacity
              style={styles.paginationButton}
              onPress={() => handlePagination('left')}>
              <Image
                source={icons.chevronLeft}
                style={styles.paginationImage}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <View style={styles.paginationTextBox}>
              <Text style={styles.paginationText}>{page}</Text>
            </View>
            <TouchableOpacity
              style={styles.paginationButton}
              onPress={() => handlePagination('right')}>
              <Image
                source={icons.chevronRight}
                style={styles.paginationImage}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default JobSearch;
