import woman from "../public/woman.png";
import Image from "next/image";
import styled from '../styles/index.module.css'
import Navbar from "../components/navbar";
const Bailresources = () => {
  return (
    <div>
      <Navbar/>
      <span className={styled.banner}>
        <h1>Bail Resources</h1>
      </span>
      <div className={styled.post}>
        <span className={styled.resources}>
          <h1>Bail Resources</h1>
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
          <button>Send us on Email</button>
        </span>
        <span className={styled.download}>
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
        </span>
      </div>
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
              Bail Bonds: 000-000-0000
            </button>
            <button className= {styled.blackbutton}
              
            >
              Email us: email@email.com
            </button>
          </span>
        </span>

        <span>
          <img />
        </span>
      </div>
      <div className={styled.bailfooter}>
        <span>
          <h1>Jail</h1>
          <p>
            Main
            <br />
            555 SE 1st Ave, Fort Lauderdate, FL 33301
          </p>

          <p>
            Main
            <br />
            555 SE 1st Ave, Fort Lauderdate, FL 33301
          </p>

          <p>
            Main
            <br />
            555 SE 1st Ave, Fort Lauderdate, FL 33301
          </p>
        </span>
        <span>
          <h1>Court House</h1>
          <p>
            Main
            <br />
            555 SE 1st Ave, Fort Lauderdate, FL 33301
          </p>

          <p>
            Main
            <br />
            555 SE 1st Ave, Fort Lauderdate, FL 33301
          </p>

          <p>
            Main
            <br />
            555 SE 1st Ave, Fort Lauderdate, FL 33301
          </p>
        </span>
      </div>
    </div>
  );
};

export default Bailresources;
