import Navbar from '../components/navbar';
import styled from '../styles/index.module.css'
import Togglebutton from '../components/togglebutton';
import { useState,useEffect } from 'react';
import Banner from '../components/banner';

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

    const [firstname, setFirstname]=useState('')
    const [lastname, setLastname]=useState('')
    const [email, setEmail]=useState('')
    const [phonenumber, setPhonenumber]=useState('')
    const [streetaddress, setStreetaddress]=useState('')
    const [city, setCity]=useState('')
    const [state, setState]=useState('')
    const [zip, setZip]=useState('')
    const [credit, setCredit]=useState('')
    const [exdate, setExdate]=useState('')
    const [isPending, setIspending]=useState(false)

    const handleSubmit = (e:any)=>{
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
  }


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
          <h1>Post Bail Online


          </h1>
        </span>
        <Banner/>
        <div className={styled.post}>
          <span className=""style={{  padding: "20px" }}>
            <h1>Post Nationwide Bail Bonds Online</h1>
            <h1 style={{fontSize:"12px", padding:"0px"}} >Lexington National Insurance Corporation is licensed in all 50-states and the District of Columbia</h1>

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
              Indemitor Information
              Form
            </a>
            <a href="">Promissory Note</a>
            <a href="">Mortgage Agreement</a>
            <a href="">Authorization Form by Phone/Fax/Email</a>
            <p>Phone: (954)-530-0166</p>
            <p>Email: bondmeout@aol.com</p>
          </span>
        </div>

        <div className={styled.bail}>
          <span className='w-1/2'>
            <form onSubmit={handleSubmit}>

              <label>Defendant First Name</label>
              <input 
              onChange={(e)=>setFirstname(e.target.value)}
              type="text" placeholder="First Name" />
               <label>Defendant First Name</label>

              <input 
                onChange={(e)=>setLastname(e.target.value)}
              type="text" placeholder="Last Name" />
              <label>Email</label>
              <input 
              onChange={(e)=>setEmail(e.target.value)}

              type="text" placeholder="E-mail" />
              <label>Defendant Date of Birth</label>
              <input 
              onChange={(e)=>setEmail(e.target.value)}

              type="text" placeholder="E-mail" />
              
              <label>Phone number</label>
              <input 
              onChange={(e)=>setFirstname(e.target.value)}
              type="text" placeholder="Phone Number" />
              <label>Address</label>
              <input 
              onChange={(e)=>setStreetaddress(e.target.value)}
              type="text" placeholder="Street Address" />
              {/* <span style={{ display: "block" }}> */}
                <input 
                onChange={(e)=>setCity(e.target.value)}
                type="text" placeholder="City" />
                <input 
               onChange={(e)=>setState(e.target.value)}
               
                type="text" placeholder="State/Region" />
                <input 
                onChange={(e)=>setZip(e.target.value)}
                type="text" placeholder="Postal" />
              {/* </span> */}
              <label>Credit card number</label>
              <input 
              onChange={(e)=>setCredit(e.target.value)}

              type="text" placeholder="Credit Card Number" />
              <label>Exp. Date</label>
              <input
              onChange={(e)=>setExdate(e.target.value)}

               type="text" placeholder="Expiration Date"></input>

             {!isPending && <button  className='' >Submit</button>} 
             {isPending && <button  className='' >loading</button>}

            </form >
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
      </div>
    );
}

export default Postbail