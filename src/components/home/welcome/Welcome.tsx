import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './welcome.style';
import {COLORS, icons, SIZES} from '../../../constants';
import {FC, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const jobTypes = ['Full-time', 'Part-time', 'Contract'];

interface WelcomeProps {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  handleClick: () => void;
}

const Welcome: FC<WelcomeProps> = ({
  searchTerm,
  setSearchTerm,
  handleClick,
}) => {
  const [activeJobType, setActiveJobType] = useState('Full-time');
  const {navigate} = useNavigation();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Adrian</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            placeholderTextColor={COLORS.gray}
            cursorColor={COLORS.secondary}
            enterKeyHint="search"
            placeholder="What are you looking for?"
            value={searchTerm}
            onChangeText={value => setSearchTerm(value)}
            style={styles.searchInput}
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          horizontal
          contentContainerStyle={{
            columnGap: SIZES.small,
          }}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{
                ...styles.tab,
                borderColor:
                  activeJobType === item ? COLORS.secondary : COLORS.gray2,
              }}
              onPress={() => {
                setActiveJobType(item);
                navigate('Search', {q: item});
              }}>
              <Text
                style={{
                  ...styles.tabText,
                  color:
                    activeJobType === item ? COLORS.secondary : COLORS.gray2,
                }}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Welcome;
