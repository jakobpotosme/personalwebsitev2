import Image from "next/image";
import React, { useState } from "react";
import arrowDown from "../public/images/arrow-down.svg";
import { TiArrowDownOutline } from "react-icons/ti";
import { useSpring, animated } from "react-spring";

function Hero() {
  const props_1 = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },

    delay: 200,
  });
  const props_2 = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },

    delay: 1000,
  });
  const props_3 = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },

    delay: 1600,
  });

  return (
    <>
      <div className="flex flex-col mx-auto max-w-[90%] xs:min-h-[100vh] md:min-h-[100vh] min-h-[100vh]    justify-center items-start ">
        {/* <h1 className='font-regular text-2xl text-[#00A789]'>Hi, my name is</h1> */}
        <div className="">
          <animated.div
            style={props_1}
            className=" flex flex-col xs:gap-y-2 xs:pb-2 gap-y-4"
          >
            <h1 className="font-regular xs:text-lg text-2xl text-[#14C38E]">
              Hi, my name is
            </h1>

            <h1 className="font-bold text-6xl xs:text-2xl ">Jakob Potosme.</h1>
          </animated.div>

          <animated.div
            style={props_2}
            className=" flex flex-col xs:gap-y-3 gap-y-10 pt-4"
          >
            <h1 className="font-bold text-5xl xs:text-base text-gray-300  ">
              Using the web to make dreams a reality
            </h1>

            <p className="font-regular text-xl xs:text-sm">
              I’m a full stack developer specializing in building exceptional
              digital experiences.{" "}
            </p>
          </animated.div>
        </div>
        <div className="xs:hidden md:block flex mx-auto justify-center items-center pt-56">
          <animated.a style={props_3} href="#aboutme" className="">
            <TiArrowDownOutline
              size={56}
              className="animate-[bounce_2s_linear_infinite] fill-[#14C38E] "
            />
          </animated.a>
        </div>
      </div>

      {/* <a href='#aboutme' className='pt-20 pb-32 xs:pl-40' > */}
      {/* <Image  src={arrowDown} alt='arrow down' className='animate-[bounce_2s_linear_infinite] w-6 h-6 ' /> */}
      {/* <TiArrowDownOutline size={56} className='animate-[bounce_2s_linear_infinite] fill-[#14C38E] ' /> */}
      {/* </a> */}
    </>
  );
}

export default Hero;
