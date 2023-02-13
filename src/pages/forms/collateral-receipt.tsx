import React, { FC } from 'react';
import styles from '../../styles/forms.module.css';

const Form5: FC = () => {
  return (
    <div className={styles.form}>
      <div className="flex justify-end">
        <span className="w-1/3 text-right text-bold ">
          <b className="text-bold">COLLATERAL RECEIPT </b>
          <br />
          <u>DO NOT LOSE THIS RECEIPT</u>
        </span>
        <span className="w-1/3 text-right">
          RECEIPT NO .:
          <input />
        </span>
      </div>
      <div className="flex flex-row">
        <span className="w-1/2">
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
        <span className="border-2 w-1/2">
          Bail Producer Stamp: [must include name, address, phone no. and
          license no.]
          <br />
          <input className="w-full h-3/4" />
        </span>
      </div>

      <div>
        <span className="">
          1. Date
          <input className="w-1/8" />
          <br />
        </span>
        <span className="">
          2. DEPOSITOR'S NAME
          <input className="w-10/12" />
        </span>
        <span className="flex justify-between">
          <p className="w-1/4 ml-60">First</p>
          <p className="w-1/4">Middle</p>
          <p className="w-1/4">Last</p>
        </span>
        <span>
          3.ADDRESS <input className="w-1/5 ml-6" />
          <input className="w-1/5 ml-6" />
          <input className="w-1/5 ml-6" />
          <input className="w-1/5 ml-6" />
        </span>
        <span className="flex">
          <p className="w-1/4 ml-60">Street</p>
          <p className="w-1/4">City</p>
          <p className="w-1/4">State</p>
          <p className="w-1/4">Zip</p>
        </span>
        <span className="flex text-base">
          <p className="mr-4">4. PHONE NUMBER </p> Home #
          <input className="w-1/4" />
          WORK #<input className="w-1/4" />
          MOBILE #<input className="w-1/4" />
        </span>
        <span>
          <span>
            <p>
              5. The person named on line two (2) above ("Depositor" or "you")
              has deposited the following collateral:
            </p>
          </span>
          <input type="radio" />
          In the amount of <input />
          Dollars($
          <input />) paid by
          <br />
          way of (i.e., cash, check no./ money order no.)
          <input />
          <span className="flex">
            <input type="radio" />
            Other (Itemize and describe, including the value, if collateral is
            other than money and specify condition) :
          </span>
          <input className="w-full" />
          <span>
            The above collateral is placed as security for the bail bond(s),
            premium owed, if any, and all lawful costs incurred due to
            underwriting the bail bond(s) for the following:
          </span>
        </span>
        <span>
          <span className="flex">
            6. DEFENDANT
            <input className="w-2/3" />
            ("Defendant") CASE NO.
            <input className="w-1/8" />
          </span>
          <span className="flex">
            <p className="w-1/5 ml-60">First</p>
            <p className="w-1/5">Middle</p>
            <p>Last</p>
          </span>
        </span>
        <span>
          7. BOND AMOUNT(S) $<input /> POWER NO(S)
          <input /> BOND NO(S):
          <input />
        </span>
        <span className="flex">
          8.COURT
          <input className="w-1/3 mr-60" />
          CHARGES
          <input className="w-1/3" />
        </span>
        <span>
          9. RECIEVED BY <input className="w-1/3 mr-48" />
          <input className="w-1/3" />
        </span>
        <span className="flex flex-end">
          <p className="w-1/2 text-center">Signature of Bail Producer</p>
          <p className="w-1/4 text-center">Printed Name of Bail Producer</p>
        </span>
        <span>
          10. COLLATERAL HELD BY (check one): <input type="radio" />
          Bail Producer <input type="radio" />
          Surety <input type="radio" />
          Managing General Agent
        </span>
        <br />
        <div className="p-12 text-xs">
          <b className="">
            Except as otherwise provided by applicable law (if any) as stated in
            an addendum attached to the Indemnitor Application and Agreement
            (“Agreement”), you are depositing the collateral as security for the
            payment of any and all monies and sums due to Surety or its
            producers, including all liability, demands, damages, judgments,
            interest, attorneys’ fees and costs suffered, sustained, made or
            incurred by Surety or its producers on account of, arising out of or
            relating to the above bail bond and transactions contemplated
            thereby, your failure to comply with the terms and conditions of the
            Agreement and any and all debt or other obligations arising out of
            or evidenced by any agreement executed by you, Defendant or any
            other indemnitor(s) for the benefit of Surety or its producer, all
            of the terms of which are made a part of this receipt by this
            reference (“Liabilities”).{' '}
          </b>
          <br />
          <br />
          <p>
            The bail producer will make the collateral available for return to
            the person whose name appears as Depositor on this Collateral
            Receipt (or that person’s heir, legal representative, or successor
            in interest) within 10 days after receiving written notice from the
            court that the Bond and the Surety have been exonerated, and that no
            Liabilities remain open or unpaid.
          </p>
          <br />
          <p>
            If the collateral you provided included a document that conveys
            title to a lien on real property and such document was recorded, the
            bail producer or Surety shall deliver a reconveyance of the
            property, executed in such a manner that it may also be recorded, to
            you or your heir, legal representative or successor in interest
            within 10 working days after the bail producer or Surety receives
            notice of the exoneration of the Bond in writing by the court. The
            bail producer or Surety shall deliver such reconveyance document to
            you by making the document available at its principal place of
            business or mailing it to you upon your request.
          </p>
          <br />
          <p>
            The bail producer or Surety will not return any collateral to you
            until you provide the written receipt that identifies the Bond,
            describes the collateral, and shows your signature and the date
            returned.
          </p>
        </div>
        <span>
          You hereby acknowledge receipt of a copy of this document and of all
          documents referenced above, and the above conditions are understood
          and agreed to.
        </span>
        <span className=" flex  mr-72 justify-end ">
          <input className="bg-none mt-24 w-1/4" />
          <br />
          Depositor Signature
        </span>
        <hr className="" />

        <h1 className="text-center">
          <b>RECEIPT FOR RETURN OF COLLATERAL</b>
        </h1>
        <p>
          You hereby surrender the original of this collateral receipt and
          acknowledge the return and receipt of collateral listed above. The
          collateral has been returned in good and sufficient condition and you
          hereby relieve the Surety and its producer from any further liability
          or responsibility in relation to the collateral.
        </p>

        <span className="flex">
          DATE:
          <input className="w-1/5" /> You have received the items listed below:
        </span>
        <span className="flex justify-center">
          <p className=" mr-36">TOTAL AMOUNT RETURNED </p>
          $ <input className="w-1/4" />
        </span>

        <span>
          Other collateral returned
          <input className="w-10/12" />
        </span>
        <input className="w-full" />
        <span className="flex">
          Recieved by:
          <input className="w-1/2" /> Returned by:
          <input className="w-1/3" />
        </span>
        <span className="flex">
          <p className="w-1/4 text-right ml-60">Print Name</p>
          <p className="w-1/4 text-right ml-48">Print Name of Bail producer</p>
        </span>
        <span className="flex justify-end">
          <p className="mr-60">____________________________________________</p>
          <p className="mr-72">______________________________________</p>
        </span>
        <span className="flex">
          <p className="w-1/4 text-right ml-60">Signature</p>
          <p className="w-1/4 text-right ml-48">Signature of Bail producer</p>
        </span>
      </div>
      <h1 className="text-center">
        <b>
          THIS FORM IS NOT FOR USE IN ALASKA, ARKANSAS, COLORADO, FLORIDA OR NEW
          MEXICO
        </b>
      </h1>
    </div>
  );
};

export default Form5;
