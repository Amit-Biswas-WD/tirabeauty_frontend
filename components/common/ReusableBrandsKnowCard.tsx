import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";

interface BrandItem {
  id: number;
  image: string;
  title: string;
}

interface ReusableBrandsKnowCardProps {
  brandKnowData: BrandItem[];
}

export const ReusableBrandsKnowCard = ({
  brandKnowData,
}: ReusableBrandsKnowCardProps) => {
  return (
    <div className="bg-[#fcf1ed] rounded-lg pt-10 pb-6 px-3 my-20">
      <h3 className="text-2xl font-normal text-center pb-6">Brands To Know</h3>

      <div className="grid grid-cols-3 gap-4">
        {brandKnowData.map((brand) => (
          <div key={brand.id} className="col-span-1 flex flex-col h-full">
            <div className="relative h-[262px] w-full overflow-hidden">
              <Image
                src={brand.image}
                alt={brand.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <div className="flex flex-col flex-grow justify-between">
              <h3
                className={`text-xl font-normal pt-4 ${
                  brand.title.length > 55 ? "text-center" : "text-left"
                }`}
              >
                {brand.title}
              </h3>

              <button className="text-sm font-normal flex items-center gap-1 mt-auto mx-auto pt-4">
                Shop Now
                <FaAngleRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
