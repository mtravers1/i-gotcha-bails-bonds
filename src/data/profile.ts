import {
  EMAIL_REFEX,
  FREE_TEXT_REGEX,
  PHONE_NUMBER_REGEX,
} from 'helpers/regexConstants';

const profile = [
  {
    name: 'firstName',
    placeHolder: { id: 'first.name', defaultMessage: 'First Name' },
    errorMessage: {
      id: 'form.error.first-name',
      defaultMessage: 'Please enter your first name',
    },
    required: true,
    pattern: FREE_TEXT_REGEX,
  },
  {
    name: 'lastName',
    placeHolder: { id: 'last.name', defaultMessage: 'Last Name' },
    errorMessage: {
      id: 'form.error.last-name',
      defaultMessage: 'Please enter your last name',
    },
    required: true,
    pattern: FREE_TEXT_REGEX,
  },
  {
    name: 'email',
    placeHolder: { id: 'email', defaultMessage: 'Email' },
    errorMessage: {
      id: 'form.error.email',
      defaultMessage: 'Please enter your email',
    },
    required: true,
    attr: { autoComplete: 'new-email' },
    type: 'email',
    pattern: EMAIL_REFEX,
  },
  {
    name: 'phone',
    placeHolder: { id: 'phone', defaultMessage: 'Phone' },
    errorMessage: {
      id: 'form.error.phone',
      defaultMessage: 'Please enter your phone number',
    },
    required: true,
    type: 'phone',
    pattern: PHONE_NUMBER_REGEX,
  },
];

export default profile;
