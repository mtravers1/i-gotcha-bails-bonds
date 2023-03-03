import { EMAIL_REFEX, FREE_TEXT_REGEX } from 'helpers/regexConstants';

const data = [
  {
    name: 'email',
    placeHolder: { id: 'email', defaultMessage: 'Email' },
    errorMessage: {
      id: 'form.error.email',
      defaultMessage: 'Please enter your email',
    },
    required: true,
    attr: { autoComplete: 'current-email' },
    type: 'email',
    pattern: EMAIL_REFEX,
  },
  {
    placeHolder: { id: 'password', defaultMessage: 'Password' },
    name: 'password',
    type: 'password',
    required: true,
    attr: { autoComplete: 'current-password' },
    pattern: FREE_TEXT_REGEX,
  },
];

export default data;
