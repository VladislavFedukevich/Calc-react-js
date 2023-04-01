import React from 'react'
import Display from '../Display/Display'
import Keypad from '../Keypad/Keypad'
import History from '../History/History'

import { Wrapper } from './styled'

const Calculator = () => {
  return (
    <Wrapper>
      <Display />
      <Keypad />
      <History />
    </Wrapper>
  )
}

export default Calculator
