import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
import { apiUrl } from './apiUrl'

export interface Project {
  uid: string
  id: string
  name: string
  sourceLang: string
  targetLangs: string[]
  status: string
  dateDue: Date
}

interface GetProjectListResponse {
  content: Project[]
}

export const getProjectsList = async () => {
  const token = await AsyncStorage.getItem('token')
  
  return axios.get<GetProjectListResponse>(`${apiUrl}projects`, {
    headers: {
      'Authorization': `ApiToken ${token}`
    }
  })
}

export const getProject = async (projectUid: string) => {
  const token = await AsyncStorage.getItem('token')
  
  return axios.get<Project>(`${apiUrl}projects/${projectUid}`, {
    headers: {
      'Authorization': `ApiToken ${token}`
    }
  })
}