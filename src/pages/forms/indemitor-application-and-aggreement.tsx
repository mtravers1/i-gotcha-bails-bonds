import { FC, useState } from 'react';
import styles from './forms.module.css';

const Form8: FC = () => {
  // const [ email, setEmail]=useState([{id:1, company:''}])

  const [refrence, setRefrence] = useState([{}]);
  const addRefrence = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const object = [...refrence, []];
    setRefrence(object);
  };

  const deleteRefrence = (e: any) => {
    e.preventDefault();
    const remove = [...refrence];
    remove.splice(e, 1);
    setRefrence(remove);
  };
  return (
    <div>
      <div className="m-5 font-serif">
        <div className={styles.form}>
          <div>
            <h2 className="text-center font-bold text-3xl m-8">
              INDEMNITOR APPLICATION AND AGGREEMENT
            </h2>
            <p className="">
              <span className="ml-24" /> You, the undersigned indemnitor
              (“Indemnitor” or “you”), hereby represent and warrant that the
              following declarations made and answers given are true, complete
              and correct and are made for the purpose of inducing Lexington
              National Insurance Corporation (“Surety”) to issue, or cause to be
              issued, bail bond(s) or undertaking(s) (singularly or collectively
              the “Bond”) for
              <input className="w-3/4 " /> (“Defendant”), using power of
              attorney
              <span className="ml-12 flex w-1/2 justify-between">
                <p>First</p>
                <p>Middle</p>
                <p>Last</p>
              </span>
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
                    <input className="w-11/12" />
                  </span>
                  <span className="w-1/4 flex">
                    <p>AKA</p>
                    <input className=" w-11/12" />
                  </span>
                </div>

                <span className="w-2/4 flex justify-between">
                  <p className="ml-24">First</p> <p>Middle</p> <p>Last</p>
                </span>
                <div className="flex items-end justify-between">
                  <span className="w-2/6">
                    Home Phone # <input className="w-3/5" />
                  </span>
                  <span className="w-2/5">
                    Cell Phone # <input className="w-3/4" />
                  </span>
                  <span className="w-3/5 flex">
                    <p className="w-2/12">Work Phone #</p>
                    <input className="w-11/12" />
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
                {/* <div>
Former Home Address <input className=" w-2/4 m-1"/>
<span></span>
How Long<input className="w-1/4"/><span className="w-14"><input type="radio"/>Rent or <input type="radio"/> Own</span>
</div> */}
                <div className="flex items-end justify-between">
                  {/* <span className="w-1/4">
How Long Resided in Current City <input className=" pt-3 w-1/4 m-1"/>

</span> */}
                  {/* <span className="w-1/4"> */}
                  {/* State<input className=" pt-3  w-1/8 m-1"/> </span> */}
                  {/* <span className="w-1/4">Prior City/State Lived in <input className="   pt-3 w-1/8 m-1"/></span> */}
                  {/* <span className="w-1/4 flex"><p className="w-1/5">How Long</p><input className=" pt-3 w-10/12 m-1"/></span> */}
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
              {/* <span className="flex items-end justify-between">
                <span className="w-1/6">
                    Height<input className="w-9/12"/>
                </span>
                <span className="w-1/6">
                    Weight <input className=""/>
                </span>
                <span className="w-1/6"> 
                    Eye Color<input className=""/>
                    </span>
                <span className="w-1/6 flex "> 
                    <p>Complexion</p><input className="w-3/5"/>
                </span>
                <span className="w-1/6"> 
                    Hair Color<input className=""/>
                    </span>
                    <span className="w-1/6 flex pl-10"> 
                    <p className="mr-10 ">Glasses</p><input type="radio" className=""/>Yes<input type="radio"/>No
                    </span>
            </span>
            <span className="flex ">
               <p className="w-1/6">Scars, Marks, Tattoos</p>  <input className="w-full"/>
            </span> */}
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
                <p className="w-1/5">Additional Notes</p>
                <input className="w-full" />
              </span>
            </div>
          </div>
          {/* ------------------------------employment ------------*/}
          <div>
            <h1 className="mt-7 font-bold">3. Employment</h1>
            <div className="border-2 border-black p-2 ">
              {/* <span className="flex items-end justify-between">
            <span className="flex w-full">
               <p className="w-1/5">All occumations for the past 5 years: </p> <input className="w-full"/>
            </span> */}
              {/* </span> */}

              <span className="flex items-end justify-between">
                <span className="w-1/3 flex">
                  <p>Employer</p> <input className="w-full" />
                </span>
                <span className="w-1/3 flex">
                  <p>Position</p> <input className="w-full" />
                </span>

                <span className="w-1/4 flex">
                  <p className="w-1/4">How Long</p> <input className="w-full" />
                </span>
              </span>
              <span className="flex items-end justify-between">
                <span className="w-2/3">
                  Employer Address
                  <input className="w-10/12" />
                </span>
                <span className="w-1/3 flex">
                  <p className="w-1/3">SuperVisor's Name</p>
                  <input className="w-full" />
                </span>
              </span>

              {/*         
        <span className="flex items-end justify-between">
            <span className="w-1/4">
                <p>Union </p><input className="w-10/12"/>
            </span>
            <span className="w-1/4">
            <p>Local</p><input className="w-9/12"/>
            </span>
            <span className="w-1/4">
            <p>Military:Branch</p><input className="w-10/12"/>
            </span>
            <span>
                <p>Active</p><input/>Yes<input/>No
            </span>
            <span className="w-1/4 flex">
               <p>Discharge Date</p> <input className="w-full"/>
            </span>
        </span> */}

              {/* <span className="flex items-end justify-between">
            <span className="w-2/3">
                Address<input className="w-10/12"/>
            </span>
            <span className="w-1/3 flex">
                <p className="w-1/3">SuperVisor's Name</p><input className="w-full"/>
            </span>
            </span>
            <span>
            <u>Next Most Recent Former Employer</u>
        </span>
        
        <span className="flex items-end justify-between">
            <span className="w-1/4">
                Name <input className="w-10/12"/>
            </span>
            <span className="w-1/4">
                How Long <input className="w-9/12"/>
            </span>
            <span className="w-1/4">
                Phone #<input className="w-10/12"/>
            </span>
            <span className="w-1/4 flex">
               <p>Position</p> <input className="w-full"/>
            </span>
        </span>
        <span className="flex items-end justify-between">
            <span className="w-2/3">
                Address<input className="w-10/12"/>
            </span>
            <span className="w-1/3 flex">
                <p className="w-1/3">SuperVisor's Name</p><input className="w-full"/>
            </span>
            </span> */}
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
                  Year <input className="w-2/6" />
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
                <span className="w-1/6 flex">
                  <p>State</p> <input className="w-full" />
                </span>
              </span>
              <span className="flex items-end justify-between">
                <span className="w-3/6 flex">
                  <p className="w-1/6">Where Financed </p>
                  <input className="w-full" />
                </span>
                <span className="w-3/6 flex">
                  <p className="w-1/6">Amount Owed $ </p>
                  <input className="w-full" />
                </span>
              </span>
              {/* <span className="flex items-end justify-between">
            <span className="w-1/3">
                Insurance Company Name<input className="w-3/6"/>
            </span>
            <span className="w-1/3">
                Ins. Agent's Name<input className="w-4/6"/>
            </span>
            <span className="w-1/3">
                Ins. Agent's Phone # <input className="w-4/6"/>
            </span>
            </span> */}
            </div>

            {/*---------------------------- 6. Arrest Info --------------------*/}
            <div>
              <h1 className="mt-7 font-bold">6. REFERENCES</h1>
              <div className="border-2 border-black p-2 ">
                <span className="flex items-end justify-between">
                  <span className="w-2/4 flex">
                    <p>Name</p>
                    <input className="w-full" />
                  </span>
                  <span className="w-2/4 flex">
                    <p>Relationship</p>
                    <input className="w-full" />
                  </span>
                </span>

                <span className="flex items-end justify-between">
                  <span className="w-1/2 flex">
                    <p>Address</p>
                    <input className="w-full" />
                  </span>
                  <span className="w-1/2 flex">
                    <p>Employer</p>
                    <input className="w-full" />
                  </span>
                </span>

                <span className="flex items-end justify-between">
                  <span className="w-1/3 flex">
                    <p className="w-1/4">Home Phone #</p>
                    <input className="w-full" />
                  </span>
                  <span className="w-1/3 flex">
                    <p className="w-1/4">Cell Phone #</p>
                    <input className="w-full" />
                  </span>
                  <span className="w-1/3 flex">
                    <p className="w-1/4">Work Phone</p>
                    <input className="w-full" />
                  </span>
                </span>
              </div>
              {refrence.map((com, i) => {
                console.log(i);
                i += 1;
                return (
                  <>
                    <h1 className="mt-7 font-bold ">REFERENCE {i + 1}</h1>

                    <div key={i} className="border-2 border-black p-2 mt-5">
                      <span className="flex items-end justify-between">
                        <span className="w-2/4 flex">
                          <p>Name</p>
                          <input className="w-full" />
                        </span>
                        <span className="w-2/4 flex">
                          <p>Relationship</p>
                          <input className="w-full" />
                        </span>
                      </span>

                      <span className="flex items-end justify-between">
                        <span className="w-1/2 flex">
                          <p>Address</p>
                          <input className="w-full" />
                        </span>
                        <span className="w-1/2 flex">
                          <p>Employer</p>
                          <input className="w-full" />
                        </span>
                      </span>

                      <span className="flex items-end justify-between">
                        <span className="w-1/3 flex">
                          <p className="w-1/4">Home Phone #</p>
                          <input className="w-full" />
                        </span>
                        <span className="w-1/3 flex">
                          <p className="w-1/4">Cell Phone #</p>
                          <input className="w-full" />
                        </span>
                        <span className="w-1/3 flex">
                          <p className="w-1/4">Work Phone</p>
                          <input className="w-full" />
                        </span>
                      </span>
                    </div>
                    <button onClick={(e) => deleteRefrence(e)}>Delete</button>
                  </>
                );
              })}

              <div className="flex justify-between mb-10 mt-10">
                <button
                  className="border-2 border-black"
                  onClick={(e) => addRefrence(e)}
                >
                  Add Refrence
                </button>
              </div>
            </div>

            {/* ------------------------------------------6. ----------------------------*/}

            {/* ---------------------------9.Notes----------------- */}
            <div>
              <h1 className="mt-7 font-bold">9. Notes</h1>
              <div className="border-2 border-black p-2 ">
                <span className="flex items-end justify-between ">
                  <input className="w-full" />
                </span>
              </div>
            </div>

            {/* <div className="flex justify-between">
            <span className="w-1/4">
            Bail Standard Form No. 1 <br/>
            Edition Date: 03/24/14 
            </span>
            <span className="w-1/4">
            THIS FORM IS NOT FOR USE IN COLORADO 
            E© 2013 Lexington National Insurance Corporation, et al.
            </span>
            <span className="w-1/4">
            Page 2 of 4
            </span>
        </div> */}

            <div>
              <p className="ml-10">
                THIS INDEMNITY AGREEMENT (“Agreement”) is entered into between
                you, the undersigned Indemnitor, and Surety through Surety’s
                duly appointed independent bail producer referenced below
                (“Producer”).{' '}
              </p>

              <p>
                <p className="ml-10 ">
                  1.You will have Defendant appear in any court required in
                  connection with the Bond at the times stated in the Bond and
                  all other times as may be ordered by the court
                  <br />
                  <p>
                    <b>
                      2. You, jointly and severally (together and separately)
                      with any other indemnitor, shall indemnify the Surety and
                      keep the Surety indemnified and hold it harmless from and
                      against any and all losses, demands, liabilities, fees and
                      expenses relating to, or arising out of, Surety’s issuance
                      or procurement of the Bond, including, but not limited to
                      the following: (a) the principal amount of any forfeiture
                      of, or judgment on, the Bond, plus any related court
                      costs, interest and legal fees incurred, (b) a fugitive
                      recovery fee if there is a forfeiture of the Bond (which
                      fee is typically ten percent of the amount of the Bond for
                      an in-state recovery, plus any out of pocket expenses),
                      (c) any and all extradition costs that may be incurred to
                      apprehend and return the Defendant, and (d) if a
                      collection action is required, reasonable and actual
                      attorneys’ fees plus any and all other costs, expenses
                      and/or assessments that may be incurred as a result of any
                      forfeiture of the Bond subject to applicable law (if any)
                      as stated in an attached addendum. The voucher, check or
                      other evidence of any payment made by Surety or Producer,
                      by reason of such suretyship, shall be conclusive evidence
                      of such payment in any lawsuit against you both as to the
                      propriety of such payment and as to the extent of your
                      liability to Surety for such payment. Further, you will,
                      upon demand, place with Surety the requisite funds to meet
                      any such claim, demand, liability, attorneys’ fees,
                      expense or judgment, whether that demand is made before or
                      after Surety has paid or advanced such funds.
                    </b>
                  </p>
                  <br />
                  3. Subject to applicable law (if any) as stated in an attached
                  addendum: (a) any property or collateral you deposit is
                  deposited as security for the payment of any and all monies
                  and sums due to Surety or Producer, including all liability,
                  demands, damages, judgments, interest, attorneys’ fees and
                  costs suffered, sustained, made or incurred by Surety or
                  Producer on account of, arising out of or relating to the Bond
                  and transactions contemplated thereby (including, without
                  limitation, the items referenced in Paragraph 2 above), your
                  failure to comply with the terms and conditions of this
                  Agreement, and any and all debt or other obligations arising
                  out of or evidenced by any agreement executed by Defendant,
                  you or any other indemnitor for the benefit of Surety or
                  Producer (“Liabilities”); and (b) if you grant the Surety a
                  lien or a security interest in any property or collateral to
                  enforce the obligations contained in this Agreement, and if
                  you do not perform all of your obligations in this Agreement,
                  you authorize the Surety to (i) apply or sell any collateral
                  security you deposited to reimburse the Surety for any and all
                  Liabilities of any kind or nature, (ii) hold, apply or sell
                  the collateral, or any part thereof, to protect or reimburse
                  the Surety by reason of the execution at any time of any other
                  bond for or on behalf of you or Defendant, and (iii) apply and
                  sell the collateral for the purpose of placing the Surety in
                  cash funds or protecting the Surety against any claim, demand
                  or loss under the Bond or any other bond executed on your or
                  Defendant’s behalf. Subject to applicable law (if any) as
                  stated in an attached addendum, the Surety may make any such
                  sale, at its discretion, at public or private sales, and
                  without demand, notice or advertisement of the time and place
                  of said sale, and also with the right to purchase said
                  collateral at such sale or sales, freed and discharged from
                  any equity or redemption.
                </p>
                <br />
                4. The Surety shall not be liable for the depreciation of any
                collateral or for any interest thereon. In the event of
                depreciation of the collateral, or any part thereof, or of any
                collateral which may be hereafter deposited with the Surety for
                its protection, upon request of the Surety, you shall provide
                the Surety with additional and satisfactory collateral so that
                the total market value of the collateral shall, at all times, be
                equal to the market value of the collateral at the time of its
                initial deposit. Subject to applicable law (if any) as stated in
                an attached addendum, if you fail to deposit such additional
                collateral, the Surety shall have the full right, power and
                authority, without further demand or notice, to sell, assign and
                deliver the whole or any part of such collateral, substituted
                collateral, or additional collateral, at public or private sale,
                at its option, and without demand, notice or advertisement, and
                also with the right to purchase said collateral at any such
                sale, freed and discharged from any equity or redemption.
                <br />
                5. If a confession of judgment is taken in connection with the
                Bond, the Surety shall have the right to enter and file the same
                at any time, and such judgment shall be a lien and entitled to a
                preference against any of your property, whether or not the
                Surety is indemnified at the time of the filing or entry of such
                judgment. In case a confession of judgment is filed by the
                Surety against you, the judgment entered shall be effective and
                available to the Surety against you not only in connection with
                the Bond but also in connection with any other bond that may
                have been written by the Surety in which you are either the
                indemnitor or defendant.
                <br />
                6. You acknowledge and agree that the Surety may foreclose any
                or all of the liens and security interests arising out of the
                transactions relating to the Bond or this Agreement, or exercise
                any of its rights or remedies under this Agreement, or take any
                combination of such actions, without waiving any other right or
                remedy. Failure to exercise any rights or remedies of the Surety
                at any one time shall not constitute a waiver of the right to
                exercise them at any other time. Any security or collateral you
                give may be substituted, subordinated, or released by the Surety
                without affecting any other rights. The Surety shall not be
                obligated to enforce its rights against any security or
                collateral prior to enforcing its rights against you or any
                other indemnitor.
                <br />
                7. Subject to applicable law (if any) as stated in an attached
                addendum, the Surety will return the collateral to you when all
                of the following are satisfied: (i) the Surety receives
                competent written legal evidence satisfactory to the Surety (for
                example, written notice from the court) of the Surety’s
                discharge or release from all liability under the Bond; (ii)
                there are no outstanding Liabilities of any kind arising out of
                or relating to the Bond; (iii) there are no other outstanding
                bonds or obligations executed by, for or on behalf of you or
                Defendant in connection with which the Surety may deem it
                advisable to retain such collateral for its protection; and (iv)
                upon the Surety’s request, you shall have executed and delivered
                to the Surety a general release upon the Surety’s return of the
                collateral to you. If the Surety deems it necessary to make any
                outlay to protect any collateral or security in its possession,
                whether the same be real or personal property, you authorize the
                Surety to do so, and you agree to indemnify and reimburse the
                Surety for any such outlay as in the judgment of the Surety may
                be necessary to protect its collateral or security, including
                payment of taxes or liens or mortgages and any attorneys’ fees
                or service fees for time spent and/or special services rendered.
                <br />
                8. The Surety shall have the right to transfer and/or assign, in
                whole or in part, its rights and obligations in this Agreement,
                and/or in the Bond to the Producer or any other person or entity
                (“Assignee”) without notice to or consent from you. Subject to
                any limitations imposed upon Assignee by the Surety, Assignee
                shall have the right to enforce in any action, proceeding or
                otherwise any of the Surety’s rights herein or arising out of
                any of the transactions contemplated hereby, and you shall not,
                and expressly waive any right to, assert the claim or defense
                that Assignee does not have the right to enforce such rights in
                any such action, proceeding or otherwise. If more than one bond
                is made or has been made for the Defendant, then this Agreement
                shall extend to and cover all those bonds and the terms of this
                Agreement shall apply to each bond individually or as a group.
                <br />
                9. This Agreement and all documents that are executed in
                connection with this Agreement set forth all the terms of the
                agreement between the Surety and you. All statements,
                representations, promises, agreements, and affirmations made by
                the Surety and its producers and employees prior to or
                contemporaneously with the execution of this Agreement are
                contained within this document, and unless they are specifically
                set forth in this Agreement are of no force or effect whatsoever
                in determining the rights and liabilities of the Surety and you.
                You further agree to execute and be bound by any other future
                documents necessary to carry out and effectuate this Agreement.
                <br />
                10. You hereby acknowledge and agree that neither the Surety nor
                its Producer has recommended or suggested any specific attorney
                or firm of attorneys to represent the Defendant in any capacity.
                <br />
                11. This Agreement may not be terminated or modified orally. All
                modifications and terminations of this Agreement, including any
                release of your liability hereunder, must be in writing and
                signed by the Surety and you.
                <br />
                12. To the maximum extent permitted by applicable law, you
                hereby waive any and all rights you may have under federal law
                (including, but not limited to, Title 28 Privacy Act-Freedom of
                Information Act, Title 6, Fair Credit Reporting Act) and any
                local or State law relating to Surety’s obtaining, and you
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
                irrevocably grant to surety and its producers, agents and
                representatives the right to enter your residence or other
                property owned or occupied by you or Defendant without notice,
                at any time, for the purpose of locating, arresting, and
                returning to custody the Defendant, and subject to applicable
                law, you waive any and all causes of action in connection
                therewith including, without limitation, torts of trespass and
                false imprisonment.
                <br />
                13. You agree that Surety may attach a location tracking device
                on any vehicle owned or driven by you, at any time, without
                notice, and monitor the location of the vehicle through any
                available technology. You further agree that Surety may use
                location technologies to locate your wireless device at any time
                during the period of Defendant’s bail and any applicable
                remission period, and the Bond is conditioned upon your full
                compliance with the following terms and conditions: (a) Surety,
                at its discretion, will use network-based location technologies
                to find you; (b) this is the only notice you will receive for
                the collection of your location information; (c) Surety will
                retain location data only while the Bond is in force and during
                any applicable remission period; (d) Surety will disclose
                location information only to the courts as required by court
                order; (e) Surety and its licensed producers, designees and
                representatives will be the only persons with access to your
                location information; (f) YOU WILL NOT HAVE THE OPTION TO
                OPT-OUT OF LOCATION USE OR TRACKING DURING THE BAIL PERIOD; and
                (g) all questions relating to location capability should be
                directed to Surety.
                <br />
                14. In the event any provision herein shall be deemed to exceed
                any applicable state or federal law, then such provision shall
                automatically be deemed to have been revised to comply with such
                law so as to provide the Surety with the maximum protection from
                any loss or liability. The invalidity or unenforceability of any
                provision herein (or portion thereof) shall in no way effect the
                validity or enforceability of any other provision (or portion
                thereof).
                <br />
                15. You have not been paid to sign this Agreement. You have read
                the above contract, understand it and agree to fulfill ALL of
                the provisions therein.
              </p>
              <div className="text-bold">
                <b>
                  <h1 className="underline">ALABAMA RESIDENTS</h1>
                  Any person who knowingly presents a false or fraudulent claim
                  for payment of a loss or benefit or who knowingly presents
                  false information in an application for insurance is guilty of
                  a crime and may be subject to restitution fines or confinement
                  in prison, or any combination thereof.
                  <br />
                  <br />
                  <h1 className="underline">ARKANSAS RESIDENTS</h1>
                  Any person who knowingly presents a false or fraudulent claim
                  for payment for a loss or benefit or knowingly presents false
                  information in an application for insurance is guilty of a
                  crime and may be subject to fines and confinement in prison.
                  <br />
                  <br />
                  <h1 className="underline">FLORIDA RESIDENTS</h1>
                  Any person who knowingly and with intent to injure, defraud,
                  or deceive any insurer files a statement of claim or an
                  application containing any false, incomplete, or misleading
                  information is guilty of a felony of the third degree.
                  <br />
                  <br />
                  <h1 className="underline">
                    LOUISIANA, RHODE ISLAND & WEST VIRGINIA RESIDENTS
                  </h1>
                  Any person who knowingly presents a false or fraudulent claim
                  for payment of a loss or benefit or knowingly presents false
                  information in an application for insurance is guilty of a
                  crime and may be subject to fines and confinement in prison.
                  <br />
                  <br />
                  <h1 className="underline">
                    MAINE, TENNESSEE, VIRGINIA & WASHINGTON RESIDENTS
                  </h1>
                  It is a crime to knowingly provide false, incomplete or
                  misleading information to an insurance company for the purpose
                  of defrauding the company. Penalties may include imprisonment,
                  fines or a denial of insurance benefits.
                  <br />
                  <br />
                  <h1 className="underline">MARYLAND RESIDENTS</h1>
                  Any person who knowingly or willfully presents a false or
                  fraudulent claim for payment of a loss or benefit or who
                  knowingly or willfully presents false information in an
                  application for insurance is guilty of a crime and may be
                  subject to fines and confinement in prison.
                  <br />
                  <br />
                  <h1 className="underline">NEW JERSEY RESIDENTS</h1>
                  Any person who includes any false or misleading information on
                  an application for an insurance policy is subject to criminal
                  and civil penalties.
                  <br />
                  <br />
                  <h1 className="underline">NEW MEXICO RESIDENTS</h1>
                  ANY PERSON WHO KNOWINGLY PRESENTS A FALSE OR FRAUDULENT CLAIM
                  FOR PAYMENT OF A LOSS OR BENEFIT OR KNOWINGLY PRESENTS FALSE
                  INFORMATION IN AN APPLICATION FOR INSURANCE IS GUILTY OF A
                  CRIME AND MAY BE SUBJECT TO CIVIL FINES AND CRIMINAL
                  PENALTIES.
                  <br />
                  <br />
                  <h1 className="underline">OHIO RESIDENTS</h1>
                  Any person who, with intent to defraud or knowing that he is
                  facilitating a fraud against an insurer, submits an
                  application or files a claim containing a false or deceptive
                  statement is guilty of insurance fraud.
                  <br />
                  <br />
                  <h1 className="underline">OKLAHOMA RESIDENTS</h1>
                  WARNING: Any person who knowingly, and with intent to injure,
                  defraud or deceive any insurer, makes any claim for the
                  proceeds of an insurance policy containing any false,
                  incomplete or misleading information is guilty of a felony.
                  <br />
                  <br />
                  <h1 className="underline">PENNSYLVANNIA RESIDENTS</h1>
                  Any person who knowingly and with intent to defraud any
                  insurance company or other person files an application for
                  insurance or statement of claim containing any materially
                  false information or conceals for the purpose of misleading,
                  information concerning any fact material thereto commits a
                  fraudulent insurance act, which is a crime and subjects such
                  person to criminal and civil penalties.
                  <br />
                  <br />
                </b>
              </div>
            </div>
            {/* <span className="flex justify-between">
            <span className="w-1/4 text-center">
            Bail Standard Form No. 1<br/>
            Edition Date: 03/24/14
            </span>
            <span className="w-2/4 text-center">
            THIS FORM IS NOT FOR USE IN COLORADO <br/>
            © 2013 Lexington National Insurance Corporation, et al
            </span>
            <span className="w-1/4">
                Page
            </span>
        </span> */}
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
                Signed, SEALED AND DELIVERED at
                <input /> day of <input />, 20
                <input />
              </span>
            </div>
            {/* <div className="w-full flex">
            <span className="border-2 w-1/2">
            SURETY:<br/><br/>
LEXINGTON NATIONAL INSURANCE<br/>
CORPORATION<br/>
P.O. Box 6098<br/>
Lutherville, Maryland 21094<br/>
Phone: (888) 888-2245

                </span>
            <span className="border-2 w-1/2">BAIL PRODUCER: [stamp must include name, address, phone #. and license #]<br/>
            <input className="w-full m-30 border-none"/>
            </span>

        </div> */}
            {/* <span className="flex justify-between mt-24">
            <span className="w-1/4 text-center">
            Bail Standard Form No. 1<br/>
            Edition Date: 03/24/14
            </span>
            <span className="w-2/4 text-center">
            THIS FORM IS NOT FOR USE IN COLORADO <br/>
            © 2013 Lexington National Insurance Corporation, et al
            </span>
            <span className="w-1/4">
                Page
            </span>
        </span> */}
            <span className="flex flex-row justify-between">
              <span className="w-1/2 flex flex-col">
                <p className="">
                  <b>Witness</b>
                </p>
                <span className="flex">
                  <p>Sign:</p>
                  <input className="w-3/4" />
                </span>
                <span className="flex">
                  <p>Print:</p>
                  <input className="w-3/4" />
                </span>
              </span>
              <span className="w-1/2 flex flex-col">
                <p className="">
                  <b>INDEMNITOR</b>
                </p>
                <span className="flex">
                  <p>Sign:</p>
                  <input className="w-3/4" />
                </span>
                <span className="flex">
                  <p>Print:</p>
                  <input className="w-3/4" />
                </span>
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <span className="w-1/3 border-2">
          Surety
          <br />
          Lexington National Insurance Corporation
          <br />
          P.O. Box 6098
          <br />
          Lutherville, Maryland 21094
          <br />
          Phone: 888-888-2245
          <br />
          <br />
          <br />
        </span>
        <span className="border-2 w-1/3">
          Bail Producer Stamp: [must include name, address, phone no. and
          license no.]
          <br />
          <input className="w-full h-3/4 bg-slate-400" />
        </span>
      </div>
    </div>
  );
};

export default Form8;
