import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios'
import { apiUrl } from './apiUrl'

export const loginUser = (userName: string, password: string) => axios.post(`${apiUrl}auth/login`, {
  password,
  userName
})

export const logoutUser = async () => {
  const token = await AsyncStorage.getItem('token')
  
  return axios.post(`${apiUrl}auth/logout?token=${token}`, {
    headers: {
      'Authorization': `ApiToken ${token}`
    }
  })
}