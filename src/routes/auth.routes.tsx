import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../pages/login'
import Register from '../pages/register'
import Home from '../components/Home'
import NewHome from '../pages/new-home'

const Auth = createStackNavigator()


const AuthRoutes = () => {
    return (

        <Auth.Navigator screenOptions={{headerShown:false}}>
            <Auth.Screen name="Home" component={Home} />
            <Auth.Screen name="NewHome" component={NewHome} />
        </Auth.Navigator>

    )
}

export default AuthRoutes