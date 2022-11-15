import React, { useState, useRef, useEffect } from "react";
import SweepEnergy from "./cards/SweepEnergy";
import Smolpad from "./cards/Smolpad";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import autoAnimate from "@formkit/auto-animate";
import SteppingStone from "./cards/SteppingStone";

const Experience = () => {
  const [toggle, setToggle] = useState(1);
  const parent = useRef(null);

  const toggleTab = (index) => {
    setToggle(index);
  };

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  return (
    <>
      <div className="flex xs:hidden md:block flex-col gap-y-2 pb-56 max-w-[90%] mx-auto ">
        <div className="relative flex py-5 items-center gap-x-6">
          <span className="flex-shrink xs:text-lg text-2xl font-bold">
            Experience
          </span>
          <div className="w-1/3 border-t border-white"></div>
        </div>

        <div className="flex flex-row gap-x-10">
          <div className="">
            <ul className="">
              <li
                className={
                  toggle === 1
                    ? ` flex flex-row border-l-4 border-[#14C38E] bg-[#10223E] p-2`
                    : ` flex flex-row border-l-4 border-slate-700  p-2 `
                }
              >
                {/* <div className='border-l-4 border-slate-700 p-2'></div> */}
                <button
                  onClick={() => {
                    toggleTab(1);
                  }}
                  className="w-full p-4  text-[#14C38E] "
                >
                  SweepEnergy
                </button>
              </li>
              <li
                className={
                  toggle === 2
                    ? ` flex flex-row border-l-4 border-[#14C38E] bg-[#10223E] p-2`
                    : ` flex flex-row border-l-4 border-slate-700  p-2 `
                }
              >
                <button
                  onClick={() => {
                    toggleTab(2);
                  }}
                  className="w-full p-4   text-[#14C38E]"
                >
                  Smolpad
                </button>
                {/* Smolpad */}
              </li>
              <li
                className={
                  toggle === 3
                    ? ` flex flex-row border-l-4 border-[#14C38E] bg-[#10223E] p-2`
                    : ` flex flex-row border-l-4 border-slate-700  p-2 `
                }
              >
                <button
                  onClick={() => {
                    toggleTab(3);
                  }}
                  className="w-full p-4   text-[#14C38E]"
                >
                  Stepping Stone
                </button>
                {/* Smolpad */}
              </li>
            </ul>
          </div>
          <div ref={parent}>
            {toggle === 1 && <SweepEnergy />}
            {toggle === 2 && <Smolpad />}
            {toggle === 3 && <SteppingStone />}
          </div>
        </div>
      </div>
      {/* // XS Screen */}
      <div className=" xs:block md:hidden hidden flex-col gap-y-4  xs:pt-32  max-w-[90%] mx-auto ">
        {/* <div className="relative flex py-5 items-center gap-x-6">
          <span className="flex-shrink xs:text-base  font-bold">
            Experience
          </span>
          <div className="w-1/3 border-t border-white"></div>
        </div> */}
        <h1 className="text-lg border-b font-medium pt-10 text-center">
          Experience
        </h1>

        <div className="flex flex-col gap-x-10 pt-5">
          <div className="pt-4">
            <ul className="flex flex-row text-sm w-full mx-auto ">
              <li
                className={
                  toggle === 1
                    ? ` flex flex-row border-b-2 mt-2 mx-auto w-full border-[#14C38E] bg-[#10223E] p-2`
                    : ` flex flex-row border-b-2 mt-2 mx-auto w-full  border-slate-700  p-2 `
                }
              >
                {/* <div className='border-l-4 border-slate-700 p-2'></div> */}
                <button
                  onClick={() => {
                    toggleTab(1);
                  }}
                  className="w-full p-2  text-[#14C38E] "
                >
                  Sweep Energy
                </button>
              </li>
              <li
                className={
                  toggle === 2
                    ? ` flex flex-row border-b-2 mt-2 mx-auto w-full border-[#14C38E] bg-[#10223E] p-2`
                    : ` flex flex-row border-b-2 mt-2 mx-auto w-full border-slate-700  p-2 `
                }
              >
                <button
                  onClick={() => {
                    toggleTab(2);
                  }}
                  className="w-full p-2  hover:bg-[#10223E] text-[#14C38E] "
                >
                  Smolpad
                </button>
                {/* Smolpad */}
              </li>
              <li
                className={
                  toggle === 3
                    ? ` flex flex-row border-b-2 mt-2 mx-auto w-full border-[#14C38E] bg-[#10223E] p-2`
                    : ` flex flex-row border-b-2 mt-2 mx-auto w-full border-slate-700  p-2 `
                }
              >
                <button
                  onClick={() => {
                    toggleTab(3);
                  }}
                  className="w-full p-2  hover:bg-[#10223E] text-[#14C38E] "
                >
                  Stepping Stone
                </button>
                {/* Smolpad */}
              </li>
            </ul>
          </div>
          <div ref={parent}>
            {toggle === 1 && <SweepEnergy />}
            {toggle === 2 && <Smolpad />}
            {toggle === 3 && <SteppingStone />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
