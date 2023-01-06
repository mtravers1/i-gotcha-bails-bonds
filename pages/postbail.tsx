import Navbar from '../components/navbar';
import styled from '../styles/index.module.css'
import Togglebutton from '../components/togglebutton';
import { useState,useEffect } from 'react';

const Postbail = ()=>{
  //   const [postbail, setPostbail]=useState([
  //     {
  //       ffamily:"",
  //       title:"Post Bail Online", tb:"", subtitle:"Post Nationwid Bail Bonds Online", subdescription:"Post Nationwide Bail Bonds Online PRIOR TO COMPLETING THIS FORM PLEASE CONTACT OUR OFFICE TO MAKE SURE THAT WE HAVE COVERAGE IN THE AREA THAT YOU WOULD LIKE TO POST BOND. WHEN REQUESTING A TRANSFER BOND, EITHER THE DEFENDANT OR THE PERSON WISHING TO POST BAIL IS IDEALLY NEAR MY LOCATION IN FLORIDA. This service is NOT AVAILABLE in the following states Arkansas, Colorado, Illinois, Kentucky, Maine, Massachusetts, Nebraska, Oregon, or Wisconsin. Fill out the form below to start your local or nationwide bail bonds process. Once you have submitted the form, call us at 954 463-6363 to complete the process. Entering credit card information is optional and can be given over the phone",
  //   subtitle1:"Download Forms", item1:"Downloadable Forms Application Appearance Bond Form (PDF)",
  //   item2:"Application Appearance Bond Form (Print) Indemitor Information Form", item3:"Promissory Note", item4:"Mortgage Agreement", 
  //   item5:"A Aabbott and Cathy Bail Bonds Credit Card", item6:"Authorization Form by Phone/Fax/Email"
  // , phone:"Phone: (954)463-6363", email:"Email: bondmeout@aol.com"}
  //   ])



  //   const [quikbaillinks, setquikbaillinks]=useState([
  //     { 

  //       title:"Quick Bail Links",
  //       itemcolor:"",
  //       item1:"Quick Bail Links Nationwide Bail Bonds: 954-463-6363 Bail Bond",
  //       item2:"Resources Post Bail Online",
  //       item3:"Watch Live Court Hearings Contact Page",
  //       item4:"Pretrial Release",
  //       item5:"Inmate Arrest Search",
  //       item6:"Public Court Case Search"
  //     }

  //   ])

    // let API_URL = 'http://localhost:8000/postbail'
    // useEffect(()=>{
    //   const fetchdata=async()=>{
    //     try{
    //       let res= await fetch(API_URL)
    //       let data= await res.json()
    //       setPostbail(data)
    //     }catch(err){
    //       console.log(err)
    //     }
    //   }
    //   (async()=>fetchdata())()
    // })

    // let API_URL1 = 'http://localhost:8000/quikbaillinks'
    // useEffect(()=>{
    //   const fetchdata=async()=>{
    //     try{
    //       let res= await fetch(API_URL1)
    //       let data= await res.json()
    //       setPostbail(data)
    //     }catch(err){
    //       console.log(err)
    //     }
    //   }
    //   (async()=>fetchdata())()
    // })
    return (
      <div>
                    <Togglebutton/>

        <Navbar/>
        {/* {postbail.map((p, index)=>(
          <>
          <span style={{fontFamily:p.ffamily}} className={styled.banner}>
          <h1>{p.title}</h1>
        </span>
        <div className={styled.post}>
          <span style={{ width: "50%", padding: "50px" }}>
            <h1>{p.subtitle}</h1>
            <p>
             {p.subdescription}
            </p>
          </span>
          <span className={styled.download}>
            <h1>{p.subtitle1}</h1>
            <a href="">
              {p.item1}
            </a>
            <a href="">
              {p.item2}
            </a>
            <a href="">{p.item3}</a>
            <a href="">{p.item4}</a>
            <a href="">{p.item5}</a>
            <a href="">{p.item6}</a>
            <p>{p.phone}</p>
            <p>{p.email}</p>
          </span>
        </div>
          </>
        ))} */}
        <span className={styled.banner}>
          <h1>Post Bail Online</h1>
        </span>
        <div className={styled.post}>
          <span style={{ width: "50%", padding: "50px" }}>
            <h1>Post Nationwide Bail Bonds Online</h1>
            <p>
              Post Nationwide Bail Bonds Online PRIOR TO COMPLETING THIS FORM
              PLEASE CONTACT OUR OFFICE TO MAKE SURE THAT WE HAVE COVERAGE IN
              THE AREA THAT YOU WOULD LIKE TO POST BOND.
            </p>
            <p>
              WHEN REQUESTING A TRANSFER BOND, EITHER THE DEFENDANT OR THE
              PERSON WISHING TO POST BAIL IS IDEALLY NEAR MY LOCATION IN
              FLORIDA.
            </p>
            <p>
              This service is NOT AVAILABLE in the following states Arkansas,
              Colorado, Illinois, Kentucky, Maine, Massachusetts, Nebraska,
              Oregon, or Wisconsin.
            </p>
            <p>
              Fill out the form below to start your local or nationwide bail
              bonds process. Once you have submitted the form, call us at 954
              463-6363 to complete the process. Entering credit card information
              is optional and can be given over the phone
            </p>
          </span>
          <span className={styled.download}>
            <h1>Downloadable Forms</h1>
            <a href="">
              Downloadable Forms Application Appearance Bond Form (PDF)
            </a>
            <a href="">
              Application Appearance Bond Form (Print) Indemitor Information
              Form
            </a>
            <a href="">Promissory Note</a>
            <a href="">Mortgage Agreement</a>
            <a href="">A Aabbott and Cathy Bail Bonds Credit Card</a>
            <a href="">Authorization Form by Phone/Fax/Email</a>
            <p>Phone: (954)463-6363</p>
            <p>Email: bondmeout@aol.com</p>
          </span>
        </div>

        <div className={styled.bail}>
          <span>
            <form>
              <label>Your Name</label>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <label>Email</label>
              <input type="text" placeholder="E-mail" />
              <label>Phone number</label>
              <input type="text" placeholder="Phone Number" />
              <label>Address</label>
              <input type="text" placeholder="Street Address" />
              <span style={{ display: "block" }}>
                <input type="text" placeholder="City" />
                <input type="text" placeholder="State/Region" />
                <input type="text" placeholder="Postal" />
              </span>
              <label>Credit card number</label>
              <input type="text" placeholder="Credit Card Number" />
              <label>Exp. Date</label>
              <input type="text" placeholder="Expiration Date"></input>

              <button >Submit</button>
            </form>
          </span>

          <span className={styled.links}>
            <h1>Quick Bail Links</h1>
            <a href="">
              Quick Bail Links Nationwide Bail Bonds: 954-463-6363 Bail Bond
            </a>
            <a href="">Resources Post Bail Online </a>
            <a href="">Watch Live Court Hearings Contact Page</a>
            <a href="">Pretrial Release </a>
            <a href="">Inmate Arrest Search </a>
            <a href="">Public Court Case Search</a>
          </span>
        </div>
      </div>
    );
}

export default Postbail