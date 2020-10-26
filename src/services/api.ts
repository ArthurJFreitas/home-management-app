import axios from 'axios'
import { Alert } from 'react-native'

const api = axios.create({ baseURL: "http://127.0.0.1:4000" })

interface LoginProps {
    name: string,
    email: string,
}

export const LoginApi = async (data: any) => {
    try {
        const res = await api.post('/login',{...data})
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        return res
    }
    catch {
        Alert.alert('Deu merda')
    }
}   