import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import NearByJobsCard from '../../common/cards/nearby/NearbyJobCard.tsx';
import {COLORS, SIZES} from '../../../constants';

import {useFetch} from '../../../hooks/useFetch.ts';
import {IDaum} from '../../../types';
import styles from './nearbyjobs.style';

const Nearbyjobs = () => {
  const navigation = useNavigation();
  const {isLoading, data, error} = useFetch<IDaum[]>('search', {
    query: 'React developer',
    num_pages: 1,
  });

  const renderItem: ListRenderItem<IDaum> = item => (
    <NearByJobsCard
      key={`nearby-job-${item.item.job_id}`}
      job={item.item}
      handleNavigate={() =>
        navigation.navigate('JobDetails', {id: item.item.job_id})
      }
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
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
            contentContainerStyle={{
              rowGap: SIZES.medium,
            }}
            data={data}
            renderItem={renderItem}
          />
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
