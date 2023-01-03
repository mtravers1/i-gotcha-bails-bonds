import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react';
import React from 'react';
import Link from 'next/link';
import styled from '../styles/index.module.css'
// import {
//   BrowserRouter as Switch,
//   Link,
//   Router,
//   Route,
//   Routes,
// } from "react-router-dom";
    


const Navbar = () =>{



    return (
      <div className={styled.navbar}>
        <ul>
          <span className={styled.title}>
            <span className={styled.pink}> I Gotcha</span>
            <br /> Bail Bond
          </span>

          <span className={styled.navlist}>
            <li>
              <Link href="./home">Home</Link>
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
            {/* <button>
                    <FaTimes/>
                </button> */}
          </span>
          <Link href="https://admin.i-gotchabailbonds.com/">login</Link>
        </ul>
      </div>
    );
}

export default Navbar