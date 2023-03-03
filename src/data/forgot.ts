import { PHONE_NUMBER_REGEX } from 'helpers/regexConstants';

const forgot = [
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

export default forgot;
