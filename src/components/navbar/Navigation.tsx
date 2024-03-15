"use client";
import React, { useState } from "react";

const Navigation = () => {
  // State to track active link
  const [activeLink, setActiveLink] = useState("Treatments");
  const [nav, setNav] = useState(true);

  // Function to handle click event on links
  const handleLinkClick = (link: any) => {
    setActiveLink(link);
  };

  return (
    <div className="w-full">
      <div className=" md:flex justify-between p-5 md:mx-10 items-center">
        <div className="flex justify-between items-center">
          <div
            className="md:hidden text-2xl z-10"
            onClick={() => {
              setNav(!nav);
            }}
          ></div>
          <p className="font-bold md:text-2xl text-3xl text-center md:text-left">
            Destra Network
          </p>
        </div>
        {/* nav items */}
        <div className="  hidden md:flex  items-center space-x-8 text-[#8A8F98] text-sm">
          <p className="cursor-pointer hover:text-red-500">About</p>
          <p className="cursor-pointer hover:text-red-500"> Products</p>
          <p className="cursor-pointer hover:text-red-500">Contact</p>
          <div className="px-4 py-1.5 bg-white cursor-pointer text-black rounded-md hover:bg-red-500 hover:text-white">
            Launch
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
