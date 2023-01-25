import woman from "../public/woman.png";
import Image from "next/image";
import styled from '../styles/index.module.css'
import Navbar from "../components/navbar";
import Togglebutton from "../components/togglebutton";
import { useState,useEffect } from "react";
import data from '../data/db.json'

const Bailresources = () => {
  // const [bail, setBail]=useState([
  //   {title:"Bail Resources", 
  //   description:" Bail Bond Resources We know that getting arrested, or having a loved one get arrested, can be a daunting and scary experience. Our bail bond resource section will help guide you through the difficult experience a bit easier. Whether you need a Dade, Broward or Palm Beach bail bond, we’re here for you… we even have bail agents available nationwide! As always, you can call us or email us anytime.", 
  //   descriptioncolor:"", button1:"Send us A text", button2:"Give us a call", button3:"Send us a Email",ffmaily:""}
  // ])
  const [bail, setBail]=useState(data.bail)
  

  // const [links, setLinks]=useState([
  //   {title:"Quick Bail Links", link1:"Bail Bonds: (954)-463-6363", link2:"  Bail Bond Resources Post", link3:"Bail Online Watch Live Court Hearings", 
  //   link4:"Contact Page Pretrial Release", link5:"Inmate Arrest Search", link6:"Public Court Case Search", img:""}
  // ])
  const [links, setLinks]=useState(data.links)
  
  

  
  // const [cases, setCases]=useState([
  //   {title:"Case, Arrest, Search Warrent", name:"Browdard", jail:"Jail: Click here", search:"Case Search: Clickhere",
  //   name1:"Date", jail1:"Jail: Click here", search1:"Case Search: Clickhere", name2:"Browdard", jail2:"Jail: Click here", search2:"Case Search: Clickhere",
  // img:"", button1:"Bail Bonds: 000-000-0000", button2:"Email us: email@email.com", button3:""}
  // ])
  const [cases, setCases]=useState(data.cases)
  // let API_URL = 'http://localhost:8000/bail'
  // useEffect(()=>{
  //   const fetchdata=async()=>{
  //     try{
  //       let res = await fetch(API_URL)
  //       let data = await res.json()
  //       setBail(data)
  //     }catch(err){
  //       console.log(err)
  //     }
  //   }
  //   (async()=>fetchdata())()
  // },[])

  // let API_URL1 = 'http://localhost:8000/links'
  // useEffect(()=>{
  //   const fetchdata=async()=>{
  //     try{
  //       let res = await fetch(API_URL1)
  //       let data = await res.json()
  //       setLinks(data)
  //     }catch(err){
  //       console.log(err)
  //     }
  //   }
  //   (async()=>fetchdata())()
  // },[])
  // let API_URL2 = 'http://localhost:8000/cases'
  // useEffect(()=>{
  //   const fetchdata=async()=>{
  //     try{
  //       let res = await fetch(API_URL2)
  //       let data = await res.json()
  //       setCases(data)
  //     }catch(err){
  //       console.log(err)
  //     }
  //   }
  //   (async()=>fetchdata())()
  // },[])
  return (
    <div>
                  <Togglebutton/>

      <Navbar/>
      <span className={styled.banner}>
        <h1>Bail Resources</h1>
      </span>
      <div className={styled.post}>
        <span className={styled.resources}>
          {bail.map((b,index)=>(
            <>
            <h1>{b.title}</h1>
          <p style={{color:b.descriptioncolor, fontFamily:b.ffmaily}}>
           {b.description}
          </p>
          <button className="w-3/4">{b.button1}</button>
          
          <button className="w-3/4">{b.button2}</button>
            </>
          ))}
          {/* <span>
            <span>
              <h1>
                Broward  county clerk of courts
              </h1>
              <p>
              201 SE 6th Street
Fort Lauderdale
Florida, US 33301
              </p>
              <p>
              Phone: (954) 831-6565
              </p>

            </span>
            <span>
              <h1>
                Broward  county clerk of courts
              </h1>
              <p>
              201 SE 6th Street
Fort Lauderdale
Florida, US 33301
              </p>
              <p>
              Phone: (954) 831-6565
              </p>

            </span>            
          </span> */}
          {/* <h1>Bail Resources</h1>
          <p>
            Bail Bond Resources We know that getting arrested, or having a loved
            one get arrested, can be a daunting and scary experience. Our bail
            bond resource section will help guide you through the difficult
            experience a bit easier. Whether you need a Dade, Broward or Palm
            Beach bail bond, we’re here for you… we even have bail agents
            available nationwide! As always, you can call us or email us
            anytime.
          </p>
          <button>Send us a Text</button>
          <button>Give us a Call</button>
          <button>Send us on Email</button>*/}
        </span> 
        {links.map((l, index)=>(
          <>
          <span className={styled.download}>
          
          {/* <h1>{l.title}</h1>
          <a href="">{l.link1}</a>
          <a href="">{l.link2}</a>
          <a href="">{l.link3}</a>
          <a href="">{l.link4}</a>
          <a href="">{l.link5}</a>
          <a href="">{l.link6}</a> */}
          <span>
            <Image width={350} height={350}  src={woman} alt="logo"/>
          </span>
        </span>
          </>
        ))}
        {/* <span className={styled.download}>
          
          <h1>Quick Bail Links</h1>
          <a href="">Bail Bonds: (954)-463-6363</a>
          <a href="">Bail Bond Resources Post</a>
          <a href="">Bail Online Watch Live Court Hearings</a>
          <a href="">Contact Page Pretrial Release</a>
          <a href="">Inmate Arrest Search</a>
          <a href="">Public Court Case Search</a>
          <span>
            <Image width={200} height={200}  src={woman} alt="logo"/>
          </span>
        </span> */}
      </div>
      {/* {cases.map((i,index)=>(
        <>
              <div className={styled.case}>
        <span  className={styled.case} style={{flexDirection:"column"}}>
          <h1>{i.title}</h1>
          <h2>{i.name}</h2>
          <p>{i.jail}</p>
          <p>{i.search}</p>
          <h2>{i.name1}</h2>
          <p>{i.jail1}</p>
          <p>{i.search1}</p>
          <h2>{i.name2}</h2>
          <p>{i.jail2}</p>
          <p>{i.search2}</p>
          <span className={styled.resourcebutton}>
            <button className={styled.greenbutton}
              
            >
              {i.button1}
            </button>
            <button className= {styled.blackbutton}
              
            >
             {i.button2}
            </button>
          </span>
        </span>

        <span>
          <img />
        </span>
      </div>
        
        </>
      ))} */}
      <div className={styled.case}>
       
        <span  className={styled.case} style={{flexDirection:"column"}}>
          <h1>Case, Arrest and Search warrenr</h1>
          <h2>Browdard</h2>
          <p>Jail: Click here</p>
          <p>Case Search: Click Here</p>
          <h2>Date</h2>
          <p>Jail: Click here</p>
          <p>Case Search: Click Here</p>
          <h2>Palm Beach</h2>
          <p>Jail: Click here</p>
          <p>Case Search: Click Here</p>
          <span className={styled.resourcebutton}>
            <button className={styled.greenbutton}
              
            >
              Bail Bonds: 954-290-7235
            </button>
            <button className= {styled.blackbutton}
              
            >
              Email us: info@i-gotchabailbonds.com
            </button>
          </span>
        </span>

        <span>
          <img className="w-80"/>
        </span>
      </div>
      <div className={styled.bailfooter}>
        <span>
          <span>
          <h1>Jail</h1>
          <p>
            Main
            <br />
            555 SE 1st Ave, Fort Lauderdate, FL 33301
          </p>
          </span>
          <span>
          <p>
          Broward  county clerk of courts 
            <br />
            201 SE 6th Street
            Fort Lauderdale
            Florida, US 33301
          </p>
          </span>
          <span>
          <p>
          Palm Beach The Main Detention Center 
            <br />
            228 Gun Club Road
            West Palm Beach, FL 33406-3001 
          </p>
          <p>
          Phone (561) 688-4401
          </p>
          </span>
          <span>
          <p>Miami dade jail Turner Guilford Knight Correctional Center
          
            <br />
            TGK, 7000 NW 41st St, Miami, FL 33166          
            </p>
            <p>
            phone: (786) 263-5600
            </p>


          </span>
        </span>
        <span>
        <span className="mb-2">
          <h1>Court House</h1>
          <p>
          Palm Beach County Clerk of the Circuit Court 
            <br />
            05 N Dixie Hwy, West Palm Beach, FL 33401
          </p>
          <p>
          Hours: 8am to 4pm
          </p>
          <p>
          phone (561) 355-2996
          </p>
          </span>
          <span>
          <p>
          Miami Dade County clerk of courts
            <br />
            73 W. Flagler Street
            Miami, Florida 33130
          </p>
          <p>
          Phone: 305-275-1155
          </p>
          </span>
          <span>
          <p>
          Miami Dade Criminal Court Office
            <br />
            1351 NW 12th Street, 9th Floor
            Miami, Florida 33125
          </p>
          <p>
          Phone: 305-275-1155
          </p>
          </span>
        </span>
      </div>
    </div>
    
  );
};

export default Bailresources;
