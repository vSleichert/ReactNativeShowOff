import { useNavigation } from '@react-navigation/native'
import React, { useContext, useState } from 'react'
import { ActivityIndicator, Alert, KeyboardAvoidingView } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { loginUser } from '../../axios/login'
import { Background, ButtonText, Container, ErrorMessage, LoginButton, LoginInput, Title } from './index.styled'
import { observer } from 'mobx-react'
import { UserStoreContext } from '../../stores/user'

const LoginScreen = observer(() => {
  const navigation = useNavigation()
  const userStore = useContext(UserStoreContext)

  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [fetching, setFetching] = useState<boolean>(false)
  const [error, setError] = useState<null | string>(null)

  const login = () => {
    if (username.length === 0 || password.length === 0) {
      Alert.alert('Please fill your credentials.')

      return
    }

    setFetching(true)

    loginUser(username, password).then((res) => {
      setError(null)
      AsyncStorage.setItem('token', res.data.token)
      userStore.setLoggedUser(res.data.user.userName)
      navigation.navigate('Home')
    }).catch((err) => {
      err.response.status == 401 ? setError('Username or password is incorrect.') : setError(`there was an error: ${err.message}`)
    }).finally(() => {
      setFetching(false)
    })
  }

  return (
    <Background testID='loginScreen' accessibilityLabel='loginScreen'>
        <Container>
          <Title>MEMSOURCE</Title>
          <KeyboardAvoidingView>
            <LoginInput value={username} onChangeText={setUsername} placeholder='username' testID='username' accessibilityLabel='username'/>
            <LoginInput value={password} onChangeText={setPassword} secureTextEntry={true} placeholder='password' testID='password' accessibilityLabel='password' />
            { error && <ErrorMessage testID='loginErrorMessage' accessibilityLabel='loginErrorMessage' >{error}</ErrorMessage> }
            <LoginButton onPress={login} testID='loginButton' accessibilityLabel='loginButton'>
              {fetching ? <ActivityIndicator animating={true} color='white'/> :
                <ButtonText>
                  Login
                </ButtonText>
              }
            </LoginButton>
          </KeyboardAvoidingView>
        </Container>
    </Background>
  )
})

export default LoginScreen