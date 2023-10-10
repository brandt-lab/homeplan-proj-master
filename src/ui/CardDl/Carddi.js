import React, { useState, useEffect } from "react";
import "../CardDl/card.css";
import homeplanData from "../../assets/Data/homeplans";
import { NavLink } from "react-router-dom";
import Loaders from "../../components/Loaders/Loaders";





function Carddi() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (you can replace this with your actual data fetching logic)
    setTimeout(() => {
      setLoading(false);
    }, 8000); // Change the delay as needed
  }, []);

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          {loading ? (
            <Loaders />
          ) : (
            homeplanData.map((item) => (
              <div key={item.id} className="col-md-3 col-12">
                <div className="card-container mt-5">
                  <div className="card-wrapper">
                    <div className="card-top">
                      <img className="image" src={item.imgUrl} alt="plantry" />
                    </div>
                    <div className="card-bottom">
                      <span className="top-text text-sm-end">{item.plantry}</span>
                      <br />
                      <span className="bottom-text text-sm-end">{item.aboutplan}</span>
                      <br />
                      <NavLink to={`/plandetail/${item.id}`} className="button">
                        Get it
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Carddi;
