import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { style } from 'typestyle'
import { flexRoot, vertical, startJustified } from 'csstips'
import Button from '../misc/button/Button'

export const FIELD_TYPE = {
  TEXT: 'text',
  EMAIL: 'email',
  TEXTAREA: 'textarea'
}

const fieldComponents = {
  [FIELD_TYPE.TEXT]: (...props) => <input {...Object.assign(...props)} />,
  [FIELD_TYPE.EMAIL]: (...props) => <input {...Object.assign(...props)} />,
  [FIELD_TYPE.TEXTAREA]: (...props) => <textarea {...Object.assign(...props)} />
}

const createForm = (
  fields,
  { formName, showPlaceholders, showLabels },
  renderField
) => {
  class Form extends Component {
    classNames = {
      form: style(flexRoot, vertical, {
        width: '30%',
        textAlign: 'left'
      }),
      field: style(flexRoot, vertical, startJustified, {
        width: '100%',
        padding: '5px 0'
      }),
      label: style({
        fontSize: '.8em',
        fontWeight: 'bold'
      })
    }

    renderInputField ({
      input,
      label,
      type,
      meta: { touched, error, warning }
    }) {
      if (renderField) {
        return renderField({
          input,
          label,
          type,
          meta: { touched, error, warning }
        })
      }
      let otherProps = { type }
      if (showPlaceholders) {
        otherProps.placeholder = label
      }
      return (
        <div className={this.classNames.field}>
          {showLabels && (
            <label htmlFor={input.name} className={this.classNames.label}>
              {label}:
            </label>
          )}
          {fieldComponents[type](input, otherProps)}
          {touched &&
            ((error && <span>{error}</span>) ||
              (warning && <span>{warning}</span>))}
        </div>
      )
    }

    render () {
      const { handleSubmit } = this.props
      return (
        <form onSubmit={handleSubmit} className={this.classNames.form}>
          {fields.map(field => (
            <Field
              key={field.name}
              name={field.name}
              type={field.type || FIELD_TYPE.TEXT}
              component={this.renderInputField.bind(this)}
              label={field.label}
              validate={field.validate}
            />
          ))}
          <Button type='submit'>Submit</Button>
        </form>
      )
    }
  }

  return reduxForm({
    form: formName
  })(Form)
}

export default createForm
