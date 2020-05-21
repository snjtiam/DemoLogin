import * as React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import {MyPlace} from './screens/MyPlace';
import Settings from './screens/Settings';
import {About} from './screens/About';
import Home from './screens/Home';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="MyPlace" component={MyPlace} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="About" component={About} />
    </Tab.Navigator>
  );
};
