import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { style } from 'typestyle'
import { flexRoot, vertical, startJustified } from 'csstips'
import Button from '../modules/misc/button/Button'
import Label from '../modules/misc/label/Label'
import Input from '../modules/misc/input/Input'
import TextArea from '../modules/misc/textarea/TextArea'

export const FIELD_TYPE = {
  TEXT: 'text',
  EMAIL: 'email',
  TEXTAREA: 'textarea'
}

const fieldComponents = {
  [FIELD_TYPE.TEXT]: (...props) => <Input {...Object.assign(...props)} />,
  [FIELD_TYPE.EMAIL]: (...props) => <Input {...Object.assign(...props)} />,
  [FIELD_TYPE.TEXTAREA]: (...props) => <TextArea {...Object.assign(...props)} />
}

const createForm = (
  fields,
  { formName, showPlaceholders, showLabels },
  renderField
) => {
  class Form extends Component {
    constructor () {
      super()
      this.styles = {
        form: Object.assign({}, flexRoot, vertical, {
          width: '30%',
          textAlign: 'left'
        }),
        field: Object.assign({}, flexRoot, vertical, startJustified, {
          width: '100%',
          padding: '5px 0'
        })
      }
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
        <div className={style(this.styles.field, this.props.styles.field)}>
          {showLabels && <Label htmlFor={input.name}>{label}:</Label>}
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
        <form
          onSubmit={handleSubmit}
          className={style(this.styles.form, this.props.styles.form)}
        >
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
          <Button type='submit' styles={this.props.styles.submit}>
            Submit
          </Button>
        </form>
      )
    }
  }

  Form.defaultProps = {
    styles: {}
  }

  return reduxForm({
    form: formName
  })(Form)
}

export default createForm
