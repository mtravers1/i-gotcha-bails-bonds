import Navbar from "../components/navbar";
import styled from "../styles/index.module.css"
import Togglebutton from "../components/togglebutton";

const Contact = ()=>{
    return (
      <div>
                    <Togglebutton/>

        <Navbar/>
        <span className={styled.banner}>
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
          </span>
        </div>
      </div>
    );
}
export default Contact