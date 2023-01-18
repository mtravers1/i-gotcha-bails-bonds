import React from "react";
import styles from '../styles/forms.module.css'

const Form4 = ()=>{
    return(
        <div className={styles.form}>
            
            <div className="flex justify-between w-1/2 ml-[840px] font-bold mb-12">
                <span className="">BAIL BOND PREMIUM RECEIPT RECEIPT<br/>
AND STATEMENT OF CHARGES</span>
<span>
    Recipt NO:<input/>
</span>
            

            </div>
         
        <span className="font-bold mt-24">
        I understand that the premium owing or paid is fully earned upon the defendant’s release from custody, and the
fact that the defendant may have been improperly arrested, re-arrested, the case dismissed, or the bail reduced
shall not obligate the return or forgiveness of any portion of the premium except as otherwise provided by
applicable law (if any) as stated in an addendum attached to the Bail Bond Application and Agreement
        </span>
        <br/>
        <span className="flex flex-col">
            <span className="">
            1. Date Payment Made <input/> Date of Defendant’s Arrest<input/>
            </span>
            <span className="">
            2.Amount Recieved <input/> Dollars $(<input/>)
            </span>
            <span className="">
            3. In the form of  <input type="radio"/> cash<input type="radio"/>check<input type="radio"/>money order<input type="radio"/>credit card <input type="radio"/>other<input/>
            </span>
            <span className="">
            4. Payer's Name <input className="w-1/4"/>
            <p className="ml-60">Payer's Full Name</p>
            </span>
            <span className="">
            5. Payer's Address<input className="mr-6 w-1/5"/><input className="mr-6 w-1/5"/><input className="mr-6 w-1/5"/><input className="mr-6 w-1/8"/>
            <span className="flex">
            <p className="ml-72">Street</p><p className="ml-72">City</p><p className="ml-72">State</p><p className="ml-72">Zip</p>
            </span>
            </span>

        </span>
        <span>
       <p> 6. In connection with a Bail Bond(s) for Defendant <input/> <input/> <input/></p>
        <p>First Middle Last</p>
       <p>7. Bail Bond Amount(s) <input/>Power Nos. (if known)<input/></p>
       <p>8. Date of Defendant’s Release on Bail<input/></p>
       <p>9. Court Name & Address<input/></p>
       <p>10. Date & Time of Next Required Court Appearance<input/></p>
       <p>11. Charged with<input/></p>
       <span>
       <span className="flex justify-between ">12. Bail Bond Premium $<input/></span>
       <span className="flex justify-between ">13. Itemized Expenses (if and as permitted by applicable law)<input/></span>
       <span className="flex justify-end "><p >$<input/></p></span>
       <span className="flex justify-end " ><p>$<input/></p></span>
       <span><p>14. Total Charges (premium plus any itemized expenses) $<input/></p></span>
       <span><p>15. Amount Paid $<input/></p></span>
       <span><p>16. Balance Due $<input/></p></span>
       </span>
<p>17. Was collateral taken? Yes <input type="radio" className=""/>No <input type="radio" className=""/>If yes, collateral receipt #<input/></p>
All other documents executed by Defendant, Indemnitor(s), me, or other party related to the Bail Bond(s) are incorporated
into and made a part hereof by reference.

</span>
<span className="flex justify-between">
    <span className="w-1/2">Paid By:</span>
    <span className="w-1/2">Recieved By:</span>
</span>

<span className="flex justify-between">
    <span className="w-1/2">
            ________________________
    </span>

    <span className=" w-1/2 flex flex-end">
        _____________________
    </span>

</span>
<span className="flex justify-between">
    <span className="w-1/2">Player Signature</span>
    <span className="w-1/2">Producer/Representative Signature</span>
</span>

<span className="flex justify-between">
    <span className="w-1/2">
        <input />
    </span>

    <span className="w-1/2"> 
        <input className="flex flex-end"/>
    </span>

</span>
<span className="flex justify-between">
    <span className="w-1/2">PAID Payer Name (PRINTED)</span>
    <span className="w-1/2">Producer Name (PRINTED)</span>
</span>
<h1 className="font-bold text-center">THIS FORM IS NOT FOR USE IN ARKANSAS, COLORADO OR NEW MEXICO</h1>
<div className="w-full flex">
            <span className="border-2 w-1/2">
            SURETY:<br/>
LEXINGTON NATIONAL INSURANCE<br/>
CORPORATION<br/>
P.O. Box 6098<br/>
Lutherville, Maryland 21094<br/>
Phone: (888) 888-2245

                </span>
            <span className="border-2 w-1/2">BAIL PRODUCER: [stamp must include name, address, phone #. and license #]<br/>
            <input className="w-full m-30 border-none"/>
            </span>

        </div>
        <p className="text-right">[must include name, address, phone no., and license no.]</p>




        </div>
    )
}
export default Form4