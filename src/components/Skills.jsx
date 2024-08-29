import React from "react";
import { check, mail } from "../assets/icons";
import { skills } from "../constants";

const Skills = ({ item }) => {
  return (
    <main className="flex items-center justify-between gap-10 max-sm:flex-col hover:scale-105 td">
      <div className="">
        <section className="w-[17rem]">
          <div className="flex items-center py-3 bg-light-gray rounded-3xl gap-2 p-4 w-full">
            <div className="w-14 bg-white rounded-full p-2">
              <img src={item.logo} alt="" className="" />
            </div>

            <div className="w-full flex flex-col gap-2">
              <div className="flex justify-between w-full gap-x-[2rem]">
                <h4 className="font-semibold text-md text-white flex items-start p-0 ">
                  {item.title}
                </h4>
                <p className="px-2 text-dark-red text-sm flex items-center">
                  {item.rating}
                </p>
              </div>
              <div className=" bg-white h-1.5 rounded-full w-full">
                <span
                  className="h-full bg-dark-red w-full block rounded-full"
                  style={{ width: item.rating }}
                ></span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Skills;

// grid-cols-2 gap-x-6
