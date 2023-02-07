import woman from '../public/woman.png'
import Image from 'next/image'
import g1 from '../public/1.png'
import g2 from '../public/2.png'
import g3 from '../public/3.png'
import g31 from '../public/31.png'

import bar from '../public/bar.png'
import styled from '../styles/index.module.css'
import Togglebutton from '../components/togglebutton'
import Navbar from '../components/navbar'
import { useState,useEffect } from 'react'
import data from '../data/db.json'
import Link from 'next/link'
import g4 from '../public/4.png'
import g5 from '../public/5.png'
import g6 from '../public/6.png'
import g8 from '../public/8.png'




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
                        <div className={styled.mainpic} style={{ backgroundImage:h.backgroundimg}} key={index}>
                
                <div style={{width:"100%", textAlign:"center"}}>
                <span className='flex justify-center'>
                <Image width={200} height={200} className={styled.logo} style={{}} src={woman} alt="logo" />
                </span>
                <span className={styled.maintext} style={{color:h.color, display:"flex", justifyContent:"center"}} >
                    {/* <p style={{width:"60%", textAlign:"center"}}>{h.head}<br/> 
                    
                    </p> */}
                    <span className={styled.maintext} style={{fontSize:h.fsize, color:h.color}} >
                    <p >The Go to Bail Bonds Agency <br/> 
                    <span className={styled.pink} > Broward</span>, <span className={styled.pink} >Palm Beach</span> and <span className={styled.pink}>Miami</span></p>
                </span>
                </span>
                <span className={styled.secondarytext}>
                    <p >{h.subhead}</p>
                </span>
                <span style={{height:"30px", display:"flex", justifyContent:"center", marginBottom:"50px"}} >
                    <span style={{backgroundColor:h.callbackground}}className={styled.call}> {h.office} <br/>
                    {h.cell}</span>
                    {/* <span style={{backgroundColor:h.callbackground}}className={styled.call}> {h.cell}</span> */}


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





            <div className={styled.info} id="boxes">
          {left.map((l)=>(
            <>
             <span >
                    <Image alt="g1"height={200} width={200} style={{}}  src={g8}/>
                    
                    <p>{l.main}</p>
                    <div>
                    <button style={{backgroundColor:l.color, border:"none"}}>BROWARD COUNTY</button>
                    </div>
                    <div>
                    <button style={{backgroundColor:l.color, border:"none"}}>LIVE COURT CASES</button>
                    </div>
                    <div>

                    <button style={{backgroundColor:l.color, border:"none"}}>IMATE SEARCH</button>
                    

                    
                    </div>
                    <div>
                    <button style={{backgroundColor:l.color, border:"none"}}>ZOOM LINK HEARING</button>

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
                <Image alt="g4"height={100} width={200} style={{}}  src={g3}/>
                    <p>{m.main}
                    </p>
                    <div >
                    <button style={{backgroundColor:m.color, border:"none"}} >PALM-BEACH COUNTY</button>
                    </div>
                    <div>
                    <button style={{backgroundColor:m.color, border:"none"}}>LIVE COURT CASES</button>
                    </div>
                    <div>

                    <button style={{backgroundColor:m.color, border:"none"}}>IMATE SEARCH</button>
                    

                    
                    </div>
                    <div>
                    <button style={{backgroundColor:m.color, border:"none"}}>ZOOM LINK HEARING</button>

                    </div>
                </span>
            </>
          ))}

          {right.map((r)=>(
            <>
                   
            <span>
                <Image alt="g1"height={200} width={200}  style={{}}  src={g31}/>
                    <p>Live feed from Palm-Beach Court:Mon-Thurs:8:30AM and 10PMSat and Sun: 8:30AM
                    </p>
                    <div>
                    <button style={{backgroundColor:r.color, border:"none"}}>MIAMI-DADE COUNTY</button>
                    </div>
                    <div>
                    <button style={{backgroundColor:r.color, border:"none"}}>LIVE COURT CASES</button>
                    </div>
                    <div>

                    <button style={{backgroundColor:r.color, border:"none"}}>INMATE SEARCH</button>
                    </div>
                    <div>

                    <button style={{backgroundColor:r.color, border:"none"}}>ZOOM LINK HEARING</button>
                    </div>
                </span>
            
            
            
            </>
          ))}
          
             <span className={styled.defend} >
                    <Image alt="g1"height={200} width={200} style={{}}  src={g5}/>
                    
                    <p>Defendent Forms</p>
                    <div >
                    <button style={{backgroundColor:"black", border:"none"}} className="">            
                    <Link href="./form2">IMPORTANT FRAUD WARNINGS</Link></button>
                    </div>
                    <div>
                    <button style={{backgroundColor:"black", border:"none"}} className="">            
                    <Link href="./form7">LEXINGTON NATIONAL INSURANCE CORPORATIONPRIVACY NOTICE</Link></button>
                    </div>
                    <div>
                    <button style={{backgroundColor:"black", border:"none"}} className="">            
                    <Link href="./form1">
                    BAIL BOND APPLICATION</Link></button>
                    </div>
                    <div>
                        

                    <button className='' >
                        <Link href="./form3" className=''>FLORIDA ADDENDUM TO BAIL BOND APPLICATION AND AGREEMENT</Link>
                    </button>
                    </div>
                    <div>

<button style={{backgroundColor:"black", border:"none"}}>             
<Link href="./checklist">TERMS AND CONDITION OF BAIL RELEASE</Link>

</button>
</div>
<div>
                        

                        <button className='' > <Link href="./form5">COLLATERAL RECEIPT</Link> </button>
                        </div>
                    <div>
                    <button><Link href="./reciept">
                    CREDIT CARD AUTHORIZATION</Link></button>
                    </div>
                    
                    <div>
                    <button style={{backgroundColor:"black", border:"none"}} className="">            
                    <Link href="./form6">PROMISSARY NOTE & INSTALLMENT PAYMENT PLAN</Link></button>
                    </div>
                    
                    
                    {/* <div>

                    <button style={{backgroundColor:"black", border:"none"}}> <Link href="./form2">--IMPORTANT FRAUD WARNINGS</Link>
</button>
                    </div> */}
                    
                    
                 
                    {/* <div>

                    <button style={{backgroundColor:"black", border:"none"}}>            <Link href="./form5">COLLATERAL RECEIPT</Link>

</button>
                    </div> */}
            {/* <Link href="./form3">FLORIDA ADDENDUM TO BAIL BOND APPLICATION AND AGREEMENT</Link>
            <Link href="./form4">Premium Receipt And Statement of Charges</Link>
            <Link href="./form5">COLLATERAL RECEIPT</Link>
            <Link href="./form6">ROMISSORY NOTE & INSTALLMENT PAYMENT PLAN FOR UNPAID PREMIUM</Link>
            <Link href="./form7">LEXINGTON NATIONAL INSURANCE CORPORATION Policy</Link>
            <Link href="./form8">INDEMNITOR APPLICATION AND AGGREEMENT</Link>
           <Link href="./form9">ELECTRONIC MONITORING ADDENDUM TO yBAIL BOND APPLICATION AND AGREEMENT</Link>
            <Link href="./form10">PROMISSORY NOTE FOR ADDITIONAL FUTURE PAYMENTS OF COLLATERAL
</Link>
                     */}
                    
                    
                </span>
            
          <span  className={styled.defend}>
                      <Image height={200} width={200} src={g4} alt="g5" />
                      <p>Indemnitor Forms</p>
                      <div>
                    <button >
                        <Link className='p-2' href="./forms/form2">IMPORTANT FRAUD WARNINGS</Link></button>
                    </div>
                    <div>
                    <button style={{backgroundColor:"black", border:"none"}} className="">            
                    <Link href="./form7">LEXINGTON NATIONAL INSURANCE CORPORATIONPRIVACY NOTICE</Link></button>
                    </div>
                    <div>
                    <button style={{backgroundColor:"black", border:"none"}} className="">            
                    <Link href="./form8">
                    INDEMITOR APPLICATION AND AGGREEMENT</Link></button>
                    </div>
                    <div>
                        

                        <button className='' > <Link href="./form5">COLLATERAL RECEIPT</Link> </button>
                        </div>
                        <div>

                    <button style={{backgroundColor:"black", border:"none"}}>             
                    <Link href="./checklist">TERMS AND CONDITION OF BAIL RELEASE</Link>

</button>
                    </div>
                    <div>
                    <button style={{backgroundColor:"black", border:"none"}} className="">            
                    <Link href="./form10">CONTINGENT PROMISARY NOTE</Link></button>
                    </div>
                    <div>
                    <button><Link href="./reciept">CREDIT CARD AUTHORIZATION</Link></button>

                    </div>
                    <div>
                    <button style={{backgroundColor:"black", border:"none"}} className="">            
                    <Link href="./form6">PROMISSARY NOTE & INSTALLMENT PAYMENT PLAN</Link></button>
                    </div>
                    
                    {/* <div>
                    <button style={{backgroundColor:"black", border:"none"}} className="">            
                    <Link href="./form7">LEXINGTON NATIONAL INSURANCE CORPORATIONPRIVACY NOTICE</Link></button>
                    </div> */}
                    
                    
                    {/* <div>
                        

                    <button className='' >             <Link href="./form3" className=''>FLORIDA ADDENDUM TO BAIL BOND APPLICATION AND AGREEMENT</Link>

</button>
                    </div> */}
                    
                        

          </span>

                
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
                <div className='text-white font-normal'>
                 <img className={styled.bottomimage} style={{backgroundImage:f.backgroundimg}} />

<div className={styled.bottom} style={{backgroundColor:f.bcolor}}>
    <p style={{fontSize:f.fsize, fontFamily:f.ffamily, color:f.tcolor}}>{f.text}</p>
    <button className={styled.button}>{f.button}</button>
    
    </div>
    {/* <div className='bg-footer-pink' > */}
    <div className='bg-blue	' >

    

    <h1 className=''><b>Forms</b></h1>
    <div className='flex justify-center flex-wrap flex-col'>
            {/* <Link href="./form1">Bail Bond Application and Agreement</Link> */}
            {/* <Link href="./form2">IMPORTANT FRAUD WARNINGS  |</Link> */}
            {/* <Link href="./form3">FLORIDA ADDENDUM TO BAIL BOND APPLICATION AND AGREEMENT</Link> */}
            <Link href="./form4">Premium Receipt And Statement of Charges  |</Link>
            {/* <Link href="./form5">COLLATERAL RECEIPT  |</Link> */}
            {/* <Link href="./form6">ROMISSORY NOTE & INSTALLMENT PAYMENT PLAN FOR UNPAID PREMIUM  |</Link> */}
            {/* <Link href="./form7">LEXINGTON NATIONAL INSURANCE CORPORATION Policy   |</Link> */}
            {/* <Link href="./form8">INDEMNITOR APPLICATION AND AGGREEMENT</Link> */}
           {/* <Link href="./form9">ELECTRONIC MONITORING ADDENDUM TO yBAIL BOND APPLICATION AND AGREEMENT</Link> */}
            {/* <Link href="./form10">PROMISSORY NOTE FOR ADDITIONAL FUTURE PAYMENTS OF COLLATERAL</Link> */}

                <Link href="./premium">Premium Reciept</Link>
                <Link href="./sab">GENERAL SURETY APPEARANCE BOND</Link>
                <Link href="./checklist">Checklist</Link>

                
          </div>
          </div>
    

                </div>

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