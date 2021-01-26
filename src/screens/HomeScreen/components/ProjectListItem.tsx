import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native'
import { Project } from '..'
import { Column, Container, Title } from './ProjectListItem.styled'

const ProjectListItem = ({project}: {project: Project}) => {
  const navigation = useNavigation()
  return (
    <Container onPress={() => navigation.navigate('Detail', {id: project.id})}>
      <Column>
        <Title>Name</Title>
        <Text>{project.name}</Text>
      </Column>
      <Column>
        <Title>Source</Title>
        <Text>{project.sourceLang}</Text>
      </Column>
      <Column>
        <Title>Target</Title>
        <Text>{project.targetLangs.toString()}</Text>
      </Column>
      <Column>
        <Title>Status</Title>
        <Text>{project.status}</Text>
      </Column>
    </Container>
  )
}

export default ProjectListItem