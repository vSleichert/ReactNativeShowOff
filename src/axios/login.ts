import axios from 'axios'
import { apiUrl } from './apiUrl'

export const loginUser = (userName: string, password: string) => axios.post(`${apiUrl}auth/login`, {
  password,
  userName
})