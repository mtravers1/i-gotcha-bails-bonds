import {
  EMAIL_REFEX,
  FREE_TEXT_REGEX,
  FULL_NAME_REGEX,
  PHONE_NUMBER_REGEX,
} from 'helpers/regexConstants';

const signup = [
  {
    name: 'fullName',
    placeHolder: { id: 'full.name', defaultMessage: 'Full Name' },
    errorMessage: {
      id: 'form.error.full-name',
      defaultMessage: 'At least 2 valid names',
    },
    required: true,
    pattern: FULL_NAME_REGEX,
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
  {
    placeHolder: { id: 'password', defaultMessage: 'Password' },
    name: 'password',
    type: 'password',
    required: true,
    errorMessage: {
      id: 'form.error.password',
      defaultMessage: 'Please enter password',
    },
    attr: { autoComplete: 'current-password' },
    pattern: FREE_TEXT_REGEX,
  },
  {
    placeHolder: { id: 'confirm.password', defaultMessage: 'Confirm Password' },
    name: 'cpassword',
    type: 'password',
    required: true,
    attr: { autoComplete: 'new-password' },
    errorMessage: {
      id: 'form.error.confirm-password',
      defaultMessage: 'Please ensure the password is same as above',
    },
    pattern: FREE_TEXT_REGEX,
  },
];

export default signup;
