import React, {useState} from "react";



export default function ResultPage(props) {
   
  
    


  
  return (
    <>
      <h2>Loan EMI Calculator</h2>
      <div className="container">
        <div className="row">
          
            <div className="col-lg-2 mb-4 ">
                <div className="card">
  
                    <div className="card-body" style={{"backgroundColor":"#FFFA93 "}}>
                        <h5 className="card-title">Loan EMI</h5>
                        <p className="card-text"  >
                           $ {props.data.EMI}
                        </p>
                          
                       
                    </div>
                </div>
            </div>
            <div className="col-lg-2 mb-4">
                <div className="card">
  
                    <div className="card-body" style={{"backgroundColor":"#D5FFC0   "}}>
                        <h5 className="card-title">Total Interst</h5>
                        <p className="card-text">
                            $ {props.data.TotalPayable}
                        </p>
                          
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
   <div>
   <div className="col-lg-4  mb-4">
                <div className="card">
  
                    <div className="card-body" style={{"backgroundColor":"#C0EDFF"}}>
                        <h5 className="card-title">Total Payment</h5><p>(Principal + Interset)</p>
                        <p className="card-text">
                            $ {props.data.TotalPayment}
                        </p>
                          
                       
                    </div>
                </div>
            </div>
   </div>
    </>
  )
}
