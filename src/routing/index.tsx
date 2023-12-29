import React from 'react';
import {ScreenHeaderBtn} from '../components';
import {COLORS, icons, images} from '../constants';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/HomeScreen';

type RootStackParamList = {
  Home: undefined;
  Search: {q: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();
export const Routing = () => {
  return (
    <>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerStyle: {
              backgroundColor: COLORS.lightWhite,
            },
            headerShadowVisible: false,
            headerLeft: () => (
              <ScreenHeaderBtn width={20} height={20} icon={icons.menu} />
            ),
            headerRight: () => (
              <ScreenHeaderBtn width={50} height={50} icon={images.profile} />
            ),
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name="Search"
          component={Home}
          options={{
            headerStyle: {
              backgroundColor: COLORS.lightWhite,
            },
            headerShadowVisible: false,
            headerLeft: () => (
              <ScreenHeaderBtn width={20} height={20} icon={icons.menu} />
            ),
            headerRight: () => (
              <ScreenHeaderBtn width={50} height={50} icon={images.profile} />
            ),
            headerTitle: '',
          }}
        />
      </Stack.Navigator>
    </>
  );
};
