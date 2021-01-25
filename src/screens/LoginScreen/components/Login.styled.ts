import styled from 'styled-components/native'

export const Background = styled.View`
  background-color: #3db7ff;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Container = styled.View`
  width: 300px;
  height: 320px;
  background-color: white;
  border-radius: 8px;
  margin-bottom: 40%;
`

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: #3db7ff;
  margin-top: 10px;
  padding-bottom: 30px;
`

export const LoginButton = styled.TouchableOpacity`
  background-color: #3db7ff;
  width: 80%;
  height: 38px;
  align-self: center;
  margin-top: 60px;
  justify-content: center;
`

export const ButtonText = styled.Text`
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
`

export const LoginInput = styled.TextInput`
  flex-direction: row;
  background-color: #dadada;
  font-size: 17px;
  color: #2a2a2a;
  text-align: center;
  border-radius: 54px;
  height: 46px;
  margin: 10px 10px 0px 10px;
`