import tape from 'tape'
import React from 'react'
import { createRenderer } from 'react-addons-test-utils'
import createComponent from 'react-unit'
import addAssertions from 'extend-tape'
import jsxEquals from 'tape-jsx-equals'
const test = addAssertions(tape, {jsxEquals})
const renderer = createRenderer()

// Component to test
import App from './App'

test('Correct layout', assert => {
  assert.plan(2)

  // Shallow rendering: Render React element only *one* level deep
  const component = createComponent.shallow(<App />)

  // Test component props and content
  assert.equal(component.props.className, 'App', 'ClassName props of component should equal "App"')

  // Test rendered output
  renderer.render(<App />)

  const result = renderer.getRenderOutput()
  const expected = (<div className='App'>
    <div className='App-header'>
      <img src={{}} className='App-logo' alt='logo' />
      <h2>Welcome to React</h2>
    </div>
    <p className='App-intro'>
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>)
  assert.jsxEquals(result, expected, 'Testing shallow component')

  assert.end()
})
