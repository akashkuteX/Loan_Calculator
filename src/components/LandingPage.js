import React from 'react'
import { useState } from 'react';
import ResultPage from './ResultPage'

export default function LandingPage() {
    const [loanAmt, setLoanAmt] = useState(0);
    const [loanTenure, setLoanTenure] = useState(0);
    const [interest, setInterest] = useState(0);
    const [flag, setFlag] = useState(false);
    const [EMI, setEMI] = useState(0);
    const [totalPayable, setTotalPayable] = useState(0);
    const [totalPayment, setTotalPayment] = useState(0);
    const [btn, setbtn] = useState("CALCULATE");
    
    const changeHandle1 = (event)=>{
        setLoanAmt(event.target.value);
      }
      const changeHandle2 = (event)=>{
        setLoanTenure(event.target.value);
      }
      const changeHandle3 = (event)=>{
        setInterest(event.target.value);
      }
    //   const calculateHandler =()=>{
    //       if(flag===true){
    //           setFlag(false);

    //       }
    //         else{
    //             setFlag(true);
    //         }
    //   }
    const calculate=()=>{
      if(btn==="CALCULATE"){
        setbtn("RESET")
        let p = loanAmt
        let n = loanTenure;
        let r = (interest)/1200;
        let top = Math.pow((1+r),n);
        let bottom = top - 1;
        let ratio = top/bottom;
        setEMI(Math.round(p * r * ratio));
        setTotalPayable(Math.round(p * r * ratio) * n);
        setTotalPayment(Math.round(p * r * ratio)*n - p);
      }else{
        setbtn("CALCULATE");
        setLoanAmt(0);
        setLoanTenure(0);
        setInterest(0);
        setEMI(0);
        setTotalPayable(0);
        setTotalPayment(0);
      }
    }
      
    
  return (
    <div style={{"paddingLeft":"40%","marginTop":"50px"}}>
        <form action="/action_page.php">
            <label style={{"fontWeight":"bold","fontSize":"20px"}}  htmlFor="fname">Loan Amount</label>&nbsp;
            <input  type="text" placeholder='Enter amount' onChange={changeHandle1} id="amount" name="amount" value={loanAmt}/>&nbsp;<b>INR</b>&nbsp;
            <br/><br />
            <label style={{"fontWeight":"bold","fontSize":"20px"}} height="42px" htmlFor="months">Loan  Tenure</label>&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" placeholder='Enter months' onChange={changeHandle2} id="months" name="lname" value={loanTenure}/>&nbsp;<b>Months</b>&nbsp;
            <br/><br/>
            <label style={{"fontWeight":"bold","fontSize":"20px"}} height="42px" htmlFor="interest">Intrest Rate    </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" placeholder='NN ' id="lname" onChange={changeHandle3} name="interest" value={interest}/>&nbsp;<b>%</b>&nbsp;
            <br/><br/>
            &nbsp;&nbsp;&nbsp;<input  type="button" onClick={()=>calculate()} value={btn}   style={{"backgroundColor":"rgb(36, 36, 207)","marginLeft":"50px","color":"white","borderRadius":"4px","padding":"10px 60px"}} />
        </form> 
        <ResultPage data={{"EMI":EMI, "TotalPayable":totalPayable,"TotalPayment":totalPayment}}/>

    </div>
  );
}
