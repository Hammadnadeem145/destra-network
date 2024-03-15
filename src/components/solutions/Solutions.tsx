import Image from "next/image";
import React from "react";

const Solutions = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between    mx-auto w-[80%] pt-20 ">
        <div className="w-[50%] flex justify-center">
          <Image src={"/ring.webp"} alt="/ring" width={550} height={550} />
        </div>
        <div className="w-[50%] space-y-4 p-6">
          <p className="text-[#FF0800] text-[16px]">Solutions</p>
          <p className="text-[35px]">
            Destra Network's{" "}
            <span className="text-[#FF0800]">Cutting-Edge</span> Solutions
          </p>
          <p className="text-[18px] text-[#3C3E41]">
            The range of innovative products is designed to provide users with a
            true decentralized experience of the internet.
          </p>

          <div className="text-[18px] font-semibold">
            <p>
              <span className="text-red-600"> ○ </span> Decentralized Cloud
              Solution
            </p>
            <p>
              <span className="text-red-600"> ○ </span>Destra GPU network
            </p>
            <p>
              <span className="text-red-600"> ○ </span> Advanced AI computing
              mechanisms
            </p>
            <p>
              <span className="text-red-600"> ○ </span> Decentralized ENS
              Gateway
            </p>
            <p>
              <span className="text-red-600"> ○ </span> Decentralized Storage
              Solutions
            </p>
            <p>
              <span className="text-red-600"> ○ </span> Distributed Network (
              Destra Net )
            </p>
            <p>
              <span className="text-red-600"> ○ </span> Decentralized DNS (
              Destra DNS )
            </p>
            <p>
              <span className="text-red-600"> ○ </span> Proof of Sync Consensus
            </p>
          </div>

          <p className="text-[18px] text-[#3C3E41]">
            {" "}
            Embark on a journey towards a decentralized future with Destra
            Network.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
