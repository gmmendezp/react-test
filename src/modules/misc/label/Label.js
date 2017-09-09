import React, { Component } from 'react'
import { style } from 'typestyle'

export class Label extends Component {
  constructor () {
    super()
    this.styles = {
      base: {
        fontSize: '.8em',
        fontWeight: 'bold'
      }
    }
  }

  render () {
    let { styles, ...props } = this.props
    return (
      <div className={style(this.styles.base, styles)} {...props}>
        {this.props.children}
      </div>
    )
  }
}
export default Label
