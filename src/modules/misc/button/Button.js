import React, { Component } from 'react'
import { style } from 'typestyle'
import { CSS } from '../../../utils/constants'

export class Button extends Component {
  constructor () {
    super()
    this.styles = {
      base: {
        display: 'block',
        height: '34px',
        width: '100%',
        margin: '1px 0',
        padding: '6px 12px',
        backgroundColor: CSS.BG_COLOR_MENU,
        color: CSS.TEXT_COLOR_SECONDARY,
        border: `1px outset ${CSS.TEXT_COLOR_SECONDARY}`,
        fontSize: '0.8em',
        fontWeight: 'bold',
        '&:hover': {
          cursor: 'pointer',
          backgroundColor: CSS.BG_COLOR_MENU_HOVER,
          color: CSS.TEXT_COLOR_TERTIARY
        }
      }
    }
  }

  render () {
    let { styles, type, ...props } = this.props
    let className = `btn ${style(this.styles.base, styles)}`
    return (
      <button type={type || 'button'} className={className} {...props}>
        {this.props.children}
      </button>
    )
  }
}

export default Button
