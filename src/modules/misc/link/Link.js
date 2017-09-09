import React, { Component } from 'react'
import { style } from 'typestyle'
import { CSS } from '../../../utils/constants'

export class Link extends Component {
  constructor () {
    super()
    this.styles = {
      base: {
        color: CSS.TEXT_COLOR_SECONDARY,
        textDecoration: 'none',
        '&:hover': {
          color: CSS.TEXT_COLOR_TERTIARY
        }
      }
    }
  }

  render () {
    let { styles, ...others } = this.props
    let newClassName = style(this.styles.base, styles)
    return (
      <a className={newClassName} {...others}>
        {this.props.children}
      </a>
    )
  }
}

export default Link
