export interface ProductItem {
  id: number;
  brand: string;
  title: string;
  image: string;
  category?: string;
  price: number;
  regularPrice: number;
  discount: string;
  offer: string;
  rating: number;
  review_count: number;
}

export const AllProductData: Record<string, ProductItem[]> = {
  makeUp: [
    {
      id: 1,
      brand: "Huda Beauty",
      title: "Huda Beauty Easy Bake Duo Loose Powder - Cherry Pie (20g)",
      image: "/images/section/makeup/p_img1.jpg",
      category: "makeup",
      price: 3250,
      regularPrice: 3250,
      discount: "0% Off",
      offer: "1 offer",
      rating: 4.8,
      review_count: 120
    },
    {
      id: 2,
      brand: "NARS",
      title: "NARS Powder Blush - Devilish (4.8 g)",
      image: "/images/section/makeup/p_img2.jpg",
      category: "makeup",
      price: 3300,
      regularPrice: 3300,
      discount: "0% Off",
      offer: "1 offer",
      rating: 4.7,
      review_count: 95
    },
    {
      id: 3,
      brand: "Huda Beauty",
      title: "Huda Beauty Easy Bake Airbrush Matte Pressed Powder - Peach",
      image: "/images/section/makeup/p_img3.jpg",
      category: "makeup",
      price: 0.01,
      regularPrice: 2500,
      discount: "99% Off",
      offer: "1 offer",
      rating: 4.5,
      review_count: 50
    },
    {
      id: 4,
      brand: "PAC",
      title: "PAC Glow-from-within Essentials Combo",
      image: "/images/section/makeup/p_img4.jpg",
      category: "makeup",
      price: 2541,
      regularPrice: 2990,
      discount: "15% Off",
      offer: "1 offer",
      rating: 4.6,
      review_count: 110
    },
    {
      id: 5,
      brand: "PAC",
      title: "PAC Eyeconic Limited Edition Brush Kit - Rose Gold (15 Pcs)",
      image: "/images/section/makeup/p_img5.jpg",
      category: "makeup",
      price: 4045,
      regularPrice: 4495,
      discount: "10% Off",
      offer: "1 offer",
      rating: 4.9,
      review_count: 230
    },
    {
      id: 6,
      brand: "PAC",
      title: "PAC Pro-Xclusive Brush Series (32 pcs)",
      image: "/images/section/makeup/p_img6.jpg",
      category: "makeup",
      price: 9305,
      regularPrice: 9795,
      discount: "5% Off",
      offer: "1 offer",
      rating: 4.8,
      review_count: 45
    },
    {
      id: 7,
      brand: "KRYOLAN",
      title: "KRYOLAN Supracolor Foundation - 303 (8 ml)",
      image: "/images/section/makeup/p_img7.jpg",
      category: "makeup",
      price: 846,
      regularPrice: 900,
      discount: "6% Off",
      offer: "1 offer",
      rating: 4.4,
      review_count: 78
    }
  ],
  skin: [
    {
      id: 1,
      brand: "TIRTIR",
      title: "TIRTIR Milk Skin Toner Light (20 ml)",
      image: "/images/section/skin/p_img1.jpg",
      category: "skin",
      price: 297,
      regularPrice: 350,
      discount: "15% Off",
      offer: "1 offer",
      rating: 4.7,
      review_count: 85
    },
    {
      id: 2,
      brand: "COSRX",
      title: "COSRX The 6 Peptide Skin Booster Serum (150 ml)",
      image: "/images/section/skin/p_img2.jpg",
      category: "skin",
      price: 1742,
      regularPrice: 2050,
      discount: "15% Off",
      offer: "1 offer",
      rating: 4.8,
      review_count: 120
    },
    {
      id: 3,
      brand: "WishCare",
      title: "WishCare Niacinamide Oil-Balance Sunscreen",
      image: "/images/section/skin/p_img3.jpg",
      category: "skin",
      price: 394,
      regularPrice: 499,
      discount: "21% Off",
      offer: "1 offer",
      rating: 4.5,
      review_count: 65
    },
    {
      id: 4,
      brand: "Plum",
      title: "Plum 3% Niacinamide Alcohol-Free Toner With Rice Water",
      image: "/images/section/skin/p_img4.jpg",
      category: "skin",
      price: 396,
      regularPrice: 440,
      discount: "10% Off",
      offer: "1 offer",
      rating: 4.6,
      review_count: 150
    },
    {
      id: 5,
      brand: "Beauty of Joseon",
      title: "Beauty of Joseon Relief Sun Aqua-fresh Rice + B5",
      image: "/images/section/skin/p_img5.jpeg",
      category: "skin",
      price: 1200,
      regularPrice: 1500,
      discount: "20% Off",
      offer: "1 offer",
      rating: 4.9,
      review_count: 210
    },
    {
      id: 6,
      brand: "SKIN1004",
      title: "SKIN1004 Madagascar Centella Ampoule (30ml)",
      image: "/images/section/skin/p_img6.jpg",
      category: "skin",
      price: 799,
      regularPrice: 999,
      discount: "20% Off",
      offer: "1 offer",
      rating: 4.8,
      review_count: 95
    },
    {
      id: 7,
      brand: "Cetaphil",
      title: "Cetaphil Gentle Skin Cleanser (118 ml)",
      image: "/images/section/skin/p_img7.jpg",
      category: "skin",
      price: 390,
      regularPrice: 459,
      discount: "15% Off",
      offer: "1 offer",
      rating: 4.7,
      review_count: 320
    }
  ],
  hair: [
    {
      id: 1,
      brand: "Olaplex",
      title: "Olaplex No.4D Clean Volume Detox Dry Shampoo (32 g)",
      image: "/images/section/hair/p_img1.png",
      category: "hair",
      price: 1600,
      regularPrice: 1600,
      discount: "0% Off",
      offer: "1 offer",
      rating: 4.8,
      review_count: 145
    },
    {
      id: 2,
      brand: "Sachajuan",
      title: "Sachajuan Colour Protect Shampoo (250 ml)",
      image: "/images/section/hair/p_img2.jpg",
      category: "hair",
      price: 2136,
      regularPrice: 2136,
      discount: "0% Off",
      offer: "1 offer",
      rating: 4.6,
      review_count: 82
    },
    {
      id: 3,
      brand: "KERASTASE",
      title: "KERASTASE Genesis Anti-Hair Fall Daily Scalp Serum",
      image: "/images/section/hair/p_img3.jpg",
      category: "hair",
      price: 5100,
      regularPrice: 5100,
      discount: "0% Off",
      offer: "1 offer",
      rating: 4.9,
      review_count: 210
    },
    {
      id: 4,
      brand: "Milk Shake",
      title: "Milk Shake Lifestyling Power Pop (5 g)",
      image: "/images/section/hair/p_img4.png",
      category: "hair",
      price: 1870,
      regularPrice: 2200,
      discount: "15% Off",
      offer: "1 offer",
      rating: 4.5,
      review_count: 56
    },
    {
      id: 5,
      brand: "Beauty Garage",
      title: "Beauty Garage K9 Frizz Dismiss Hair Oil (50 ml)",
      image: "/images/section/hair/p_img5.jpg",
      category: "hair",
      price: 1083,
      regularPrice: 1140,
      discount: "5% Off",
      offer: "1 offer",
      rating: 4.7,
      review_count: 124
    },
    {
      id: 6,
      brand: "Beauty Garage",
      title: "Beauty Garage Shea Retention Hair Injector Spray (30 ml)",
      image: "/images/section/hair/p_img6.jpg",
      category: "hair",
      price: 1425,
      regularPrice: 1500,
      discount: "5% Off",
      offer: "1 offer",
      rating: 4.6,
      review_count: 89
    },
    {
      id: 7,
      brand: "OUAI",
      title: "Ouai Wave Spray - Travel Size (89 ml)",
      image: "/images/section/hair/p_img7.jpg",
      category: "hair",
      price: 1687,
      regularPrice: 1875,
      discount: "10% Off",
      offer: "1 offer",
      rating: 4.8,
      review_count: 167
    }
  ],
  man: [
    {
      id: 1,
      brand: "Beauty of Joseon",
      title: "Beauty of Joseon Relief Sun Aqua-fresh Rice + B5",
      image: "/images/section/man/p_img1.jpg",
      category: "man",
      price: 1200,
      regularPrice: 1500,
      discount: "20% Off",
      offer: "Get for ₹900 • Free gifts",
      rating: 4.4,
      review_count: 5600
    },
    {
      id: 2,
      brand: "Beauty of Joseon",
      title: "Beauty of Joseon Relief Sun : Rice + Probiotics SPF 50+",
      image: "/images/section/man/p_img2.jpeg",
      category: "man",
      price: 1200,
      regularPrice: 1500,
      discount: "20% Off",
      offer: "Get for ₹900 • Free gifts",
      rating: 4.4,
      review_count: 5400
    },
    {
      id: 3,
      brand: "COSRX",
      title: "COSRX Advanced Snail 96 Mucin Power Essence (100ml)",
      image: "/images/section/man/p_img3.jpg",
      category: "man",
      price: 1232,
      regularPrice: 1450,
      discount: "15% Off",
      offer: "Get for ₹870 • Free gifts",
      rating: 4.3,
      review_count: 7900
    },
    {
      id: 4,
      brand: "Inde Wild",
      title: "Inde Wild Champi Hair Oil (50ml)",
      image: "/images/section/man/p_img4.jpg",
      category: "man",
      price: 700,
      regularPrice: 844,
      discount: "17% Off",
      offer: "Get for ₹498 • Free gifts",
      rating: 4.3,
      review_count: 1600
    },
    {
      id: 5,
      brand: "Axis-Y",
      title: "Axis-Y Dark Spot Correcting Glow Serum (50 ml)",
      image: "/images/section/man/p_img5.jpg",
      category: "man",
      price: 1317,
      regularPrice: 1550,
      discount: "15% Off",
      offer: "Get for ₹882 • Free gifts",
      rating: 4.2,
      review_count: 2800
    },
    {
      id: 6,
      brand: "Nike",
      title: "Nike Woody Lane Man Deo (200 ml)",
      image: "/images/section/man/p_img6.jpg",
      category: "man",
      price: 364,
      regularPrice: 429,
      discount: "15% Off",
      offer: "Get for ₹244 • Free gifts",
      rating: 2.2,
      review_count: 6
    },
    {
      id: 7,
      brand: "L'OREAL PROFESSIONNEL",
      title: "L'Oreal Professionnel Absolut Repair Shampoo (300 ml)",
      image: "/images/section/man/p_img7.jpeg",
      category: "man",
      price: 1479,
      regularPrice: 1740,
      discount: "15% Off",
      offer: "Get for ₹1427 • Free gifts",
      rating: 4.1,
      review_count: 757
    }
  ],
  bath_body: [
    {
      id: 1,
      brand: "Caudalie",
      title: "Caudalie Vinotherapie Hand & Nail Cream (75ml)",
      image: "/images/section/bath_body/p_img1.jpg",
      category: "bath_body",
      price: 1300,
      regularPrice: 1300,
      discount: "0% Off",
      offer: "Get for ₹1079 • Free gifts",
      rating: 4.8,
      review_count: 221
    },
    {
      id: 2,
      brand: "Dream. Immerse. Play.",
      title: "Dream. Immerse. Play. Shower Gel The Island Drift Collection",
      image: "/images/section/bath_body/p_img2.jpg",
      category: "bath_body",
      price: 346,
      regularPrice: 495,
      discount: "30% Off",
      offer: "Get for ₹247 • Free gifts",
      rating: 3,
      review_count: 1
    },
    {
      id: 3,
      brand: "Dream. Immerse. Play.",
      title: "Dream. Immerse. Play. Shower Gel The Autumn Trail Collection",
      image: "/images/section/bath_body/p_img3.jpg",
      category: "bath_body",
      price: 346,
      regularPrice: 495,
      discount: "30% Off",
      offer: "Get for ₹247 • Free gifts",
      rating: 3,
      review_count: 1
    },
    {
      id: 4,
      brand: "Dream. Immerse. Play.",
      title: "Dream. Immerse. Play. Bath Oil The Autumn Trail Collection",
      image: "/images/section/bath_body/p_img4.jpg",
      category: "bath_body",
      price: 626,
      regularPrice: 895,
      discount: "30% Off",
      offer: "Get for ₹447 • Free gifts",
      rating: 3.6,
      review_count: 27
    },
    {
      id: 5,
      brand: "L'occitane",
      title: "L'occitane Almond Shower Oil (250ml)",
      image: "/images/section/bath_body/p_img5.jpg",
      category: "bath_body",
      price: 2160,
      regularPrice: 2400,
      discount: "10% Off",
      offer: "Get for ₹1660 • Free gifts",
      rating: 4.3,
      review_count: 212
    },
    {
      id: 6,
      brand: "Moroccanoil",
      title: "Moroccanoil Bergamot Fraiche Shower Gel (250ml)",
      image: "/images/section/bath_body/p_img6.jpg",
      category: "bath_body",
      price: 1782,
      regularPrice: 1980,
      discount: "10% Off",
      offer: "Get for ₹1693 • Free gifts",
      rating: 4,
      review_count: 4
    },
    {
      id: 7,
      brand: "Forest Essentials",
      title: "Forest Essentials Nargis Dusting Powder (90g)",
      image: "/images/section/bath_body/p_img7.jpg",
      category: "bath_body",
      price: 775,
      regularPrice: 775,
      discount: "0% Off",
      offer: "2 Offers • Free gifts",
      rating: 4.5,
      review_count: 45
    }
  ]
};