import {
  EMAIL_REFEX,
  FREE_TEXT_REGEX,
  FULL_NAME_REGEX,
  PHONE_NUMBER_REGEX,
  NUMBER_REGEX,
  NAME_REGEX,
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
    valErrorMsg: {
      id: 'form.error.invalid-name',
      defaultMessage: 'Invalid name',
    },
    required: true,
    pattern: NAME_REGEX,
    type: 'text',
  },
  {
    name: 'middleName',
    label: {
      id: 'middle.name',
      defaultMessage: 'Middle Name',
      position: 'bottom',
    },
    valErrorMsg: {
      id: 'form.error.invalid-name',
      defaultMessage: 'Invalid name',
    },
    pattern: NAME_REGEX,
    type: 'text',
  },
  {
    name: 'lastName',
    label: { id: 'last.name', defaultMessage: 'Last Name', position: 'bottom' },
    errorMessage: {
      id: 'form.error.last-name',
      defaultMessage: 'Please enter your last name',
    },
    valErrorMsg: {
      id: 'form.error.invalid-name',
      defaultMessage: 'Invalid name',
    },
    required: true,
    pattern: NAME_REGEX,
    type: 'text',
  },
  {
    name: 'attornyName',
    errorMessage: {
      id: 'form.error.attorney',
      defaultMessage: 'Please enter your attorney name',
    },
    valErrorMsg: {
      id: 'form.error.invalid-name',
      defaultMessage: 'Invalid name',
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
    name: 'courtName',
    errorMessage: {
      id: 'form.error.courtName',
      defaultMessage: '',
    },
    valErrorMsg: {
      id: 'form.error.courtName',
      defaultMessage: '',
    },
    required: true,
    pattern: FREE_TEXT_REGEX,
    type: 'text',
  },
  {
    name: 'courtType',
    errorMessage: {
      id: 'form.error.courtType',
      defaultMessage: '',
    },
    required: true,
    pattern: FREE_TEXT_REGEX,
    type: 'text',
  },
  // Defendant
  {
    name: 'defendantFullName',
    errorMessage: {
      id: 'form.error.fullName',
      defaultMessage: 'Please enter the full name',
    },
    valErrorMsg: {
      id: 'form.error.invalid-full-name',
      defaultMessage: 'Please enter at least 2 names',
    },
    label: {
      id: 'full.name',
      defaultMessage: 'Name',
      position: 'inline',
    },
    required: true,
    pattern: FULL_NAME_REGEX,
    type: 'text',
    width: 4,
  },
  {
    name: 'defendantNickName',
    label: {
      id: 'Aaka',
      defaultMessage: 'Aka',
      position: 'inline',
    },
    valErrorMsg: {
      id: 'form.error.invalid-name',
      defaultMessage: 'Invalid name',
    },
    pattern: FREE_TEXT_REGEX,
    type: 'text',
  },
  {
    name: 'defendantHomephone',
    label: {
      id: 'Home.number',
      defaultMessage: 'Home #',
      position: 'inline',
    },
    errorMessage: {
      id: 'form.error.homephone',
      defaultMessage: 'Please enter your home phone number',
    },
    valErrorMsg: {
      id: 'form.error.invalid-phone',
      defaultMessage: 'Enter a valid phone number',
    },
    pattern: PHONE_NUMBER_REGEX,
    type: 'number',
  },
  {
    name: 'defendantCellphone',
    label: {
      id: 'cell.number',
      defaultMessage: 'Cell #',
      position: 'inline',
    },
    errorMessage: {
      id: 'form.error.cellphone',
      defaultMessage: 'Please enter your cell phone number',
    },
    valErrorMsg: {
      id: 'form.error.invalid-phone',
      defaultMessage: 'Enter a valid phone number',
    },
    pattern: PHONE_NUMBER_REGEX,
    type: 'number',
  },
  {
    name: 'defendantWorkphone',
    label: {
      id: 'work.number',
      defaultMessage: 'Work #',
      position: 'inline',
    },
    errorMessage: {
      id: 'form.error.cellphone',
      defaultMessage: 'Please enter your work phone number',
    },
    valErrorMsg: {
      id: 'form.error.invalid-phone',
      defaultMessage: 'Enter a valid phone number',
    },
    pattern: PHONE_NUMBER_REGEX,
    type: 'number',
  },
  {
    name: 'defendantEmail',
    errorMessage: {
      id: 'form.error.fullName',
      defaultMessage: 'Please enter your Email',
    },
    label: {
      id: 'email',
      defaultMessage: 'Email',
      position: 'inline',
    },
    valErrorMsg: {
      id: 'form.error.invalid-email',
      defaultMessage: 'Enter a valid email',
    },
    required: true,
    pattern: EMAIL_REFEX,
    type: 'text',
  },
  {
    name: 'defendantFacebook',
    label: {
      id: 'facebook',
      defaultMessage: 'Facebook',
      position: 'inline',
    },
    pattern: FREE_TEXT_REGEX,
    type: 'text',
  },
  {
    name: 'defendantOtherSocial',
    label: {
      id: 'other.social.media',
      defaultMessage: 'Other Social Media',
      position: 'inline',
    },
    pattern: FREE_TEXT_REGEX,
    type: 'text',
  },
  {
    name: 'defendantAddress',
    errorMessage: {
      id: 'form.error.address',
      defaultMessage: 'Please enter your Address',
    },
    label: {
      id: 'address',
      defaultMessage: 'Current Address',
      position: 'inline',
    },
    required: true,
    pattern: FREE_TEXT_REGEX,
    type: 'text',
    width: 6,
  },
  {
    name: 'defendantHomeDuration',
    errorMessage: {
      id: 'form.error.howlong',
      defaultMessage: 'enter the number in years',
    },
    label: {
      id: 'howlong',
      defaultMessage: 'How Long',
      position: 'inline',
    },
    required: true,
    pattern: NUMBER_REGEX,
    type: 'text',
    width: 1,
  },
  {
    name: 'defendantHomeType',
    errorMessage: {
      id: 'form.error.howlong',
      defaultMessage: 'Please select the type',
    },
    inputs: [
      { name: 'Rent', value: 'rent' },
      { name: 'Own', value: 'own' },
    ],
    pattern: FREE_TEXT_REGEX,
    type: 'text',
    itype: 'radio',
  },
  {
    name: 'defendantLandlord',
    errorMessage: {
      id: 'form.error.Landlord',
      defaultMessage: 'LandLord OR mortgage',
    },
    inputs: [
      { name: 'Landlord', value: 'landlord' },
      { name: 'Mortgage', value: 'mortgage' },
    ],
    required: true,
    pattern: FREE_TEXT_REGEX,
    type: 'text',
    itype: 'radio',
    width: 3,
  },
  // Indemitor Personal Information
  {
    name: 'IndemitorDob',
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
    pattern: FREE_TEXT_REGEX,
    type: 'date',
    width: 1,
  },
  {
    name: 'IndemitorBithPlace',
    errorMessage: {
      id: 'form.error.birthplace',
      defaultMessage: 'Enter your birth place',
    },
    label: {
      id: 'dob',
      defaultMessage: 'City & State Born',
      position: 'inline',
    },
    required: true,
    pattern: FREE_TEXT_REGEX,
    type: 'text',
    width: 2,
  },
  {
    name: 'IndemitorGender',
    errorMessage: {
      id: 'form.error.gender',
      defaultMessage: 'Please choose your gender',
    },
    required: true,
    pattern: FREE_TEXT_REGEX,
    itype: 'radio',
    width: 1,
    inputs: [
      { name: 'Male', value: 'male' },
      { name: 'Female', value: 'female' },
    ],
  },
  {
    name: 'IndemitorRace',
    errorMessage: {
      id: 'form.error.race',
      defaultMessage: 'Please choose your race',
    },
    label: {
      id: 'race',
      defaultMessage: 'Race',
      position: 'inline',
    },
    required: true,
    pattern: FREE_TEXT_REGEX,
    itype: 'select',
    width: 2,
    inputs: [
      {
        name: 'American Indian or Alaska Native',
        value: 'American Indian or Alaska Native',
      },
      { name: 'Asian', value: 'Asian' },
      { name: 'Black or African American', value: 'Black or African American' },
      { name: 'Hispanic or Latino', value: 'Hispanic or Latino' },
      {
        name: 'Native Hawaiian or Other Pacific Islander',
        value: 'Native Hawaiian or Other Pacific Islander',
      },
      { name: 'White', value: 'White' },
    ],
  },
  {
    name: 'indemitorSSN',
    errorMessage: {
      id: 'form.error.ssn',
      defaultMessage: 'Please enter your ssn',
    },
    label: {
      id: 'ssn',
      defaultMessage: 'Social Security #',
      position: 'inline',
    },
    required: true,
    pattern: FREE_TEXT_REGEX,
    itype: 'text',
  },
  {
    name: 'indemitorDriversLicense',
    errorMessage: {
      id: 'form.error.drivers-licence',
      defaultMessage: 'Please enter your license number',
    },
    label: {
      id: 'drivers.license',
      defaultMessage: 'Drivers License #',
      position: 'inline',
    },
    required: true,
    pattern: FREE_TEXT_REGEX,
    itype: 'text',
  },
  {
    name: 'indemitorDriversLicenseIssuingState',
    errorMessage: {
      id: 'form.error.drivers-liscence-state',
      defaultMessage: 'Please enter the issuing state',
    },
    label: {
      id: 'issuing.state',
      defaultMessage: 'Issuing State',
      position: 'inline',
    },
    required: true,
    pattern: FREE_TEXT_REGEX,
    itype: 'text',
  },
  {
    name: 'usCitizen',
    errorMessage: {
      id: 'form.error.option',
      defaultMessage: 'Please select an option',
    },
    label: {
      id: 'us.citizen',
      defaultMessage: 'U.S. Citizen:',
      position: 'inline',
    },
    required: true,
    pattern: FREE_TEXT_REGEX,
    itype: 'radio',
    inputs: [
      { name: 'Yes', value: 'yes' },
      { name: 'No', value: 'no' },
    ],
  },
];

export default data;
