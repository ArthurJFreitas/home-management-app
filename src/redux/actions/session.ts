import { USER_INFO, LOGOUT, LOGIN } from './index';
import api from '../../services/api'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const requestUserInfo = () => ({
    type: USER_INFO,
})

export const logout = () => ({
    type: LOGOUT
})

export const requestLogout = () => async (dispatch: any) => {
    await AsyncStorage.clear()
    dispatch(logout())
}


export const login = (token: string) => ({
        type: LOGIN,
        token
})

export const requestLogin = (token: string) => async (dispatch: any) => {

    dispatch(login(token))

    await AsyncStorage.setItem('@token', token)
}
