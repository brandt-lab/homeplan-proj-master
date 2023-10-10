import React, { useState } from "react";
import "../thumbsGallery/Thumbsgallery.css";
import homePlans from "../../assets/houseplan3.jpg";
import homePlans2 from "../../assets/houseplan4.jpg";
import homePlans3 from "../../assets/houseplan5.jpg";
import homePlans4 from "../../assets/houseplan6.jpg";
import homePlans5 from "../../assets/houseplan7.jpg";



function Thumbsgallerys({house}) {
  console.log(house.image)

  // const image = [
  //   { id: 0, value: homePlans },
  //   { id: 1, value: homePlans4 },
  //   { id: 2, value: homePlans3 },
  //   { id: 3, value: homePlans2 },
  //   { id: 4, value: homePlans4 },
  //   { id: 5, value: homePlans3 },
  //   { id: 6, value: homePlans5 },
  // ];
  const [sliderData, setSliderData] = useState(house.image[0]);
  const [val, setVal] =useState(0)

  const handleClick = (index) => {
    console.log(index);
    setVal(index)
    const slider = house.image[index];
    setSliderData(slider);
  };

  return (
    <div className="mt-5">
   <div className="inThumbgallery">
      <img src={sliderData.value} height="500" width="800"  className="imageData" />
   </div>
      <div className="flex_row">
        {house.image.map((data, i) => (
          <div className="thumbgallery"key={i}>
            <img
              
              src={data.value}
              onClick={() => handleClick(i)}
              height="70"
              width="100"
              className={sliderData.id == i ? "thumbgimage" : ""}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Thumbsgallerys;
