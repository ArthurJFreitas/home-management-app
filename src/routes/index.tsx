import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../pages/login'
import Register from '../pages/register'

const Auth = createStackNavigator()


const AuthRoutes = () => {
    return (

        <Auth.Navigator screenOptions={{headerShown:false}}>
            <Auth.Screen name="Login" component={Login} />
            <Auth.Screen name="Register" component={Register} />
        </Auth.Navigator>

    )
}

export default AuthRoutes