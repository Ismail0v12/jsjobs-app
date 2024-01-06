import React from 'react';
import {ScreenHeaderBtn} from '../components';
import {COLORS, icons, images} from '../constants';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/HomeScreen';
import JobDetails from '../screens/JobDetails';
import {RootStackParamList} from './types.ts';
import {useNavigation} from '@react-navigation/native';
import JobSearch from '../screens/JobSearch';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();
export const Routing = () => {
  const navigation = useNavigation();
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
              <ScreenHeaderBtn
                width={50}
                handlePress={() => navigation.navigate('Login')}
                height={50}
                icon={images.profile}
              />
            ),
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name="Search"
          component={JobSearch}
          options={{
            headerStyle: {
              backgroundColor: COLORS.lightWhite,
            },
            headerShadowVisible: false,
            headerLeft: () => (
              <ScreenHeaderBtn
                width={20}
                height={20}
                icon={icons.left}
                handlePress={() => navigation.goBack()}
              />
            ),

            headerTitle: '',
          }}
        />
        <Stack.Screen
          name="JobDetails"
          component={JobDetails}
          options={{
            headerStyle: {
              backgroundColor: COLORS.lightWhite,
            },
            headerShadowVisible: false,
            headerBackVisible: false,
            headerLeft: () => (
              <ScreenHeaderBtn
                width={20}
                height={20}
                icon={icons.left}
                handlePress={() => navigation.goBack()}
              />
            ),
            headerRight: () => (
              <ScreenHeaderBtn width={20} height={20} icon={icons.share} />
            ),
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </>
  );
};
