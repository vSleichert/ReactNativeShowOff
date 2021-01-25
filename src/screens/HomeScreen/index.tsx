import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button } from 'react-native'
import { getProjectsList } from '../../axios/projects'

const HomeScreen = () => {
  const navigation = useNavigation()

  const getData = () => getProjectsList().then((res) => {
    console.log('res', res)
  }).catch((err) => {
    console.log('err', err)
  })

  return (
    <Button
      title="Go to Other"
      onPress={getData}
    />
  )
}

export default HomeScreen