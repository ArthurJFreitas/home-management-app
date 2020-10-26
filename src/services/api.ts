import axios from 'axios'
import { Alert } from 'react-native'

const api = axios.create({ baseURL: "http://127.0.0.1:4000" })

interface LoginProps {
    name: string,
    email: string,
}

export default api