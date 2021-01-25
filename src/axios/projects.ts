import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'

export const getProjectsList = async () => {
  const token = await AsyncStorage.getItem('token')
  
  return axios.get('https://cloud.memsource.com/web/api2/v1/projects', {
    headers: {
      'Authorization': `ApiToken ${token}`
    }
  })
}