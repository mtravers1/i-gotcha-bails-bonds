import Navbar from '../components/navbar';
import styled from '../styles/index.module.css'
import Togglebutton from '../components/togglebutton';
const Postbail = ()=>{
    return (
      <div>
                    <Togglebutton/>

        <Navbar/>
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