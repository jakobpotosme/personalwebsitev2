import React from "react";

const SteppingStone = () => {
  return (
    <div className="flex flex-col gap-y-5 mx-auto xs:pt-2">
      <div className="flex flex-row gap-x-10 text-lg xs:text-sm xs:pt-2 xs:justify-center xs:items-center justify-between  w-[100%]  mx-auto xs:w-[100%] ">
        <h1 className="font-bold text-left mx-auto flex justify-start items-start w-full">
          Full Stack Web Developer
        </h1>
        <h1 className="text-[#14C38E] font-bold text-center md:text-right mx-auto">
          Founder
        </h1>
      </div>
      <span className="xs:font-medium xs:text-sm">October 2022 - Present</span>
      <span className="xs:text-sm">
        Successfully launched a career advancing platform with the help of
        modern technologies such as Next.js, Supabase, and Tailwind CSS.
        Capitalized on Supabase Auth Helpers to create a secure application.
        While also utilizing Next.js Api routes, server and client side
        rendering to efficiently load data creating an excellent experience for
        all users. Incorporated blockchain technologies by writing the smart
        contract in Solidity following best practices.
      </span>
    </div>
  );
};

export default SteppingStone;
