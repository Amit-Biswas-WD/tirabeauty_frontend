import Image from "next/image";
import { JSX } from "react";

interface TopBanner {
  id: number;
  title: string;
  image: string;
}

const topBanner: TopBanner[] = [
  {
    id: 1,
    title: "",
    image: "/images/home/top_banner_section/image1.webp",
  },
  {
    id: 2,
    title: "",
    image: "/images/home/top_banner_section/image2.webp",
  },
  {
    id: 3,
    title: "",
    image: "/images/home/top_banner_section/image3.jpeg",
  },
  {
    id: 4,
    title: "",
    image: "/images/home/top_banner_section/image4.jpeg",
  },
  {
    id: 5,
    title: "",
    image: "/images/home/top_banner_section/image5.jpeg",
  },
  {
    id: 6,
    title: "",
    image: "/images/home/top_banner_section/image6.webp",
  },
  {
    id: 7,
    title: "",
    image: "/images/home/top_banner_section/image7.webp",
  },
  {
    id: 8,
    title: "",
    image: "/images/home/top_banner_section/image8.webp",
  },
  {
    id: 9,
    title: "",
    image: "/images/home/top_banner_section/image9.jpeg",
  },
  {
    id: 10,
    title: "",
    image: "/images/home/top_banner_section/image10.jpeg",
  },
  {
    id: 11,
    title: "",
    image: "/images/home/top_banner_section/image11.jpeg",
  },
  {
    id: 12,
    title: "",
    image: "/images/home/top_banner_section/image12.jpeg",
  },
];

const TopCategories = (): JSX.Element => {
  return (
    <div className="container mx-auto grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 grid-cols-2 lg:gap-5 gap-4">
      {topBanner.map((items) => (
        <div
          key={items.id}
          className="relative h-[180px] w-full overflow-hidden"
        >
          <Image
            src={items.image}
            alt="Top Banner"
            fill
            className="object-cover"
            priority={items.id === 1}
          />
        </div>
      ))}
    </div>
  );
};

export default TopCategories;
