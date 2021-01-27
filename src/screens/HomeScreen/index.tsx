import { observer } from "mobx-react-lite"
import React, { useContext, useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Text } from 'react-native'
import { getProjectsList, Project } from '../../axios/projects'
import { UserStoreContext } from '../../mobx/user'
import ProjectListItem from './components/ProjectListItem'
import Filters from "./components/Filters"

const HomeScreen = observer(() => {
  const userStore = useContext(UserStoreContext)
  const [projects, setProjects] = useState<Project[] | null>(null)
  const [filter, setFilter] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(false)

  const getData = () => getProjectsList(filter === 0 ? undefined : filter).then((res) => {
    setProjects(res.data.content)
  }).catch((err) => {
    console.log('err', err)
  }).finally(() => setLoading(false))

  useEffect(() => {
    setLoading(true)
    getData()
  }, [filter])

  return (
      <>
        <Filters value={filter} setValue={setFilter} />
        <Text>Logged as: {userStore.loggedUsername}</Text>
        <Text>filter: {filter}</Text>
        { loading ? <ActivityIndicator animating={true} color='black'/> :
          <FlatList
              data={projects}
              numColumns={1}
              renderItem={({ item: project }) => <ProjectListItem project={project} />}
              keyExtractor={(item) => item.id}
              contentContainerStyle={{ paddingHorizontal: 16 }}
          /> }
      </>
  )
})

export default HomeScreen