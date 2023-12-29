import React from 'react';
import {ScrollView, View} from 'react-native';
import {COLORS, SIZES} from '../../constants';
import {Nearbyjobs, Popularjobs, Welcome} from '../../components';
import {useFetch} from '../../hooks/useFetch.ts';

const Home = () => {
  const {error, isLoading, data} = useFetch();
  console.log(data);
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
        <Welcome />
        <Popularjobs />
        <Nearbyjobs />
      </View>
    </ScrollView>
  );
};

export default Home;
