import React, { Component } from 'react'
import { style } from 'typestyle'
import { CSS } from '../../../utils/constants'

export class TextArea extends Component {
  constructor () {
    super()
    this.styles = {
      base: {
        display: 'block',
        width: '100%',
        padding: '3px 3px',
        margin: '7px 0 2px',
        border: `1px solid ${CSS.TEXT_COLOR_SECONDARY}`,
        fontFamily: CSS.FONT_PRIMARY,
        fontSize: '.9em'
      }
    }
  }

  render () {
    let { styles, ...props } = this.props
    return (
      <textarea className={style(this.styles.base, styles)} {...props}>
        {this.props.children}
      </textarea>
    )
  }
}

export default TextArea
