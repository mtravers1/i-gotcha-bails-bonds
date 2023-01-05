import woman from '../public/woman.png'
import Image from 'next/image'
import g1 from '../public/1.png'
import g2 from '../public/2.png'
import g3 from '../public/3.png'
import bar from '../public/bar.png'
import styled from '../styles/index.module.css'
import Togglebutton from '../components/togglebutton'
import Navbar from '../components/navbar'


const Home = ()=>{
    return(
        <div className={styled.home}>
          <Navbar/>
          <Togglebutton/>
            <div className={styled.mainpic}>
                
                <div style={{width:"100%", textAlign:"center"}}>
                <span>
                <Image width={200} height={200} className={styled.logo} src={woman} alt="logo" />
                </span>
                <span className={styled.maintext} >
                    <p >The Go to Bail Bonds Agency <br/> 
                    <span className={styled.pink}> Broward</span>, <span className={styled.pink}>Palm Beach</span> and <span className={styled.pink}>Miami</span></p>
                </span>
                <span className={styled.secondarytext}>
                    <p>The Best choice bail bonds agency in Flordia!<br/>
                       Our areas of focus include; Reliability, Peofessionalism and Quality care</p>
                </span>
                <span style={{height:"30px", display:"flex", justifyContent:"center", marginBottom:"50px"}} >
                    <span className={styled.call}> Call us 800 444-4444</span>

                </span>
                </div>
            </div>

            <div className={styled.info}>
                <span>
                    <Image alt="g1"height={200} width={200} src={g1}/>
                    
                    <p>Live feed from <br/>
                    Broward County Court:<br/>
                    Mon-Thurs:8:30AM and 10PM<br/>
                    Sat and Sun: 8:30AM</p>
                    <div>
                    <button>WATCH LIVE HEARINGS</button>
                    </div>
                    <div>

                    <button>ZOOM LINK FOR HEARINGS</button>
                    </div>
                    
                    
                    
                </span>
                <span>
                <Image alt="g1"height={200} width={200} src={g2}/>
                    <p>View the arrest information <br/>
                    and phtot of a curren incarcerated<br/>
                    inmate in Broward County<br/>
                    </p>
                    <div>
                    <button>BROWARD COUNTY INFOR</button>
                    </div>
                    <div>

                    <button>PALM BEACH COUNTY INFO</button>
                    </div>
                    <div>

                    <button>MIAMI-DADE COUNTY INFO</button>
                    </div>
                </span>
                <span>
                <Image alt="g1"height={200} width={200} src={g3}/>
                    <p>View the arrest information <br/>
                    and phtot of a curren incarcerated<br/>
                    inmate in Broward County<br/>
                    </p>
                    <div>
                    <button>BROWARD COUNTY</button>
                    </div>
                    <div>

                    <button>PALM BEACH COUNTY</button>
                    </div>
                    <div>

                    <button>MIAMI-DADE COUNTY</button>
                    </div>
                </span>
                
            </div>
            <img className={styled.bottomimage}/>

            <div className={styled.bottom}>
                <p>Necesita una finza? Se Habla Espanol<br/><span>Haga clik en este enlace para visrae nuestro sitio web enespanol</span></p>
                <button className={styled.button}>Espanol</button>
                </div>

        </div>
    )


}

export default Home