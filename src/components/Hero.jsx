import { myPic } from "../assets/images";
import { socialMedia, locations } from "../constants";
import React, { useState } from "react";

const Hero = () => {
  // State to track which element should be visible
  const [infoText, setInfoText] = useState("Front-End Developer");

  // Function to handle mouse enter
  const handleMouseEnter = (index, value) => {
    setInfoText(value);
  };

  // Function to handle mouse leave
  const handleMouseLeave = () => {
    setInfoText("Front-End Developer");
  };

  // Function to handle copying text to clipboard
  const copyToClipboard = (value) => {
    navigator.clipboard.writeText(value).then(
      () => {
        alert(value + " copied to clipboard!");
      },
      (err) => {
        console.error("Failed to copy text: ", err);
      }
    );
  };

  return (
    <div className="max-container min-h-full bg-dark-gray rounded-3xl px-4 pt-4 flex flex-col justify-center items-center sm:w-[22rem] sm:max-w-[24rem]">
      <div className="bg-light-gray min-w-48 min-h-48 flex justify-center items-center rounded-3xl mb-4">
        <div className="w-36 h-36 bg-dark-gray rounded-full overflow-hidden">
          <img
            src={myPic}
            alt="My Pic"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="text-center text-2xl font-bold font-montserrat leading-normal mb-4">
        Seyed Amir Reza <br /> Mousavinezhad
      </div>

      <div>
        <div className="flex items-center gap-5 mb-4">
          {socialMedia.map((icon, index) => (
            <div
              className="relative"
              key={index}
              onMouseEnter={() => handleMouseEnter(index, icon.value)}
              onMouseLeave={handleMouseLeave}
              onClick={() => copyToClipboard(icon.value)}
            >
              <button className="flex justify-center items-center w-12 h-12 bg-light-gray rounded-full hover:scale-95 td">
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </button>
            </div>
          ))}
        </div>
        <div
          className="info-card text-wrap flex justify-center items-center mb-4
          bg-light-gray rounded-3xl p-3 font-palanquin"
        >
          {infoText}
        </div>
      </div>

      <hr className="w-52 mb-4 border-light-gray border-2 rounded-full" />

      <div>
        <div className="flex flex-col items-start gap-4">
          {locations.map((icon, index) => (
            <a
              className="relative flex gap-4 justify-center items-center hover:text-dark-red td"
              key={index}
              href={icon.link}
              target="_blank"
            >
              <button className="flex justify-center items-center w-12 h-12 bg-light-gray rounded-full hover:scale-95 td">
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </button>
              {/* Separate div for each icon.value */}
              <div
                dangerouslySetInnerHTML={{ __html: icon.value }}
                className="text-md text-center font-palanquin"
              ></div>
            </a>
          ))}
        </div>
      </div>
      <hr className="w-52 mt-4 border-light-gray border-2 rounded-full" />
      <nav className=" w-full max-container font-palanquin rounded-3xl px-2 py-3 flex gap-4 text-sm text-center justify-center items-end ">
        <a href="#Resume" className="hover:text-dark-red td">
          Resume
        </a>
        <a href="#Portfolio" className="hover:text-dark-red td">
          Portfolio
        </a>
        <a href="#About" className="hover:text-dark-red td">
          Know Me
        </a>
      </nav>
    </div>
  );
};

export default Hero;
