import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { ActivityIndicator, Alert, KeyboardAvoidingView } from 'react-native'
import { loginUser } from '../../axios/login'
import { Background, ButtonText, Container, LoginButton, LoginInput, Title } from './components/Login.styled'

const LoginScreen = () => {
  const navigation = useNavigation()

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
      console.log('resp', res)
      //saveToken and some DATA
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
              </ButtonText>}
          </LoginButton>
        </Container>
      </KeyboardAvoidingView>
    </Background>
  )
}

export default LoginScreen