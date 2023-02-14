import React, { FC } from 'react';
import styles from '../styles/forms.module.css';

const Sab: FC = () => {
  return (
    <div className={styles.reciept}>
      <span className="text-center ">
        <h1 className="text-4xl">LEXINGTON NATIONAL INSURANCE CORPORATION</h1>
        <h1 className="text-xl">
          Po Box 6098 - Luther, Maryland 21094 - (410) 625-0800
        </h1>
        <h1 className="text-xl">GENERAL SURETY APPEARANCE BOND</h1>
      </span>
      <div className="flex justify-center mb-12 mt-24 ">
        <span className="w-1/3">
          <span className="flex">
            <p>Power No.</p>
            <input className="border-b-2 border-black w-2/3" />
            <br />
          </span>
          <span className="flex">
            <p>ARREST/CASE NO.</p>
            <input className="border-b-2 border-black w-2/3" />
          </span>
          <span className="text-center">
            <p>STATE OF FLORDIA</p>
            <br />
            <p>VS</p>
          </span>
          <input className="border-b-2 border-black w-5/6" />
        </span>
        <span className="w-1/3">
          <h1 className="text-center"></h1>
          <span className="border-2 border-black flex flex-col">
            <span className="p-12" />
            <hr />
            <h1 className="text-center">TRANSFER AGENT</h1>
            <p>Name</p>
            <input className="border-b-2 border-black " />
            <p>Street</p>
            <input className="border-b-2 border-black " />
            <p>City</p>
            <input className="border-b-2 border-black " />
          </span>
          <p className="text-center">In The</p>
          <span className="flex">
            <input className="border-b-2 border-black w-11/12 " />
            Court
          </span>
          <br />
          <span className="flex">
            <input className="border-b-2 border-black w-11/12" />
            Counrty
          </span>
        </span>
      </div>
      <div>
        <span>
          <p>
            KNOWN ALL MEN BY THESE PRESENTS: That we, the above captioned
            defendant as Principal, and Lexington National Insurance
            Corporation, a Flordia corporation, as Suerty, are held and firmly
            bond unto the state of Flordia, andits successors to the penal sun
            of $<input />
            <br />
            Dollars, for the payment whereof well and truly to be made we bind
            ouselves, our heirs, representatinve, succors, and sassigns, jointly
            and servally, firmly by these presents.
          </p>
          <p>
            The conition of this obligation is such that if the said principla
            shall appear on <input />, 20 <input /> async function <input /> at
            the next regular or special term of the above captioned court only
            and shall submit to the said court to answer a charge of <input />{' '}
            only and shall submit to orders and process of said court and not
            depart sam without leave, then this oblication to be void, else to
            remain in full force and virtue.
          </p>
        </span>
      </div>
      <span className="flex">
        <p>SIGNED AND SEALED this </p>
        <input className="border-b-2 border-black " /> daty of{' '}
        <input className="border-b-2 border-black " />, A.D., 20
        <input className="border-b-2 border-black " />
      </span>

      <div className="flex flex-row mt-12">
        <span className="w-1/3">
          <span>
            <span>
              <p>Taken befor me and approved by me:</p>
              <br />
              <input className="border-b-2 border-black w-3/4" />, Clerk/Sheriff
            </span>
            <span className=" flex mt-12">
              <p>By</p>
              <input className="border-b-2 border-black w-3/4" />
            </span>
          </span>
        </span>

        <span className="w-2/3 text-center mt-6">
          <input className="border-b-2 border-black w-1/2" />
          (L.S)
          <br />
          <p className="text-center">PRINCIPAL</p>
          <p className="text-center">
            LEXINGTON NATIONAL INSURANCE CORPORATION
          </p>
          <span className="flex mt-24 justify-center">
            <p className="">By</p>
            <input className="border-b-2 border-black w-1/2" />
          </span>
        </span>
      </div>
      <h1 className="text-center">STATEMENT OF THE BONDSMAN</h1>
      <div>
        <p>
          {' '}
          I, THE UNDERSIGNED, AM A DULY LICENSED BAIL BONDSMAN and have
          registered for the current year with the office Ckeark of Courts of
          the aforementioned county, and have filed a certified copy of my
          appointment by Power of Attorney for the Suerty with the office of the
          Cleark of Court of the aformentioned county.
        </p>

        <p>
          That the Principal named in the foregoring bond, of (Address)
          <input /> has (given or pormised to give) the sume of
          <input />
          ($
          <input />) Dollards as consideration for the forgoing bondk, filed
          with the Clerk of the above captioned Court, located in
          satisfiedCounty, together with the(primise or receipt) of securty
          belonging to:
          <input />
        </p>
        <input />
        <input />
        <p>
          as follows: (detail description and source of collateral security) (if
          none, so state)
          <input />
        </p>
        <input />
        <p>
          That a duty signed receipt has been given to the said principal for
          the consideration given and/or that the said indemitor has (also
          been), given a receipt for the security described above.
        </p>
      </div>
      <div className="flex flex-col mt-12 ">
        <span className="  flex justify-end">
          <p>Agent's Signature</p>
          <input />
        </span>
        <br />
        <span className="flex justify-end">
          <p>Agency</p>
          <input />
        </span>
      </div>
      <div className="flex justify-end mt-12">
        <p className="w-1/4">White-Court Copy</p>
        <p className="w-1/4">Yellow-Agents Copy</p>
        <p className="">Appearance</p>
      </div>
    </div>
  );
};

export default Sab;
