import React from "react";
import { check } from "../assets/icons";

const Timeline = ({ passed }) => {
  return (
    <main>
      <div className="flex h-full items-start mt-8 justify-start px-6">
        <div className="space-y-6 border-l-2 border-dashed border-light-gray">
          <div className="relative w-full">
            {passed.map((item, index) => (
              <div key={index}>
                <div className="relative">
                  <img
                    src={check}
                    className="absolute -top-1 z-10 -ml-[1.15rem] h-9 w-9 rounded-full"
                    alt=""
                  />
                  <div className="ml-6">
                    <h4 className="font-semibold text-lg font-montserrat text-white">
                      {item.title}
                    </h4>
                  </div>
                  <span
                    className="mt-1 pl-6 block text-sm font-palanquin font-semibold text-dark-red"
                    dangerouslySetInnerHTML={{
                      __html: item.year,
                    }}
                  ></span>
                  <div className="mt-2 pl-6 max-w-screen-sm font-palanquin text-md text-gray-300 mb-8">
                    <ul className="text-dark-white">
                      {Object.keys(item)
                        .filter((key) => key.startsWith("desc"))
                        .map((descKey, descIndex) => (
                          <>
                            <li
                              key={descIndex}
                              className="before:text-dark-red before:-ml-3 before:content-['\2022'] before:mr-2"
                              dangerouslySetInnerHTML={{
                                __html: item[descKey],
                              }}
                            ></li>
                            <br />
                          </>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Timeline;
