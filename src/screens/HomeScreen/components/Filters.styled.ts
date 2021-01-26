import styled from 'styled-components/native'
import Slider from '@react-native-community/slider'
import DropDownPicker from 'react-native-dropdown-picker';

export const SliderFilter = styled(Slider)`
  width: 50%;
`

export const Dropdown = styled(DropDownPicker)`
  width: 180px;
`

export const Container = styled.View`
  flex-direction: row;
`