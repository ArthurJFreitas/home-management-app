import React from 'react';

import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';

import {
  View,
  Text,
  StatusBar
} from 'react-native';

import Login from './pages/login';
import Routes from './routes/'


const App = () => {
  return (
    <NavigationContainer>
      {/* <StatusBar barStyle={'dark-content'} backgroundColor="#fff"/> */}
      <Routes />
    </NavigationContainer>
  );
};


export default App;
