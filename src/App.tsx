import React from 'react';

import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'react-native';

import { Provider } from 'react-redux';
import Routes from './routes';

import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#77056D" />
        <Routes />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
