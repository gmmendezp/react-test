import React, { Component } from 'react'
import { style } from 'typestyle'

export class Image extends Component {
  constructor () {
    super()
    this.styles = {
      base: {
        display: 'block',
        maxWidth: '100%',
        height: 'auto'
      }
    }
  }

  render () {
    let { image, styles, alt, ...other } = this.props
    let imageURL =
      !image || image.includes('http')
        ? image
        : require(`../../../assets/${image}`)
    let newClassName = `img ${style(this.styles.base, styles)}`
    return <img src={imageURL} className={newClassName} alt={alt} {...other} />
  }
}

export default Image
