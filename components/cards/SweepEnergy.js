import React from "react";

const SweepEnergy = () => {
  return (
    <div className="flex flex-col gap-y-5 mx-auto xs:pt-2">
      <div className="flex flex-row gap-x-10 text-lg xs:text-sm xs:pt-2 xs:justify-center xs:items-center justify-between  w-[100%]  mx-auto xs:w-[100%] ">
        <h1 className="font-bold text-left mx-auto flex justify-start items-start w-full">
          Developer
        </h1>
        <h1 className="text-[#14C38E] font-bold text-center md:text-right mx-auto">
          Internship for Sweep Energy
        </h1>
      </div>
      <span className="xs:font-medium xs:text-sm">
        January 2021 - June 2021
      </span>
      <span className="xs:text-sm">
        Utilized website stack of MongoDB, Express, React, and NodeJS to create
        a web application for Sweep Energy’s clients, that they can install on
        their premises to collect and push time-series sensory information for
        existing industrial devices. Emphasized scalability and modularity of
        engineering design while incorporating third party APIs to ensure
        efficient,organized, and readable code
      </span>
    </div>
  );
};

export default SweepEnergy;
