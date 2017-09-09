import createForm, { FIELD_TYPE } from '../../utils/createForm'

let ContactForm = createForm(
  [
    {
      name: 'first_name',
      label: 'First Name',
      type: FIELD_TYPE.TEXTAREA,
      validate: [value => (value ? undefined : 'Required')]
    },
    {
      name: 'last_name',
      label: 'Last Name'
    },
    {
      name: 'email',
      label: 'Email',
      type: FIELD_TYPE.EMAIL
    }
  ],
  {
    formName: 'contact',
    showPlaceholders: false,
    showLabels: true
  }
)

export default ContactForm
