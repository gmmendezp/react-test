/* eslint-env jest */
import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import { Link } from './Link'

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Link />, div)
})

test('inside text matches', () => {
  const component = shallow(<Link>Link</Link>)
  expect(component.text()).toEqual('Link')
})
