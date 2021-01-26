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
          items={filterArray.map((value) => ({label: value === 0 ? 'any due time' : value.toString(), value}))}
          defaultValue={value}
          multiple={false}
          zIndex={999999000}
          containerStyle={{height: 40}}
          itemStyle={{
              justifyContent: 'flex-start'
          }}
          onChangeItem={item => setValue(item.value)}
      />
    </Container>
  )
}

export default Filters