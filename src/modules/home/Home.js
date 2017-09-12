import React, { Component } from 'react'
import logo from './../../assets/logo.svg'
import { flexRoot, vertical, centerJustified, center } from 'csstips'
import { style, keyframes } from 'typestyle'
import { CSS } from '../../utils/constants'
import ContactForm from './Form'

class Home extends Component {
  constructor () {
    super()
    this.styles = {
      base: Object.assign(
        { marginBottom: '50px' },
        flexRoot,
        vertical,
        centerJustified,
        center
      ),
      logo: {
        height: '80px',
        animationName: keyframes({
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' }
        }),
        animationDuration: '20s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'linear'
      },
      header: {
        backgroundColor: CSS.BG_COLOR_MENU,
        height: '190px',
        width: '100%',
        padding: '20px',
        color: CSS.TEXT_COLOR_SECONDARY,
        textAlign: 'center'
      },
      intro: {
        fontSize: 'large',
        textAlign: 'center'
      },
      form: { width: '70%' }
    }
  }

  submit (values) {
    console.log(values)
  }

  render () {
    return (
      <div className={style(this.styles.base)}>
        <div className={style(this.styles.header)}>
          <img src={logo} className={style(this.styles.logo)} alt='logo' />
          <h2>Welcome to React</h2>
        </div>
        <p className={style(this.styles.intro)}>Just a home page</p>
        <ContactForm
          onSubmit={this.submit}
          styles={{ form: this.styles.form }}
          initialValues={{ birthday: '5/24/2017' }}
        />
      </div>
    )
  }
}

export default Home
