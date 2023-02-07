import React from "react";
import styled from "../styles/index.module.css"
const Banner = ()=>{
    return(
        <div>
             <span className={styled.brbanner}>
      <span className="bg-white flex flex-row justify-around items-center ml-12 mr-12 p-2">
        <span className="border-r-2 border-black">
          <p className="mr-3">We Are Serving <br/>All 50 States</p>
          </span>
          <span className="text-center border-r-2 border-black">
          <p className="mr-3">Where Available Any Time <br/>24/7 Service</p>
          </span>
          <span className="text-center border-r-2 border-black">
          <p className="mr-3">Bail Out<br/> Same Day</p>
          </span>
      </span>
      </span>

        </div>
    )
}

export default Banner