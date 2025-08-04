import { ShopBlogCard } from "./shop-blog-card";

const blogs = [
  {
    image:
      "https://klbtheme.com/bacola/wp-content/uploads/2021/05/blog-3-370x260.jpg",
    title: "But I must explain to you how all this mistaken idea",
    category: "tips & tricks",
    date: "3 May 2024",
    commentCount: 3,
  },
  {
    image:
      "https://klbtheme.com/bacola/wp-content/uploads/2021/05/blog-5-370x260.jpg",
    title: "The Problem With Typefaces on the Web",
    category: "grocery",
    date: "3 May 2024",
    commentCount: 3,
  },
  {
    image:
      "https://klbtheme.com/bacola/wp-content/uploads/2021/05/blog-1-370x260.jpg",
    title: "English Breakfast Tea With Tasty Donut Desserts",
    category: "grocery",
    date: "3 May 2024",
    commentCount: 3,
  },
];

export const ShopBlogList = () => {
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-x-6 lg:gap-y-0 gap-y-10 gap-x-0">
      {blogs.map((b, i) => (
        <ShopBlogCard blog={b} key={i} />
      ))}
    </div>
  );
};
