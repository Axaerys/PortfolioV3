import React from "react";
import PCard from "./PCard";
import { projects } from "../constants";

const Portfolio = () => {
  return (
    <main id="Portfolio" className="p-8 mt-8">
      <div className="mb-8">
        <h1 className="text-[36px] font-bold font-montserrat">Portfolio</h1>
        <hr className="w-12 border-2 rounded-full border-dark-red" />
      </div>
      <div className="flex flex-wrap max-sm:flex-col justify-around gap-5 items-center">
        {projects.map((prop, index) => (
          <PCard key={index} item={prop} />
        ))}
      </div>
    </main>
  );
};

export default Portfolio;
