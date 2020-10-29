import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../pages/login'
import Register from '../pages/register'
import Home from '../components/Home'
import NewHome from '../pages/new-home'
import FirstScreen from '../pages/first-screen'

const App = createStackNavigator()


const AppRoutes = () => {
    return (

        <App.Navigator screenOptions={{ headerShown: false }}>

            <App.Screen name="FirstScreen" component={FirstScreen} />
            <App.Screen name="Login" component={Login} />
            <App.Screen name="Register" component={Register} />
        </App.Navigator>

    )
}

export default AppRoutes