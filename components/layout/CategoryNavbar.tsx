import Link from "next/link";

const categories = [
  { id: 1, label: "What's New", href: "/whats-new" },
  { id: 2, label: "Makeup", href: "/makeup" },
  { id: 3, label: "Skin", href: "/skin" },
  { id: 4, label: "Hair", href: "/hair" },
  { id: 5, label: "Fragrance", href: "/fragrance" },
  { id: 6, label: "Men", href: "/men" },
  { id: 7, label: "Bath & Body", href: "/bath-body" },
  { id: 8, label: "Tools & Appliances", href: "/tools-appliances" },
  { id: 9, label: "Mom & Baby", href: "/mom-baby" },
  { id: 10, label: "Wellness", href: "/wellness" },
  { id: 11, label: "Minis", href: "/minis" },
  { id: 12, label: "Homegrown", href: "/homegrown" },
  { id: 13, label: "Gifts", href: "/gifts" },
];

const CategoryNavbar = () => {
  return (
    <nav className="w-full py-3">
      <div className="flex items-center justify-between gap-4 overflow-x-auto no-scrollbar px-4">
        {categories.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="text-sm text-[#211A1E] font-medium hover:text-[#F00000] whitespace-nowrap transition-colors duration-200"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default CategoryNavbar;
