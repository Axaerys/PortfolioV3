import React from "react";
import Timeline from "./Timeline";
import Skills from "./Skills";
import { education, experience, skills } from "../constants";
const Resume = () => {
  return (
    <main id="Resume" className="px-8 py-4">
      <div className="mb-8">
        <h1 className="text-[36px] font-bold font-montserrat">Resume</h1>
        <hr className="w-12 border-2 rounded-full border-dark-red" />
      </div>
      <div className="mb-8">
        <h3 className="text-xl font-montserrat font-bold mb-4">Education</h3>
        <Timeline passed={education}></Timeline>
      </div>
      <div className="mb-8">
        <h3 className="text-xl font-montserrat font-bold mb-4">Experience</h3>
        <Timeline passed={experience}></Timeline>
      </div>
      <div className="mb-8">
        <h3 className="text-xl font-montserrat font-bold mb-4">Skills</h3>
        <div className="flex max-md:flex-col max-lg:justify-center flex-wrap gap-5 mt-8 items-center justify-center ">
          {skills.map((prop, index) => (
            <Skills key={index} item={prop} />
          ))}
        </div>
      </div>
      <div className="mb-8 flex justify-center items-center ">
        <div className=" max-sm:w-48 w-[17rem] ">
          <a href="../assets/Resume.docx" download>
            <button class="relative z-40 w-full h-12 items-center justify-center flex gap-2 border-2 font-palanquin tracking-widest border-white text-white font-semibold text-lg rounded-lg px-4 py-2 hover:border-dark-red hover:text-dark-red td">
              Download CV
            </button>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Resume;
