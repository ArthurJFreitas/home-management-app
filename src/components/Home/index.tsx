import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { View, Text } from 'react-native'
import TextLink from '../TextLink'
import {useSelector, useDispatch} from 'react-redux'
import {requestLogout} from '../../redux/actions/session'

const Home = ({navigation}:any) => {
    const token = useSelector((state:any) => state.session.token)

    const dispatch = useDispatch()


    const handleLogout = async() => {
     
        dispatch(requestLogout())
    }

    return (
        <View>
            <Text>Home</Text>
            <TextLink
                    onPress={() => navigation.navigate('NewHome')

                    }
                >
                    Criar nova casa
                </TextLink>
                <TextLink
                    onPress={() => navigation.navigate('ToDoPage')}
                >
                    Tood
                </TextLink>
                <TextLink
                    onPress={handleLogout}
                >
                    Sair
                </TextLink>
        </View>
    )
}

export default Home
