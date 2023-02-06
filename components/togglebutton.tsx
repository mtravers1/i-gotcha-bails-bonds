import { FaBars, FaTimes } from "react-icons/fa";
import styled from '../styles/index.module.css'
import { useState } from "react";
// import{  BrowserRouter as Switch,
//   Link,
//   Router,
//   Route,
//   Routes,
// } from "react-router-dom";
import React from "react";
import Link from "next/link";

const Togglebutton = () => {
  const [togglenav, setTogglenav] = useState(false);

  const toggle = () => {
    setTogglenav(!togglenav);
  };

  return (
    <div className={styled.tnavbar}>
      <span className={styled.ttitle}>
        <span className={styled.pink}> </span>
        Bail Bond
      </span>
      <button onClick={toggle} className={styled.togglebutton}>
        <FaBars />
      </button>
      <ul>
        <div id="tog">
          {togglenav && (
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
              <Link href='./'>About</Link>
            </li>
            <li>
              <Link href='./contactus'>Contact</Link>
            </li>
            <li>
              <Link href='./'>Reviews</Link>
            </li>
            <li>
              <Link href="https://www.admin.i-gotchabailbonds.com/">Login</Link>
            </li>

              {/* <button>
                    <FaTimes/>
                </button> */}
            </span>
          )}
        </div>
      </ul>
    </div>
  );
};

export default Togglebutton;
