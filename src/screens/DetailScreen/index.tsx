import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Text } from 'react-native'
import { getProject, Project } from '../../axios/projects';
import { Container, Item, Title } from './components/Detail.styled';

const DetailScreen = ({route}) => {
  const { uid } = route.params;

  const [project, setProject] = useState<Project | null>(null)

  useEffect(() => {
    getProject(uid).then((res) => {
      setProject(res.data)
    })
  }, [])

  if(!project) {
    return <ActivityIndicator animating={true} color='black'/>
  }

  return (
    <Container>
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