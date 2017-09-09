import React, { Component } from 'react'
import { style } from 'typestyle'
import { CSS } from '../../../utils/constants'

export class Input extends Component {
  constructor () {
    super()
    this.styles = {
      base: {
        display: 'block',
        width: '100%',
        height: '23px',
        padding: '12px 3px',
        margin: '7px 0',
        border: `1px solid ${CSS.TEXT_COLOR_SECONDARY}`,
        fontFamily: CSS.FONT_PRIMARY,
        fontSize: '.9em'
      }
    }
  }

  render () {
    return (
      <input
        className={style(this.styles.base, this.props.styles)}
        type={this.props.type}
        placeholder={this.props.placeholder}
        name={this.props.name}
      >
        {this.props.children}
      </input>
    )
  }
}

export default Input
