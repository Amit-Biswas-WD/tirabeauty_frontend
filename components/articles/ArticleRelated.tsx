import Image from "next/image";
import { GoArrowRight } from "react-icons/go";

// Key er type defin ition
interface Article {
  category: string;
  title: string;
  read_time: string;
  date: string;
  image_path: string;
}

const products: Article[] = [
  {
    category: "TIRA LOVES",
    title: "8 body lotions designed to strengthen your skin barrier",
    read_time: "3 MIN READ",
    date: "16 APR '26",
    image_path: "/images/article/a_related_img1.jpg",
  },
  {
    category: "TIRA LOVES",
    title: "7 blue eyeliners to create your next Y2K beauty look",
    read_time: "3 MIN READ",
    date: "16 APR '26",
    image_path: "/images/article/a_related_img2.jpg",
  },
  {
    category: "TIRA LOVES",
    title: "8 body SPFs to add to your daily suncare routine",
    read_time: "3 MIN READ",
    date: "14 APR '26",
    image_path: "/images/article/a_related_img3.jpg",
  },
];

export const ArticleRelated = () => {
  return (
    <section className="bg-[#fff7f5] py-12 w-[100vw] relative left-1/2 right-1/2 -ml-[50vw] +mr-[50vw]">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-2xl font-medium mb-8 text-[#1a1a1a]">
          Related Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((item, index) => (
            <div key={index} className="flex gap-4 items-start">
              {/* Image Section */}
              <div className="relative h-[130px] w-[130px] shrink-0">
                <Image
                  src={item.image_path}
                  alt={item.title}
                  fill
                  className="object-cover rounded-md"
                  sizes="130px"
                />
              </div>

              {/* Content Section */}
              <div className="flex flex-col gap-2 font-normal text-[#211A1E]">
                <span className="text-[12px] tracking-wider">
                  {item.category}
                </span>
                <h3 className="text-[16px]">{item.title}</h3>
                <div className="flex items-center gap-2 text-[11px] text-[#908C8E] uppercase">
                  <span>{item.read_time}</span>
                  <span>•</span>
                  <span>{item.date}</span>
                </div>

                {/* Arrow Button */}
                <button className="mt-2 w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
                  <GoArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
