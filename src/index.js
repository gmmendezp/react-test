import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { normalize, setupPage } from 'csstips'
import { cssRule } from 'typestyle'

import { CSS } from './modules/utils/constants'
import Router from './router'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './configureStore'

normalize()
setupPage('#root')

cssRule('body', {
  fontFamily: CSS.FONT_PRIMARY,
  backgroundColor: CSS.BG_COLOR_PRIMARY,
  letterSpacing: '0.08em'
})

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
