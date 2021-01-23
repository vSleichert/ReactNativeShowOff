import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button } from 'react-native'

const SomeOtherScreen = () => {
  const navigation = useNavigation()

  return (
    <Button
      title="Go to Home"
      onPress={() =>
        navigation.navigate('Home')
      }
    />
  )
}

export default SomeOtherScreen