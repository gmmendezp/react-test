/* eslint-env jest */
import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import { Label } from './Label'

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Label />, div)
})

test('inside text matches', () => {
  const component = shallow(<Label>LabelTest</Label>)
  expect(component.text()).toEqual('LabelTest')
})
