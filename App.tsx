import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native';

import {COLORS} from './src/constants';
import {Routing} from './src/routing';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
        <Routing />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
