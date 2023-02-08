import React from 'react';
import Image from 'next/image';
import styles from './style.module.css';
import woman from '../public/woman.png';

const Checklist = () => {
  return (
    <div className={styles.checklist} style={{ margin: '40px' }}>
      <div className="flex justify-center">
        <Image src={woman} alt="logo" height={150} width={150} />
        <h1 className="flex items-end font-bold">
          I GOTCHA BAIL BONDS RELEASE CHECKLIST
        </h1>
      </div>
      <div className="m-6">
        <span>
          1.{' '}
          <p>
            I understand that it is my responsibility to have the Defendant
            report to our office to complete his/her defendant paperwork no
            later than <input />. FAILURE TO DO SO IS A DIRECT VIOLATION OF THE
            BOND CONDITIONS AND MAY RESULT IN THE REVOCATION OF THE BOND(S.)
            <input />
            initials
            <input />
          </p>
        </span>
        <span>
          2.{' '}
          <p>
            {' '}
            I am affirming that all of the information that I am providing to
            the bail agency is true and correct. Any information found to be
            incorrect is a direct violation of this bail agreement and may
            result in a revocation of the bond. Any person who, knowingly and
            with intent to injure, defraud or deceive any insurer, files a
            statement of claim or an application containing any false,
            incomplete or missing information is guilty of a felony in the third
            degree.
            <input />
            initials
            <input />
          </p>
        </span>
        <span>
          3.{' '}
          <p>
            I understand that I am responsible for paying the full amount of the
            bail bond(s) posted if the defendant does not appear in court for
            every appearance, and any other time as directed by the court, until
            the defendant is sentenced or the court dismisses the case. It is my
            responsibility to stay in touch with the court and the bail bond
            agency and have the defendant appear at all scheduled court dates.
            <input />
            initials
            <input />
          </p>
        </span>
        <span>
          4.{' '}
          <p>
            {' '}
            I understand that the court will enter a forfeiture of bail, and
            issue a warrant for the defendant, if the defendant fails to make
            any court appearance. I understand that if the bond is ordered
            forfeited and it is not ordered reinstated, or exonerated, that I
            must pay the full amount of the bail forfeited to the bail agency
            within 30 days.
            <input />
            initials
            <input />
          </p>
        </span>
        <span>
          5.{' '}
          <p>
            I understand that if a bail is ordered forfeited by the court, that
            I am responsible to pay court cost, reasonable appearance fees by
            the bail agency or its attorney, or any other fees arising from the
            ordered forfeiture for the bail agency to reinstate or exonerate the
            bail bond, if necessary.
            <input />
            initials
            <input />
          </p>
        </span>
        <span>
          6.{' '}
          <p>
            {' '}
            I understand that I am responsible for paying investigation,
            location and apprehension time if it becomes necessary to arrest and
            surrender the defendant. Investigation costs will begin to accrue
            after a court forfeiture, or when any co-signer requests the
            defendant be placed back in custody, or if any condition of the bond
            is violated.
            <input />
            initials
            <input />
          </p>
        </span>
        <span>
          7.{' '}
          <p>
            I understand that if I breach the bail bond agreement by non-payment
            or any other action as defined by the bail agreement, I am
            responsible for any collection actions taken including, but not
            limited to, attorney fees and cost, court fees and cost, collection
            fees and costs.
            <input />
            initials
            <input />
          </p>
        </span>
        <span>
          8.{' '}
          <p>
            {' '}
            I understand it is a direct violation of the bond agreement to move,
            change your telephone number or your employment without notifying
            the bail agency in writing prior to the move or change. Should the
            bail agency attempt to contact you and find that the phone numbers
            provided are either changed or disconnected, or that the addresses
            provided are not valid, this will result in the defendant being
            returned back to jail and having the bond surrendered. I am
            responsible for any fees that arise from the revocation of the bond.
            <input />
            initials
            <input />
          </p>
        </span>
        <span>
          9.{' '}
          <p>
            {' '}
            I understand that collateral cannot be returned until the original
            certificate of discharge, signed and mailed by the Clerk of Court,
            is received in this office. Furthermore, I understand that
            substitution of collateral is at the discretion of the bail agency
            and the surety. There are no agreements to substitute collateral at
            a later date.
            <input />
            initials
            <input />
          </p>
        </span>
        <span>
          10.{' '}
          <p>
            {' '}
            I understand that it is in the best interest of all parties to
            notify the bail agency if the defendant is re-arrested or placed
            back in jail for any other reason. This will assure that the status
            of the bond is protected, and that the bond is not forfeited
            resulting in unnecessary cost, if the defendant is unable to make a
            court appearance.
            <input />
            initials
            <input />
          </p>
        </span>
        <span>
          11.{' '}
          <p>
            {' '}
            I understand that the obligation under this agreement is joint and
            several. This means that you may be held solely and individually
            liable for up to the full amount owed for any and all charges, even
            if there are other co-signers on the agreement.
            <input />
            initials
            <input />
          </p>
        </span>
        <span>
          12.{' '}
          <p>
            Agreement of Venue: O agree that if legal action between the parties
            concerning this bail bond agreement is brough, it shall be brought
            in and before a Federal or State court within <input />
            county in the State of Florida.
            <input />
            initials
            <input />
          </p>
        </span>
        <span>
          13.{' '}
          <p>
            {' '}
            The premium($
            <input />) is the fee that you pay and is NOT REFUNDABLE. THE
            PREMIUM MUST BE PAID IN FULL REGARDLESS OF THE OUTCOME OF THE BOND.
            <input />
            initials
            <input />
          </p>
        </span>
      </div>
      <span>
        <p className="font-bold mt-6">
          I HAVE READ AND AGREE WITH THE ABOVE DECLARATIONS AND UNDERSTAND MY
          RESPONSIBILITIES AND OBLIGATIONS
        </p>
      </span>
      <div>
        <span className="flex-col">
          X
          <span>
            <input className="w-1/3" />
            <input className="w-1/3" />
            <input className="w-1/3" />
          </span>
          <span className="w-3/4 flex justify-around">
            <p className="">Signature of Indemnitor</p>
            <p>Data</p>
            <p>Print Name</p>
          </span>
        </span>
        <span className="flex-col">
          X
          <span>
            <input className="w-1/3" />
            <input className="w-1/3" />
            <input className="w-1/3" />
          </span>
          <span className="w-3/4 flex justify-around">
            <p className="">Signature of Indemnitor</p>
            <p>Data</p>
            <p>Print Name</p>
          </span>
        </span>
        <span className="flex-col">
          X
          <span>
            <input className="w-1/3" />
            <input className="w-1/3" />
            <input className="w-1/3" />
          </span>
          <span className="w-3/4 flex justify-around">
            <p className="">Signature of Indemnitor</p>
            <p>Data</p>
            <p>Print Name</p>
          </span>
        </span>
      </div>
    </div>
  );
};

export default Checklist;
