/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import Home from './Home'

test('inside text matches', () => {
  const home = shallow(<Home />)
  expect(home.find('p').text()).toEqual('Just a home page')
})
