import { myPic } from "../assets/images";
import { socialMedia } from "../constants";
import React, { useState } from "react";

const Hero = () => {
  // State to track which element should be visible
  const [visibleIconIndex, setVisibleIconIndex] = useState(null);

  // Function to handle mouse hover
  const showDetails = (index) => {
    setVisibleIconIndex(index);
  };

  const hideDetails = () => {
    setVisibleIconIndex(null);
  };

  return (
    <div className="max-container bg-dark-gray rounded-3xl padding-x flex flex-col justify-center items-center sm:max-w-[22rem] relative">
      <div className="bg-light-gray min-w-48 min-h-48 flex justify-center items-center rounded-3xl my-8">
        <div className="w-36 h-36 rounded-full overflow-hidden">
          <img
            src={myPic}
            alt="My Pic"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="text-center text-2xl font-bold font-montserrat leading-normal mb-8">
        Seyed Amir Reza <br /> Mousavinezhad
      </div>

      <div className="flex items-center gap-5 mb-8 px-2">
        {socialMedia.map((icon, index) => (
          <button
            key={index}
            onMouseEnter={() => showDetails(index)}
            className="flex justify-center items-center w-12 h-12 bg-light-gray rounded-full hover:scale-95 td"
          >
            <img src={icon.src} alt={icon.alt} width={24} height={24} />
          </button>
        ))}
      </div>

      {/* Independent container for icon.value elements */}
      <div className="absolute bottom-20  left-0 z-20 w-full flex justify-center">
        {socialMedia.map((icon, index) => (
          <div
            key={index}
            onMouseLeave={hideDetails}
            className={`absolute ${
              visibleIconIndex === index
                ? "flex opacity-100"
                : "hidden opacity-0"
            } w-[11.6rem] items-center justify-center text-center bg-light-gray rounded-lg p-3`}
          >
            {(icon.value = "gach")}
            {icon.value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
