import React from 'react';
import Image from 'next/image';
import woman from '../public/woman.png';

const Formcredit = () => {
  return (
    <div className="text-xl">
      take photo of ID and front and back of credit card
      <span className="flex justify-center">
        <Image src={woman} height={200} width={200} alt="logo" />
      </span>
      <h1 className="text-center text-2xl mb-12">
        One (1) Time Credit Card Payment Authorization
      </h1>
      <p>
        Sign and complete this form to authorize I GOTCHA BAIL BONDS LLC to make
        a ont-time charge to your cred card listed below
      </p>
      <p className="mt-12 mb-12">
        {' '}
        By signing this form, you give use permission to debit you account for
        the amount indicated on or after the indicated date. This permission for
        a Sinlge transaction only, and does not provide authorization for anhy
        additional unrelated debits or credits to you account
      </p>
      <div>
        <p>
          I<input className="border-b-2 border-black" /> authorize
          <input className="border-b-2 border-black" /> to charge my <br />
          <span className="flex">
            <p className="ml-12">Cardholder</p>
            <p className="ml-48">Merchant's Name</p>
          </span>
          <br />
          credit card account indicated below for $
          <span className="">
            {' '}
            <input className="border-b-2 border-black" />
            on
          </span>{' '}
          <span className="">
            <input className="border-b-2 border-black" />
          </span>
        </p>
        <span className="flex w-1/2 justify-end">
          <p className="mr-48">(Amount$)</p>
          <p className="mr-12">(Date)</p>
        </span>
      </div>
      <span>
        <p className="mt-12">
          This payment is for Premium payment for bail bond service
        </p>
      </span>
      <span>
        <p>(Description of Goods/Services)</p>
      </span>
      <div className="mt-12">
        <h1 className="font-bold">Billing Information</h1>
        <span className="flex flex-col">
          <span>
            Billing Address
            <input className="border-b-2 border-black" />
            Phone #<input className="border-b-2 border-black" />
          </span>
          <span>
            City, State, Zip
            <input className="border-b-2 border-black" />
            Email
            <input className="border-b-2 border-black" />
          </span>
        </span>

        <div className="mt-12">
          <h1 className="font-bold">Card Details</h1>
          <span className="flex">
            <input type="radio" />
            Visa
            <input type="radio" />
            MasterCard
            <input type="radio" />
            Discover
            <input type="radio" />
            American Express
          </span>
        </div>
        <div className="mt-12">
          <p>
            Cardholder Name
            <input className="border-b-2 border-black" />
          </p>
          <p>
            Account/CC Number
            <input className="border-b-2 border-black" />
          </p>
          <p>
            Expiration Date
            <input className="border-b-2 border-black w-12" />/
            <input className="border-b-2 border-black w-12" />
          </p>
          <p>
            CVV
            <input className="border-b-2 border-black" />
          </p>
          <p>
            Zip Code
            <input className="border-b-2 border-black" />
          </p>
        </div>
      </div>
      <div className="mt-12">
        <p>
          I authorize the above named business to charge the the credit card
          indicated in This authorization form according to the terms outlined
          above. This payment authorization is for the goods/services described
          above, for the amount indicated above only and is valid for one (1)
          time use only I certify that I am an authorized user of this cred card
          and that I will not dispute the payment with my credit fcar company;
          so long as the transation corresponds to the terms indicated in this
          form
        </p>
      </div>
      <div className="mt-12">
        <span>
          {' '}
          SIGNATURE
          <input className="border-b-2 border-black" />
        </span>
        <span>
          {' '}
          DATE
          <input className="border-b-2 border-black" />
        </span>
      </div>
    </div>
  );
};
export default Formcredit;
