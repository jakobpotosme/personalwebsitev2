import Image from "next/image";
import React from "react";
import linkedIn from "../public/images/linkedin.svg";
import twitter from "../public/images/twitter.svg";
import github from "../public/images/github2.svg";

import { RiLinkedinLine, RiTwitterLine, RiGithubLine } from "react-icons/ri";
import { IoAnalytics } from "react-icons/io5";
import { Tooltip } from "react-tippy";

function GetInTouch() {
  return (
    <div className="relative flex py-32 flex-col justify-center items-center mx-auto  max-w-[90%] ">
      <span className="text-center xs:text-lg  text-4xl font-bold pb-12">
        Get In Touch
      </span>

      <p className=" w-3/4 pb-12 text-center xs:text-sm xl:text-lg">
        I am currently seeking new web development opportunities where I can
        make an impact and grow as a developer.{" "}
      </p>
      <p className=" w-3/4 pb-12 text-center xs:text-sm xl:text-lg">
        Feel free to contact me below. Whether you have a question or just want
        to say hi, I’ll try my best to get back to you!
      </p>
      <a
        href={`mailto:jpotosme@ucmerced.edu`}
        className="border border-[#00A789] hover:bg-[#007583]/30  pt-4 rounded-lg p-4 xs:p-2 xs:text-sm"
      >
        Contact Me
      </a>

      <div className="mt-12 flex flex-row xs:hidden ">
        {/* <!-- Contact info --> */}

        {/* <!-- Socials --> */}
        <div className="flex pl-2 space-x-6">
          {/* <!-- Linked In --> */}
          <Tooltip
            title="Find me on LinkedIn"
            position="bottom"
            trigger="mouseenter "
            arrow={true}
          >
            <a href="https://www.linkedin.com/in/jakob-potosme/">
              <RiLinkedinLine size={42} className="hover:fill-[#00A789] " />
            </a>
          </Tooltip>

          <Tooltip
            title="My personal twitter account"
            position="bottom"
            trigger="mouseenter "
            arrow={true}
          >
            {/* <!-- Twitter --> */}
            <a href="https://twitter.com/TheJMan209">
              <RiTwitterLine size={42} className=" hover:fill-[#00A789]" />
            </a>
          </Tooltip>

          <Tooltip
            title="Find my projects here"
            position="bottom"
            trigger="mouseenter "
            arrow={true}
          >
            <a href="https://github.com/jakobpotosme">
              <RiGithubLine size={42} className=" hover:fill-[#00A789]" />
            </a>
          </Tooltip>

          <Tooltip
            title="Analytics for jakobpotosme.com"
            position="bottom"
            trigger="mouseenter "
            arrow={true}
          >
            <a
              href={`https://umami-production-e1da.up.railway.app/share/aivQqMnY/Personal%20Site`}
            >
              <IoAnalytics size={42} className=" hover:fill-[#00A789]" />
            </a>
          </Tooltip>
        </div>
      </div>

      {/* XS SCREENS */}

      <div className="mt-12 flex flex-row md:hidden lg:hidden xl:hidden xxl:hidden">
        {/* <!-- Contact info --> */}

        {/* <!-- Socials --> */}
        <div className="flex pl-2 space-x-6">
          {/* <!-- Linked In --> */}
          <Tooltip
            title="Find me on LinkedIn"
            position="bottom"
            trigger="mouseenter "
            arrow={true}
          >
            <a href="https://www.linkedin.com/in/jakob-potosme/">
              <RiLinkedinLine size={25} className="hover:fill-[#00A789] " />
            </a>
          </Tooltip>

          <Tooltip
            title="My personal twitter account"
            position="bottom"
            trigger="mouseenter "
            arrow={true}
          >
            {/* <!-- Twitter --> */}
            <a href="https://twitter.com/TheJMan209">
              <RiTwitterLine size={25} className=" hover:fill-[#00A789]" />
            </a>
          </Tooltip>

          <Tooltip
            title="Find my projects here"
            position="bottom"
            trigger="mouseenter "
            arrow={true}
          >
            <a href="https://github.com/jakobpotosme">
              <RiGithubLine size={25} className=" hover:fill-[#00A789]" />
            </a>
          </Tooltip>

          <Tooltip
            title="Analytics for jakobpotosme.com"
            position="bottom"
            trigger="mouseenter "
            arrow={true}
          >
            <a
              href={`https://umami-production-e1da.up.railway.app/share/aivQqMnY/Personal%20Site`}
            >
              <IoAnalytics size={25} className=" hover:fill-[#00A789]" />
            </a>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
