import styled from 'styled-components/native'
import Slider from '@react-native-community/slider'
import { Dropdown as DropdownList } from 'react-native-material-dropdown-v2'

export const SliderFilter = styled(Slider)`
  width: 150px;
  margin-left: 5%;
`

export const Dropdown = styled(DropdownList)`
  width: 150px;
  margin-right: 5%;
`

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
`