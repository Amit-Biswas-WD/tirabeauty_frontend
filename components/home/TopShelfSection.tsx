"use client";

import { ReusableTopShelfArticle } from "../common/ReusableTopShelfArticle";

const topShelfData = [
  {
    id: 1,
    category: "MAKEUP | HAIR | SKIN",
    title: "8 beauty launches in March that are on our radar RN",
    image: "/images/home/top_shelf/image3.png",
  },
  {
    id: 2,
    category: "MAKEUP",
    title: "8 base products that are ideal for mature skin",
    image: "/images/home/top_shelf/image2.jpg",
  },
  {
    id: 3,
    category: "SKIN",
    title: "A quick and easy guide to getting rid of puffy eyes",
    image: "/images/home/top_shelf/image1.jpg",
  },
  {
    id: 4,
    category: "MAKEUP | SKIN",
    title: "Beauty trends to recreate according to your zodiac sign",
    image: "/images/home/top_shelf/image4.jpg",
  },
  {
    id: 5,
    category: "SKIN",
    title: "10 hyaluronic acid serums for dewy, hydrated glass skin",
    image: "/images/home/top_shelf/image5.jpg",
  },
];

export const TopShelfSection = () => {
  return (
    <div>
      <ReusableTopShelfArticle brandKnowData={topShelfData} />
    </div>
  );
};
