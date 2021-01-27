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

export interface GetProjectListResponse {
  totalPages: number
  content: Project[]
}

export const getProjectsList = async (pageSize: number, pageNumber: number = 0, dueInHours?: number) => {
  const token = await AsyncStorage.getItem('token')
  
  return axios.get<GetProjectListResponse>(`${apiUrl}projects`, {
    params: {
      dueInHours: dueInHours,
      pageNumber,
      pageSize
    },
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