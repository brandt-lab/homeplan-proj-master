import React, { useState } from "react";
import "../payment/payment.css";
import PaystackPop from "@paystack/inline-js";
import pdf from "../../assets/pdf/house1.pdf"

import Modals from "../modals/Modals";

function Payment() {
  //   const [amount,setAmount  ]=useState("")
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility
  const amount = 1000 * 100;

    let palnns = localStorage.getItem("choose");
    let paln = JSON.parse(palnns)
    let p = paln.planPDf


  const Paywithpaystack = (e) => {
    e.preventDefault();

    const paystack = new PaystackPop();

    paystack.newTransaction({
      key: "pk_test_b9c7772fd0ba7145f2ab4ddf492fbca56c73fc02",
      amount: amount,
      email,
      firstname,
      lastname,
      callback: (response) => {
        // Callback function after successful payment
        console.log("Payment successful:", response);

        // Set showModal to true to display the modal
        setShowModal(true);
      },
      onClose: () => {
        // Callback function after the Paystack dialog is closed
        console.log("Payment closed");

        // You can navigate to a different page here if needed
        // navigate("/path-to-redirect");
      },
    });
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-11">
            <div className="card card0 rounded-0">
              <div className="row">
                <div className="col-md-5 d-md-block d-none p-0 box">
                  <div className=" rounded-0 border-0  card1" id="bill">
                    <h3 id="heading1">Payment Summary</h3>
                    <div className="row">
                      <div className="col-lg-7 col-8 mt-4 line pl-4">
                        <h2 className="bill-head">Electronics</h2>
                        <small className="bill-date">
                          2017 Feb 10 at 10:30 PM
                        </small>
                      </div>
                      <div className="col-lg-5 col-4 mt-4">
                        <h2 className="bill-head px-xl-5 px-lg-4">CAF</h2>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-7 col-8 mt-4 line pl-4">
                        <h2 className="bill-head">Food</h2>
                        <small className="bill-date">
                          2017 Feb 25 at 11:30 PM
                        </small>
                      </div>
                      <div className="col-lg-5 col-4 mt-4">
                        <h2 className="bill-head px-xl-5 px-lg-4">JFK</h2>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-7 col-8 mt-4 line pl-4">
                        <h2 className="bill-head">Grocery</h2>
                        <small className="bill-date">
                          2017 Mar 17 at 10:45 PM
                        </small>
                        <br />
                        <small className="bill-date">
                          2017 Mar 18 at 11:45 PM
                        </small>
                      </div>
                      <div className="col-lg-5 col-4 mt-4">
                        <h2 className="bill-head px-xl-5 px-lg-4">LHR</h2>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-7 col-8 mt-4 line pl-4">
                        <h2 className="bill-head">Accessories</h2>
                        <small className="bill-date">
                          2017 Apr 13 at 05:30 PM
                        </small>
                      </div>
                      <div className="col-lg-5 col-4 mt-4">
                        <h2 className="bill-head px-xl-5 px-lg-4">JFK</h2>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 red-bg">
                        <p className="bill-date" id="total-label">
                          Total Price
                        </p>
                        <h2 className="bill-head" id="total">
                          $ 523.65
                        </h2>
                        <small className="bill-date" id="total-label">
                          Price includes all taxes
                        </small>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-7 col-sm-12 p-0 box">
                  <div class="card rounded-0 border-0 card2" id="paypage">
                    <div class="form-card">
                      <h2 id="heading2" class="text-danger">
                        Payment Method
                      </h2>
                      <div class="radio-group">
                        <div class="radio" data-value="credit">
                          <img
                            src="https://i.imgur.com/28akQFX.jpg"
                            width="200px"
                            height="60px"
                          />
                        </div>
                        <div class="radio" data-value="paypal">
                          <img
                            src="https://i.imgur.com/5QFsx7K.jpg"
                            width="200px"
                            height="60px"
                          />
                        </div>
                        <br />
                      </div>
                      <label class="pay">Email Address</label>
                      <input
                        type="text"
                        name="holdername"
                        id="email-address"
                        placeholder="JohnSmith@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <p>{amount}</p>
                      {/* <div class="row">
                        <div class="col-md-12">
                          <label class="pay">Amount</label>
                        </div>
                        <div class="col-md-12">
                          <input
                            type="text"
                            name="exp"
                            id="amount"
                            placeholder="0000-0000-0000-0000"
                            minlength="5"
                            maxlength="5"
							value={amount}
							onChange={(e) => setAmount(e.target.value)}
                          />
                        </div>
                      </div> */}
                      <div class="row">
                        <div class="col-8 col-md-6">
                          <label class="pay">First Name</label>
                          <input
                            type="text"
                            name="name"
                            id="firstname"
                            placeholder="First Name"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                          />
                        </div>
                        <div class="col-4 col-md-6">
                          <label class="pay">Last Name</label>
                          <input
                            type="text"
                            name="name"
                            id="last-name"
                            placeholder="Last Name"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                          />
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-md-6">
                          {/* <PaystackButton {...componentProps}  class="btn btn-info placeicon" />   */}
                          <input
                            type="submit"
                            value="MAKE A PAYMENT &nbsp; &#xf178;"
                            class="btn btn-info placeicon"
                            onClick={Paywithpaystack}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  
      {/* Pass showModal state and functions to control the modal */}
      <Modals show={showModal} handleClose={() => setShowModal(false)} pdf={pdf}/>
    </div>
  );
}

export default Payment;
