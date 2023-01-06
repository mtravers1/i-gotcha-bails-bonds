import woman from '../public/woman.png'
import Image from 'next/image'
import g1 from '../public/1.png'
import g2 from '../public/2.png'
import g3 from '../public/3.png'
import bar from '../public/bar.png'
import styled from '../styles/index.module.css'
import Togglebutton from '../components/togglebutton'
import Navbar from '../components/navbar'
import { useState,useEffect } from 'react'
import data from '../data/db.json'
const Home = ()=>{
    // const [header, setHeader]=useState([
    //     {image:"", head:"The Go to Bail Bonds Agency Broward, Palm Beach and Miami", 
    //     subhead:"The Best choice bail bonds agency in Flordia! Our areas of focus include; Reliability, Peofessionalism and Quality car",
    //     call:" Call us 800 444-4444", fsize:"", color:"", callbackground:"white"}
    // ])
    const [header, setHeader]=useState(data.header)

    // const [left, setLeft]=useState([
    //     { 
    //      main:"Live feed from Broward County Court:Mon-Thurs:8:30AM and 10PMSat and Sun: 8:30AM",
    //      button1:"WATCH LIVE HEARINGS",
    //      button2:"ZOOM LINK FOR HEARINGS",
    //      img:""
    //     }])
    const [left, setLeft]=useState(data.left)

        // const [middle, setMiddle]=useState([
        //     { 
        //      main:"Live feed from Broward County Court:Mon-Thurs:8:30AM and 10PMSat and Sun: 8:30AM",
        //      button1:"WATCH LIVE HEARINGS",
        //      button2:"ZOOM LINK FOR HEARINGS",
        //      img:""
        //     }])
            const [middle, setMiddle]=useState(data.middle)

            // const [right, setRight]=useState([
            //     { 
            //      main:"Live feed from Broward County Court:Mon-Thurs:8:30AM and 10PMSat and Sun: 8:30AM",
            //      button1:"WATCH LIVE HEARINGS",
            //      button2:"ZOOM LINK FOR HEARINGS",
            //      img:""
            //     }])
                const [right, setRight]=useState(data.right)
                
            // const [footer, setFooter]=useState([
            //     {img:"",
            //      text:"Necesita una finza? Se Habla Espanol Haga clik en este enlace para visrae nuestro sitio web enespanol",
            //     button:"Espanol",
            // fsize:"", tcolor:"", bcolor:"", ffamily:""}
            // ])
            const [footer, setFooter]=useState(data.footer)
    // const URL_API=''
    // useEffect(()=>{
    //     const fetchdata=async()=>{
    //         try{
    //             let res = await fetch('')
    //             let data = await res.json()
    //             setHeader(data)
    //         }catch(err){
    //             console.log(err)
    //         }
    //     }
    //     (async()=>fetchdata())()
    // })

     // const URL_API='http://localhost:8000/left'
    // useEffect(()=>{
    //     const fetchdata=async()=>{
    //         try{
    //             let res = await fetch(API_URL)
    //             let data = await res.json()
    //             setLeft(data)
    //         }catch(err){
    //             console.log(err)
    //         }
    //     }
    //     (async()=>fetchdata())()
    // })

     // const URL_API='http://localhost:8000/middle'
    // useEffect(()=>{
    //     const fetchdata=async()=>{
    //         try{
    //             let res = await fetch(API_URL)
    //             let data = await res.json()
    //             setMiddle(data)
    //         }catch(err){
    //             console.log(err)
    //         }
    //     }
    //     (async()=>fetchdata())()
    // })

     // const URL_API='http://localhost:8000/right'
    // useEffect(()=>{
    //     const fetchdata=async()=>{
    //         try{
    //             let res = await fetch(API_URL)
    //             let data = await res.json()
    //             setRight(data)
    //         }catch(err){
    //             console.log(err)
    //         }
    //     }
    //     (async()=>fetchdata())()
    // })

     // const URL_API='http://localhost:8000/footer'
    // useEffect(()=>{
    //     const fetchdata=async()=>{
    //         try{
    //             let res = await fetch(API_URL)
    //             let data = await res.json()
    //             setFooter(data)
    //         }catch(err){
    //             console.log(err)
    //         }
    //     }
    //     (async()=>fetchdata())()
    // })
        return(
        <div className={styled.home}>
            <Togglebutton/>
          <Navbar/>
          {header.map((h,index)=>(
            <>
                        <div className={styled.mainpic} key={index}>
                
                <div style={{width:"100%", textAlign:"center"}}>
                <span>
                <Image width={200} height={200} className={styled.logo} src={woman} alt="logo" />
                </span>
                <span className={styled.maintext} style={{fontSize:h.fsize, color:h.color, display:"flex", justifyContent:"center"}} >
                    {/* <p style={{width:"60%", textAlign:"center"}}>{h.head}<br/> 
                    
                    </p> */}
                    <span className={styled.maintext} >
                    <p >The Go to Bail Bonds Agency <br/> 
                    <span className={styled.pink}> Broward</span>, <span className={styled.pink}>Palm Beach</span> and <span className={styled.pink}>Miami</span></p>
                </span>
                </span>
                <span className={styled.secondarytext}>
                    <p >{h.subhead}</p>
                </span>
                <span style={{height:"30px", display:"flex", justifyContent:"center", marginBottom:"50px"}} >
                    <span style={{backgroundColor:h.callbackground}}className={styled.call}> {h.call}</span>

                </span>
                </div>
            </div>
            </>
          ))}
          
            {/* <div className={styled.mainpic}>
                
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
            </div> */}





            <div className={styled.info}>
          {left.map((l)=>(
            <>
             <span>
                    <Image alt="g1"height={200} width={200} src={g1}/>
                    
                    <p>{l.main}</p>
                    <div>
                    <button>{l.button1}</button>
                    </div>
                    <div>

                    <button>{l.button2}</button>
                    </div>
                    
                    
                    
                </span>
            </>
          ))}
            
                {/* <span>
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
                    
                    
                    
                </span> */}





                {middle.map((m)=>(
            <>
            
            <span>
                <Image alt="g1"height={200} width={200} src={g3}/>
                    <p>{m.main}
                    </p>
                    <div>
                    <button>{m.button1}</button>
                    </div>
                    <div>

                    <button>{m.button2}</button>
                    </div>
                    <div>

                    <button>MIAMI-DADE COUNTY</button>
                    </div>
                </span>
            </>
          ))}

          {right.map((r)=>(
            <>
                   
            
            <span>
                <Image alt="g1"height={200} width={200} src={g3}/>
                    <p>{r.main}
                    </p>
                    <div>
                    <button>{r.button1}</button>
                    </div>
                    <div>

                    <button>{r.button2}</button>
                    </div>
                    <div>

                    <button>MIAMI-DADE COUNTY</button>
                    </div>
                </span>
            
            
            
            </>
          ))}
                
                {/* <span>
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
                </span> */}
              
                
            </div>
           
            {footer.map((f)=>(
                <>
                 <img className={styled.bottomimage}/>

<div className={styled.bottom} style={{backgroundColor:f.bcolor}}>
    <p style={{fontSize:f.fsize, fontFamily:f.ffamily, color:f.tcolor}}>{f.text}</p>
    <button className={styled.button}>{f.button}</button>
    </div>
                </>
            ))}
            {/* <img className={styled.bottomimage}/>

            <div className={styled.bottom}>
                <p>Necesita una finza? Se Habla Espanol<br/><span>Haga clik en este enlace para visrae nuestro sitio web enespanol</span></p>
                <button className={styled.button}>Espanol</button>
                </div> */}

        </div>
    )


}

export default Home