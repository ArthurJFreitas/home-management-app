import { USER_INFO, LOGOUT, LOGIN } from '../actions/'


import AsyncStorage from "@react-native-async-storage/async-storage";

const getToken = async() => {        
    try {
        const token: any = await AsyncStorage.getItem('@token')
        return token
        
    }
    catch {
       console.log('MERDA NO GET TOKEN DO REDUX')
       return ''
    }
}

const defaultState = {
    token: ""
};

const session = (state = defaultState, action: any) => {
    switch (action.type) {
        case USER_INFO:
            return { ...state, token: action.token };

        case LOGOUT:
            return {
                ...state, token: ""
            }
        case LOGIN:
            return {
                ...state, token: action.token
            }

        default:
            return state;
    }
};

export default session;