import React from 'react'
import { render } from 'react-dom'
import Input from 'react-simple-inputs/Input'

const DefaultExample = () =>
  <div>
    <h1>Default example</h1>

    <Input type="text" />
  </div>

render(<DefaultExample />, document.getElementById('default-example'))
