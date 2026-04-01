"use client";

import Image from "next/image";

const benefitsData = [
  {
    id: 1,
    title: "100% Authentic",
    image: "/images/home/benefit_bar/BadgeCheck.avif",
    description: "All our products are directly sourced from brands",
  },
  {
    id: 2,
    title: "Free Shipping",
    image: "/images/home/benefit_bar/Truck.avif",
    description: "On all orders above ₹299",
  },
  {
    id: 3,
    title: "Certified Beauty Advisors",
    image: "/images/home/benefit_bar/User.avif",
    description: "Get expert consultations",
  },
  {
    id: 4,
    title: "Easy Returns",
    image: "/images/home/benefit_bar/Package.avif",
    description: "Hassle-free pick-ups and refunds",
  },
];

export const BenefitBarSection = () => {
  return (
    <section className="bg-[#fcf1ed] px-4 py-12 rounded-lg">
      <div className="mx-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {benefitsData.map((benefit) => (
            <div
              key={benefit.id}
              className="flex flex-col items-start text-left"
            >
              {/* Icon Container */}
              <div className="relative w-10 h-10 mb-4">
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Content */}
              <div className="mt-2">
                <h3 className="text-base md:text-lg text-[#211A1E] font-medium">
                  {benefit.title}
                </h3>
                <p className="text-sm text-[#635E61] font-normal mt-2">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
