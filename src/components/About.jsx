import React from "react";
import AboutCard from "./AboutCard";
import { abouts } from "../constants";

const About = () => {
  return (
    <main id="About" className="p-8 mt-8">
      <div className="mb-16">
        <h1 className="text-[36px] font-bold font-montserrat">Know Me</h1>
        <hr className="w-12 border-2 rounded-full border-dark-red" />
      </div>
      <div className="flex flex-wrap max-sm:flex-col justify-center gap-14 items-center">
        {abouts.map((prop, index) => (
          <AboutCard key={index} item={prop} />
        ))}
      </div>
    </main>
  );
};

export default About;
