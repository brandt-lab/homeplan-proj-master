import React, { useEffect, useState } from "react";
import Thumbsgallery from "../../ui/thumbsGallery/Thumbsgallery";
import Desription from "../../ui/PlansDetaideDesription/Desription";
import Paymentfile from "../../ui/PaymentFile/Paymentfile";
import homeplanData from "../../assets/Data/homeplans";
import { useParams } from "react-router-dom";
import Loaders from "../../components/Loaders/Loaders";

function Plandetail() {
  const { params } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [singleplantIem, setSinglePlantItem] = useState(null);

  useEffect(() => {
    // Simulate an API call to fetch the data with a delay
    setTimeout(() => {
      const item = homeplanData.find((item) => item.id == params);
      setSinglePlantItem(item);
      setIsLoading(false);
    }, 1000); // Adjust the delay as needed
  }, [params]);

  return (
    <>
      <div className="container">
        <div className="row">
          {isLoading ? (
           <Loaders/>
          ) : (
            <>
              <div className="col-md-6">
                <Thumbsgallery house={singleplantIem} />
                <Desription desriptionhome={singleplantIem} />
              </div>
              <div className="col-md-6 col-12">
                <Paymentfile payment={singleplantIem} />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Plandetail;
