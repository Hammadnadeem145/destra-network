import Image from "next/image";
import React from "react";

const DestraNetWork = () => {
  return (
    <div className="w-full h-full">
      <div className="flex justify-between    mx-auto w-[80%] pt-32">
        <div className="w-[50%] space-y-5 text-[#8A8F98]">
          <p className=" text-[16px] text-[#8E0804]">Destra Network</p>

          <p className=" text-[44px]">
            A <span className="text-[#FF0800]">Beacon</span> of true
            decentralization
          </p>

          <p className=" text-[18px]">
            DSync transforms the conventional web3 scene by seamlessly blending
            the and GPU network in a mutually the{" "}
            <span className="text-[#FF0800]">decentralized cloud solution</span>{" "}
            and <span className="text-[#FF0800]">GPU network</span> in a
            mutually beneficial arrangement. This harmonious interplay optimizes{" "}
            <span className="text-[#FF0800]">AI computation</span> to its peak
            efficiency. Unified as a single entity, all these elements converge
            to power the <span className="text-[#FF0800]">Destra Network</span>.
          </p>

          <p className=" text-[18px]">
            DSync revolutionizes data storage and retrieval, transitioning from
            conventional location-based addressing to{" "}
            <span className="text-[#FF0800]">content-based addressing</span>.
            Our distributed network guarantees data permanence and distribution
            while mitigating risks linked to centralized servers. This is
            achieved through the utilization of cutting-edge technologies such
            as the InterPlanetary File System (IPFS), ENS,
            <span className="text-[#FF0800]"> Destra Nodes</span>, and{" "}
            <span className="text-[#FF0800]">Destra&#39;s Decentralized DNS</span>.
          </p>

          <p>
            Our decentralized infrastructure ensures that your applications are
            built on a truly decentralised, secure, reliable, and transparent
            network.
          </p>
        </div>

        <div className=" w-[45%] flex justify-end items-center ">
          <video autoPlay loop muted playsInline className=" object-cover">
            <source src="video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default DestraNetWork;
