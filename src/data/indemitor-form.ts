import {
  EMAIL_REFEX,
  FREE_TEXT_REGEX,
  FULL_NAME_REGEX,
  PHONE_NUMBER_REGEX,
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
      defaultMessage: 'Please enter the full name',
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
  {
    name: 'AKA',
  
    label: {
      id: 'Aaka',
      defaultMessage: 'Aka',
      position: 'inline',
    },
    required: true,
    pattern: FULL_NAME_REGEX,
    type: 'text',
  },
  {
    name: 'homephone',
    label: { id: 'Home.number', defaultMessage: 'Home Phone Number', position: 'bottom' },

    errorMessage: {
      id: 'form.error.homephone',
      defaultMessage: 'Please enter your home phone number',
    },
    required: true,
    pattern: PHONE_NUMBER_REGEX,
    type: 'number',
  },
  {
    name: 'cellphone',
    label: { id: 'cell.number', defaultMessage: 'Cell Phone Number', position: 'bottom' },

    errorMessage: {
      id: 'form.error.cellphone',
      defaultMessage: 'Please enter your cell phone number',
    },
    required: true,
    pattern: PHONE_NUMBER_REGEX,
    type: 'number',
  },
  {
    name: 'workphone',
    label: { id: 'work.number', defaultMessage: 'Work Phone Number', position: 'bottom' },

    errorMessage: {
      id: 'form.error.cellphone',
      defaultMessage: 'Please enter your work phone number',
    },
    required: true,
    pattern: PHONE_NUMBER_REGEX,
    type: 'number',
  },
  {
    name: 'Email',
    errorMessage: {
      id: 'form.error.fullName',
      defaultMessage: 'Please enter your Email',
    },
    label: {
      id: 'email',
      defaultMessage: 'Email',
      position: 'inline',
    },
    required: true,
    pattern: FULL_NAME_REGEX,
    type: 'text',
  },
  {
    name: 'Facebook',
  
    label: {
      id: 'Facebook',
      defaultMessage: 'Facebook',
      position: 'inline',
    },
    required: true,
    pattern: FULL_NAME_REGEX,
    type: 'text',
  },
  {
    name: 'Other Social',
 
    label: {
      id: 'Other social',
      defaultMessage: 'Other Social Media',
      position: 'inline',
    },
    required: true,
    pattern: FULL_NAME_REGEX,
    type: 'text',
  },
  {
    name: 'Address',
    errorMessage: {
      id: 'form.error.address',
      defaultMessage: 'Please enter your Address',
    },
    label: {
      id: 'Address',
      defaultMessage: 'Current Address',
      position: 'inline',
    },
    required: true,
    pattern: FULL_NAME_REGEX,
    type: 'text',
  },
  {
    name: 'How Long',
    errorMessage: {
      id: 'form.error.howlong',
      defaultMessage: 'Please enter how long you have been at your current address',
    },
    label: {
      id: 'howlong',
      defaultMessage: 'How Long',
      position: 'inline',
    },
    required: true,
    pattern: FULL_NAME_REGEX,
    type: 'text',
  },
  {
    name: 'Landlord',
    errorMessage: {
      id: 'form.error.Landlord',
      defaultMessage: 'Please enter the Landlord/Mortage Holder',
    },
    label: {
      id: 'Landlord',
      defaultMessage: 'LandLord/Mortgage Holder',
      position: 'inline',
    },
    required: true,
    pattern: FULL_NAME_REGEX,
    type: 'text',
  },
  {
    name: 'DOB',
    errorMessage: {
      id: 'form.error.dob',
      defaultMessage: 'Please enter your date of birth',
    },
    label: {
      id: 'dob',
      defaultMessage: 'Date of Birth',
      position: 'inline',
    },
    required: true,
    pattern: FULL_NAME_REGEX,
    type: 'text', 
},

]


export default data;
