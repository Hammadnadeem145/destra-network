import Image from "next/image";
import React from "react";

const CloudSolutions = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col mx-auto w-[85%] pt-20 space-y-16">
        <div className="w-[60%] space-y-4">
          <p className="text-[44px]">
            Destra Network pioneering decentralized{" "}
            <span className="text-[#FF0800]">cloud solutions</span>
          </p>
          <p className="text-[18px] text-[#8A8F98]">
            Transcending the limitations of centralized controls and governance
            we are building one of a kind products to protect sanctity of Defi.
          </p>
        </div>
        <div className="flex justify-between space-x-5">
          <div
            className="  flex flex-col justify-center items-center w-[50%]  p-6  rounded-xl  space-y-2"
            style={{
              backgroundImage:
                "radial-gradient(circle at 80.6% 40.3%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)",
            }}
          >
            <p className="text-[22px] w-full">Destra DNS</p>
            <p className="text-[16px] text-[#8A8F98]">
              Our decentralized DNS solution, operates by linking Web3 domain
              names directly to file IDs in a decentralized storage network like
              IPFS, bypassing traditional IP address-based resolutions. This
              network relies on a distributed system of nodes run by our network
              validators for domain name resolution, eliminating the need for
              centralized authorities.
            </p>
            <div className="">
              <Image src={"/world.webp"} alt="/" height={400} width={400} />
            </div>
          </div>
          <div className="w-[50%] flex flex-col justify-between">
            <div
              className="   p-6 space-y-2  rounded-xl h-[200px] "
              style={{
                backgroundImage:
                  "radial-gradient(circle at 80.6% 40.3%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)",
              }}
            >
              <p className="text-[22px]">Destra Net</p>
              <p className="text-[16px] text-[#8A8F98]">
                DSync distributed computer network, where users can partake
                themselves, by allocating storage and processing power to
                Destra&#39;s distributed network and get rewarded.
              </p>
            </div>

            <div
              className="   p-6 space-y-2  rounded-xl h-[200px]   relative bg-cover bg-center"
              style={{ backgroundImage: 'url("waves.webp")' }}
            >
              <p className="text-[22px]">Destra&#39;s ENS Gateway</p>
              <p className="text-[16px] text-[#8A8F98]">
                To support Web3 unfriendly browsers like Chrome, Firefox, or
                Safari
              </p>

              <div className="flex items-center space-x-2 mx- px-3 py-2 rounded-3xl w-[20%] bg-white bg-opacity-5  border border-white border-opacity-10">
                <div className="w-2 h-2 rounded-full bg-green-700 " />
                <p> Dcn.live</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex
          justify-center items-center space-x-10
        "
        >
          <div className="w-[30%]">
            <p className="text-[20px]">Decentralized Cloud Solution</p>
            <p className="text-[16px] text-[#8A8F98]">
              Leveraging technologies like IPFS and ENS/Decentralized DNS. Our
              innovative setup ensures secure, reliable, and transparent network
              environments.
            </p>
          </div>

          <div className="w-0.5 h-24 bg-white" />
          <div className="w-[30%]">
            <p className="text-[20px] [h-24px]">DSync distributed network</p>
            <p className="text-[16px] text-[#8A8F98]">
              DSync distributed network, where users can partake themselves, by
              allocating storage and processing power to Destra's distributed
              network and get rewarded.
            </p>
          </div>

          <div className="w-0.5 h-24 bg-white" />

          <div className="w-[30%] -mt-6">
            <p className="text-[20px]">NFT/Gamify Storage Solution</p>
            <p className="text-[16px] text-[#8A8F98]">
              NFT’s can be stored on our true decentralized storage network,
              instead of the centralized web2 storage services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudSolutions;
