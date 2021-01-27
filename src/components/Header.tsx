import AsyncStorage from '@react-native-community/async-storage'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button } from 'react-native'
import { logoutUser } from '../axios/login'

const Header = () => {
  const navigation = useNavigation()

  const logout = () => {
    logoutUser().then(() => {
      AsyncStorage.removeItem('token')
      navigation.navigate('Login')
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
      <Button
        onPress={logout}
        title="Logout"
        color="#e41616"
      />
  )
}

export default Header
