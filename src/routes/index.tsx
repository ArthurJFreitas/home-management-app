import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {useSelector} from 'react-redux'

const Router = () => {
    const token = useSelector((state:any) => state.session.token)

    const getToken = async () => {
        try {
            const token1: any = await AsyncStorage.getItem('@token')

        }
        catch {
            console.log('deu bosta')
        }
       
    }
    getToken()
    return (
        <>
            { token ? <AuthRoutes /> : <AppRoutes />}
        </>
    )
}

export default Router
