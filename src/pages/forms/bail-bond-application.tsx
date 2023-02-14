import { FC, useState } from 'react';
import styles from '../../styles/forms.module.css';

const Forms: FC = () => {
  const [name, setName] = useState('');
  const [aka, setAka] = useState('');
  const [homenumber, setHomenumber] = useState('');
  const [worknumber, setWorknumber] = useState('');
  const [isPending] = useState(false);
  // const API_URL='http://localhost:8000/name'

  const handleSubmit = () => {
    return;
  };

  return (
    <div className="m-5 font-serif">
      <div className={styles.form}>
        <form onSubmit={handleSubmit}>
          {!isPending && <button className="border-2">submit</button>}
          {isPending && <button disabled>isPending</button>}
          <div>
            <h2 className="text-center font-bold text-3xl m-8">
              Bail Bond Application and Agreement
            </h2>
            <p>
              {' '}
              You, the undersigned Defendant (“Defendant” or “you”), hereby
              represent and warrant that the following declarations made and
              answers given are true, complete and correct and are made for the
              purpose of inducing Lexington National Insurance Corporation
              (“Surety”) to issue, or cause to be issued, bail bond(s) or
              undertaking(s) for you (singularly or collectively the “Bond”),
              using power of attorney number(s) (if known)
              <input />, in the total amount of <input className="w-80  " />{' '}
              Dollars, $<input className="" /> in the
              <input className="" /> Court of{' '}
              <u>
                <input className="w-1/4" />
              </u>
            </p>
          </div>
          {/* ------------------------------------------Box1--------------------- */}

          <div>
            <h1 className="mt-7 font-bold">1. DEFENDENT'S NAME AND ADDRESS</h1>

            <div className="border-2 border-black p-2 ">
              <p>
                <div className="flex items-end justify-between">
                  <span className="w-3/4 flex">
                    <p>Name</p>
                    <input
                      className="w-11/12"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </span>
                  <span className="w-1/4 flex">
                    <p>AKA</p>
                    <input
                      className=" w-11/12"
                      value={aka}
                      onChange={(e) => setAka(e.target.value)}
                    />
                  </span>
                </div>

                <span className="w-2/4 flex justify-between">
                  <p className="ml-24">First</p> <p>Middle</p> <p>Last</p>
                </span>
                <div className="flex items-end justify-between">
                  <span className="w-2/6">
                    Home Phone #
                    <input
                      className="w-3/5"
                      value={homenumber}
                      onChange={(e) => setHomenumber(e.target.value)}
                    />
                  </span>
                  <span className="w-2/5">
                    Cell Phone #
                    <input className="w-3/4" />
                  </span>
                  <span className="w-3/5 flex">
                    <p className="w-2/12">Work Phone #</p>
                    <input
                      className="w-11/12"
                      value={worknumber}
                      onChange={(e) => setWorknumber(e.target.value)}
                    />
                  </span>
                </div>
                <div className="flex items-end justify-between">
                  <span className="w-10/12">
                    Email
                    <input className="w-11/12 m-1" />
                  </span>
                  <span className="">Facebook username</span>
                  <input className=" w-1/4" />
                  Other social media
                  <input className=" w-1/4 m-1" />
                </div>
                <span className="flex items-end justify-between">
                  Current Home Address
                  <input className="w-10/12  m-1" />
                </span>

                <div className="flex items-end justify-between">
                  <span className="w-1/2">
                    How Long <input className=" w-10/12 " />
                  </span>
                  <span className="w-1/12">
                    <input type="radio" />
                    Rent or <input type="radio" /> Own{' '}
                  </span>

                  <span className="w-2/4 flex">
                    <p className="w-4/12">Landlord/Mortgage Holder</p>
                    <input className=" w-10/12 m-1" />
                  </span>
                </div>
                <div>
                  Former Home Address <input className=" w-2/4 m-1" />
                  <span></span>
                  How Long
                  <input className="w-1/4" />
                  <span className="w-14">
                    <input type="radio" />
                    Rent or <input type="radio" /> Own
                  </span>
                </div>
                <div className="flex items-end justify-between">
                  <span className="w-1/4">
                    How Long Resided in Current City{' '}
                    <input className=" pt-3 w-1/4 m-1" />
                  </span>
                  <span className="w-1/4">
                    State
                    <input className=" pt-3  w-1/8 m-1" />{' '}
                  </span>
                  <span className="w-1/4">
                    Prior City/State Lived in{' '}
                    <input className="   pt-3 w-1/8 m-1" />
                  </span>
                  <span className="w-1/4 flex">
                    <p className="w-1/5">How Long</p>
                    <input className=" pt-3 w-10/12 m-1" />
                  </span>
                </div>
              </p>
            </div>
          </div>
          {/* ------------------------------------------Box1--------------------- */}
          <div>
            <h1 className="mt-7 font-bold "> 2. Personal Description</h1>
            <div className="border-2 border-black p-2 ">
              <span className="flex items-end justify-between">
                <span className="w-1/8">
                  Date of Birth <input className="" />
                </span>
                <span className="w-5/12">
                  City and State Born
                  <input className="w-3/4" />
                </span>
                <span className="w-1/8">
                  Male
                  <input type="radio" />
                  Female
                  <input type="radio" />
                </span>
                <span className="w-1/4 flex">
                  <p>Race</p> <input className="w-11/12" />
                </span>
              </span>
              <span className="flex items-end justify-between">
                <span className="w-1/3">
                  Social Security #<input className="w-9/12" />
                </span>
                <span className="w-1/3">
                  Drivers License # <input className="w-3/4" />
                </span>
                <span className="w-1/3 flex">
                  <p className="w-1/8 pl-2">Issuesing State</p>{' '}
                  <input className="w-4/5" />
                </span>
              </span>
              <span className="flex items-end justify-between">
                <span className="w-1/6">
                  Height
                  <input className="w-9/12" />
                </span>
                <span className="w-1/6">
                  Weight <input className="" />
                </span>
                <span className="w-1/6">
                  Eye Color
                  <input className="" />
                </span>
                <span className="w-1/6 flex ">
                  <p>Complexion</p>
                  <input className="w-3/5" />
                </span>
                <span className="w-1/6">
                  Hair Color
                  <input className="" />
                </span>
                <span className="w-1/6 flex pl-10">
                  <p className="mr-10 ">Glasses</p>
                  <input type="radio" className="" />
                  Yes
                  <input type="radio" />
                  No
                </span>
              </span>
              <span className="flex ">
                <p className="w-1/6">Scars, Marks, Tattoos</p>{' '}
                <input className="w-full" />
              </span>
              <span className="flex items-end justify-between">
                <span className="w-1/8">
                  U.S. Citizen <input type="radio" />
                  Yes
                  <input type="radio" />
                  No
                </span>
                <span className="w-1/4">
                  How Long in US
                  <input className="w-8/12" />
                </span>
                <span className="w-1/4">
                  Nationality
                  <input className="w-8/12" />
                </span>
                <span className="w-1/4 flex">
                  <p>Alien#</p>
                  <input className="w-full" />
                </span>
              </span>
              <span className="flex">
                <p className="w-1/5">Any Medical Conditions/Disabilities</p>
                <input className="w-full" />
              </span>
            </div>
          </div>
          {/* ------------------------------employment ------------*/}
          <div>
            <h1 className="mt-7 font-bold">3. Employment</h1>
            <div className="border-2 border-black p-2 ">
              <span className="flex items-end justify-between">
                <span className="flex w-full">
                  <p className="w-1/5">
                    All occumations for the past 5 years:{' '}
                  </p>{' '}
                  <input className="w-full" />
                </span>
              </span>
              <span>
                <u>Current Employer</u>
              </span>

              <span className="flex items-end justify-between">
                <span className="w-1/4">
                  Name <input className="w-10/12" />
                </span>
                <span className="w-1/4">
                  How Long <input className="w-9/12" />
                </span>
                <span className="w-1/4">
                  Phone #<input className="w-10/12" />
                </span>
                <span className="w-1/4 flex">
                  <p>Position</p> <input className="w-full" />
                </span>
              </span>
              <span className="flex items-end justify-between">
                <span className="w-2/3">
                  Address
                  <input className="w-10/12" />
                </span>
                <span className="w-1/3 flex">
                  <p className="w-1/3">SuperVisor's Name</p>
                  <input className="w-full" />
                </span>
              </span>
              <span>
                <u>Most Recent Former Employer</u>
              </span>

              <span className="flex items-end justify-between">
                <span className="w-1/4">
                  Name <input className="w-10/12" />
                </span>
                <span className="w-1/4">
                  How Long <input className="w-9/12" />
                </span>
                <span className="w-1/4">
                  Phone #<input className="w-10/12" />
                </span>
                <span className="w-1/4 flex">
                  <p>Position</p> <input className="w-full" />
                </span>
              </span>
              <span className="flex items-end justify-between">
                <span className="w-2/3">
                  Address
                  <input className="w-10/12" />
                </span>
                <span className="w-1/3 flex">
                  <p className="w-1/3">SuperVisor's Name</p>
                  <input className="w-full" />
                </span>
              </span>
              <span>
                <u>Next Most Recent Former Employer</u>
              </span>

              <span className="flex items-end justify-between">
                <span className="w-1/4">
                  Name <input className="w-10/12" />
                </span>
                <span className="w-1/4">
                  How Long <input className="w-9/12" />
                </span>
                <span className="w-1/4">
                  Phone #<input className="w-10/12" />
                </span>
                <span className="w-1/4 flex">
                  <p>Position</p> <input className="w-full" />
                </span>
              </span>
              <span className="flex items-end justify-between">
                <span className="w-2/3">
                  Address
                  <input className="w-10/12" />
                </span>
                <span className="w-1/3 flex">
                  <p className="w-1/3">SuperVisor's Name</p>
                  <input className="w-full" />
                </span>
              </span>
              <span className="flex items-end justify-between">
                <span className="w-1/6">
                  Union
                  <input className="w-10/12" />
                </span>
                <span className="w-1/6">
                  Local #<input className="w-9/12" />
                </span>
                <span className="w-2/6">
                  Military Service: Branch
                  <input className="w-8/12" />
                </span>
                <span>
                  Active
                  <input type="radio" />
                  Yes
                  <input type="radio" />
                  No
                  <span>
                    Discharge Date <input />
                  </span>
                </span>
              </span>
            </div>
          </div>
          {/*---------------------- maritial -----------*/}
          <div>
            <span className="flex justify-between font-bold mt-3 mb-1">
              <h1 className="mt-7 font-bold">4. MARITAL STATUS</h1>
              <span>
                <span className="flex-wrap">
                  <input type="radio" />
                  Married
                  <input type="radio" />
                  Divorced
                  <input type="radio" />
                  Separated
                  <input type="radio" />
                  Widowed
                  <input type="radio" />
                  Sinlge
                  <input type="radio" /> Cohab
                </span>
              </span>
              <span>
                How Long married/together
                <input />
              </span>
            </span>
            <div className="border-2 border-black p-2 ">
              <span className="flex items-end justify-between">
                <span className="w-2/3">
                  Spouse/girl/boyfriend's Name <input className="w-9/12" />
                </span>
                <span className="w-1/3 flex">
                  <p className="w-1/3">Social Security #</p>
                  <input className="w-full" />
                </span>
              </span>

              <span className="flex items-end justify-between">
                <span className="w-3/5">
                  Address (if different)
                  <input className="w-9/12" />
                </span>
                <span className="w-2/5 flex">
                  <p>Email</p>
                  <input className="w-full" />
                </span>
              </span>

              <span className="flex items-end justify-between">
                <span className="w-1/3">
                  Home Phone #(if different)
                  <input className="w-2/4" />
                </span>
                <span className="w-1/3">
                  Cell Phone #<input className="w-9/12" />
                </span>
                <span className="w-1/3 flex">
                  <p className="w-1/4"> Work Phone #</p>
                  <input className="w-full" />
                </span>
              </span>

              <span className="flex items-end justify-between">
                <span className="w-2/3">
                  Employer
                  <input className="w-10/12" />
                </span>
                <span className="w-2/3">
                  Position
                  <input className="w-10/12" />
                </span>
                <span className="w-1/3 flex">
                  <p className="w-1/3">How Long</p>
                  <input className="w-full" />
                </span>
              </span>

              <span className="flex items-end justify-between">
                <span className="w-1/4 flex">
                  <p className="w-1/4">Childs Name</p>
                  <input className="w-11/12" />
                </span>
                <span className="w-1/4 flex">
                  <p className="w-2/6">Date of Birth</p>
                  <input className="w-11/12" />
                </span>
                <span className="w-1/4 flex">
                  <p>School/Employer</p>
                  <input className="w-11/12" />
                </span>
                <span className="w-1/4 border-t-1 flex">
                  <p className="w-3/5">Other Parent's Name</p>{' '}
                  <input className="w-full" />
                </span>
              </span>
            </div>
            <span className="flex justify-between">
              <span className="w-1/4 text-center">
                Bail Standard Form No. 1<br />
                Edition Date: 03/24/14
              </span>
              <span className="w-2/4 text-center">
                THIS FORM IS NOT FOR USE IN COLORADO <br />© 2013 Lexington
                National Insurance Corporation, et al
              </span>
              <span className="w-1/4">Page</span>
            </span>
          </div>
          <div>
            <h1 className="mt-7 font-bold">5. VEHICLE</h1>
            <div className="border-2 border-black p-2 ">
              <span className="flex items-end justify-between">
                <span className="w-1/6">
                  Describe Auto: Year <input className="w-2/6" />
                </span>
                <span className="w-1/6">
                  Make
                  <input className="w-9/12" />
                </span>
                <span className="w-1/6">
                  Modle
                  <input className="w-9/12" />
                </span>
                <span className="w-1/6">
                  Color
                  <input className="w-9/12" />
                </span>
                <span className="w-1/6">
                  Plate #<input className="w-9/12" />
                </span>
                <span className="w-1/6">
                  State
                  <input className="w-9/12" />
                </span>
              </span>
              <span className="flex items-end justify-between">
                <span className="w-4/6">
                  Describe Auto: Year <input className="w-5/6" />
                </span>
                <span className="w-2/6">
                  Where Financed <input className="w-4/6" />
                </span>
              </span>
              <span className="flex items-end justify-between">
                <span className="w-1/3">
                  Insurance Company Name
                  <input className="w-3/6" />
                </span>
                <span className="w-1/3">
                  Ins. Agent's Name
                  <input className="w-4/6" />
                </span>
                <span className="w-1/3">
                  Ins. Agent's Phone # <input className="w-4/6" />
                </span>
              </span>
            </div>

            {/*---------------------------- 6. Arrest Info --------------------*/}
            <div>
              <h1 className="mt-7 font-bold">6. Arrest Information</h1>
              <div className="border-2 border-black p-2 ">
                <span className="flex items-end justify-between">
                  <span className="w-1/4">
                    Date of Arrest
                    <input className="w-9/12" />
                  </span>
                  <span className="w-2/4">
                    Booking Name (if different)
                    <input className="w-9/12" />
                  </span>
                  <span className="w-1/4">
                    Arresting Agency
                    <input className="w-8/12" />
                  </span>
                </span>
                <span className="flex items-end justify-between">
                  <span className="w-2/3">
                    Jail Location
                    <input className="w-9/12" />
                  </span>
                  <span className="w-1/3">
                    Booking #<input className="w-9/12" />
                  </span>
                </span>

                <span className="flex items-end justify-between">
                  <span className="w-2/3">
                    Charges
                    <input className="w-9/12" />
                  </span>
                </span>

                <span>
                  <span className="flex justify-between mr-20">
                    <p>Previous Arrest:</p>

                    <p>Charges</p>
                    <p>Date</p>
                    <p>Where</p>
                  </span>

                  <span className="flex justify-end">
                    <input className="w-10/12" />
                  </span>
                  <span className="flex justify-end">
                    <input className="w-10/12" />
                  </span>
                </span>
                <span>
                  Pending Charges in Other Countries
                  <input className="w-10/12" />
                </span>
                <span>
                  <span className="flex-wrap justify-between mr-20">
                    <span className="w-1/4 ">
                      Are you on parole/probation
                      <span className="flex-wrap">
                        <input className="ml-3" type="radio" />
                        Yes
                        <input type="radio" />
                        No
                      </span>
                    </span>
                    <span className="w-8/12">
                      Parole/Probation officer name and phone #
                      <input className="w-8/12" />
                    </span>
                  </span>
                  <span className="flex-wrap justify mr-20">
                    <span className="w-1/4 flex-wrap">
                      Are you on under any bond
                      <span className="flex-wrap">
                        <input className="ml-3" type="radio" />
                        Yes
                        <input type="radio" />
                        No
                      </span>
                    </span>
                    <span className="w-1/4 flex-wrap">
                      Are you on under any bond
                      <span className="">
                        <input className="ml-3" type="radio" />
                        Yes
                        <input type="radio" />
                        No
                      </span>
                    </span>
                  </span>
                </span>
              </div>
            </div>
            {/* ------------------------------------------6. ----------------------------*/}
            <div>
              <h1 className="mt-7 font-bold">6. Arrest Information</h1>
              <div className="border-2 border-black p-2 ">
                <span className="flex items-end justify-between">
                  <span className="w-1/2">
                    Name and Firm
                    <input className="w-10/12" />
                  </span>
                  <span className="w-1/2 ">
                    Phone Number
                    <input className="w-10/12" />
                  </span>
                </span>
              </div>
            </div>

            {/*------------------------------ 8. -------------------------*/}

            <div>
              <h1 className="mt-7 font-bold">8. RELATIVES AND FRIENDS</h1>
              <div className="border-2 border-black p-2 ">
                <span className="flex items-end justify-between ">
                  <span className="w-10/12">
                    <span className="font-bold">
                      {' '}
                      Father's Name
                      <input className="w-2/5 mr-20" />
                    </span>
                    <span>
                      {' '}
                      Address
                      <input className="w-2/5" />
                    </span>
                  </span>
                </span>
                <span className="flex justify-between">
                  <span className="w-1/3">
                    Home Phone
                    <input className="w-3/4" />
                  </span>
                  <span className="w-1/3">
                    Cell Phone
                    <input className="w-3/4" />
                  </span>
                  <span className="w-1/3">
                    Work Phone #<input className="w-3/4" />
                  </span>
                </span>
                <span className="flex justify-between">
                  <span className="w-2/4">
                    Email
                    <input className="w-3/4" />
                  </span>
                  <span className="w-2/4">
                    Employer
                    <input className="w-3/4" />
                  </span>
                </span>
                <span className="flex items-end justify-between">
                  <span className="w-11/12">
                    <span className="font-bold">
                      {' '}
                      Mothers's Name
                      <input className="w-2/5 mr-20" />
                    </span>
                    <span>
                      {' '}
                      Address
                      <input className="w-2/5" />
                    </span>
                  </span>
                </span>
                <span className="flex justify-between">
                  <span className="w-1/3">
                    Home Phone
                    <input className="w-3/4" />
                  </span>
                  <span className="w-1/3">
                    Cell Phone
                    <input className="w-3/4" />
                  </span>
                  <span className="w-1/3">
                    Work Phone #<input className="w-3/4" />
                  </span>
                </span>
                <span className="flex justify-between">
                  <span className="w-2/4">
                    Email
                    <input className="w-3/4" />
                  </span>
                  <span className="w-2/4">
                    Employer
                    <input className="w-3/4" />
                  </span>
                </span>
                <span className="flex items-end justify-between">
                  <span className="w-11/12">
                    <span className="font-bold">
                      {' '}
                      Other Relative/Friend's Name
                      <input className="w-2/5 mr-10" />
                    </span>
                    <span>
                      {' '}
                      Relationship
                      <input className="w-1/8" />
                    </span>
                    <span>
                      How Long Known:
                      <input />
                    </span>
                  </span>
                </span>
                <span className="flex justify-between">
                  <span className="w-1/3">
                    Home Phone
                    <input className="w-3/4" />
                  </span>
                  <span className="w-1/3">
                    Cell Phone
                    <input className="w-3/4" />
                  </span>
                  <span className="w-1/3">
                    Work Phone #<input className="w-3/4" />
                  </span>
                </span>
                <span className="flex justify-between">
                  <span className="w-2/4">
                    Email
                    <input className="w-3/4" />
                  </span>
                  <span className="w-2/4">
                    Employer
                    <input className="w-3/4" />
                  </span>
                </span>
                <span className="flex items-end justify-between">
                  <span className="w-11/12">
                    <span className="font-bold">
                      {' '}
                      Other Relative/Friend's Name
                      <input className="w-2/5 mr-10" />
                    </span>
                    <span>
                      {' '}
                      Relationship
                      <input className="w-1/8" />
                    </span>
                    <span>
                      How Long Known:
                      <input />
                    </span>
                  </span>
                </span>
                <span className="flex justify-between">
                  <span className="w-1/3">
                    Home Phone
                    <input className="w-3/4" />
                  </span>
                  <span className="w-1/3">
                    Cell Phone
                    <input className="w-3/4" />
                  </span>
                  <span className="w-1/3">
                    Work Phone #<input className="w-3/4" />
                  </span>
                </span>
                <span className="flex justify-between">
                  <span className="w-2/4">
                    Email
                    <input className="w-3/4" />
                  </span>
                  <span className="w-2/4">
                    Employer
                    <input className="w-3/4" />
                  </span>
                </span>
                <span className="flex items-end justify-between">
                  <span className="w-11/12">
                    <span className="font-bold">
                      {' '}
                      Other Relative/Friend's Name
                      <input className="w-2/5 mr-10" />
                    </span>
                    <span>
                      {' '}
                      Relationship
                      <input className="w-1/8" />
                    </span>
                    <span>
                      How Long Known:
                      <input />
                    </span>
                  </span>
                </span>
                <span className="flex justify-between">
                  <span className="w-1/3">
                    Home Phone
                    <input className="w-3/4" />
                  </span>
                  <span className="w-1/3">
                    Cell Phone
                    <input className="w-3/4" />
                  </span>
                  <span className="w-1/3">
                    Work Phone #<input className="w-3/4" />
                  </span>
                </span>
                <span className="flex justify-between">
                  <span className="w-2/4">
                    Email
                    <input className="w-3/4" />
                  </span>
                  <span className="w-2/4">
                    Employer
                    <input className="w-3/4" />
                  </span>
                </span>
              </div>
            </div>
            {/* ---------------------------9.Notes----------------- */}
            <div>
              <h1 className="mt-7 font-bold">9. Notes</h1>
              <div className="border-2 border-black p-2 ">
                <span className="flex items-end justify-between ">
                  <input className="w-full" />
                </span>
              </div>
            </div>

            <div className="flex justify-between">
              <span className="w-1/4">
                Bail Standard Form No. 1 <br />
                Edition Date: 03/24/14
              </span>
              <span className="w-1/4">
                THIS FORM IS NOT FOR USE IN COLORADO E© 2013 Lexington National
                Insurance Corporation, et al.
              </span>
              <span className="w-1/4">Page 2 of 4</span>
            </div>

            <div>
              <h1 className="font-bold text-center">
                BAIL BOND APPLICATION AND AGGREEMENT
                <br />
                Terms and Condition
              </h1>
              <p className="ml-10">
                In consideration of Surety, through its producers,
                representatives or designees, issuing or causing to be issued
                the Bond, you agree
              </p>
              <p>
                to the following terms and conditions:
                <br />
                1. The premium is fully earned upon your release from custody.
                The premium is not refundable except as stated below.
                <br />
                2. Surety, as bail, shall have control and jurisdiction over you
                during the term for which the Bond is in effect and shall have
                the right to apprehend, arrest and surrender you to the proper
                officials at any time as provided by law. In the event your
                surrender is made prior to your failure to appear in court, and
                for reason other than as stated in Paragraph 3, then you may be
                entitled to a refund of the bond premium if required by
                applicable law (if any) as stated in an attached addendum.
                <br />
                3. Unless otherwise provided by applicable law (if any) as
                stated in an attached addendum, the following events shall
                constitute a breach of your obligations to the Surety, and the
                Surety shall have the right to immediately apprehend, arrest and
                surrender you, and you shall have no right to any refund of
                premium whatsoever: (a) you depart the jurisdiction of the court
                without the prior written consent of the court and the Surety;
                (b) you move from your current address without prior written
                consent of the Surety or you fail to notify Surety of any
                material information; (c) you commit any act that constitutes
                reasonable evidence of your intention to cause a forfeiture of
                the Bond; (d) you are arrested and incarcerated for any other
                offense (other than a minor traffic violation); (e) you make any
                materially false statement in this application; (f) any
                indemnitor for you makes any materially false statement in the
                Indemnitor Application and Agreement; (g) your bail is
                increased; (h) any indemnitor requests that you be surrendered;
                (i) there is a material increase in the risk assumed by the
                Surety (as determined by the Surety in its sole and absolute
                discretion) including, by way of example but not limitation, any
                collateral or security given for the Bond depreciates in value
                or becomes impaired, or (j) Other Conditions:
              </p>
              <br />
              <input className="w-full" />
              <br />
              <p className="ml-10 font-bold">
                4. You shall indemnify the Surety and keep the Surety
                indemnified and hold it harmless from and against any and all
                losses,
              </p>
              <p className="font-bold">
                demands, liabilities, fees and expenses relating to, or arising
                out of, Surety’s issuance or procurement of the Bond including,
                but not limited to, the following: (a) the principal amount of
                any forfeiture of, or judgment on, the Bond, plus any related
                court costs, interest and legal fees incurred, (b) a fugitive
                recovery fee if there is a forfeiture of the Bond (which fee is
                typically ten percent of the amount of the Bond for an in-state
                recovery), plus any out of pocket expenses, (c) any and all
                extradition costs that may be incurred to apprehend and return
                you, and (d) if a collection action is required, reasonable and
                actual attorneys’ fees plus any other costs, expenses and/or
                assessments that may be incurred as a result of any forfeiture
                of the Bond subject to applicable law (if any) as stated in an
                attached addendum. The voucher, check or other evidence of any
                payment made by Surety or its producer, by reason of such
                suretyship, shall be conclusive evidence of such payment in any
                lawsuit against you both as to the propriety of such payment and
                as to the extent of your liability to Surety for such payment.
                Further, you will, upon demand, place with Surety the requisite
                funds to meet any such claim, demand, liabili
              </p>
              <p className="ml-10">
                5. To the maximum extent permitted by applicable law, you hereby
                waive any and all rights you may have under federal law
              </p>
              <p>
                (including, but not limited to, Title 28 Privacy Act-Freedom of
                Information Act, Title 6, Fair Credit Reporting Act) and any
                local or state law relating to Surety’s obtaining, and you
                consent to and authorize Surety to obtain, any and all private
                or public information and/or records concerning you from any
                party or agency, private or governmental (local, state,
                federal), including, but not limited to, credit reports, Social
                Security Records, criminal records, civil records, driving
                records, tax records, telephone records, medical records, school
                records, worker compensation records, and employment records.
                You further authorize, without reservation, any party or agency,
                private or governmental (local, state, federal), contacted by
                Surety to furnish in accordance with applicable law any and all
                private and public information and records in their possession
                concerning you to the Surety and direct that a copy of this
                document shall serve as evidence of said authorization. You
                irrevocably grant to Surety and its designees the right to enter
                your residence, or any other property that you own or occupy,
                without notice, at any time, for the purpose of locating,
                arresting, and returning you to custody, and subject to
                applicable law, you waive any and all causes of action in
                connection therewith including, without limitation, torts of
                trespass and false imprisonment
              </p>
              <p className="ml-10">
                6. You agree that Surety may attach a location tracking device
                on any vehicle owned or driven by you, at any time, without
                notice,
              </p>
              <p>
                and monitor the location of the vehicle through any available
                technology. You further agree that Surety may use location
                technologies to locate your wireless device at any time during
                the period of your bail and any applicable remission period, and
                the Bond is conditioned upon your full compliance with the
                following terms and conditions: (a) Surety, at its discretion,
                will use network-based location technologies to find you; (b)
                this is the only notice you will receive for the collection of
                your location information; (c) Surety will retain location data
                only while the Bond is in force and during any applicable
                remission period; (d) Surety will disclose location information
                only to the courts as required by court order; (e) Surety and
                its licensed producers, designees and representatives will be
                the only persons with access to your location information; (f)
                YOU WILL NOT HAVE THE OPTION TO OPT-OUT OF LOCATION USE OR
                TRACKING DURING THE BAIL PERIOD; and (g) all questions relating
                to location capability should be directed to Surety
              </p>
              <p className="ml-10">
                7. If you leave the State, subject to applicable law, you waive
                any right to extradition proceedings and consent to the
                application of
              </p>
              such force as may be necessary to return you to Surety and the
              court where the Bond was posted.
              <p className="ml-10">
                8. You hereby acknowledge and agree that neither the Surety nor
                any of its agents, producers, designees or representatives has
              </p>
              recommended or suggested any specific attorney or firm of
              attorneys to represent you in any capacity.
              <p className="ml-10">
                9. In the event any provision herein shall be deemed to exceed
                any applicable state or federal law, then such provision shall
              </p>
              <p>
                automatically be deemed to have been revised to comply with such
                law so as to provide Surety with the maximum protection from any
                loss or liability. The invalidity or unenforceability of any
                provision herein (or portion thereof) shall in no way effect the
                validity or enforceability of any other provision (or portion
                thereof). Surety may assign any of its rights herein or arising
                out of any of the transactions contemplated hereby to any party
                including, without limitation, any of the Surety’s agents,
                producers, designees or representatives (“Assignee”) without
                notice to or consent from you. Subject to any limitations
                imposed upon Assignee by Surety, Assignee shall have the right
                to enforce in any action or proceeding any of Surety’s rights
                herein or arising out of any of the transactions contemplated
                hereby, and you shall not, and expressly waive any right to,
                assert the claim or defense that Assignee does not have the
                right to enforce such rights in any such action or proceeding
              </p>
            </div>
            <span className="flex justify-between">
              <span className="w-1/4 text-center">
                Bail Standard Form No. 1<br />
                Edition Date: 03/24/14
              </span>
              <span className="w-2/4 text-center">
                THIS FORM IS NOT FOR USE IN COLORADO <br />© 2013 Lexington
                National Insurance Corporation, et al
              </span>
              <span className="w-1/4">Page</span>
            </span>
            <div className="font-bold">
              <h1>ALABAMA RESIDENTS</h1>
              <p>
                Any person who knowingly presents a false or fraudulent claim
                for payment of a loss or benefit or who knowingly presents false
                information in an application for insurance is guilty of a crime
                and may be subject to restitution fines or confinement in
                prison, or any combination thereof.
              </p>
              <h1>ARKANSAS RESIDENTS</h1>
              Any person who knowingly presents a false or fraudulent claim for
              payment for a loss or benefit or knowingly presents false
              information in an application for insurance is guilty of a crime
              and may be subject to fines and confinement in prison.
              <h1>FLORIDA RESIDENTS</h1>
              Any person who knowingly and with intent to injure, defraud, or
              deceive any insurer files a statement of claim or an application
              containing any false, incomplete, or misleading information is
              guilty of a felony of the third degree.
              <h1>LOUISIANA, RHODE ISLAND & WEST VIRGINIA RESIDENTS</h1>
              It is a crime to knowingly provide false, incomplete or misleading
              information to an insurance company for the purpose of defrauding
              the company. Penalties may include imprisonment, fines or a denial
              of insurance benefits.
              <h1>MAINE, TENNESSEE, VIRGINIA & WASHINGTON RESIDENTS</h1>
              It is a crime to knowingly provide false, incomplete or misleading
              information to an insurance company for the purpose of -
              defrauding the company. Penalties may include imprisonment, fines
              or a denial of insurance benefits.
              <h1>MARYLAND RESIDENTS</h1>
              Any person who knowingly or willfully presents a false or
              fraudulent claim for payment of a loss or benefit or who knowingly
              or willfully presents false information in an application for
              insurance is guilty of a crime and may be subject to fines and
              confinement in prison.
              <h1>NEW JERSEY RESIDENTS</h1>
              Any person who includes any false or misleading information on an
              application for an insurance policy is subject to criminal and
              civil penalties.
              <h1>NEW MEXICO RESIDENTS</h1>
              ANY PERSON WHO KNOWINGLY PRESENTS A FALSE OR FRAUDULENT CLAIM FOR
              PAYMENT OF A LOSS OR BENEFIT OR KNOWINGLY PRESENTS FALSE
              INFORMATION IN AN APPLICATION FOR INSURANCE IS GUILTY OF A CRIME
              AND MAY BE SUBJECT TO CIVIL FINES AND CRIMINAL PENALTIES. NEW YORK
              RESIDENTS - Any person who knowingly and with intent to defraud
              any insurance company or other person files an application for
              insurance or statement of claim containing any materially false
              information, or conceals for the purpose of misleading,
              information concerning any fact material thereto, commits a
              fraudulent insurance act, which is a crime, and shall also be
              subject to a civil penalty not to exceed five thousand dollars and
              the stated value of the claim for each such violation.
              <h1>OHIO RESIDENTS</h1>
              Any person who, with intent to defraud or knowing that he is
              facilitating a fraud against an insurer, submits an application or
              files a claim containing a false or deceptive statement is guilty
              of insurance fraud.
              <h1>OKLAHOMA RESIDENTS</h1>
              WARNING: Any person who knowingly, and with intent to injure,
              defraud or deceive any insurer, makes any claim for the proceeds
              of an insurance policy containing any false, incomplete or
              misleading information is guilty of a felony.
              <h1>PENNSYLVANIA RESIDENTS</h1>
              Any person who knowingly and with intent to defraud any insurance
              company or other person files an application for insurance or
              statement of claim containing any materially false information or
              conceals for the purpose of misleading, information concerning any
              fact material thereto commits a fraudulent insurance act, which is
              a crime and subjects such person criminal and civil penalties
            </div>
            <div className="m-5 flex flex-col">
              <span>
                Signed, scaled and delivered this
                <input /> day of <input />, 20
                <input />
              </span>
              <span>
                Signature ofr Defendant
                <input className="w-1/3" />
              </span>
            </div>
            <div className="w-full flex">
              <span className="border-2 w-1/2">
                SURETY:
                <br />
                <br />
                LEXINGTON NATIONAL INSURANCE
                <br />
                CORPORATION
                <br />
                P.O. Box 6098
                <br />
                Lutherville, Maryland 21094
                <br />
                Phone: (888) 888-2245
              </span>
              <span className="border-2 w-1/2">
                BAIL PRODUCER: [stamp must include name, address, phone #. and
                license #]
                <br />
                <input className="w-full m-30 border-none" />
              </span>
            </div>
            <span className="flex justify-between mt-24">
              <span className="w-1/4 text-center">
                Bail Standard Form No. 1<br />
                Edition Date: 03/24/14
              </span>
              <span className="w-2/4 text-center">
                THIS FORM IS NOT FOR USE IN COLORADO <br />© 2013 Lexington
                National Insurance Corporation, et al
              </span>
              <span className="w-1/4">Page</span>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Forms;
