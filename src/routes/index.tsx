import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

const Router = () => {
  const token = useSelector((state: any) => state.session.token);

  const getToken = async () => {
    try {
      const token1: any = await AsyncStorage.getItem('@token');
    } catch {
      console.log('deu bosta');
    }
  };
  getToken();
  return <>{token ? <AuthRoutes /> : <AppRoutes />}</>;
};

export default Router;
