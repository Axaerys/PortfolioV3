import React from "react";
import { myPic } from "../assets/images";
import LaptopMockUp from "./LaptopMockUp";

const PCard = ({ item }) => {
  return (
    <main>
      <div class="relative flex flex-col justify-center hover:scale-105 td">
        <div class="mx-auto max-w-screen-xl w-full">
          <div class="w-full ">
            <div class="relative flex flex-col shadow-md pt-4 rounded-3xl border-2 border-light-gray overflow-hidden max-w-sm">
              <div class="h-auto overflow-hidden">
                <div class="h-64 overflow-hidden relative flex items-center justify-center">
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="w-full h-full px-8 py-10 object-contain"
                  />
                </div>
              </div>
              <div class="from-light-gray to-dark-gray bg-gradient-to-t pb-6 pt-2 px-8">
                <h1 class="text-2xl mb-2 font-bold font-montserrat text-white">
                  {item.title}
                </h1>
                <h3 class="text-xs font-medium text-gray-300 font-palanquin mb-4">
                  {item.desc}
                </h3>
                <div className=" w-[6.8rem]">
                  <a href={item.link} target="_blank">
                    <button class="relative z-40 flex gap-2 border-2 font-palanquin border-white text-white font-semibold text-sm rounded-lg px-4 py-2 hover:border-dark-red hover:text-dark-red td">
                      View Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PCard;
