import {
  EMAIL_REFEX,
  FREE_TEXT_REGEX,
  FULL_NAME_REGEX,
  NUMBER_REGEX,
} from 'helpers/regexConstants';

const data = [
  {
    name: 'firstName',
    label: {
      id: 'first.name',
      defaultMessage: 'First Name',
      position: 'bottom',
    },
    errorMessage: {
      id: 'form.error.first-name',
      defaultMessage: 'Please enter your first name',
    },
    required: true,
    pattern: FREE_TEXT_REGEX,
    type: 'text',
  },
  {
    name: 'middleName',
    label: {
      id: 'middle.name',
      defaultMessage: 'Middle Name',
      position: 'bottom',
    },
    errorMessage: {
      id: 'form.error.middle-name',
      defaultMessage: 'Please enter your middle name',
    },
    pattern: FREE_TEXT_REGEX,
    type: 'text',
  },
  {
    name: 'lastName',
    label: { id: 'last.name', defaultMessage: 'Last Name', position: 'bottom' },
    errorMessage: {
      id: 'form.error.last-name',
      defaultMessage: 'Please enter your last name',
    },
    required: true,
    pattern: FREE_TEXT_REGEX,
    type: 'text',
  },
  {
    name: 'attornyName',
    errorMessage: {
      id: 'form.error.attorney',
      defaultMessage: 'Please enter your attorney name',
    },
    required: true,
    pattern: FREE_TEXT_REGEX,
    type: 'text',
  },
  {
    name: 'amount',
    errorMessage: {
      id: 'form.error.amount',
      defaultMessage: 'Please enter an amount',
    },
    required: true,
    pattern: NUMBER_REGEX,
    type: 'number',
  },
  {
    name: 'fullName',
    errorMessage: {
      id: 'form.error.fullName',
      defaultMessage: 'Please enter the defendant full name',
    },
    label: {
      id: 'full.name',
      defaultMessage: 'Name',
      position: 'inline',
    },
    required: true,
    pattern: FULL_NAME_REGEX,
    type: 'text',
  },
];

export default data;
