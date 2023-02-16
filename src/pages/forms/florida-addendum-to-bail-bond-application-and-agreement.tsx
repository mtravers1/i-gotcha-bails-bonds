import React from 'react';
import styles from './forms.module.css';

const Form3 = () => {
  return (
    <div className={styles.form}>
              <p  className='text-red-900 flex justify-end'>* if you falsify any information, the bond will  be revoked immediately</p>

      <div className="m-10 font-serif">
        <span className="justify-center  flex text-center font-bold">
          <h1 className=" justify-center  flex">
            FLORIDA ADDENDUM
            <br />
            TO
            <br />
            BAIL BOND APPLICATION AND AGREEMENT
          </h1>
        </span>
        <span className="ml-10">
          <p>
            This Florida Addendum (“Addendum”) is attached to and forms part of
            the Bail Bond Application and Agreement signed, sealed and delivered
            by you as Defendant (“Agreement”) and is incorporated into the
            Agreement by this reference. Any capitalized terms used in this
            Addendum without definition shall have the meanings assigned to
            these terms by the Agreement.
          </p>
        </span>
        <span className="ml-10">
          <p>
            A. ADDITIONAL TERMS AND CONDITIONS. The following terms and
            conditions are an integral part of this Agreement for Bond No.
            <input /> dated <input />
            for which Surety or its agent shall receive a premium in the amount
            of <input /> Dollars ($
            <input />
            ), and Surety and you agree that the Bond is conditioned upon your
            full compliance with all of these terms and conditions and is a part
            of the Bond and Agreement:
          </p>
        </span>
        <div className="m-12">
          1. Surety, as bail, shall have control and jurisdiction over you
          during the term for which the Bond is executed and shall have the
          right to apprehend, arrest and surrender you to the proper officials
          at any time as provided by law.
          <br />
          <br />
          2. In the event your surrender is made prior to the time set for your
          appearances, and for reasons other than as enumerated below in
          Paragraph 3, then a refund of the Bond premium shall be made to the
          person whose name appears as Payer on the Premium Receipt.
          <br />
          <br />
          3. It is understood and agreed that the happening of any one of the
          following events shall constitute a breach of your obligations to
          Surety, and Surety shall have the right to immediately apprehend,
          arrest and surrender you, and no person shall have any right to any
          refund of premium whatsoever. The events which constitute a breach of
          your obligations hereunder are:
          <div className="ml-10">
            <br />
            <br />
            (a) If you depart the jurisdiction of the court without the written
            consent of the court and Surety or its agent;
            <br />
            <br className="ml-10" />
            (b) If you move from one address to another within the State of
            Florida without notifying Surety or its agent in writing prior to
            moving;
            <br />
            <br className="ml-10" />
            (c) If you commit any act which constitutes reasonable evidence of
            your intention to cause a forfeiture of the Bond;
            <br />
            <br />
            (d) If you are arrested and incarcerated for any offense other than
            a minor traffic violation; or
            <br />
            <br />
            (e) If you make any material false statement in the Agreement.
          </div>
        </div>
        <div>
          <span className="ml-10">
            B. INFORMATIONAL NOTICE. For complaints or inquiries, please
            contact: Florida Department of Financial Services Bail Bond Section,
            200 E. Gaines St., Tallahassee, FL 32399-0320, (850) 413-5660.
          </span>
          <br />
          <br />
          <span className="ml-10">
            {' '}
            C. The person whose name appears as Payer on the Premium Receipt
            shall be entitled to a refund of premium for the Bond if and when it
            is found that Surety had no liability under the Bond because you do
            not come under the jurisdiction of the court to which you are
            returnable or you are not released from custody, except where the
            Bond is written to allow you to serve a sentence in another
            jurisdiction.
          </span>
          <br />
          <br />
          <span className="ml-10">
            D. Except as expressly provided in this Addendum, all terms and
            conditions of the Agreement remain in full force and effect. In the
            event of a conflict between the terms and conditions of the
            Agreement and this Addendum, this Addendum shall control.
          </span>
          <br />
          <br />
          <span className="ml-10">
            E. This Addendum shall be attached to every Bail Bond Application
            and Agreement entered into in the State of Florida.
          </span>
        </div>
      </div>
      <p className="text-center font-bold">
        Any person who knowingly and with intent to injure, defraud, or deceive
        any insurer files a statement of claim or an
        <br />
        application containing any false, incomplete, or misleading information
        is guilty of a felony of the third degree.
      </p>
      <span className="flex flex-col m-10 font-bold">
        <span>
          Signed, sealed and delivered this
          <input />
          day of
          <input />, 20
          <input />
        </span>
        <span>
          Signature of Defendant
          <input className="w-10/12" />
        </span>
        <span>
          Printed Name of Defendan
          <input className="w-10/12" />
        </span>
      </span>
    </div>
  );
};
export default Form3;
