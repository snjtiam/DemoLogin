/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {Home} from './src/screens/Home';
import {TabNavigator} from './src/TabNavigator';
import {ReduxStore} from './src/ReduxStore';
import {AppNavigator} from './src/AppNavigator';

const App: () => React$Node = () => {
  return <ReduxStore />;
};

export default App;
