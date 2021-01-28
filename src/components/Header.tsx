import AsyncStorage from '@react-native-community/async-storage'
import { useNavigation } from '@react-navigation/native'
import React, { useContext } from 'react'
import { Button } from 'react-native'
import { logoutUser } from '../axios/login'
import { UserStoreContext } from '../stores/user'

const Header = () => {
  const navigation = useNavigation()
  const userStore = useContext(UserStoreContext)

  const logout = () => {
    logoutUser().then(() => {
      userStore.resetStore()
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
        testID='logoutButton' 
        accessibilityLabel='logoutButton'
      />
  )
}

export default Header
