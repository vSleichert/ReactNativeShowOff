import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, Text } from 'react-native'

const DetailScreen = ({route}) => {
  const { id } = route.params;
  const navigation = useNavigation()

  return (
    <>
      <Text>id: {id}</Text>
      <Button
        title="Go to Home"
        onPress={() =>
          navigation.navigate('Home')
        }
      />
    </>
  )
}

export default DetailScreen