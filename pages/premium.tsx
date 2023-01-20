import React from "react";

const Formreciept= ()=>{
    return(
        <div>
            <div className="flex justify-between">
                <span className="border-2 border-black w-1/4 h-48"></span>
                <span className="mt-24">Premium Reciept No:<br/>
                Reciept Date:<input className="border-b-2 border-black mb-24"/><br/>NON-REFUNDABLE</span>

            </div>
            <div>
                <span className="flex">
                <p className="w-1/12">RECIEVED FROM</p><input className="border-b-2 border-black w-full"/>
                </span>
                <span className="flex mt-12 mb-6">
                    <p>The Sum of:</p><input className="border-b-2 border-black w-3/4"/>($<input className="border-b-2 border-black w-1/6 "/>)
                </span>
                <span>
                    <span className="mr-12"> 
                        (<input className="border-b-2 border-black "/>)Cash
                </span>
                <span className="mr-12"> 
                        (<input className="border-b-2 border-black "/>)Check/Credit Card
                </span>
                <span className="mr-12"> 
                        (<input className="border-b-2 border-black "/>)Money Order - PREMIUM ON BOND(S) FOR:<input className="border-b-2 border-black "/>
                </span>
                </span>
                <span className="flex mt-6">
                    <p>Defendant</p><input className="border-b-2 border-black "/>Bond Amt. $<input className="border-b-2 border-black "/>
                </span>
                <span className="flex mt-6 mb-6">
                    <p>P/A#:</p> <input className="border-b-2 border-black w-1/3"/>Court:<input className="border-b-2 border-black w-1/3"/>
                </span>
                <span className="flex"> 
                        <p>Charded with:</p><input className="border-b-2 border-black w-3/4"/>
                </span>
                <span className="flex mt-6"> 
                        <p>Collateral Receipt No. C</p><input className="border-b-2 border-black w-1/3"/>issued. (ENTER RECEIPT # OR "NONE")
                </span>

            </div>
            <div className="flex flex-row">
                <span className="w-1/2">
                    <span>
                        <p>Premium Due$</p><input className="border-b-2 border-black "/><br/>
                        <p>Amt. Paid</p><input className="border-b-2 border-black "/><br/>
                       <p>Bal. Due $</p><u><input className="border-b-2 border-black "/></u> 

                    </span>
                </span>
                <span className="w-1/2">
                    Recieved By:
                    <input/>
                    In behalf of Agent for:<br/>
                    LEXINGTON NATIONAL INSURANCE CORPORATION<br/>
                    P.O. Box 6098 -Lutherville, MD 21094<br/>
                    (410) 625-0800
                </span>
            </div>
        </div>
    )
}
export default Formreciept