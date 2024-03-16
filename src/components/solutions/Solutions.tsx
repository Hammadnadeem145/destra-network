import Image from "next/image";
import React from "react";

const Solutions = () => {
  return (
    <div className="w-full">
      <div className="md:flex justify-between    mx-auto md:w-[80%] pt-20 ">
      <div className="md:w-[50%] flex justify-center mx-2 md:mx-0">
          <Image src={"/ring.webp"} alt="/ring" width={550} height={550} />
        </div>
        <div className="md:w-[50%] space-y-4 p-5">
          <p className="text-[#FF0800] text-[16px]">Solutions</p>
          <p className="md:text-[35px] text-2xl">
            Destra Network&#39;s{" "}
            <span className="text-[#FF0800]">Cutting-Edge</span> Solutions
          </p>
          <p className="text-[18px] text-[#8A8F98]">
            The range of innovative products is designed to provide users with a
            true decentralized experience of the internet.
          </p>

          <div className="text-[18px] font-semibold">
            <p>
              <span className="text-red-600 text-xs"> ○ </span> Decentralized Cloud
              Solution
            </p>
            <p>
              <span className="text-red-600 text-xs"> ○ </span>Destra GPU network
            </p>
            <p>
              <span className="text-red-600 text-xs"> ○ </span> Advanced AI computing
              mechanisms
            </p>
            <p>
              <span className="text-red-600 text-xs"> ○ </span> Decentralized ENS
              Gateway
            </p>
            <p>
              <span className="text-red-600 text-xs"> ○ </span> Decentralized Storage
              Solutions
            </p>
            <p>
              <span className="text-red-600 text-xs"> ○ </span> Distributed Network (
              Destra Net )
            </p>
            <p>
              <span className="text-red-600 text-xs"> ○ </span> Decentralized DNS (
              Destra DNS )
            </p>
            <p>
              <span className="text-red-600 text-xs"> ○ </span> Proof of Sync Consensus
            </p>
          </div>

          <p className="text-[18px] text-[#8A8F98]">
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
