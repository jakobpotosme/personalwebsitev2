import Image from "next/image";
import Link from "next/link";
import React from "react";
import rocket from "../public/images/rocket.gif";
import preview from "../public/images/smolpadPreview.png";
import externalLink from "../public/images/external-link.svg";
import { BiLinkExternal } from "react-icons/bi";
import Slider from "react-slick";
import Colors from "../public/images/Colors_preview.png";
import Hub3 from "../public/images/hub3_preview.png";
import { projects } from "../constants/projects";
import ProjectCard from "./cards/ProjectCard";

const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  autoPlay: true,
  speed: 500,
  arrows: true,
};

const Featured = () => {
  return (
    <>
      <div className="xs:hidden flex flex-col gap-y-2  max-w-[90%] mx-auto py-32  ">
        <div className="relative flex py-5 items-center gap-x-6">
          <span className="flex-shrink text-2xl font-bold">
            Featured Project
          </span>
          <div className="w-1/3 border-t border-white"></div>
        </div>

        <div className="flex flex-row items-center  ">
          <div className="mr-24">
            <Image src={rocket} alt="Rocket gif" width={400} height={400} />
          </div>

          <div className="flex flex-col gap-y-4">
            <h1 className="text-2xl font-semibold">Smolpad</h1>
            <h3 className="text-lg ">
              A Web3 launchpad built to create high quality experiences while
              providing security for the community
            </h3>

            <div className="rounded flex items-end">
              <a href={"https://www.smolpad.lol/"} passhref="true">
                <Image
                  src={preview}
                  alt="preview"
                  width={800}
                  height={250}
                  className="rounded-xl"
                ></Image>
                {/* <Image src={externalLink} alt='link' width={25} height={25} /> */}
              </a>
            </div>

            {/* <div className="flex gap-x-6 justify-end items-center">
              <h1 className="text-xl font-semibold pt-2">Side Projects</h1>
              <a
                href={"https://github.com/jakobpotosme?tab=repositories"}
                passhref="true"
                className="pt-2"
              >
                
                <BiLinkExternal size={20} className=" hover:fill-[#00A789]" />
              </a>
            </div> */}
          </div>
        </div>
        <div className="flex flex-col gap-x-6 gap-y-20 justify-center items-center py-10">
          <div>
            <h1 className="text-2xl font-semibold  pt-2 text-center">
              Notable Side Projects
            </h1>
            <div className="border-b pt-2"></div>
          </div>

          <div className="grid grid-cols-2 gap-x-20 gap-y-4 ">
            <div className="flex flex-col gap-y-2">
              <h1 className="text-base font-semibold text-center xl:text-xl">
                Dynamic Month NFT: Colors
              </h1>
              <p className="text-left xl:text-lg">
                Project I created that allows users to mint their first NFT,
                token will vary depending on what the current month is.
                Technologies used throughout this project include Next.js, React
                Moralis, Solidity, Hardhat, The Graph Protocol and Pinata.
              </p>
            </div>
            <Link
              href="https://dynamic-month-nft-front-end.vercel.app/"
              className="cursor-pointer"
            >
              <Image
                src={Colors}
                alt="preview"
                width={700}
                height={400}
                className="rounded-xl "
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-x-20 gap-y-4 ">
            <Link href="https://hub3.vercel.app/" className="cursor-pointer">
              <Image
                src={Hub3}
                alt="preview"
                width={700}
                height={400}
                className="rounded-xl "
              />
            </Link>
            <div className="flex flex-col gap-y-2">
              <h1 className="text-base font-semibold text-center xl:text-xl">
                Hub3
              </h1>
              <p className="text-left xl:text-lg">
                A central hub where users can track crypto prices as well as
                view details for the nfts that they own. Technologies involved
                were primarily Next.js, React interacting with CoinGecko Api and
                Alchemy SDK.
              </p>
            </div>
          </div>

          {/* <a
            href={"https://github.com/jakobpotosme?tab=repositories"}
            passhref="true"
            className="pt-2"
          >
            
            <BiLinkExternal size={20} className=" hover:fill-[#00A789]" />
          </a> */}
        </div>
      </div>

      {/* XS SCREEN */}
      <div className="flex flex-col gap-y-2 mx-auto pt-32 xs:max-w-[90%] md:hidden lg:hidden xl:hidden  ">
        <h1 className="text-lg border-b font-medium pt-10 text-center">
          Featured Project
        </h1>

        <div className="flex flex-1 flex-row justify-center items-center mx-auto">
          <h1 className="text-lg font-semibold text-center ">Smolpad</h1>
          <div className="pt-2">
            <Image src={rocket} alt="Rocket gif" width={50} height={50} />
          </div>
        </div>

        <p className="text-sm text-center">
          A Web3 launchpad built to create high quality experiences while
          providing security for the community
        </p>
        <div className="rounded flex items-end pt-4">
          <a href={"https://www.smolpad.lol/"} passhref="true">
            <Image
              src={preview}
              alt="preview"
              width={600}
              height={200}
              className="rounded-xl"
            ></Image>
            {/* <Image src={externalLink} alt='link' width={25} height={25} /> */}
          </a>
        </div>

        {/* Side Projects */}
        <h1 className="text-base  font-medium pt-10 text-center">
          Side Projects
        </h1>
        <a
          href={"https://github.com/jakobpotosme?tab=repositories"}
          passhref="true"
          className="pt-2 flex justify-center items-center"
        >
          {/* <Image src={externalLink} alt='link' width={25} height={25} quality={100} />
           */}
          <BiLinkExternal size={20} className=" hover:fill-[#00A789]" />
        </a>
      </div>
    </>
  );
};

export default Featured;
