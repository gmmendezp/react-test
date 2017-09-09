import React, { Component } from 'react'
import { style } from 'typestyle'

export class Button extends Component {
  classNames = {
    base: style({
      display: 'block',
      backgroundColor: 'white',
      height: '34px',
      width: '100%',
      margin: '1px 0',
      padding: '6px 12px',
      borderRadius: '4px',
      fontSize: '0.8em',
      fontWeight: 'bold',
      '&:hover': {
        cursor: 'pointer'
      }
    })
  }

  render () {
    let className = `btn ${this.props.className || ''} ${this.classNames.base}`
    return (
      <button type={this.props.type || 'button'} className={className}>
        {this.props.children}
      </button>
    )
  }
}

export default Button
