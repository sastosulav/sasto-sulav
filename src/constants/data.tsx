import { ITEMS } from "@/types/items";
import { LinkProps } from "@tanstack/react-router";
import {
  Beef,
  CakeSlice,
  Coffee,
  Search,
  Store,
  UserRound,
} from "lucide-react";

export const FRUITS_CATEGORY_ITEMS: ITEMS[] = [
  {
    image:
      "https://cdn.tetoteto.co.jp/item-images/a4515241was/9eee31ef-2961-4a9b-837d-d827883c4701.jpg",
    name: "Raisin (kismiss) 100g",
    price: "¥296",
    discountPrice: "¥277",
    inStock: true,
    ratings: 4,
    ratingCount: 1,
    discountPercentage: "6%",
    href: "https://tetoteto.co.jp/item/raising-kismis-a4515241was",
    stock: "100 gm",
  },

  {
    image:
      "https://cdn.tetoteto.co.jp/item-images/a6216468lje/e5c194bc-dea7-4770-a244-b70f45694b47.jpg",
    name: "Ready to eat Sarso Ka Saag ",
    price: "¥583",
    inStock: true,
    stock: "450 gm",
    ratings: 5,
    ratingCount: 1,
    href: "https://tetoteto.co.jp/item/ready-to-eat-sarso-ka-saag-a6216468lje",
  },

  {
    image:
      "https://cdn.tetoteto.co.jp/item-images/a2647356bbi/adaa6c7d-2cc6-4e24-924f-ef30b731ce59.jpg",
    inStock: true,
    name: "coconut half cut नरीवल",
    price: "¥333",
    ratings: 3,
    ratingCount: 1,
    stock: "100 gm",
    href: "https://tetoteto.co.jp/item/coconut-coconut-half-cut-a2647356bbi",
  },

  {
    image:
      "https://cdn.tetoteto.co.jp/item-images/a9419181jyi/6f27d1fe-962a-403b-8cab-0c082c3d5b21.jpg",
    stock: "500 gm",
    inStock: true,
    name: "Raisin (kismiss) 500g",
    price: "¥1064",
    ratings: 4,
    ratingCount: 1,
    href: "https://tetoteto.co.jp/item/raisin-kismiss-500g-a9419181jyi",
  },
  {
    image:
      "https://cdn.tetoteto.co.jp/item-images/a4962548dhq/b18de3a9-df96-408a-a87f-4d5bbee78b38.jpg",
    stock: "100 gm",
    inStock: true,
    name: "Poppy seeds 100gm ",
    price: "¥320",
    ratings: 5,
    ratingCount: 1,
    href: "https://tetoteto.co.jp/item/poppy-seeds-100gm-a4962548dhq",
  },
  {
    image:
      "https://cdn.tetoteto.co.jp/item-images/a4090796ppf/339a12d7-d954-482c-babf-42dce42be92d.jpg",
    inStock: true,
    name: "Dates, Chhokda 500g",
    price: "¥814",
    ratings: 4,
    ratingCount: 1,
    stock: "500 gm",
    href: "https://tetoteto.co.jp/item/dates-chhokda-a4090796ppf",
  },
];

export const ALCOHOL_CATEGORY_ITEMS: ITEMS[] = [
  {
    image:
      "https://cdn.tetoteto.co.jp/item-images/a8480296rea/82b6cbc8-f249-4d08-b64c-a4d0b2f75e38.jpg",
    name: "Old Durbar Black Chimney 750ml",
    price: "¥5418",
    inStock: true,
    ratings: 4,
    ratingCount: 1,
    href: "https://tetoteto.co.jp/item/old-durbar-black-chimney-750ml-a8480296rea",
    stock: "750 gm",
  },

  {
    image:
      "https://cdn.tetoteto.co.jp/item-images/a7279801ico/074514e6-5619-45c6-bb84-820d4cc7c221.jpg",
    name: "8848 Vodka 750ml",
    price: "¥3418",
    inStock: true,
    ratings: 5,
    ratingCount: 1,
    href: "https://tetoteto.co.jp/item/8848-vodka-750ml-a7279801ico",
    stock: "750 gm",
  },

  {
    image:
      "https://cdn.tetoteto.co.jp/item-images/a4986243ved/2a54df88-de2d-4dc6-a325-907b4a2b9657.png",
    inStock: true,
    name: "MrDowell’s Reserve Whisky 750ml",
    price: "¥2690",
    ratings: 3,
    ratingCount: 1,
    stock: "750 gm",
    href: "https://tetoteto.co.jp/item/mrdowell-s-reserve-whisky-750ml-a4986243ved",
  },

  {
    image:
      "https://cdn.tetoteto.co.jp/item-images/a4920442cei/83a21fc7-25d9-445d-aba8-63bf6e988a2b.jpg",
    stock: "750 gm",
    inStock: true,
    name: "KALA PATTHAR WHISKEY 750ML",
    price: "¥4636",
    discountPrice: "¥4090",
    ratings: 4,
    ratingCount: 1,
    discountPercentage: "11%",
    href: "https://tetoteto.co.jp/item/kala-patthar-whiskey-750ml-a4920442cei",
  },
  {
    image:
      "https://cdn.tetoteto.co.jp/item-images/a1151272jkm/61e06259-448a-4d8b-86da-e53a0ca68ce6.jpg",
    stock: "750 gm",
    inStock: true,
    name: "CHAMPAGNE PIERRE LEBOEUF 750 ml",
    price: "¥4136",
    ratings: 5,
    ratingCount: 1,
    href: "https://tetoteto.co.jp/item/champagne-pierre-leboeuf-750-ml-a1151272jkm",
  },
  {
    image:
      "https://cdn.tetoteto.co.jp/item-images/a8374280orm/fb1dd93c-43bc-41a5-870a-6b3c3dbb52aa.jpg",
    inStock: true,
    name: "Spiced Khukuri Rum",
    price: "¥3363",
    ratings: 4,
    ratingCount: 1,
    discountPercentage: "6%",
    discountPrice: "¥3136",
    stock: "750 gm",
    href: "https://tetoteto.co.jp/item/spiced-khukuri-rum-a8374280orm",
  },
];

export const WEEKEND_ITEMS: ITEMS[] = [
  {
    image:
      "https://cdn.tetoteto.co.jp/item-images/a321770qkd/a554307f-93c9-49fb-8921-2a767a400bfa.jpg",
    name: "prawn fish 0.5 KG",
    price: "¥694",
    discountPrice: "¥662",
    discountPercentage: "4%%",
    inStock: true,
    ratings: 4,
    ratingCount: 1,
    category: "frozen",
    stock: "500 gm",
    availableItem: 59,
    totalItems: 65,
    href: "https://tetoteto.co.jp/item/shrimp-500g-a321770qkd",
  },

  {
    image:
      "https://cdn.tetoteto.co.jp/item-images/a1613903qbn/d25a8880-7409-4054-884e-a3060f2f8aa0.jpg",
    name: "BUFFALO MEAT 1kg",
    price: "¥2315",
    inStock: true,
    discountPrice: "¥2194",
    ratings: 5,
    ratingCount: 1,
    discountPercentage: "5%",
    recommended: true,
    availableItem: 3,
    totalItems: 3,
    stock: "1 kg",
    href: "https://tetoteto.co.jp/item/buffalo-meat-1kg-a1613903qbn",
  },

  {
    image:
      "https://cdn.tetoteto.co.jp/item-images/a262236/9afa771f-b4ba-4f4d-ba33-f664ed836aef.jpg",
    inStock: true,
    name: "Wai Wai Veg Noodles",
    price: "¥92",
    stock: "70 gm",
    discountPrice: "¥78",
    ratings: 3,
    ratingCount: 1,
    discountPercentage: "15%",
    availableItem: 6,
    totalItems: 8,
    href: "https://tetoteto.co.jp/item/wai-wai-vegi-noodles-a262236",
  },

  {
    image:
      "https://cdn.tetoteto.co.jp/item-images/a9860723bck/6225a66b-7dd1-4d98-b4fb-ff499db2a2e4.jpg",

    inStock: true,
    name: "Knorr Tomato Soup",
    price: "¥370",
    discountPrice: "¥231",
    ratings: 4,
    ratingCount: 1,
    discountPercentage: "8%",
    availableItem: 24,
    totalItems: 30,
    stock: "70 gm",
    href: "https://tetoteto.co.jp/item/knorr-tomato-soup-a9860723bck",
  },
  {
    image:
      "https://cdn.tetoteto.co.jp/item-images/a92304/a92304_1_1671590340532.jpg",
    inStock: true,
    name: "Coconut Fine 100g",
    price: "¥300",
    discountPrice: "¥277",
    ratings: 5,
    ratingCount: 1,
    stock: "100 gm",
    discountPercentage: "7%",
    availableItem: 53,
    totalItems: 70,
    href: "https://tetoteto.co.jp/item/coconut-fine-100g",
  },
];

export const FOOTER_LINKS = [
  {
    title: "FRUIT & VEGETABLES",
    links: [
      "Fresh Vegetables",
      "Herbs & Seasonings",
      "Fresh Fruits",
      "Cuts & Sprouts",
      "Exotic Fruits & Veggies",
      "Packaged Produce",
      "Party Trays",
    ],
  },
  {
    title: "BREAKFAST & DAIRY",
    links: [
      "Milk & Flavoured Milk",
      "Butter and Margarine",
      "Cheese",
      "Eggs Substitutes",
      "Honey",
      "Marmalades",
      "Sour Cream and Dips",
      "Yogurt",
    ],
  },
  {
    title: "MEAT & SEAFOOD",
    links: [
      "Breakfast Sausage",
      "Dinner Sausage",
      "Beef",
      "Chicken",
      "Sliced Deli Meat",
      "Shrimp",
      "Wild Caught Fillets",
      "Crab and Shellfish",
      "Farm Raised Fillets",
    ],
  },
  {
    title: "BEVERAGES",
    links: [
      "Water",
      "Sparkling Water",
      "Soda & Pop",
      "Coffee",
      "Milk & Plant-Based Milk",
      "Tea & Kombucha",
      "Drink Boxes & Pouches",
      "Craft Beer",
      "Wine",
    ],
  },
  {
    title: "BREADS & BAKERY",
    links: [
      "Milk & Flavoured Milk",
      "Butter and Margarine",
      "Cheese",
      "Eggs Substitutes",
      "Honey",
      "Marmalades",
      "Sour Cream and Dips",
      "Yogurt",
    ],
  },
];

export const CATEGORIES = [
  {
    img: "https://cdn.tetoteto.co.jp/item-images/category/46/2867377576.jpg",
    title: "Sale",
    total: "6",
    href: "https://tetoteto.co.jp/category/sale-np",
  },
  {
    img: "https://cdn.tetoteto.co.jp/item-images/category/6/2405183169.jpeg",
    title: "Rice Flakes & Puff",
    total: "8",
    href: "https://tetoteto.co.jp/category/rice-flakes-and-puff-np",
  },
  {
    img: "https://cdn.tetoteto.co.jp/item-images/category/42/2168938038.png",
    title: "Rice",
    total: "7",
    href: "https://tetoteto.co.jp/category/rice-np",
  },
  {
    img: "https://cdn.tetoteto.co.jp/item-images/category/21/2300361145.png",
    title: "Meat",
    total: "12",
    href: "https://tetoteto.co.jp/category/meat-np",
  },
  {
    img: "https://cdn.tetoteto.co.jp/item-images/category/48/2440514759.jpeg",
    title: "Alcohol",
    total: "7",
    href: "https://tetoteto.co.jp/category/alcohol-np",
  },
  {
    img: "https://cdn.tetoteto.co.jp/item-images/category/1/2238443490.png",
    title: "Spices",
    total: "1",
    href: "https://tetoteto.co.jp/category/spices-np",
  },
  {
    img: "https://cdn.tetoteto.co.jp/item-images/category/2/2333544719.png",
    title: "Flour",
    total: "5",
    href: "https://tetoteto.co.jp/category/flour-np",
  },
  {
    img: "https://cdn.tetoteto.co.jp/item-images/category/3/2184145069.png",
    title: "Daal (Lentils)",
    total: "11",
    href: "https://tetoteto.co.jp/category/daal-lentils-np",
  },
  {
    img: "https://cdn.tetoteto.co.jp/item-images/category/5/2542534773.jpeg",
    title: "Noodles",
    total: "6",
    href: "https://tetoteto.co.jp/category/noodles-np",
  },
  {
    img: "https://cdn.tetoteto.co.jp/item-images/category/27/3191266957.png",
    title: "Oil/Ghee",
    total: "6",
    href: "https://tetoteto.co.jp/category/oil-ghee-np",
  },
  {
    img: "https://cdn.tetoteto.co.jp/item-images/category/11/3169301858.png",
    title: "Snack/Namkeem",
    total: "6",
    href: "https://tetoteto.co.jp/category/snacks-np",
  },
  {
    img: "https://cdn.tetoteto.co.jp/item-images/category/20/2377209450.jpeg",
    title: "Forzen Items",
    total: "6",
    href: "https://tetoteto.co.jp/category/frozen-items-np",
  },
  {
    img: "https://cdn.tetoteto.co.jp/item-images/category/22/2870446484.png",
    title: "Vegetable & Fruits",
    total: "6",
    href: "https://tetoteto.co.jp/category/vegetables-and-fruits-np",
  },
  {
    img: "https://cdn.tetoteto.co.jp/item-images/category/18/2334123485.png",
    title: "Pickles & Chutney",
    total: "6",
    href: "https://tetoteto.co.jp/category/pickles-np",
  },
  {
    img: "https://cdn.tetoteto.co.jp/item-images/category/14/3205161003.png",
    title: "Drinks/Tea",
    total: "6",
    href: "https://tetoteto.co.jp/category/drinks-np",
  },
  {
    img: "https://cdn.tetoteto.co.jp/item-images/category/25/2823572484.jpg",
    title: "Dry Fruits",
    total: "6",
    href: "https://tetoteto.co.jp/category/dry-fruits-np",
  },
  {
    img: "https://cdn.tetoteto.co.jp/item-images/category/23/2638904429.png",
    title: "Sweets",
    total: "6",
    href: "https://tetoteto.co.jp/category/sweets-np",
  },
  {
    img: "https://cdn.tetoteto.co.jp/item-images/category/24/3218011769.png",
    title: "Health & Beauty",
    total: "6",
    href: "https://tetoteto.co.jp/category/health-and-beauty-np",
  },
  {
    img: "https://cdn.tetoteto.co.jp/item-images/category/19/2358398352.png",
    title: "Cooking Utensils",
    total: "6",
    href: "https://tetoteto.co.jp/category/cooking-utensils-np",
  },
  {
    img: "https://cdn.tetoteto.co.jp/item-images/category/26/2386253908.jpg",
    title: "Religous Usage",
    total: "6",
    href: "https://tetoteto.co.jp/category/religious-usage-puja-np",
  },
  {
    img: "https://cdn.tetoteto.co.jp/item-images/category/12/2500933724.jpg",
    title: "Foods",
    total: "6",
    href: "https://tetoteto.co.jp/category/foods-np",
  },
  {
    img: "https://cdn.tetoteto.co.jp/item-images/category/32/2538417965.png",
    title: "Condiments",
    total: "6",
    href: "https://tetoteto.co.jp/category/condiments-np",
  },
  {
    img: "https://cdn.tetoteto.co.jp/item-images/category/4/2832268274.png",
    title: "Others",
    total: "6",
    href: "https://tetoteto.co.jp/category/others-np",
  },
];

export const NAV_LINKS = [
  {
    label: "Meats & Seafood",
    icon: <Beef className="size-5" />,
    href: "meats",
  },
  {
    label: "Bakery",
    icon: <CakeSlice className="size-5" />,
    href: "bakery",
  },
  {
    label: "Beverages",
    icon: <Coffee className="size-5" />,
    href: "beverages",
  },
  {
    label: "Blog",
    href: "blog",
  },
  {
    label: "Contact",
    href: "contact",
  },
];

export const BOTTOM_NAVLINKS: {
  label: string;
  href: LinkProps["to"];
  icon: React.ReactNode;
}[] = [
  {
    label: "Store",
    href: "/",
    icon: <Store />,
  },
  {
    label: "Search",
    href: "/search",
    icon: <Search />,
  },
  {
    label: "Account",
    href: "/profile",
    icon: <UserRound />,
  },
];

export const FRUITS_CATEGORIES: { label: string; href: string }[] = [
  {
    label: "Rice",
    href: "https://tetoteto.co.jp/category/rice-np",
  },
  {
    label: "Snack & Namkeen",
    href: "https://tetoteto.co.jp/category/snacks-np",
  },
  {
    label: "Dry Fruits",
    href: "https://tetoteto.co.jp/category/dry-fruits-np",
  },
  {
    label: "Foods",
    href: "https://tetoteto.co.jp/category/foods-np",
  },
  {
    label: "Vegetables & Fruits",
    href: "https://tetoteto.co.jp/category/vegetables-and-fruits-np",
  },
  {
    label: "Pickles & Chutney",
    href: "https://tetoteto.co.jp/category/pickles-np",
  },
  {
    label: "Daal & Lentils",
    href: "https://tetoteto.co.jp/category/daal-lentils-np",
  },
];

export const ALCOHOL_CATEGORIES: { label: string; href: string }[] = [
  {
    label: "Old Durbar Black Chimney 750ml",
    href: "https://tetoteto.co.jp/item/old-durbar-black-chimney-750ml-a8480296rea",
  },
  {
    label: "8848 Vodka 750ml",
    href: "https://tetoteto.co.jp/item/8848-vodka-750ml-a7279801ico",
  },
  {
    label: "MrDowell’s Reserve Whisky 750ml",
    href: "https://tetoteto.co.jp/item/mrdowell-s-reserve-whisky-750ml-a4986243ved",
  },
  {
    label: "KALA PATTHAR WHISKEY 750ML",
    href: "https://tetoteto.co.jp/item/kala-patthar-whiskey-750ml-a4920442cei",
  },
  {
    label: "CHAMPAGNE PIERRE LEBOEUF 750 ml",
    href: "https://tetoteto.co.jp/item/champagne-pierre-leboeuf-750-ml-a1151272jkm",
  },
  {
    label: "Spiced Khukuri Rum",
    href: "https://tetoteto.co.jp/item/spiced-khukuri-rum-a8374280orm",
  },
];

export const LANGUAGE__COOKIE_KEY = "lang";

export const HOME_DATA = [
  {
    image:
      "https://plus.unsplash.com/premium_photo-1664551734602-49640bd82eba?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Sasto Sulav Express",
    description:
      "Your premier destination for authentic South Asian groceries in Japan. We bring the flavors of Nepal and South Asia directly to your doorstep, offering a wide selection of spices, lentils, rice, and traditional ingredients. Our express delivery service ensures fresh and quality products reach you quickly.",
    href: "/shop",
  },
  {
    image:
      "https://images.unsplash.com/photo-1504598318550-17eba1008a68?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Nepali Dining",
    description:
      "Experience the authentic taste of Nepal in the heart of Japan. Our restaurant serves traditional Nepali cuisine prepared by expert chefs, offering a perfect blend of flavors and spices. From classNameic momos to rich curries, we bring the warmth and hospitality of Nepal to your dining experience.",
    href: "/nepali-dining",
  },
];
