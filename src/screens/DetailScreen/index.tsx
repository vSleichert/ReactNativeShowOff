import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Text } from 'react-native'
import { getProject, Project } from '../../axios/projects';

const DetailScreen = ({route}) => {
  const { uid } = route.params;

  const navigation = useNavigation()
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
    <>
      <Text>id: {project.uid}</Text>
    </>
  )
}

export default DetailScreen