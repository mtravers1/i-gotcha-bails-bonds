import { FREE_TEXT_REGEX, EMAIL_REFEX } from 'helpers/regexConstants';

const formData = [
  {
    name: 'firstName',
    label: {
      id: 'form.defendant-first-name',
      defaultMessage: 'Defendant First Name',
    },
    placeholder: { id: 'first.name', defaultMessage: 'First Name' },
    type: 'text',
    errorMessage: {
      id: 'form.error.first-name',
      defaultMessage: 'Please enter your first name',
    },
    required: true,
    pattern: FREE_TEXT_REGEX,
  },
  {
    name: 'lastName',
    label: {
      id: 'form.defendant-last-name',
      defaultMessage: 'Defendant Last Name',
    },
    placeholder: { id: 'last.name', defaultMessage: 'Last Name' },
    type: 'text',
    errorMessage: {
      id: 'form.error.last-name',
      defaultMessage: 'Please enter your last name',
    },
    required: true,
    pattern: FREE_TEXT_REGEX,
  },
  {
    name: 'email',
    label: { id: 'email', defaultMessage: 'Email' },
    placeholder: { id: 'email', defaultMessage: 'Email' },
    type: 'text',
    errorMessage: {
      id: 'form.error.last-name',
      defaultMessage: 'Please enter your email',
    },
    required: true,
    pattern: EMAIL_REFEX,
  },
  {
    name: 'dob',
    label: {
      id: 'form.defendant-date-of-birth',
      defaultMessage: 'Defendant Date of Birth',
    },
    placeholder: { id: 'dob', defaultMessage: 'Date of Birth' },
    type: 'date',
    errorMessage: {
      id: 'form.error.dob',
      defaultMessage: 'Please enter your date of birth',
    },
    required: true,
    pattern: FREE_TEXT_REGEX,
  },
  {
    name: 'phone',
    label: { id: 'phone.number', defaultMessage: 'Phone Number' },
    placeholder: { id: 'phone.number', defaultMessage: 'Phone Number' },
    type: 'date',
    errorMessage: 'form.error.phone',
    required: true,
    pattern: FREE_TEXT_REGEX,
  },
  {
    name: 'address',
    label: { id: 'address', defaultMessage: 'Address' },
    placeholder: { id: 'address', defaultMessage: 'Address' },
    type: 'text',
    errorMessage: {
      id: 'form.error.address',
      defaultMessage: 'Please enter your address',
    },
    required: true,
    pattern: FREE_TEXT_REGEX,
  },
  {
    name: 'city',
    placeholder: { id: 'city', defaultMessage: 'City' },
    type: 'text',
    errorMessage: {
      id: 'form.error.city',
      defaultMessage: 'Please enter your city',
    },
    required: true,
    pattern: FREE_TEXT_REGEX,
  },
  {
    name: 'state',
    placeholder: { id: 'state.region', defaultMessage: 'State/Region' },
    type: 'text',
    errorMessage: {
      id: 'form.error.state',
      defaultMessage: 'Please enter your state',
    },
    required: true,
    pattern: FREE_TEXT_REGEX,
  },
  {
    name: 'postal',
    placeholder: { id: 'postal.code', defaultMessage: 'Postal' },
    type: 'text',
    errorMessage: {
      id: 'form.error.zip',
      defaultMessage: 'Please enter your postal code',
    },
    required: true,
    pattern: FREE_TEXT_REGEX,
  },
];

export default formData;
