import Image from "next/image";
import React from "react";
import { LineChart, Github } from "lucide-react";

const Hero = () => {
  return (
    <div className="w-full ">
      <div className="flex justify-between    mx-auto w-[90%] pt-20">
        <div className="w-[50%] space-y-2 ">
          <p className="text-[55px]">Destra Network</p>
          <p className="text-4xl">
            Building a <span className="text-[#FF0800]">Decentralized</span>{" "}
            World
          </p>
          <p className="text-2xl text-[#8A8F98]">
            Destra Network offers a one-step solution for all your DePIN and AI
            computing needs.
          </p>

          <div className="text-md">
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

          <div className="flex pt-10 text-[20px ] font-semibold">
            <button className="flex items-center rounded-lg py-3 px-6 mr-4 bg-white text-black">
              <LineChart className="w-4 h-4 mr-2" />
              <span>Chart</span>
            </button>
            <button className="flex items-center rounded-md px-6 bg-black text-white">
              <Github className="w-4 h-4 mr-4" />
              <span>Gitbook</span>
            </button>
          </div>

          <div className="pt-10">
            <p className="">Ca: 0xf94e7d0710709388bce3161c32b4eea56d3f91cc</p>
          </div>
        </div>

        <div className="w-[50%] flex justify-end items-center pl-28 ">
          <Image src={"/hero.webp"} alt="/heroimg" height={600} width={600} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
