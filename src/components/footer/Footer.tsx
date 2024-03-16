import { FaLocationArrow } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { BsMedium } from "react-icons/bs";
function Footer() {
  return (
    <div className="md:flex justify-between md:mx-24 md:mt-32 mt-16 p-5 md:p-0">
      {/* Left */}
      <div>
        <h3 className="text-2xl font-semibold">Destra Network</h3>
        <p className="pt-4 text-[#848992]">
          Building a <span className="text-red-500">Decentralized</span> World
        </p>
        <p className="md:pt-12 pt-5  text-[#848992]">
          © 2024 Destra Network. All rights reserved.
        </p>
      </div>
      {/* Right */}
      <div>
        <div className="md:flex md:justify-end pt-6 md:pt-0 flex gap-x-5 text-2xl text-[#848992]">
          <FaLocationArrow className=" hover:text-red-500" />
          <FaTwitter className=" hover:text-red-500" />
          <TbBrandGithubFilled className=" hover:text-red-500" />
          <BsMedium className=" hover:text-red-500" />
        </div>
        <p className="md:pt-28 pt-10 md:pb-7 text-[#848992]">
          <span className="hover:text-red-500">Contact</span> :
          destranetwork@gmail.com
        </p>
      </div>
    </div>
  );
}

export default Footer;