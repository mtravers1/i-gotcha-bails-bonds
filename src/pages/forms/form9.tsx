import React, { FC } from 'react';
import styles from './forms.module.css';

const Form9: FC = () => {
  return (
    <div className={styles.form}>
      <span className="text-center w-1/2">
        <h1>
          <b>
            ELECTRONIC MONITORING ADDENDUM
            <br />
            TO
            <br />
            BAIL BOND APPLICATION AND AGREEMENT
          </b>
        </h1>
      </span>
      <div>
        <p className="ml-12">
          This Electronic Monitoring Addendum (“Addendum”) is attached to and
          forms part of the Bail Bond Application and
        </p>
        <p className="mb-3">
          Agreement signed, sealed and delivered by you as Defendant
          (“Agreement”) and is incorporated into the Agreement by this
          reference. Any terms used in this Addendum without definition and
          defined in the Agreement shall have the meanings assigned to these
          terms by the Agreement
        </p>

        <p className="ml-12">
          In consideration of Surety’s issuing or causing to be issued the Bond,
          you agree that Surety and its producers, agents,
        </p>
        <p className="mb-3">
          designees or representatives (collectively, “Representatives”), in
          their sole and absolute discretion, may require you, for any reason or
          no reason, to wear an electronic monitoring device (“EM Device”) in
          accordance with applicable law (if any). If Surety or its
          Representatives require you to wear an EM Device, you understand that
          you shall be monitored continuously by a tamper-proof, non-removable
          transmitter that is to be worn without interruption during the entire
          period of electronic monitoring.
        </p>
        <p className="ml-12">
          Upon notice by Surety and/or its Representatives that you must wear an
          EM Device, you shall follow all instructions
        </p>
        <p className="mb-3">
          provided by Surety and/or its Representatives in order to establish
          the electronic monitoring and install the EM Device including, without
          limitation, your immediately making your person and premises
          physically available to any third party electronic monitoring vendor
          (“EM Vendor”) designated by Surety and/or its Representatives.
        </p>
        <p className="ml-12">
          You shall not remove, disconnect, destroy or tamper with the EM Device
          in any way, and you agree that the EM Device
        </p>
        <p className="mb-3">
          may be inspected at any time and at any place by the EM Vendor, Surety
          and/or its Representatives. You shall be responsible for the cost of
          any damaged equipment and shall indemnify and hold Surety and its
          Representatives harmless for any and all damages as a result of
          wearing or tampering with the EM Device.
        </p>
        <p className="ml-12">
          You shall comply with all terms and conditions imposed upon you by the
          EM Vendor and/or any other party relating to thee
        </p>
        <p className="mb-3">
          electronic monitoring. You acknowledge and agree that you are solely
          responsible for all fees, costs and expenses relating to the
          electronic monitoring including, without limitation, any installation,
          maintenance and monitoring fees charged by the EM Vendor and/or any
          other party relating to the electronic monitoring (“Fees”). Below is a
          schedule of Fees, and you shall pay Fees to
          <br />
          <input className="w-1/5" />:
        </p>
        <p className="ml-12">
          Your failure to comply with the provisions of this Addendum shall
          constitute a breach of your obligations to Surety, and
        </p>
        <p className="mb-3">
          Surety shall have the right to immediately apprehend, arrest and
          surrender you, and you shall not be entitled to any refund of premium
          unless required by applicable law
        </p>
        <p className="ml-12">
          This Addendum supplements the terms and conditions of the Agreement,
          all of which terms and conditions remain in full
        </p>
        <p className="mb-3">
          force and effect. In the event of a conflict between the terms and
          conditions of the Agreement and this Addendum, this Addendum shall
          control.
        </p>
      </div>
      <div className="m-5 flex flex-col">
        <span>
          <b>SIGNED, SEALED AND DELIVERED at</b>
          <input /> day of <input />, 20
          <input />
        </span>
        <span className="flex">
          <p className="w-2/12">Signature of Defendant</p>
          <input className="w-full" />
        </span>
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
export default Form9;
