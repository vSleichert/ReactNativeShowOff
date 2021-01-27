import React from 'react'
import { Dropdown, SliderFilter, Container } from './Filters.styled'

const filterArray = [0, 4, 8, 24, 72]

const Filters = ({ value, setValue }: { value: number, setValue: (val: number) => void }) => {
  const sliderChange = (val: number) => {
    const closest = filterArray.reduce((a, b) => Math.abs(b - val) < Math.abs(a - val) ? b : a)

    setValue(closest)
  }

  return (
    <Container>
      <SliderFilter
        value={value}
        onSlidingComplete={sliderChange}
        minimumValue={0}
        maximumValue={72}
        minimumTrackTintColor="#3db7ff"
        maximumTrackTintColor="#FFFFFF"
      />
      <Dropdown
        label='Due time'
        data={filterArray.map((value) => ({label: value === 0 ? 'any due time' : value.toString(), value: value}))}
        value={value}
        onChangeText={setValue}
      />
    </Container>
  )
}

export default Filters