import { TiTick } from "react-icons/ti";

function Proof() {
  return (
    <div className="md:flex bg-[#161617] gap-x-6 items-center md:mx-16 mx-6 mt-20  p-10 rounded-2xl">
      <div className="basis-[70%]">
        {/* Title */}
        <h1 className="md:text-4xl text-3xl">
          <span className="text-[#ff0800]">Proof of Sync</span> consensus
        </h1>
        {/* Description */}
        <p className="pt-4 text-[#7f848c] text-justify">
          A unique mechanism to measure the resource usage (storage, computing,
          database) by each individual participant on the network and reward
          them accordingly.
        </p>
        {/* Icons with text */}
        <div className="md:flex space-y-3 md:space-y-0 gap-x-10 pt-4">
          {/* 1 */}
          <div className="flex items-center">
            <TiTick className="text-[#ff0800]" size={20} />
            Reward Users
          </div>
          {/* 2 */}
          <div className="flex items-center">
            <TiTick className="text-[#ff0800]" size={20} />
            Advanced AI Computing
          </div>
        </div>
      </div>
      {/* Buttons */}
      <div className="md:flex items-center gap-x-6 basis-[30%] ">
        {/* 1 */}
        <button className="md:px-5 px-3 py-1.5 w-full  flex  mt-6 md:mt-0 md:py-2 bg-white font-bold text-black rounded-md hover:bg-red-600 ">
          <p className="mx-auto">Participate Now</p>
        </button>
        {/* 2 */}
        <button className="mt-5 md:mt-0 px-7 w-full py-1.5 rounded-md md:py-4 md:px-8 bg-transparent text-white hover:bg-[#7f848c] border border-white">
          View Details
        </button>
      </div>
    </div>
  );
}

export default Proof;