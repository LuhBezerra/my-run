import React from 'react';
import {
  View,
  StatusBar,
} from 'react-native';

import Home from './pages/Home';

const App: () => React$Node = () => {
  return (
    <View>
      <Home/>
    </View>
  );
};

export default App;
