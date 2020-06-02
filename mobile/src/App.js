/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  StatusBar,
} from 'react-native';
import Home from './Home';

import colors from './styles/colors'

const App: () => React$Node = () => {
  return (
    <View>
      <StatusBar backgroundColor={colors.greyRegular} barStyle="dark-content" />
      <Home/>
    </View>
  );
};

export default App;
