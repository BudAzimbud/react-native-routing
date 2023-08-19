import React from 'react';
import 'react-native-gesture-handler';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import Create from '../Screens/Create';
import BottomTabNavigator from './BottomTabNavigator';
import Login from '../Screens/Login';

const Stack = createStackNavigator();

function Navigator(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // screenOptions={{headerShown: false}}
        initialRouteName="Profile">
        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen name="BottomNavigator" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
