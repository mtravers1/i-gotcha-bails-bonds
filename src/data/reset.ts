import { FREE_TEXT_REGEX } from 'helpers/regexConstants';

const reset = [
  {
    name: 'otp',
    placeHolder: { id: 'otp', defaultMessage: 'OTP' },
    errorMessage: {
      id: 'form.error.otp',
      defaultMessage: 'Please enter your OTP',
    },
    required: true,
    type: 'number',
    pattern: FREE_TEXT_REGEX,
  },
  {
    placeHolder: { id: 'password', defaultMessage: 'Password' },
    name: 'password',
    type: 'password',
    errorMessage: {
      id: 'form.error.password',
      defaultMessage: 'Please enter password',
    },
    attr: {
      autoComplete: 'new-password',
    },
    pattern: FREE_TEXT_REGEX,
  },
  {
    placeHolder: { id: 'confirm.password', defaultMessage: 'Confirm Password' },
    name: 'cpassword',
    type: 'password',
    errorMessage: {
      id: 'form.error.confirm-password',
      defaultMessage: 'Please ensure the password is same as above',
    },
    attr: {
      autoComplete: 'new-password',
    },
    pattern: FREE_TEXT_REGEX,
  },
];

export default reset;
