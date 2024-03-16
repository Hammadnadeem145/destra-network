import Image from "next/image";
import React from "react";
import { LineChart, Github } from "lucide-react";

const Hero = () => {
  return (
    <div className="w-full ">
      <div className="md:flex md:flex-row flex flex-col-reverse justify-between mx-auto w-[90%] pt-20">
        <div className="md:w-[50%] space-y-2 ">
          <p className="md:text-[55px] text-[40px] pt-6 md:pt-0">
            Destra Network
          </p>
          <p className="md:text-4xl text-[30px]">
            Building a <span className="text-[#FF0800]">Decentralized</span>{" "}
            World
          </p>
          <p className="md:text-2xl text-[20px] text-[#8A8F98]">
            Destra Network offers a one-step solution for all your DePIN and AI
            computing needs.
          </p>

          <div className="md:text-md pt-3 text-justify">
            <p>
              At the core of DSync lies the power of{" "}
              <span className="text-[#FF0800]">Destra GPU network</span>,{" "}
              <span className="text-[#FF0800]">
                Destra decentralized cloud solution
              </span>
              , and{" "}
              <span className="text-[#FF0800]">
                advanced AI computing mechanisms
              </span>
              . Taking things to the next level by decentralizing their
              centralized aspects through Smart Contracts, IPFS,{" "}
              <span className="text-[#FF0800]">Destra Nodes, Destra DNS </span>
              and <span className="text-[#FF0800]"> Destra ENS Gateway</span>.
            </p>
          </div>

          <div className="flex md:flex-row md:items-center md:space-x-6 pt-10 text-[20px] font-semibold">
            <button className="flex mr-4 md:mr-0 items-center rounded-md py-2 px-6 bg-white text-black">
              <LineChart className="w-4 h-4 mr-2 md:mr-2 md:ml-0" />
              <span className="md:inline">Chart</span>
            </button>
            <button className="flex items-center rounded-md py-2 px-8 bg-transparent hover:bg-[#7f848c] text-white border border-white border-opacity-50">
              <Github className="w-4 h-4 mr-2 md:mr-2 md:ml-0" />
              <span className="md:inline">Gitbook</span>
            </button>
          </div>

          <div className="pt-10">
            <p className="">Ca: 0xf94e7d0710709388bce3161c32b4eea56d3f91cc</p>
          </div>
        </div>

        <div className="w-[100%] md:w-[50%] flex justify-end items-center">
          <Image src={"/hero.webp"} alt="/heroimg" height={600} width={600} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
