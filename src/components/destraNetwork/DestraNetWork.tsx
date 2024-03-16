import React from "react";

const DestraNetWork = () => {
  return (
    <div className="w-full h-full">
      <div className="md:flex md:flex-row flex flex-col-reverse justify-between    mx-auto md:w-[80%] pt-32">
        <div className="md:w-[50%] space-y-5 text-[#8A8F98] mx-6 md:mx-0">
          <p className=" text-[16px] text-[#8E0804] pt-7 md:pt-0">Destra Network</p>
          <p className="text-white md:text-[44px] text-4xl">
            A <span className="text-[#FF0800]">Beacon</span> of true
            decentralization
          </p>
          <p className="md:text-[18px] text-xl text-justify">
            DSync transforms the conventional web3 scene by seamlessly blending
            the and GPU network in a mutually the{" "}
            <span className="text-[#FF0800]">decentralized cloud solution</span>{" "}
            and <span className="text-[#FF0800]">GPU network</span> in a
            mutually beneficial arrangement. This harmonious interplay optimizes{" "}
            <span className="text-[#FF0800]">AI computation</span> to its peak
            efficiency. Unified as a single entity, all these elements converge
            to power the <span className="text-[#FF0800]">Destra Network</span>.
          </p>

          <p className="md:text-[18px] text-xl text-justify">
            DSync revolutionizes data storage and retrieval, transitioning from
            conventional location-based addressing to{" "}
            <span className="text-[#FF0800]">content-based addressing</span>.
            Our distributed network guarantees data permanence and distribution
            while mitigating risks linked to centralized servers. This is
            achieved through the utilization of cutting-edge technologies such
            as the InterPlanetary File System (IPFS), ENS,
            <span className="text-[#FF0800]"> Destra Nodes</span>, and{" "}
            <span className="text-[#FF0800]">
              Destra&#39;s Decentralized DNS
            </span>
            .
          </p>

          <p className="text-justify">
            Our decentralized infrastructure ensures that your applications are
            built on a truly decentralised, secure, reliable, and transparent
            network.
          </p>
        </div>

        <div className="md:w-[45%] mx-5 flex justify-end items-center">
          <video autoPlay loop muted playsInline className="object-cover">
            <source src="video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default DestraNetWork;
