import createForm from '../../utils/createForm'
import { FIELD_NAME } from '../../utils/form'

let ContactForm = createForm(
  [
    {
      name: 'first_name',
      label: 'First Name',
      placeholder: 'First Name',
      fieldType: FIELD_NAME.TEXTAREA,
      validate: [value => (value ? undefined : 'Required')],
      rows: 6
    },
    {
      name: 'last_name',
      label: 'Last Name',
      placeholder: 'Last Name',
      validate: [value => (value ? undefined : 'Required')]
    },
    {
      name: 'email',
      label: 'Email',
      placeholder: 'Email',
      fieldType: FIELD_NAME.EMAIL
    },
    // {
    //   name: 'single-selection',
    //   label: 'YES/NO',
    //   placeholder: 'YES/NO',
    //   fieldType: FIELD_NAME.SINGLE,
    //   options: [{ text: 'yes', value: 'YES' }, { text: 'no', value: 'NO' }]
    // },
    {
      name: 'checkbox',
      label: 'YES/NO',
      placeholder: 'YES/NO',
      fieldType: FIELD_NAME.CHECKBOX
    },
    {
      name: 'radio-test',
      fieldType: FIELD_NAME.RADIO,
      label: 'radio test',
      options: [
        { text: 'yes', value: 'YES' },
        { text: 'no', value: 'NO' },
        { text: 'maybe', value: 'MAYBE' }
      ]
    }
  ],
  {
    formName: 'contact'
  }
)

export default ContactForm
