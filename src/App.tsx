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

import store from './redux/store/'
import {Provider} from 'react-redux'


const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle={'light-content'} backgroundColor="#77056D" />
        <Routes />
      </NavigationContainer>
    </Provider>
  );
};


export default App;
