import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../components/Home';
import NewHome from '../pages/new-home';
import ToDoPage from '../pages/to-do-page';

const Auth = createStackNavigator();

const AuthRoutes = () => {
  return (
    <Auth.Navigator screenOptions={{ headerShown: false }}>
      <Auth.Screen name="Home" component={Home} />
      <Auth.Screen name="NewHome" component={NewHome} />
      <Auth.Screen name="ToDoPage" component={ToDoPage} />
    </Auth.Navigator>
  );
};

export default AuthRoutes;
