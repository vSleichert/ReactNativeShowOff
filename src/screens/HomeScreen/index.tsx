import { useNavigation } from '@react-navigation/native'
import { observer } from "mobx-react-lite"
import React, { useContext, useEffect, useState } from 'react'
import { ActivityIndicator, Button, FlatList, Text } from 'react-native'
import { getProjectsList } from '../../axios/projects'
import { UserStoreContext } from '../../mobx/user'
import ProjectListItem from './components/ProjectListItem'

export interface Project {
  id: string
  name: string
  sourceLang: string
  targetLangs: string[]
  status: string
  dateDue: Date
}

const HomeScreen = observer(() => {
  const userStore = useContext(UserStoreContext)
  const [projects, setProjects] = useState<Project[] | null>(null)

  useEffect(() => {
    getProjectsList().then((res) => {
      setProjects(res.data.content)
    }).catch((err) => {
      console.log('err', err)
    })
  }, [])

  return (
    <>
      <Text>Logged as: {userStore.loggedUsername}</Text>
      { projects ? <FlatList
          data={projects}
          numColumns={1}
          renderItem={({ item: project }) => <ProjectListItem project={project} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingHorizontal: 16 }}
        /> : <ActivityIndicator animating={true} color='black'/> }
    </>
  )
})

export default HomeScreen