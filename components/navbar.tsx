import { FaBars, FaTimes } from 'react-icons/fa'
import { useEffect, useState } from 'react';
import React from 'react';
import Link from 'next/link';
import styled from '../styles/index.module.css'
import data from '../data/db.json'
// import {
//   BrowserRouter as Switch,
//   Link,
//   Router,
//   Route,
//   Routes,
// } from "react-router-dom";
    

interface nav{
  
    fsize: string;
    nav: string;
    nav1: string;
    nav2: string;
    nav3: string;
    nav4: string;
    nav5: string;
    nav6: string;
    color:string
  
}[]

type data=Array<nav>

const Navbar = () =>{
    
    const [nav, setNav]=useState(data.nav)
   
    //   {nav:"Home", nav1:"Bail Resources", nav2:"Post Bail Option", nav3:"About", nav4:"Contact", nav5:"Reviews", nav6:"Log in", color:"", fsize:""}
    
    // const API_URL='http://localhost:8000/nav'
    // useEffect(()=>{
    //  const fetchdata=async()=>{
    //     try{
    //       let res=await fetch(API_URL)   
    //       let data = await res.json()  
    //       setNav(data)
    //     }catch(err){
    //       console.log(err)
    //     }
    //   }
    //   (async()=>fetchdata())()
    // },[])
 console.log(data.nav)
let map:Array<nav>
let color:Array<nav>;
let n:Array<nav>;
    return (
      <div className={styled.navbar}>
        <ul>
          {nav.map((n,index)=>(
            <>
            
             <span  key={index} className={styled.title}>
            <span className={styled.pink}> I Gotcha'</span>
            <br /> Bail Bond
          </span>

          <span className={styled.navlist}>
            <li>
            
              <Link style={{color:n.color, fontSize:n.fsize}} href="./">{n.nav0}</Link>
            </li>
            <li >
              <Link style={{color:n.color,fontSize:n.fsize}} href="./bailresources">{n.nav1}</Link>
            </li>
            <li>
              <Link style={{color:n.color,fontSize:n.fsize}} href="./postbail">{n.nav2}</Link>
             
            </li>
            <li>
              <Link style={{color:n.color,fontSize:n.fsize}}  href={'./'}>{n.nav3}</Link>
            </li>
            <li>
              <Link style={{color:n.color, fontSize:n.fsize}}  href='./contactus'>{n.nav4}</Link>
            </li>
            <li>
              <Link style={{color:n.color, fontSize:n.fsize}} href={'./'}>{n.nav5}</Link>
            </li>
         
          </span>
          <Link href="https://admin.i-gotchabailbonds.com/">{n.nav6}</Link>
            
            </>
          ))}
          {/* <span className={styled.title}>
            <span className={styled.pink}> I Gotcha'</span>
            <br /> Bail Bond
          </span>

          <span className={styled.navlist}>
            <li>
              <Link href="./">Home</Link>
            </li>
            <li>
              <Link href="./bailresources">Bail Resources</Link>
            </li>
            <li>
              <Link href="./postbail">Post Bail Option</Link>
             
            </li>
            <li>
              <Link href={'./'}>About</Link>
            </li>
            <li>
              <Link href='./contactus'>Contact</Link>
            </li>
            <li>
              <Link href={'./'}>Reviews</Link>
            </li>
            
          </span>
          <Link href="https://admin.i-gotchabailbonds.com/">login</Link> */}
        </ul>
      </div>
    );
}

export default Navbar