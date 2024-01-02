import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import PopularJobCard from '../../common/cards/popular/PopularJobCard.tsx';
import {COLORS, SIZES} from '../../../constants';

import {useFetch} from '../../../hooks/useFetch.ts';
import {IDaum} from '../../../types';
import styles from './popularjobs.style';

const Popularjobs = () => {
  const navigation = useNavigation();
  const {isLoading, data, error} = useFetch<IDaum[]>('search', {
    query: 'React developer',
    num_pages: 1,
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text style={styles.errorText}>Something went wrong :(</Text>
        ) : (
          <FlatList
            horizontal
            contentContainerStyle={{
              columnGap: SIZES.medium,
            }}
            data={data}
            renderItem={item => (
              <PopularJobCard
                key={item.item.job_id}
                item={item.item}
                selectedJob="Full-time"
                handlePressCard={job =>
                  navigation.navigate('JobDetails', {id: job.job_id})
                }
              />
            )}
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
