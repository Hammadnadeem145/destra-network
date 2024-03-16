"use client";
import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import Link from "next/link";

const Navigation = () => {
  const [nav, setNav] = useState(true);
  return (
    <div className="w-full md:fixed md:bg-[#0A0A0B] md:z-10">
      <div className=" md:flex justify-between p-5 md:mx-10 items-center">
        <div className="flex justify-between items-center">
          <p className="font-bold md:text-2xl text-xl z-20">Destra Network</p>
          <div
            className="md:hidden text-2xl z-20"
            onClick={() => {
              setNav(!nav);
            }}
          >
            {nav ? <GiHamburgerMenu /> : <ImCross />}
          </div>
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
      {/* Overlay */}
      {!nav ? (
        <div className="md:hidden fixed top-0 left-0 h-[50%] bg-black z-10  w-[100%] flex flex-col pt-20 pl-7 gap-y-8 text-[#8A8F98]">
          <Link href={"/"} className="focus:text-red-500">
            About
          </Link>
          <Link href={"/"} className="focus:text-red-500">
            Products
          </Link>
          <Link href={"/"} className="focus:text-red-500">
            Contact
          </Link>
          <div className="px-5 py-1.5 w-24  bg-white font-bold text-black rounded-md">
            Launch
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Navigation;
