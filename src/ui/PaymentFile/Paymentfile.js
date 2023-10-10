import React from 'react'
 import '../PaymentFile/Payment.css'
  import { NavLink } from 'react-router-dom';







function Paymentfile({payment}) {
    const  cardBox = {
       width:'80%'
      };
      const hrStyle = {
        border: '1px solid #2f327d',
      };
      const handlclick=(e)=>{
        localStorage.setItem("choose" , JSON.stringify(payment))
      }
  return (

    
    <div>
          <div className="card-box ms-5 mt-5" >
            <div class="card" style={cardBox}>
  <h5 class="card-header text-center"> <span className='numbar-span'>{payment.lower}</span> {payment.highCost}</h5>
  <div class="card-body">
    <h5 class="card-title">Extra</h5>
    <p class="card-text">Please click the question Mark Icon to see the details of each extra</p>
    <p className='approval-name mt-4'>Approval Preparation<span className='some-name'>*</span></p>
    <hr style={hrStyle}/>
    <div className='checks-box   '>
    <div class="form-check py-2">
  <input class="form-check-input mt-3" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
  Non Approval
  <br></br>
+ R0.00 Extra
  </label>
</div>
<div class="form-check py-2">
  <input class="form-check-input mt-3" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
  Municipal Preparation <br/>
+ R15,000.00 Extra
  </label>
</div>
<div class="form-check py-2">
  <input class="form-check-input mt-3" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
  Estate (HOA)<br/>
+ R25,000.00 Extra
  </label>

</div>
    </div>
    <div className='printing'>

    </div>
    <NavLink className="linktext "to="/payment">
    <button className='buy-btn p-3 mt-4  ms-5 rounded-2 ' onClick={handlclick} height="30%">BUY</button>
    
    </NavLink>
    {/* <a href={payment. planPDf} download>{payment.lower}</a> */}
  

  </div>
</div>      
</div>
    </div>
  )
}

export default Paymentfile