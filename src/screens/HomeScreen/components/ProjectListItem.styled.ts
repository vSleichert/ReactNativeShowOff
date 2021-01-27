import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  background-color: white;
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: space-between;
  margin: 6px 0px 6px 0px;
  border-radius: 8px;
  border-width: 2px;
  border-color: #3db7ff;
`

export const Column = styled.View`
  flex-direction: column;
  flex-basis: 25%;
  justify-content: center;
`

export const Title = styled.Text`
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`

export const Item = styled.Text`
  text-align: center;
`