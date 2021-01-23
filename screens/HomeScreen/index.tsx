import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button } from 'react-native'

const HomeScreen = () => {
  const navigation = useNavigation()

  return (
    <Button
      title="Go to Other"
      onPress={() =>
        navigation.navigate('SomeOther', { name: 'Jane' })
      }
    />
  )
}

export default HomeScreen