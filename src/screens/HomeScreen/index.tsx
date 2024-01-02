import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {COLORS, SIZES} from '../../constants';
import {Nearbyjobs, Popularjobs, Welcome} from '../../components';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigation = useNavigation();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        backgroundColor: COLORS.lightWhite,
      }}>
      <View
        style={{
          flex: 1,
          padding: SIZES.medium,
        }}>
        <Welcome
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleClick={() => {
            if (searchTerm.length > 3) {
              navigation.navigate('Search', {q: searchTerm});
            }
          }}
        />
        <Popularjobs />
        <Nearbyjobs />
      </View>
    </ScrollView>
  );
};

export default Home;
