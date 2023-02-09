import { FC, useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import Image from 'next/image';
import Link from 'next/link';
import bottomImg from 'assets/bar.png';
import { BannerSection } from 'components/bannerSection/postBail';
import { Navbar } from 'components/navbar';
import { TopNav } from 'components/navbar/topNav';
import { PageSection } from 'components/pageSection';
import { PageTitleCard } from 'components/pageTitleCard';
import data from 'data/bailresources.json';
import { PageLayout } from 'layouts/pageLayout';
import styled from '../styles/index.module.css';

const Postbail = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [streetaddress, setStreetaddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [credit, setCredit] = useState('');
  const [exdate, setExdate] = useState('');
  const [isPending, setIspending] = useState(false);

  const handleSubmit = (e: any) => {
    // e.preventDefault()
    // const data={firstname, lastname, email, phonenumber, streetaddress, city, state, zip, credit, exdate}
    // setIspending(true)
    // fetch('http://localhost:8000/form', {
    //     method:'POST',
    //     headers:{'Content-Type': 'application/json'},
    //     body: JSON.stringify(data)
    // }).then(()=>{
    //     console.log('success')
    //     setIspending(false)
    // })
  };

  // const handleDelete= (e:any)=>{
  //   // method:"DELETE"
  //   // url:"http//:localhost:"
  //   setIspending(true)
  //   fetch('http://localhost:8000/form/2',{
  //     method:"DELETE",

  //   }).then(()=>{
  //     console.log('deleted')
  //     setIspending(false)
  //   })
  // }

  return (
    <PageLayout pageTitle="post-bail.title">
      <BannerSection />
      <div className={styled.post}>
        <span className="" style={{ padding: '20px' }}>
          <h1>Post Nationwide Bail Bonds Online</h1>
          <h1 style={{ fontSize: '12px', padding: '0px' }}>
            Lexington National Insurance Corporation is licensed in all
            50-states and the District of Columbia
          </h1>

          <p>
            Post Nationwide Bail Bonds Online PRIOR TO COMPLETING THIS FORM
            PLEASE CONTACT OUR OFFICE TO MAKE SURE THAT WE HAVE COVERAGE IN THE
            AREA THAT YOU WOULD LIKE TO POST BOND.
          </p>
          <p>
            WHEN REQUESTING A TRANSFER BOND, EITHER THE DEFENDANT OR THE PERSON
            WISHING TO POST BAIL IS IDEALLY NEAR MY LOCATION IN FLORIDA.
          </p>
          <p>
            This service is NOT AVAILABLE in the following states Arkansas,
            Colorado, Illinois, Kentucky, Maine, Massachusetts, Nebraska,
            Oregon, or Wisconsin.
          </p>
          <p>
            Fill out the form below to start your local or nationwide bail bonds
            process. Once you have submitted the form, call us at 954 463-6363
            to complete the process. Entering credit card information is
            optional and can be given over the phone
          </p>
        </span>
        <span className={styled.download}>
          <h1>Downloadable Forms</h1>

          <a href="">Indemitor Information Form</a>
          <a href="">Promissory Note</a>
          <a href="">Mortgage Agreement</a>
          <a href="">Authorization Form by Phone/Fax/Email</a>
          <p>Phone: (954)-530-0166</p>
          <p>Email: bondmeout@aol.com</p>
        </span>
      </div>

      <div className={styled.bail}>
        <span className="w-1/2">
          <form onSubmit={handleSubmit}>
            <label>Defendant First Name</label>
            <input
              onChange={(e) => setFirstname(e.target.value)}
              type="text"
              placeholder="First Name"
            />
            <label>Defendant First Name</label>

            <input
              onChange={(e) => setLastname(e.target.value)}
              type="text"
              placeholder="Last Name"
            />
            <label>Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="E-mail"
            />
            <label>Defendant Date of Birth</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="E-mail"
            />

            <label>Phone number</label>
            <input
              onChange={(e) => setFirstname(e.target.value)}
              type="text"
              placeholder="Phone Number"
            />
            <label>Address</label>
            <input
              onChange={(e) => setStreetaddress(e.target.value)}
              type="text"
              placeholder="Street Address"
            />
            {/* <span style={{ display: "block" }}> */}
            <input
              onChange={(e) => setCity(e.target.value)}
              type="text"
              placeholder="City"
            />
            <input
              onChange={(e) => setState(e.target.value)}
              type="text"
              placeholder="State/Region"
            />
            <input
              onChange={(e) => setZip(e.target.value)}
              type="text"
              placeholder="Postal"
            />
            {/* </span> */}
            <label>Credit card number</label>
            <input
              onChange={(e) => setCredit(e.target.value)}
              type="text"
              placeholder="Credit Card Number"
            />
            <label>Exp. Date</label>
            <input
              onChange={(e) => setExdate(e.target.value)}
              type="text"
              placeholder="Expiration Date"
            ></input>

            {!isPending && <button className="">Submit</button>}
            {isPending && <button className="">loading</button>}
          </form>
          {/* {!isPending && <button onClick={handleDelete}>Delete</button>}
            {isPending && <button onClick={handleDelete}>Deleteing...</button>} */}
        </span>

        {/* <span className={styled.links}>
            <h1>Quick Bail Links</h1>
            
            <a href="">Resources Post Bail Online </a>
            <a href="">Watch Live Court Hearings Contact Page</a>
            <a href="">Pretrial Release </a>
            <a href="">Inmate Arrest Search </a>
            <a href="">Public Court Case Search</a>
          </span> */}
      </div>
    </PageLayout>
  );
};

export default Postbail;
