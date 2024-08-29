import React from "react";
import { check } from "../assets/icons";

const AboutCard = ({ item }) => {
  return (
    <main className="hover:scale-105 td">
      <div className="w-96 h-48 max-sm:w-72 max-sm:h-64  bg-light-gray rounded-3xl flex flex-col max-md:items-center justify-center p-5">
        <div className=" w-16 h-16  max-sm:w-14 max-sm:h-14 p-2  bg-dark-red rounded-xl relative -top-6 max-md:-top-8 ">
          <img src={item.logo} alt={item.alt} />
        </div>
        <div className="flex justify-center items-center flex-col relative -top-[2.75rem] max-sm:-top-4 gap-5">
          <h1 className=" text-xl font-bold font-montserrat">{item.title}</h1>
          <p className="text-md text-gray-300 flex items-center justify-center">
            {item.desc}
          </p>
        </div>
      </div>
    </main>
  );
};

export default AboutCard;
