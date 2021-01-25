import { useNavigation } from '@react-navigation/native'
import { observer } from "mobx-react-lite"
import React, { useContext } from 'react'
import { Button, Text } from 'react-native'
import { getProjectsList } from '../../axios/projects'
import { UserStoreContext } from '../../mobx/user'

const HomeScreen = observer(() => {
  const userStore = useContext(UserStoreContext)
  const navigation = useNavigation()

  const getData = () => getProjectsList().then((res) => {
    console.log('res', res)
  }).catch((err) => {
    console.log('err', err)
  })

  return (
    <>
      <Text>Logged as: {userStore.loggedUsername}</Text>
      <Button
        title="Go to Other"
        onPress={getData}
      />
    </>
  )
})

export default HomeScreen