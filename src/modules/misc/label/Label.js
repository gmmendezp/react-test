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
    return (
      <div className={style(this.styles.base, this.props.styles)}>
        {this.props.children}
      </div>
    )
  }
}
export default Label
