import { FC, useState } from 'react';
import { Navbar } from 'components/navbar';
import data from 'data/db.json';
import styled from '../styles/index.module.css';

const Contact: FC = () => {
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

  const [contact] = useState(data.contact);

  return (
    <div>
      <Navbar />
      <div>
        {contact.map((c: any, index: number) => (
          <div style={{ fontFamily: c.ffamily }} key={`items_${index}`}>
            <span className={styled.banner}>
              <h1>{c.title}</h1>
            </span>

            <div className={styled.contacts}>
              <div
                style={{ backgroundColor: c.background }}
                className={styled.post}
              >
                <span className={styled.resources}>
                  <h1>{c.subtitle}</h1>
                  <p>{c.description}</p>
                  <span className={styled.resourcebutton}>
                    <button style={{ backgroundColor: 'green' }}>
                      <p>Office number 954-530-0166</p>
                      <p>Business cell 954-290-7235</p>
                    </button>
                    <button
                      style={{
                        color: 'black',
                        position: 'relative',
                        left: '0px',
                      }}
                    >
                      {c.button2}
                    </button>
                  </span>
                </span>
                <span className={styled.download}>
                  <h1>{c.subtitle1}</h1>
                  <p>{c.description1}</p>
                </span>
              </div>
            </div>
          </div>
        ))}
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
        <span className="h-24 bg-blue" />
      </div>
    </div>
  );
};
export default Contact;
