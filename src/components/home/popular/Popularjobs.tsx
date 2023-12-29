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

import styles from './popularjobs.style';

const Popularjobs = () => {
  const navigation = useNavigation();
  const isLoading = false;
  const hasError = false;

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
        ) : hasError ? (
          <Text style={styles.errorText}>Something went wrong :(</Text>
        ) : (
          <FlatList
            horizontal
            contentContainerStyle={{
              columnGap: SIZES.medium,
            }}
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
            keyExtractor={item => item.toString()}
            renderItem={() => <PopularJobCard />}
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
