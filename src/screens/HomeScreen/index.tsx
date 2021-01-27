import { observer } from "mobx-react-lite"
import React, { useContext, useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Text } from 'react-native'
import { getProjectsList, Project } from '../../axios/projects'
import { UserStoreContext } from '../../mobx/user'
import ProjectListItem from './components/ProjectListItem'
import Filters from "./components/Filters"
import { ErrorMessage, InfoContainer } from "./components/Home.styled"
import { SafeAreaView } from "react-native-safe-area-context"

const HomeScreen = observer(() => {
  const userStore = useContext(UserStoreContext)
  const [projects, setProjects] = useState<Project[] | null>(null)
  const [filter, setFilter] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const getData = () => getProjectsList(filter === 0 ? undefined : filter).then((res) => {
    setError(null)
    setProjects(res.data.content)
  }).catch((err) => {
    setError(err.message)
    console.log('err', err)
  }).finally(() => setLoading(false))

  useEffect(() => {
    setLoading(true)
    getData()
  }, [filter])

  return (
      <SafeAreaView>
        <Filters value={filter} setValue={setFilter} />
        <InfoContainer>
          <Text>Logged as: {userStore.loggedUsername}</Text>
          <Text>filter: {filter}</Text>
        </InfoContainer>
        { error && <ErrorMessage>There was an error while getting your data: {error}</ErrorMessage> }
        { loading ? <ActivityIndicator animating={true} color='black'/> :
          <FlatList
              data={projects}
              numColumns={1}
              renderItem={({ item: project }) => <ProjectListItem project={project} />}
              keyExtractor={(item) => item.id}
              contentContainerStyle={{ paddingHorizontal: 16 }}
          /> }
      </SafeAreaView>
  )
})

export default HomeScreen