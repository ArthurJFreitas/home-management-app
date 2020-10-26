import React from 'react';
import {
  View,
  Text,
  StatusBar
} from 'react-native';
import Login from './src/pages/login';


const App = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor="#fff"/>
      <Login />
    </>
  );
};


export default App;
