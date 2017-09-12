import React from 'react'
import createForm from '../../utils/createForm'
import { FIELD_NAME } from '../../utils/form'
import { checkEmail, required } from '../../utils/validators'
import FontIcon from 'react-md/lib/FontIcons'

let fields = [
  {
    name: 'first_name',
    label: 'First Name',
    placeholder: 'First Name',
    fieldType: FIELD_NAME.TEXT,
    rows: 2,
    required: true,
    validate: [required()],
    helpText: 'This is some extra info'
  },
  {
    name: 'birthday',
    fieldType: FIELD_NAME.DATE,
    label: 'Birthday',
    placeholder: 'mm/dd/yyyy',
    required: true,
    validate: [required()]
  },
  {
    name: 'email',
    label: 'Email',
    placeholder: 'Email',
    fieldType: FIELD_NAME.TEXT,
    validate: [checkEmail()],
    leftIcon: <FontIcon>email</FontIcon>
  },
  {
    name: 'password',
    label: 'Password',
    fieldType: FIELD_NAME.PASSWORD,
    required: true,
    validate: [required()]
  },
  {
    name: 'single-selection',
    label: 'Select an option',
    fieldType: FIELD_NAME.SELECT,
    fullWidth: true,
    menuItems: [
      { label: '', value: '' },
      { label: 'Option 1', value: 'option-1' },
      { label: 'Option 2', value: 'option-2' },
      { label: 'Option 3', value: 'option-3' }
    ]
  },
  {
    name: 'checkbox-test',
    label: 'YES/NO',
    fieldType: FIELD_NAME.CHECKBOX
  },
  {
    name: 'radio-test',
    label: 'Radio group',
    fieldType: FIELD_NAME.RADIO,
    controls: [
      { label: 'yes', value: 'YES' },
      { label: 'no', value: 'NO' },
      { label: 'maybe', value: 'MAYBE' }
    ]
  },
  {
    name: 'autocomplete-test',
    label: 'Programming Language',
    placeholder: 'Programming Language',
    fieldType: FIELD_NAME.AUTOCOMPLETE,
    required: true,
    validate: [required()],
    data: [
      { label: 'yes', value: 'YES' },
      { label: 'no', value: 'NO' },
      { label: 'maybe', value: 'MAYBE' }
    ],
    dataValue: 'value',
    dataLabel: 'label'
  }
]

let ContactForm = createForm({
  fields,
  formName: 'contact',
  submitButton: {
    text: 'Submit',
    props: {
      primary: true,
      raised: true
    }
  },
  beforeSubmit: () => {
    fields[0].label = 'this is a test'
  }
})

export default ContactForm
