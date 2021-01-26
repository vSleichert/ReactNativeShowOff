import { observer } from "mobx-react-lite"
import React, { useContext, useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Text } from 'react-native'
import { getProjectsList } from '../../axios/projects'
import { UserStoreContext } from '../../mobx/user'
import ProjectListItem from './components/ProjectListItem'
import Filters from "./components/Filters"

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
  const [filter, setFilter] = useState<number>(0)

  const getData = () => getProjectsList().then((res) => {
    setProjects([res.data.content[0]])
  }).catch((err) => {
    console.log('err', err)
  })

  useEffect(() => {
    getData()
  }, [])

  return (
      <>
        <Filters value={filter} setValue={setFilter} />
        <Text>Logged as: {userStore.loggedUsername}</Text>
        <Text>filter: {filter}</Text>
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