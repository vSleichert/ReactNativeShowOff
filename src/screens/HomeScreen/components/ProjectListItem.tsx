import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Project } from '../../../axios/projects'
import { Column, Container, Item, Title } from './ProjectListItem.styled'

const ITEM_TEXT_LIMIT = 13

const longTextCorrection = (text: string) => {
  if (text.length > ITEM_TEXT_LIMIT) {
    return `${text.slice(0, ITEM_TEXT_LIMIT)}...`
  }

  return text
}

const ProjectListItem = ({ project }: { project: Project }) => {
  const navigation = useNavigation()

  return (
    <Container onPress={() => navigation.navigate('Detail', { uid: project.uid })} testID='projectItem' accessibilityLabel='projectItem'>
      <Column>
        <Title>Name</Title>
        <Item>{longTextCorrection(project.name)}</Item>
      </Column>
      <Column>
        <Title>Source</Title>
        <Item>{longTextCorrection(project.sourceLang)}</Item>
      </Column>
      <Column>
        <Title>Target</Title>
        <Item>{longTextCorrection(project.targetLangs.toString())}</Item>
      </Column>
      <Column>
        <Title>Status</Title>
        <Item>{longTextCorrection(project.status)}</Item>
      </Column>
    </Container>
  )
}

export default ProjectListItem