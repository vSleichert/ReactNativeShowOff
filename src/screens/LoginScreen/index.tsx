import { useNavigation } from '@react-navigation/native'
import React, { useContext, useState } from 'react'
import { ActivityIndicator, Alert, KeyboardAvoidingView } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { loginUser } from '../../axios/login'
import { Background, ButtonText, Container, LoginButton, LoginInput, Title } from './components/Login.styled'
import { observer } from 'mobx-react'
import { UserStoreContext } from '../../mobx/user'

const LoginScreen = observer(() => {
  const navigation = useNavigation()
  const userStore = useContext(UserStoreContext)

  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [fetching, setFetching] = useState<boolean>(false)

  const login = () => {
    if (username.length === 0 || password.length === 0) {
      Alert.alert('Please fill your credentials.')

      return
    }

    setFetching(true)

    loginUser(username, password).then((res) => {
      AsyncStorage.setItem('token', res.data.token)
      userStore.setLoggedUser(res.data.user.userName)
      navigation.navigate('Home')
    }).catch((err) => {
      console.log('error', err)
    }).finally(() => {
      setFetching(false)
    })
  }

  return (
    <Background>
      <KeyboardAvoidingView>
        <Container>
          <Title>MEMSOURCE</Title>
          <LoginInput value={username} onChangeText={setUsername} placeholder='username' />
          <LoginInput value={password} onChangeText={setPassword} secureTextEntry={true} placeholder='password' />
          <LoginButton onPress={login}>
            {fetching ? <ActivityIndicator animating={true} color='white'/> :
              <ButtonText>
                Login
              </ButtonText>
            }
          </LoginButton>
        </Container>
      </KeyboardAvoidingView>
    </Background>
  )
})

export default LoginScreen