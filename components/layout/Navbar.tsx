"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FiChevronRight } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { LiaUserCircle } from "react-icons/lia";

const Navbar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <nav className="flex items-center justify-between gap-12 py-2 border-b border-gray-200">
      {/* Navbar Left Side */}
      <div className="flex items-center gap-4 shrink-0">
        <Image
          src="/images/home/image.png"
          width={55}
          height={24}
          alt="App Logo"
          className="rounded-full"
          priority
        />
        <div className="text-xs text-[#211A1E] font-normal flex flex-col gap-0.5">
          <p>Welcome</p>
          <div>
            <Link href={"/"} className="flex items-center gap-0.5">
              Login / Sign Up{" "}
              <span>
                <FiChevronRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Animation Wrapper */}
      <div className="flex-1 flex items-center relative h-14 justify-end">
        {/* Navbar Title Items - Fades out in place without moving */}
        <div
          className={`absolute left-0 text-sm text-[#211A1E] font-medium flex items-center gap-12 transition-opacity duration-300 ${
            isExpanded ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <Link href={"/"} className="hover:font-normal hover:text-[#F00000]">
            Brands
          </Link>
          <Link href={"/"} className="hover:font-normal hover:text-[#F00000]">
            Tira Red
          </Link>
          <Link href={"/"} className="hover:font-normal hover:text-[#F00000]">
            Offers
          </Link>
          <Link href={"/"} className="hover:font-normal hover:text-[#F00000]">
            Top Shelf
          </Link>
          <Link href={"/"} className="hover:font-normal hover:text-[#F00000]">
            For You
          </Link>
        </div>

        {/* Navbar Search - Expands to the left */}
        <div
          className={`relative p-2 transition-all duration-300 ${
            isExpanded ? "w-full" : "w-[450px]"
          }`}
        >
          <CiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search"
            onFocus={() => setIsExpanded(true)}
            onBlur={() => setIsExpanded(false)}
            className="w-full rounded-lg border-spacing-0.5 border-gray-200 bg-black/5 px-8 py-3.5 text-sm text-gray-700 placeholder-gray-400 focus:border-black focus:ring-1 focus:ring-black outline-none"
          />
        </div>
      </div>

      {/* Navbar Right Side */}
      <div className="flex items-center gap-6 shrink-0">
        <HiOutlineShoppingBag className="w-5 h-5" />
        <div className="bg-[#fff3f3] p-2 rounded-full">
          <LiaUserCircle className="w-5 h-5 text-[#db0000]" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
