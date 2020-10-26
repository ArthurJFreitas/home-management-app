import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../pages/login'
import Register from '../pages/register'
import Home from '../components/Home'

const Auth = createStackNavigator()


const AuthRoutes = () => {
    return (

        <Auth.Navigator screenOptions={{headerShown:false}}>
            <Auth.Screen name="Login" component={Login} />
            <Auth.Screen name="Register" component={Register} />
            <Auth.Screen name="Home" component={Home} />
        </Auth.Navigator>

    )
}

export default AuthRoutes