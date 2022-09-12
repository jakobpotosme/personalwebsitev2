import React from "react";

const Smolpad = () => {
  return (
    <div className="flex flex-col gap-y-5 mx-auto xs:pt-2">
      <div className="flex flex-row gap-x-10 text-lg xs:text-sm xs:pt-2 xs:justify-center xs:items-center justify-between  w-[100%]  mx-auto xs:w-[100%] ">
        <h1 className="font-bold text-left mx-auto flex justify-start items-start w-full">
          Developer
        </h1>
        <h1 className="text-[#14C38E] font-bold text-center md:text-right mx-auto">
          Smolpad
        </h1>
      </div>
      <span className="xs:font-medium xs:text-sm">
        February 2022 - June 2022
      </span>
      <span className="xs:text-sm">
        Sole developer for a Web3 launchpad built to create high quality
        experiences for the community. Full stack Next.js and React application
        optimized by utilizing static site generation and server side rendering
        when needed leading to incredible load times with dynamic performance. I
        also worked alongside a UX expert to improve navigational and overall
        user experience throughout the application.
      </span>
    </div>
  );
};

export default Smolpad;
