"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FiChevronRight } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { LiaUserCircle } from "react-icons/lia";

const categories = [
  { id: 2, label: "Makeup", href: "/sections/makeup" },
  { id: 3, label: "Skin", href: "/sections/skin" },
  { id: 4, label: "Hair", href: "/sections/hair" },
  { id: 6, label: "Men", href: "/sections/men" },
  { id: 7, label: "Bath & Body", href: "/sections/bath-body" },
];

export const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const router = useRouter();

  return (
    <>
      {/* ================= Navbar ================= */}
      <nav className="py-2 border-b border-gray-200 relative z-50 bg-white">
        <div className="flex items-center justify-between gap-12">
          {/* Left */}
          <div className="flex items-center gap-2 text-xs">
            {/* ☰ Mobile Menu Icon */}
            <div
              className="lg:hidden block cursor-pointer"
              onClick={() => setIsMenuOpen(true)}
            >
              <IoIosMenu className="w-6 h-6" />
            </div>

            <Image
              src="/images/home/image.png"
              width={55}
              height={24}
              alt="App Logo"
              className="rounded-full"
            />

            <div className="flex flex-col gap-0.5">
              <p>Welcome</p>
              <span className="flex items-center gap-0.5">
                <Link href="/auth/login">Login </Link>
                {"  "} /{"  "}
                <Link href="/auth/register">Sign Up</Link>{" "}
                <FiChevronRight className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Desktop Search */}
          <div className="hidden lg:flex flex-1 justify-end relative">
            <div
              className={`relative transition-all duration-300 ${
                isExpanded ? "w-full" : "w-[450px]"
              }`}
            >
              <CiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                onFocus={() => setIsExpanded(true)}
                onBlur={() => setIsExpanded(false)}
                className="w-full rounded-lg border bg-black/5 px-8 py-3 text-sm outline-none focus:ring-1 focus:ring-black"
              />
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-6">
            <CiSearch
              className="lg:hidden block w-6 h-6 cursor-pointer"
              onClick={() => setIsExpanded((p) => !p)}
            />
            <HiOutlineShoppingBag className="w-5 h-5" />
            <div
              onClick={() => router.push("/auth/login")}
              className="bg-[#fff3f3] p-2 rounded-full"
            >
              <LiaUserCircle className="w-5 h-5 text-[#db0000]" />
            </div>
          </div>
        </div>

        {/* Mobile Search */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-200 ${
            isExpanded ? "max-h-24 opacity-100 mt-3" : "max-h-0 opacity-0"
          }`}
        >
          <input
            type="text"
            placeholder="Search"
            className="w-full rounded-lg border bg-black/5 px-6 py-3 text-sm outline-none"
          />
        </div>
      </nav>

      {/* ================= Overlay ================= */}
      <div
        onClick={() => setIsMenuOpen(false)}
        className={`fixed inset-0 bg-black/40 transition-opacity duration-200 z-40 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* ================= Mobile Drawer ================= */}
      <aside
        className={`fixed top-0 left-0 h-full sm:w-[420px] w-[260px] bg-white z-50
        transform transition-transform duration-200
        ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <Image
            src="/images/home/image.png"
            width={50}
            height={24}
            alt="logo"
          />
          <IoIosClose
            className="w-7 h-7 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          />
        </div>

        {/* Drawer Menu */}
        <div className="flex flex-col p-2 gap-4 text-sm">
          {categories.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="border-b pb-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </aside>
    </>
  );
};
