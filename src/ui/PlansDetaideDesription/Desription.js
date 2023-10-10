import React from "react";
import { FaList } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import "../PlansDetaideDesription/Desription.css";
import homeplanData from "../../assets/Data/homeplans";
// import { useParams } from "react-router-dom";

function Desription({desriptionhome}) {
  console.log(desriptionhome)

  // const params =useParams();
  // const  singleplantIem = homeplanData.find((item) => item.id == params)

    const hrStyle = {
        border: '3px solid #f1f1f1',
      };
  return (
    <div>
      <div className="All-text">
        <div>
          <p className="About">
            {desriptionhome.description}
          </p>
          

          <hr width="800" className="mt-4" />
        </div>
        <div className="py-3">
          <h6 className="header">Overview</h6>
          <p className="About py-3">
          {desriptionhome.detailedDescription}
          </p>
        </div>
        <div className="py-2">
          <h6 className="header">Key Features</h6>
          <p className="About py-3">
           {desriptionhome.keyFeaturesDescription}
          </p>
        </div>
        <div className="py-2">
          <h6 className="header">Detailed Description</h6>
          <p className="About py-3">
           {desriptionhome.detailedDescription}
          </p>
        </div>
        <div>
          <table class="table table-borderless">
            <thead class="table-light">
              <tr className="text-center  thead-text">
                <th className="th-text">Item</th>
                <th className="th-text">Detail</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{ desriptionhome.tableDescription1}</td>
                <td>{desriptionhome.tableData1}</td>
              </tr>
              <tr>
              <td>{ desriptionhome.tableDescription2}</td>
                <td>{desriptionhome.tableData2}</td>
              </tr>
              <tr>
              <td>{ desriptionhome.tableDescription3}</td>
                <td>{desriptionhome.tableData3}</td>
              </tr>
              <tr>
              <td>{ desriptionhome.tableDescription4}</td>
                <td>{desriptionhome.tableData4}</td>
              </tr>
              <tr>
              <td>{ desriptionhome.tableDescription5}</td>
                <td>{desriptionhome.tableData5}</td>
              </tr>
              <tr>
              <td>{ desriptionhome.tableDescription6}</td>
                <td>{desriptionhome.tableData6}</td>
              </tr>
              <tr>
              <td>{ desriptionhome.tableDescription8}</td>
                <td>{desriptionhome.tableData8}</td>
              </tr>
              <tr>
              <td>{ desriptionhome.tableDescription9}</td>
                <td>{desriptionhome.tableData9}</td>
              </tr>
              <tr>
              <td>{ desriptionhome.tableDescription10}</td>
                <td>{desriptionhome.tableData10}</td>
              </tr>
              <tr>
              <td>{ desriptionhome.tableDescription11}</td>
                <td>{desriptionhome.tableData11}</td>
              </tr>
              <tr>
              <td>{ desriptionhome.tableDescription12}</td>
                <td>{desriptionhome.tableData12}</td>
              </tr>
              <tr>
              <td>{ desriptionhome.tableDescription13}</td>
                <td>{desriptionhome.tableData13}</td>
              </tr>
              <tr>
              <td>{ desriptionhome.tableDescription14}</td>
                <td>{desriptionhome.tableData14}</td>
              </tr>
              <tr>
              <td>{ desriptionhome.tableDescription15}</td>
                <td>{desriptionhome.tableData15}</td>
              </tr>
              <tr>
              <td>{ desriptionhome.tableDescription1}</td>
                <td>{desriptionhome.tableData1}</td>
              </tr>
              <tr>
              <td>{ desriptionhome.tableDescription1}</td>
                <td>{desriptionhome.tableData1}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="information-text">
          <h6 className="header">Purchase Information</h6>
          <p className="About">
         {desriptionhome.purchaseInformation}
          </p>

          <h6 className="header py-3">Plan Suggestion</h6>
          <p className="About">
          {desriptionhome.planSuggestion}
          </p>

          <h6 className="header py-3">Meta Description</h6>
          <p className="About">
        {desriptionhome.metaDescripition}
          </p>

          <div className="mt-5">
            <hr width="800" className="mt-4" />
            <div className="specification">
              <h6 className="header-texts">
                <FaList /> specification:{desriptionhome.specification}
                </h6>
            </div>
            <hr width="800" className="mt-4" />
          </div>
          <div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Bedroom</th>
                  <th>4</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Instant Download</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>346</td>
                </tr>
                <tr>
                  <td>Level</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Garage</td>
                  <td>22</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="user-Reviews py-3">
            <hr width="800" className="mt-4" />
            <div className="reviews-text">
              <h2 className="header ">
                <AiFillStar className="icon-star" /> User Reviews
              </h2>
            </div>
            <hr width="800" className="mt-4" />
          </div>
        </div>
        <div className="">

        <span class="heading">User Rating</span>
        <AiFillStar className="checked" /> 
        <AiFillStar className="checked" /> 
        <AiFillStar className="checked" /> 
        <AiFillStar className="checked" /> 
        <AiFillStar className="checked" /> 

<p>4.1 average based on 254 reviews.</p>
<hr style={hrStyle}/>

<div class="row">
  <div class="side">
    <div>5 star</div>
  </div>
  <div class="middle">
    <div class="bar-container">
      <div class="bar-5"></div>
    </div>
  </div>
  <div class="side right">
    <div>150</div>
  </div>
  <div class="side">
    <div>4 star</div>
  </div>
  <div class="middle">
    <div class="bar-container">
      <div class="bar-4"></div>
    </div>
  </div>
  <div class="side right">
    <div>63</div>
  </div>
  <div class="side">
    <div>3 star</div>
  </div>
  <div class="middle">
    <div class="bar-container">
      <div class="bar-3"></div>
    </div>
  </div>
  <div class="side right">
    <div>15</div>
  </div>
  <div class="side">
    <div>2 star</div>
  </div>
  <div class="middle">
    <div class="bar-container">
      <div class="bar-2"></div>
    </div>
  </div>
  <div class="side right">
    <div>6</div>
  </div>
  <div class="side">
    <div>1 star</div>
  </div>
  <div class="middle">
    <div class="bar-container">
      <div class="bar-1"></div>
    </div>
  </div>
  <div class="side right">
    <div>20</div>
  </div>
</div>
        </div>
      </div>
    </div>
  );
}

export default Desription;
