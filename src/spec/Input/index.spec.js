import React from 'react'
import { shallow } from 'enzyme'
import Input from '../../Input'

describe('Input', () => {
  it('should render input', () => {
    const type = 'text'
    const value = 'value'
    const onChange = () => {}

    const subject = shallow(<Input type={type} value={value} onChange={onChange} />)

    expect(subject.props().type).toBe(type)
    expect(subject.props().value).toBe(value)
    expect(subject.props().onChange).toBe(onChange)
  })
})
