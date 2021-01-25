import axios from 'axios'

export const loginUser = (userName: string, password: string) => axios.post(`https://cloud.memsource.com/web/api2/v1/auth/login`, {
  password,
  userName
})