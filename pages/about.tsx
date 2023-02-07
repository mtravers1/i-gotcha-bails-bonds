import Navbar from "../components/navbar";
import styled from "../styles/index.module.css"
import Togglebutton from "../components/togglebutton";
import { useState, useEffect } from "react";
import data from "../data/db.json"
import about from "../public/about.png"
import Image from "next/image";
const About = ()=>{
  // const [contact, setContact]=useState([
  //   {ffamily:"", title:"Contact Us", tcolor:"blue", tb:"green", 
    
  //   subtitle:"Bail Bond Office Location", description:"  0000 Address Road, Florida County, Florida USA (000) 000-0000 Mail@mail.com",
  //   background:"", bcolor1:"", bcolor2:"",button1:"Bail Bonds: 000-000-0000", button2:"Email us: email@email.com",
  //   subtitle1:"We're available 24/7/365", description1:"If you need a bail bond, you can call us anytime. Night or Day, we’re here to help you through this difficult process." }
  // ])
  // let API_URL = 'http://localhost:8000/contact'
  // useEffect(()=>{
  //   const fetchdata=async()=>{
  //     try{
  //       let res = await fetch(API_URL)
  //       let data = await res.json()
  //     }catch(err){
  //       console.log(err)
  //     }
  //   }
  //   (async()=>fetchdata())()
  // })

  const [contact, setContact]=useState(data.contact)
  
    
    return (
      <div >
                    <Togglebutton/>

        <Navbar/>
        <div >
     
          <div >
          <span className={styled.banner}>
          <h1>About Us</h1>
        </span>
       
          <div className={styled.contacts}>
        <div style={{backgroundColor:"black", height:"600px"}}className={styled.post}>
          <span className="w-3/4 flex justify-center">
            {/* <h1>{c.subtitle}</h1> */}
            <div className="flex justify-between">
              
            
            <p className="w-3/5">
            Shantaneka Baynard is the owner of I Gotcha Bail Bonds  located here in Lauderhill, Florida just minutes away from the Swap Shop. Beyond securing your freedom we realize that being arrested and going thru the bail bond process can be an awful experience for everyone. When you come here to South Florida to vacation  but end up leaving on probation was not on your bucket list. Thats when you give I Gotcha Bail Bonds a call, All agents will be professional, knowledgeable and courteous. Our office is available to take your call and post bonds 24 hours a day, 7 days a week(including holidays).  We provide service Nationwide with sub-agents available for transfer bond if needed in most areas,  bond service  provided for Broward County, Miami-Dade County, and Palm Beach County.   We have a complete online bail bond system to easily and conveniently assist you with posting a bond for a friend or loved one, from anywhere and at any time using your smartphone or any computer device.
            </p>
            <Image height={300} width={300} alt='about' src={about} className="rounded-xl relative bottom-6"/>
            </div>
          </span>
          <span>
        
          </span>
          {/* <span className={styled.download}>
            <h1>{c.subtitle1}</h1>
            <p>
              {c.description1}
            </p>
          </span> */}
        </div>
        </div>
          </div>
  
        </div>
        {/* <span className={styled.banner}>
          <h1>Contact Us</h1>
        </span>
       

        <div className={styled.post}>
          <span className={styled.resources}>
            <h1>Bail Bond Office Location</h1>
            <p>
              0000 Address Road, Florida County, Florida USA (000) 000-0000
              Mail@mail.com
            </p>
            <span className={styled.resourcebutton}>
              <button style={{ backgroundColor: "green" }}>
                Bail Bonds: 000-000-0000
              </button>
              <button style={{ color: "black", position:"relative", left:"0px" }}>
                Email us: email@email.com
              </button>
            </span>
          </span>
          <span className={styled.download}>
            <h1>We're available 24/7/365</h1>
            <p>
              If you need a bail bond, you can call us anytime. Night or Day,
              we’re here to help you through this difficult process.
            </p>
          </span> */}
          <div className="h-52 bg-slate-200">
            <span className="h-24 bg-blue"/>
          </div>
        </div>
      
    );
}
export default About