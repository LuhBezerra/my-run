import React from 'react';
import {
  View,
  StatusBar,
} from 'react-native';

import SplashScreen from 'react-native-splash-screen';

import Home from './pages/Home';

const App: () => React$Node = () => {

  SplashScreen.hide();

  return (
    <View>
      <Home/>
    </View>
  );
};

export default App;
