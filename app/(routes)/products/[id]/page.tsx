"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { GoShareAndroid, GoVerified } from "react-icons/go";
import { FaAngleRight, FaPlus } from "react-icons/fa6";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Button";
import { TbTruckDelivery, TbTruckReturn } from "react-icons/tb";
import { MdLocationOn, MdOutlineDone } from "react-icons/md";
import { BiChevronDown } from "react-icons/bi";
import { CiStar } from "react-icons/ci";

const images = [
  "/images/single_product/big_image.jpg",
  "/images/single_product/image1.jpg",
  "/images/single_product/image2.jpg",
  "/images/single_product/image3.jpg",
  "/images/single_product/image4.jpg",
  "/images/single_product/image5.jpg",
  "/images/single_product/image6.jpg",
  "/images/single_product/image7.jpg",
  "/images/single_product/image8.jpg",
  "/images/single_product/image9.jpg",
  "/images/single_product/image10.jpg",
  "/images/single_product/image11.jpg",
];

const SHADES = [
  { id: 1, name: "Rose Berry", color: "#D17B7B", outOfStock: false },
  { id: 2, name: "Peach Fizz", color: "#F5978E", outOfStock: false },
  { id: 3, name: "Soft Coral", color: "#F2808A", outOfStock: true },
];

const THUMB_SIZE = 65;
const GAP = 12;
const ITEM_HEIGHT = THUMB_SIZE + GAP;
const VISIBLE_COUNT = 5;
const STEP = 2;
const VIEWPORT_HEIGHT = VISIBLE_COUNT * THUMB_SIZE + (VISIBLE_COUNT - 1) * GAP;

export default function SingleProduct() {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex + VISIBLE_COUNT < images.length)
      setStartIndex((prev) =>
        Math.min(prev + STEP, images.length - VISIBLE_COUNT),
      );
  };

  const handlePrev = () => {
    if (startIndex > 0) setStartIndex((prev) => Math.max(prev - STEP, 0));
  };

  const [isExpanded, setIsExpanded] = useState(false);
  const [isProductDescription, setIsProductDescription] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  // color dropdown states start here
  const [selectedShade, setSelectedShade] = useState(SHADES[1]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredShades = SHADES.filter((shade) =>
    shade.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleSelect = (shade: any) => {
    setSelectedShade(shade);
    setSearchTerm("");
    setIsOpen(false);
  };
  // color dropdown states end here

  const tooltipStyle =
    "px-5 py-2.5 md:py-3.5 text-xs sm:px-8 md:px-10 md:text-base lg:px-12 font-medium rounded-md transition-all text-[#211A1E] border border-[#c7c7c7] flex items-center gap-2";

  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-10 p-5 text-[#211A1E] font-medium">
      {/* LEFT SIDE */}
      <div className="flex gap-4 items-start">
        <div className="flex flex-col items-center gap-3">
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className={`p-1 ${startIndex === 0 ? "text-gray-300" : "text-black"}`}
          >
            <SlArrowUp size={18} />
          </button>

          <div
            style={{ height: `${VIEWPORT_HEIGHT}px`, width: `${THUMB_SIZE}px` }}
            className="overflow-hidden"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: `${GAP}px`,
                transform: `translateY(-${startIndex * ITEM_HEIGHT}px)`,
                transition: "transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {images.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(item)}
                  style={{
                    width: `${THUMB_SIZE}px`,
                    height: `${THUMB_SIZE}px`,
                    flexShrink: 0,
                  }}
                  className={`relative cursor-pointer overflow-hidden border transition-all ${
                    selectedImage === item
                      ? "border-black shadow-sm"
                      : "border-transparent bg-gray-50"
                  }`}
                >
                  <Image
                    src={item}
                    alt={`Thumbnail ${index}`}
                    fill
                    unoptimized
                    className="object-cover"
                    sizes="65px"
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            disabled={startIndex + VISIBLE_COUNT >= images.length}
            className={`p-1 ${
              startIndex + VISIBLE_COUNT >= images.length
                ? "text-gray-300"
                : "text-black"
            }`}
          >
            <SlArrowDown size={18} />
          </button>
        </div>

        <div className="flex-1 lg:h-[600px] md:h-[550px] sm:h-[500px] h-[450px] relative border border-[#eeeeee] overflow-hidden">
          <Image
            src={selectedImage}
            alt="Product Zoom"
            fill
            priority
            unoptimized
            quality={100}
            className="object-contain "
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute top-0.5 left-0.5 flex items-center gap-1.5 uppercase text-xs">
            <p className="backdrop-blur-md bg-[#f6f6f6] rounded-sm px-1.5 py-1 w-max">
              only
            </p>
            <p className="backdrop-blur-md bg-[#f6f6f6] rounded-sm px-1.5 py-1 w-max">
              only on tira
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-col gap-3">
        <p className="text-[10px] text-[#908C8E]  uppercase">
          Home / makeup / face / blush
        </p>
        <p className="text-sm text-[#635E61] font-normal underline">
          Huda Beauty
        </p>

        <div className="flex items-center justify-between gap-2">
          <h1 className="text-2xl ">
            Huda Beauty Blush Filter - Toasty Peach (7.5 g)
          </h1>
          <GoShareAndroid size={28} className="cursor-pointer" />
        </div>

        {/* Get for  */}
        <div className="relative">
          <div
            className="absolute -top-1.5 left-6 w-3 h-3 rotate-45 bg-[#e8d9c5]"
            style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
          />

          <div className="flex items-center justify-between gap-2 bg-gradient-to-br from-[#e8d9c5] to-[#f9f6f0] p-3 rounded-sm">
            <p className="text-lg">
              Get for <span className="font-bold">₹3,240</span> with coupon +
              offers
            </p>
            <FaAngleRight size={18} />
          </div>
        </div>

        {/* color dropdown */}
        <div className="w-full" ref={dropdownRef}>
          <p className="text-[17px] font-medium mb-3 text-black">
            Select Shade
          </p>

          <div className="relative border border-black p-[10px] flex items-center justify-between cursor-text">
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-3 w-full cursor-pointer"
            >
              <div
                className="w-5 h-5 rounded-full shrink-0"
                style={{ backgroundColor: selectedShade.color }}
              ></div>

              <input
                type="text"
                className="w-full outline-none text-[#211A1E]"
                placeholder={selectedShade.name}
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setIsOpen(true);
                }}
              />
            </div>
            <BiChevronDown
              className={`w-6 h-6 text-black transition-transform cursor-pointer ${isOpen ? "rotate-180" : ""}`}
            />

            {isOpen && (
              <div className="absolute top-full left-[-1px] right-[-1px] bg-white border border-black z-10 shadow-lg">
                {filteredShades.map((shade) => (
                  <div
                    key={shade.id}
                    className={`flex items-center gap-3 p-3 cursor-pointer ${selectedShade.id === shade.id ? "bg-[#dbdadb]" : ""}`}
                    onClick={() => handleSelect(shade)}
                  >
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: shade.color }}
                    ></div>
                    <span className="text-[16px]">{shade.name}</span>
                  </div>
                ))}
                {filteredShades.length === 0 && (
                  <div className="p-3 text-gray-500 text-sm">
                    No shades found
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="flex gap-3 items-center mt-3">
            {SHADES.map((shade) => {
              const isSelected = selectedShade.id === shade.id;
              return (
                <div
                  key={shade.id}
                  onClick={() => handleSelect(shade)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-all border border-[#c9c3c3] ${isSelected ? "border border-black" : ""}`}
                >
                  <div
                    className="w-[24px] h-[24px] rounded-full flex items-center justify-center"
                    style={{ backgroundColor: shade.color }}
                  >
                    {isSelected && (
                      <MdOutlineDone className="text-white" size={20} />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* button */}
        <div className="">
          <div className="flex items-center gap-2">
            <PrimaryButton />
            <SecondaryButton>Save to Wishlist</SecondaryButton>
          </div>
        </div>

        {/* Delivery Options */}
        <div
          className={`border border-[#c4c4c4] rounded-sm overflow-hidden text-sm transition-all duration-300 ${
            isExpanded ? "" : ""
          }`}
        >
          {/* Header Row - always visible */}
          <div
            className="flex items-center justify-between px-4 py-3 cursor-pointer"
            onClick={() => setIsExpanded((prev) => !prev)}
          >
            {/* Left: Label + Pincode */}
            <div className="flex items-center gap-2">
              <span className="text-lg">Delivery Options</span>
              <span className="flex items-center gap-0.5 bg-[#f6f6f6] rounded-sm px-2 py-1.5">
                <MdLocationOn size={16} />
                400013
              </span>
            </div>

            {/* Right: Change button */}
            <button
              className="flex items-center gap-0.5"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              Change
              <FaAngleRight size={14} />
            </button>
          </div>

          {/* Expanded Section */}
          <div className={` ${isExpanded ? "max-h-40" : "max-h-0"}`}>
            <div className="mx-2 mb-3 bg-[#f5f5f5] rounded-sm px-3 py-2">
              <div className="flex items-center gap-2 text-[#333333] font-bold">
                <TbTruckDelivery size={20} />
                <p>
                  Free Delivery{" "}
                  <span className="font-normal">- Get it by Wed 08 Apr</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Description and Details */}
        <div className="border border-[#c4c4c4] rounded-sm text-sm font-normal">
          {/* --- Product Description Section --- */}
          <div className="">
            <button
              onClick={() => setIsProductDescription(!isProductDescription)}
              className="w-full flex items-center justify-between px-4 py-3"
            >
              <span className="font-medium">Product Description</span>
              <div
                className={`transition-transform duration-300 ${isProductDescription ? "rotate-85" : "rotate-0"}`}
              >
                <FaPlus size={14} />
              </div>
            </button>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isProductDescription
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-5 leading-relaxed">
                  <p>
                    Get that just-pinched look with the Huda Beauty Blush
                    Filter...
                  </p>
                  <ul className="mt-3 list-disc pl-5 space-y-1">
                    <li>Lightweight liquid formula</li>
                    <li>Long-lasting blendable texture</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-[#c4c4c4]" />

          {/* --- Product Details Section --- */}
          <div>
            <button
              onClick={() => setIsDetailsOpen(!isDetailsOpen)}
              className="w-full flex items-center justify-between px-4 py-3"
            >
              <span className="font-medium">Product Details</span>

              <div
                className={`transition-transform duration-300 ${isDetailsOpen ? "rotate-85" : "rotate-0"}`}
              >
                <FaPlus size={14} />
              </div>
            </button>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isDetailsOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-4 pb-3 font-medium space-y-0.5">
                  <p className="grid grid-cols-2 items-center gap-2">
                    <span className="">Generic Name</span>
                    <span className="font-normal">Blush</span>
                  </p>
                  <p className="grid grid-cols-2 items-center gap-2">
                    <span className="">Shelf Life</span>
                    <span className="font-normal">36 Months</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 mt-2 text-sm">
          {/* 1st Tooltip - Default (Left Align) */}
          <div className="relative group inline-block">
            <p className={`${tooltipStyle} cursor-pointer`}>
              <GoVerified size={20} />
              <span className="font-medium">Authentic Products</span>
            </p>
            <TooltipSection tooltipText="This is a genuine product sold by an authorised seller of the brand." />
          </div>

          {/* 2nd Tooltip - Right Aligned Fixed */}
          <div className="relative group inline-block">
            <p className={`${tooltipStyle} cursor-pointer`}>
              <TbTruckReturn size={20} />
              <span className="font-medium">Easy Returns</span>
            </p>

            <TooltipSection
              className="right-0"
              tooltipText="Returns are accepted for unopened products in case of defects, damaged during delivery, expired, missing, or wrong products delivered. Return requests can be raised on the 'Orders' page within 15 days of delivery. Kindly refer our T&C for details."
            />
          </div>
        </div>

        {/* Sold section */}
        <p className="text-sm text-[#635E61] font-normal ">
          Sold by :{" "}
          <span className="text-[#211A1E] font-medium">
            RELIANCE RETAIL LIMITED
          </span>
        </p>

        <p className="text-sm px-3 py-[18px] bg-[#fcf2ef] rounded-sm flex items-center justify-between gap-2">
          Rate this product
          <span className="ml-2 text-[#dfa89e] flex items-center gap-0.5">
            <CiStar size={30} />
            <CiStar size={30} />
            <CiStar size={30} />
            <CiStar size={30} />
            <CiStar size={30} />
          </span>
        </p>
      </div>
    </div>
  );
}

interface TooltipSectionProps {
  tooltipText: ReactNode;

  className?: string;
}
export const TooltipSection: React.FC<TooltipSectionProps> = ({
  tooltipText,
  className,
}) => {
  return (
    <div
      className={`absolute top-full mt-1 hidden group-hover:block z-50 w-[300px] sm:w-[400px] md:w-[496px] ${className ? className : "left-0"}`}
    >
      {/* The Arrow */}
      <div
        className={`w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-[#1a1a1a] ${className?.includes("right-0") ? "ml-auto mr-4" : "ml-4"}`}
      ></div>

      {/* Tooltip Body */}
      <div className="bg-[#1a1a1a] text-white text-[13px] py-2 px-3 rounded-md shadow-lg leading-snug">
        {tooltipText}
      </div>
    </div>
  );
};
