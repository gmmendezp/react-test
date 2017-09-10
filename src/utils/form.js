import React from 'react'
import {
  FormLabel,
  FormControl,
  FormControlLabel,
  FormHelperText
} from 'material-ui/Form'
import TextField from 'material-ui/TextField'
import Checkbox from 'material-ui/Checkbox'
import Switch from 'material-ui/Switch'
import Radio, { RadioGroup } from 'material-ui/Radio'

export const FIELD_NAME = {
  TEXT: 'text',
  EMAIL: 'email',
  TEXTAREA: 'textarea',
  SINGLE: 'select',
  CHECKBOX: 'checkbox',
  RADIO: 'radio',
  SWITCH: 'switch'
}

export const FIELD_TYPE = {
  [FIELD_NAME.TEXT]: 'text',
  [FIELD_NAME.EMAIL]: 'email',
  [FIELD_NAME.TEXTAREA]: 'textarea',
  [FIELD_NAME.SINGLE]: 'select',
  [FIELD_NAME.CHECKBOX]: 'checkbox',
  [FIELD_NAME.RADIO]: 'text',
  [FIELD_NAME.SWITCH]: 'text'
}

export const FIELD_COMPONENTS = {
  [FIELD_NAME.TEXT]: (...props) => (
    <TextField fullWidth margin='normal' {...Object.assign({}, ...props)} />
  ),
  [FIELD_NAME.EMAIL]: (...props) => (
    <TextField fullWidth margin='normal' {...Object.assign({}, ...props)} />
  ),
  [FIELD_NAME.TEXTAREA]: (...props) => (
    <TextField
      fullWidth
      margin='normal'
      multiline
      {...Object.assign({}, ...props)}
    />
  ),
  [FIELD_NAME.SINGLE]: (...props) => (
    <TextField
      fullWidth
      margin='normal'
      multiline
      {...Object.assign({}, ...props)}
    />
  ),
  [FIELD_NAME.CHECKBOX]: (...allProps) => {
    const { label, value, helperText, error, ...props } = Object.assign(
      {},
      ...allProps
    )
    return (
      <FormControl {...{ error }}>
        {label ? (
          <FormControlLabel control={<Checkbox {...props} />} label={label} />
        ) : (
          <Checkbox {...props} />
        )}
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    )
  },
  [FIELD_NAME.SWITCH]: (...allProps) => {
    const { label, value, helperText, error, ...props } = Object.assign(
      {},
      ...allProps
    )
    return (
      <FormControl {...{ error }}>
        {label ? (
          <FormControlLabel control={<Switch {...props} />} label={label} />
        ) : (
          <Switch {...props} />
        )}
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    )
  },
  [FIELD_NAME.RADIO]: (...allProps) => {
    const { options, label, helperText, error, ...props } = Object.assign(
      {},
      ...allProps
    )
    return (
      <FormControl {...{ error }}>
        <FormLabel component='legend'>{label}</FormLabel>
        <RadioGroup aria-label={label} name={label} {...props}>
          {options.map(option => (
            <FormControlLabel
              key={option.value}
              control={<Radio />}
              value={option.value}
              label={option.text}
            />
          ))}
        </RadioGroup>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    )
  }
}
