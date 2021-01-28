import { observer } from "mobx-react-lite"
import React, { useContext, useEffect, useState } from 'react'
import { ActivityIndicator, Button, FlatList, Text } from 'react-native'
import { GetProjectListResponse, getProjectsList, Project } from '../../axios/projects'
import { UserStoreContext } from '../../stores/user'
import ProjectListItem from './components/ProjectListItem'
import Filters from "./components/Filters"
import { ErrorMessage, Footer, InfoContainer, PageText } from "./index.styled"
import { SafeAreaView } from "react-native-safe-area-context"

const PAGE_SIZE = 10

const HomeScreen = observer(() => {
  const userStore = useContext(UserStoreContext)
  const [projects, setProjects] = useState<GetProjectListResponse | null>(null)
  const [filter, setFilter] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [pageNumber, setPageNumber] = useState(1)

  const getData = (pageNumber: number) => getProjectsList(PAGE_SIZE, pageNumber, filter === 0 ? undefined : filter).then((res) => {
    setError(null)
    setProjects(res.data)
  }).catch((err) => {
    setError(err.message)
  }).finally(() => setLoading(false))

  useEffect(() => {
    setLoading(true)
    getData(pageNumber - 1)
  }, [filter, pageNumber])

  return (
      <SafeAreaView testID='homeScreen' accessibilityLabel='homeScreen'>
        <Filters value={filter} setValue={setFilter} />
        <InfoContainer>
          <Text>Logged as: {userStore.loggedUsername}</Text>
          <Text>filter: {filter}</Text>
        </InfoContainer>
        { error && <ErrorMessage>There was an error while getting your data: {error}</ErrorMessage> }
        { loading ? <ActivityIndicator animating={true} color='black'/> :
          <FlatList
              data={projects?.content}
              numColumns={1}
              renderItem={({ item: project }) => <ProjectListItem project={project} />}
              keyExtractor={(item) => item.id}
              contentContainerStyle={{ paddingHorizontal: 16 }}
          /> }
          <Footer>
            <Button 
              title='previous'
              disabled={pageNumber === 1}
              onPress={() => setPageNumber(pageNumber - 1)}
            />
            <PageText>page number: {pageNumber} of {projects?.totalPages}</PageText>
            <Button
              title='next'
              disabled={pageNumber === projects?.totalPages}
              onPress={() => setPageNumber(pageNumber + 1)}
            />
          </Footer>
      </SafeAreaView>
  )
})

export default HomeScreen