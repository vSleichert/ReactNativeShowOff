import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Text } from 'react-native'
import { getProject, Project } from '../../axios/projects'
import { Container, ErrorMessage, Item, Title } from './index.styled'

const DetailScreen = ({route}: {route: any}) => {
  const { uid } = route.params

  const [project, setProject] = useState<Project | null>(null)
  const [error, setError] = useState<null | string>(null)

  useEffect(() => {
    getProject(uid).then((res) => {
      setError(null)
      setProject(res.data)
    }).catch((err) => {
      setError(err.message)
    })
  }, [])

  if(error) {
    return <ErrorMessage>There was an error while getting your data: {error}</ErrorMessage>
  }

  if(!project) {
    return <ActivityIndicator animating={true} color='black'/>
  }

  return (
    <Container testID='detailScreen' accessibilityLabel='detailScreen'>
      <Item>
        <Title>Name: </Title>
        <Text>{project.name}</Text>
      </Item>
      <Item>
        <Title>Source language: </Title>
        <Text>{project.sourceLang}</Text>
      </Item>
      <Item>
        <Title>Target Languages: </Title>
        <Text>{project.targetLangs.toString()}</Text>
      </Item>
      <Item>
        <Title>Status: </Title>
        <Text>{project.status}</Text>
      </Item>
    </Container>
  )
}

export default DetailScreen