import styles from '../styles/forms.module.css'

const Form10 = ()=>{
    return(
        <div>
            <div className={styles.form}>
            <div className="flex justify-center">
                <span className="border-2 border-black h-40 w-1/3 ">
                    <p>Bail Producer Stamp:</p>
                </span>
            </div>

            <h1 className="text-center"><b>PROMISSORY NOTE FOR ADDITIONAL FUTURE PAYMENTS OF COLLATERAL</b></h1>
            <span className="flex justify-between"> 
            <span>
                $<input/>
            </span>
            <span>
                Date:<input/>
            </span>
            </span>
            <span className="flex justify-between mb-12"> 
            <span>
                Power No.<input/>
            </span>
            <span>
                City:<input/>State:<input/>
            </span>
            </span>

            <span className="mb-12">
                1. FOR VALUE RECEIVED, I (we), the undersigned Debtor(s), jointly and severally (together and separately), promise to pay to the
order of <input/> (“Collateral Holder”) the principal sum of
<input/> ($<input/>) owed for the bail bond (“Bond”) of <input/>
(“Defendant”). Payments shall be made at time to
time designate in writing according to the following payment plan:
        <span className="flex flex-col text-center ">
            <span className="">
            Payment #1: Amount of payment $<input/> Date payment due: <input/>

            </span>
            <span className="">
            Payment #2: Amount of payment $<input/> Date payment due: <input/>

            </span>
            <span className="">
            Payment #3: Amount of payment $<input/> Date payment due: <input/>

            </span>
            <span className="">
            Payment #4: Amount of payment $<input/> Date payment due: <input/>

            </span>

        </span>

            </span>
            <p className="mt-12">2. The entire amount of the then outstanding balance under this note shall become due and payable immediately under any one or more
of the following events: (i) upon Defendant’s failure to appear in the court for which the Bond was posted at any time required by
such court; (ii) upon forfeiture of the Bond; or (iii) if any payment is not received by Bail Producer within ten days following its due
date or is returned for insufficient funds, stopped or refused for any reason upon presentment to a financial institution.</p>




<p className="mt-12">3. I (we), jointly and severally (together and separately), hereby waive presentment, protest and demand, notice of protest, dishonor and
nonpayment of this note, and expressly agree that, without in any way affecting my (our) liability under this note, Bail Producer may
(i) extend the due date or the time of payment of any payment due under this note, (ii) accept security or partial payments, (iii)
release any party liable under this note or any guarantee of this note and (iv) release any security now or later securing this note. The
failure of the Bail Producer to enforce any provision of this note, or to declare a default under this note, shall not be construed as a
waiver of the Bail Producer’s entitlement to payment, shall not be construed as a waiver or modification of the terms of this note, and
shall not impair the right of the Bail Producer to declare a default or to strictly enforce the terms of this note.</p>



<p className="mt-12">4. All obligations under this note remain in full force and are not terminated, modified or otherwise affected: (i) by revocation of the
Bond; (ii) by any change in the status of the Bond or the surety’s liability under the Bond; (iii) by any change in the status of court
proceedings for which the Bond was posted; or (iv) by any change in whereabouts or status of the Defendant. This note shall become
null and void only if all premium amounts and obligations under the Bond have been paid or satisfied, and otherwise, this note shall
remain in full force and effect.</p>


<p className="mt-12">5. If any portion of this note or any application of such provision shall be declared by a court of competent jurisdiction to be invalid or
unenforceable, such invalidity or unenforceability shall not affect any other applications of such provision or the remaining
provisions which shall, to the fullest extent, remain in full force and effect. Any amendment or modification of this note must be in
writing and signed by both Bail Producer and me (us).</p>


<p className="mt-12">6. I (we) agree to all terms and conditions of this note and acknowledge receipt of a copy of this note. I (we) also agree
to pay all collection costs including, without limitation, court costs, reasonable and actual attorneys’ fees and
expenses, and any other fees permitted by applicable law.</p>
<span className="flex flex-row justify-center ">
    <span className="w-1/4 flex flex-col">
        <p className=""><b>Witness(es):</b></p>
        <input/>
        Print Name
        <span className='flex flex-col'>
        <input className='w-1/2'/> <input className='w-1/2'/>
        </span>
        Signature
        <input/>
        Print Name
        <span className='flex flex-col'>
        <input className='w-1/2'/> <input className='w-1/2'/>
        </span>
        Signature date
    </span>
    <span className="w-1/4 flex flex-col ml-24">
        <p className=""><b>Debtor(s):</b></p>
        <input/>
        Print Name
        <span className='flex flex-col'>
        <input className='w-1/2'/> <input className='w-1/2'/>
        </span>
        Signature
        <input/>
        Print Name
        <span className='flex flex-col'>
        <input className='w-1/2'/> <input className='w-1/2'/>
        </span>
        Signature date
    </span>
</span>
<h1 className="text-center"><b>THIS FORM IS NOT FOR USE IN COLORADO, IDAHO, INDIANA OR MARYLAND
</b></h1>
        </div>
        </div>
    )
}

export default Form10