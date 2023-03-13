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
  {
    name: 'employer',
    errorMessage: {
      id: 'form.error.employer',
      defaultMessage: 'Enter your current employer ',
    },
    label: {
      id: 'Employer',
      defaultMessage: 'Employer',
      position: 'inline',
    },
    required: true,
    pattern: FREE_TEXT_REGEX,
    type: 'text',
    width: 2,
  },
  {
    name: 'Position',
    errorMessage: {
      id: 'form.error.employer',
      defaultMessage: 'Enter your current employer ',
    },
    label: {
      id: 'Position',
      defaultMessage: 'Position',
      position: 'inline',
    },
    required: true,
    pattern: FREE_TEXT_REGEX,
    type: 'text',
    width: 2,
  },
  {
    name: 'HowLong',
    errorMessage: {
      id: 'form.error.Howlong',
      defaultMessage: 'Enter How Long You Been at your recent job ',
    },
    label: {
      id: 'howlong',
      defaultMessage: 'How Long',
      position: 'inline',
    },
    required: true,
    pattern: FREE_TEXT_REGEX,
    type: 'text',
    width: 2,
  },
  {
    name: 'employeraddress',
    errorMessage: {
      id: 'form.error.employeraddress',
      defaultMessage: 'Enter your current employer address',
    },
    label: {
      id: 'EmployerAddress',
      defaultMessage: 'Employer address',
      position: 'inline',
    },
    required: true,
    pattern: FREE_TEXT_REGEX,
    type: 'text',
    width: 2,
  },
  {
    name: 'supervisor',
    errorMessage: {
      id: 'form.error.supervisor',
      defaultMessage: 'Enter your supervisor',
    },
    label: {
      id: 'Supervisor',
      defaultMessage: 'SuperVisors Name',
      position: 'inline',
    },
    required: true,
    pattern: FREE_TEXT_REGEX,
    type: 'text',
    width: 2,
  },
  {
    name: 'Union',
    errorMessage: {
      id: 'form.error.union',
      defaultMessage: 'Enter your Union',
    },
    label: {
      id: 'Union',
      defaultMessage: 'Union',
      position: 'inline',
    },
    required: true,
    pattern: FREE_TEXT_REGEX,
    type: 'text',
    width: 2,
  },
  {
    name: 'LocalNum',
    errorMessage: {
      id: 'form.error.localnum',
      defaultMessage: 'Enter your Local Number',
    },
    label: {
      id: 'Local',
      defaultMessage: 'Local#',
      position: 'inline',
    },
    required: true,
    pattern: FREE_TEXT_REGEX,
    type: 'text',
    width: 2,
  },
  {
    name: 'Military',
    errorMessage: {
      id: 'form.error.military',
      defaultMessage: 'Enter your Military Service Branch',
    },
    label: {
      id: 'Military',
      defaultMessage: 'Military Service Branch',
      position: 'inline',
    },
    required: true,
    pattern: FREE_TEXT_REGEX,
    type: 'text',
    width: 2,
  },
  {
    name: 'empActive',
    errorMessage: {
      id: 'form.error.option',
      defaultMessage: 'Please select an option',
    },
    label: {
      id: 'empActive',
      defaultMessage: 'Active:',
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
  {
    name: 'Discharge',
    // errorMessage: {
    //   id: 'form.error.discharge',
    //   defaultMessage: 'Please Enter Discharge date',
    // },
    label: {
      id: 'Discharge',
      defaultMessage: 'Discharge Date',
      position: 'inline',
    },
    required: true,
    pattern: FREE_TEXT_REGEX, 
  },
  {
    name: 'Spouse',
    errorMessage: {
      id: 'form.error.Spouse',
      defaultMessage: 'Enter your Spouse',
    },
    label: {
      id: 'Spouse',
      defaultMessage: 'Spouse/Girl/Boyfriends Name',
      position: 'inline',
    },
    required: true,
    pattern: FREE_TEXT_REGEX,
    type: 'text',
    width: 2,
  },
  {
    name: 'SpouseSocial',
    errorMessage: {
      id: 'form.error.spousesocial',
      defaultMessage: 'Enter your Spouse Social Security',
    },
    label: {
      id: 'SpouseSocial',
      defaultMessage: 'Social Security',
      position: 'inline',
    },
    required: true,
    pattern: FREE_TEXT_REGEX,
    type: 'text',
    width: 2,
  },
  {
    name: 'SpouseAddress',
    label: {
      id: 'SpouseAddress',
      defaultMessage: 'Address(If Different)',
      position: 'inline',
    },
    required: true,
    pattern: FREE_TEXT_REGEX,
    type: 'text',
    width: 2,
  },
  // {
  //   name: 'SpouseEmail',
  //   errorMessage: {
  //     id: 'form.error.Spouseemail',
  //     defaultMessage: 'Enter your Spouse Address',
  //   },
  //   label: {
  //     id: 'SpouseEmail',
  //     defaultMessage: 'Email',
  //     position: 'inline',
  //   },
  //   required: true,
  //   pattern: FREE_TEXT_REGEX,
  //   type: 'text',
  //   width: 2,
  // },
  {
    name: 'spouseHomephone',
    label: {
      id: 'spouse.Home.number',
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
    name: 'SpouseCellphone',
    label: {
      id: 'spouse.number',
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
    name: 'SpouseWorkphone',
    label: {
      id: 'spousework.number',
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
    name: 'spouseemployer',
    errorMessage: {
      id: 'form.error.employer',
      defaultMessage: 'Enter your current employer ',
    },
    label: {
      id: 'Spouse.Employer',
      defaultMessage: 'Employer',
      position: 'inline',
    },
    required: true,
    pattern: FREE_TEXT_REGEX,
    type: 'text',
    width: 2,
  },
  {
    name: 'SpousePosition',
    errorMessage: {
      id: 'form.error.employer',
      defaultMessage: 'Enter your current employer ',
    },
    label: {
      id: 'spouse.Position',
      defaultMessage: 'Position',
      position: 'inline',
    },
    required: true,
    pattern: FREE_TEXT_REGEX,
    type: 'text',
    width: 2,
  },
  {
    name: 'spouseHowLong',
    errorMessage: {
      id: 'form.error.Howlong',
      defaultMessage: 'Enter How Long You Been at your recent job ',
    },
    label: {
      id: 'spouse.howlong',
      defaultMessage: 'How Long',
      position: 'inline',
    },
    required: true,
    pattern: FREE_TEXT_REGEX,
    type: 'text',
    width: 2,
  },
  {
    name: 'childsName',
    // errorMessage: {
    //   id: 'form.error.Howlong',
    //   defaultMessage: 'Enter How Long You Been at your recent job ',
    // },
    label: {
      id: 'childs.name',
      defaultMessage: 'Childs Name',
      position: 'inline',
    },
    required: true,
    pattern: FREE_TEXT_REGEX,
    type: 'text',
    width: 2,
  },
  {
    name: 'spousedob',
    errorMessage: {
      id: 'form.error.spousedob',
      defaultMessage: 'Enter Spouse Date of Birth',
    },
    label: {
      id: 'spouse.dob',
      defaultMessage: 'Date of Birth',
      position: 'inline',
    },
    required: true,
    pattern: FREE_TEXT_REGEX,
    type: 'text',
    width: 2,
  },
  {
    name: 'schoolemployer',
    errorMessage: {
      id: 'form.error.school',
      defaultMessage: 'Enter your school/employer',
    },
    label: {
      id: 'spouse.school',
      defaultMessage: 'School/Employer',
      position: 'inline',
    },
    required: true,
    pattern: FREE_TEXT_REGEX,
    type: 'text',
    width: 2,
  },
  {
    name: 'spouseParents',
    errorMessage: {
      id: 'form.error.spouseparents',
      defaultMessage: 'Enter How Long You Been at your recent job ',
    },
    label: {
      id: 'spouse.parents',
      defaultMessage: 'Other Parents Name',
      position: 'inline',
    },
    required: true,
    pattern: FREE_TEXT_REGEX,
    type: 'text',
    width: 2,
  },
  {
    name: 'vehicleYear',
    errorMessage: {
      id: 'form.error.year',
      defaultMessage: 'Enter vehicle year',
    },
    label: {
      id: 'vehicle.Year',
      defaultMessage: 'Year',
      position: 'inline',
    },
    required: true,
    pattern: FREE_TEXT_REGEX,
    type: 'text',
    width: 2,
  },
  {
    name: 'vehicleMake',
    errorMessage: {
      id: 'form.error.make',
      defaultMessage: 'Enter vehicle make',
    },
    label: {
      id: 'vehicle.Make',
      defaultMessage: 'Make',
      position: 'inline',
    },
    required: true,
    pattern: FREE_TEXT_REGEX,
    type: 'text',
    width: 2,
  },
  {
    name: 'vehicleModel',
    errorMessage: {
      id: 'form.error.model',
      defaultMessage: 'Enter vehicle model',
    },
    label: {
      id: 'vehicle.model',
      defaultMessage: 'Model',
      position: 'inline',
    },
    required: true,
    pattern: FREE_TEXT_REGEX,
    type: 'text',
    width: 2,
  },
  {
    name: 'vehicleColor',
    errorMessage: {
      id: 'form.error.color',
      defaultMessage: 'Enter vehicle color',
    },
    label: {
      id: 'vehicle.Color',
      defaultMessage: 'Color',
      position: 'inline',
    },
    required: true,
    pattern: FREE_TEXT_REGEX,
    type: 'text',
    width: 2,
  },
  {
    name: 'vehiclePlate',
    errorMessage: {
      id: 'form.error.plate',
      defaultMessage: 'Enter vehicle plate',
    },
    label: {
      id: 'vehicle.Plate',
      defaultMessage: 'Plate #',
      position: 'inline',
    },
    required: true,
    pattern: FREE_TEXT_REGEX,
    type: 'text',
    width: 2,
  },
  {
    name: 'vehicleState',
    errorMessage: {
      id: 'form.error.vehstate',
      defaultMessage: 'Enter state vehicle is registered',
    },
    label: {
      id: 'vehicle.state',
      defaultMessage: 'State',
      position: 'inline',
    },
    required: true,
    pattern: FREE_TEXT_REGEX,
    type: 'text',
    width: 2,
  },

  {
    name: 'amountowed',
    errorMessage: {
      id: 'form.error.owed',
      defaultMessage: 'Enter vehicle amount owed',
    },
    label: {
      id: 'vehicle.owed',
      defaultMessage: 'Amount Owed $',
      position: 'inline',
    },
    required: true,
    pattern: FREE_TEXT_REGEX,
    type: 'text',
    width: 2,
  },
  {
    name: 'vehicleFinanced',
    errorMessage: {
      id: 'form.error.financed',
      defaultMessage: 'Enter where vehicle is financed',
    },
    label: {
      id: 'vehicle.finance',
      defaultMessage: 'Where Financed',
      position: 'inline',
    },
    required: true,
    pattern: FREE_TEXT_REGEX,
    type: 'text',
    width: 2,
  },
  {
    name: 'refName',
    errorMessage: {
      id: 'form.error.refname',
      defaultMessage: 'Enter refrence name',
    },
    label: {
      id: 'refrence.name',
      defaultMessage: 'Name',
      position: 'inline',
    },
    required: true,
    pattern: FREE_TEXT_REGEX,
    type: 'text',
    width: 2,
  },
  {
    name: 'refRelationship',
    errorMessage: {
      id: 'form.error.relationship',
      defaultMessage: 'Enter refrence relationship',
    },
    label: {
      id: 'refrence.relationship',
      defaultMessage: 'Relationship',
      position: 'inline',
    },
    required: true,
    pattern: FREE_TEXT_REGEX,
    type: 'text',
    width: 2,
  },

  {
    name: 'refAddress',
    errorMessage: {
      id: 'form.error.refaddress',
      defaultMessage: 'Enter refrence Address',
    },
    label: {
      id: 'refrence.Address',
      defaultMessage: 'Address',
      position: 'inline',
    },
    required: true,
    pattern: FREE_TEXT_REGEX,
    type: 'text',
    width: 2,
  },
  {
    name: 'refemployer',
    errorMessage: {
      id: 'form.error.refemployer',
      defaultMessage: 'Enter your current employer ',
    },
    label: {
      id: 'ref.Employer',
      defaultMessage: 'Employer',
      position: 'inline',
    },
    required: true,
    pattern: FREE_TEXT_REGEX,
    type: 'text',
    width: 2,
  },
  {
    name: 'refHomephone',
    label: {
      id: 'ref.Home.number',
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
    name: 'refCellphone',
    label: {
      id: 'ref.cell.number',
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
    name: 'refWorkphone',
    label: {
      id: 'ref.work.number',
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
    name: 'Maritalstatus',
    errorMessage: {
      id: 'form.error.married',
      defaultMessage: 'Please select the type',
    },
    label: {
      id: 'married',
      defaultMessage: 'Married',
      position: 'inline',
    },
    inputs: [
      { name: 'Marrid', value: 'Married' },
      { name: 'Divorce', value: 'Divorce' },
      { name: 'Separated', value: 'Separated' },
      { name: 'Widowed', value: 'Widowed' },
      { name: 'Single', value: 'Single' },
      { name: 'Cohab', value: 'Cohab' },
    ],
    pattern: FREE_TEXT_REGEX,
    itype: 'radio',
  },
  
  {

    name: 'marriedlength',
    errorMessage: {
      id: 'form.error.marriedlength',
      defaultMessage: 'Lenth of Marriage',
    },
    label: {
      id: 'married.length',
      defaultMessage: 'How Long married/together',
      position: 'inline',
    },
    required: true,
    pattern: FREE_TEXT_REGEX,
    type: 'text',
    width: 2,
  },
];

export default data;
