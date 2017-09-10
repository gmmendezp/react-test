import React from 'react'
import createForm from '../../utils/createForm'
import { FIELD_NAME } from '../../utils/form'
import { checkEmail, required } from '../../utils/validators'
import { FormHelperText } from 'material-ui/Form'

let ContactForm = createForm(
  [
    {
      name: 'first_name',
      label: 'First Name',
      placeholder: 'First Name',
      fieldType: FIELD_NAME.TEXTAREA,
      validate: [required()],
      rows: 2,
      fullWidth: true,
      extra: <FormHelperText>This is some extra info</FormHelperText>
    },
    {
      name: 'birthday',
      fieldType: FIELD_NAME.DATETIME,
      label: 'Birthday',
      placeholder: 'dd/mm/yyyy',
      fullWidth: true,
      validate: [required()]
    },
    {
      name: 'email',
      label: 'Email',
      placeholder: 'Email',
      fieldType: FIELD_NAME.TEXT,
      validate: [checkEmail()],
      fullWidth: true
    },
    {
      name: 'password',
      label: 'Password',
      fieldType: FIELD_NAME.PASSWORD,
      validate: [required()],
      fullWidth: true
    },
    {
      name: 'single-selection',
      label: 'YES/NO',
      fieldType: FIELD_NAME.SELECT,
      options: [
        { text: '', value: '' },
        { text: 'yes', value: 'YES' },
        { text: 'no', value: 'NO' }
      ],
      fullWidth: true
    },
    {
      name: 'checkbox',
      label: 'YES/NO',
      placeholder: 'YES/NO',
      fieldType: FIELD_NAME.CHECKBOX
    },
    {
      name: 'radio-test',
      label: 'radio group',
      fieldType: FIELD_NAME.RADIO,
      options: [
        { text: 'yes', value: 'YES' },
        { text: 'no', value: 'NO' },
        { text: 'maybe', value: 'MAYBE' }
      ]
    }
  ],
  {
    formName: 'contact',
    buttonProps: {
      raised: true
    }
  }
)

export default ContactForm
