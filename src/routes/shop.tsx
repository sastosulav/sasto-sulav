import { ScrollUP } from "@/components/layout/scroll-up";
import { ShopBlogList } from "@/components/shop/blog/shop-blog-list";
import { ShopCategoryitems } from "@/components/shop/home/shop-category-items";
import { ShopHomeBanner } from "@/components/shop/home/shop-home-banner";
import { ShopHomeCategoriesCarousel } from "@/components/shop/home/shop-home-categories-carousel";
import { ShopOfferTimer } from "@/components/shop/home/shop-offer-timer";
import { ShopWeekendDiscountBannersOne } from "@/components/shop/home/shop-weekend-discount-banners-one";
import { ShopWeekendDiscountedItems } from "@/components/shop/home/shop-weekend-discounted-items";
import { WeekendDiscountBannersTwo } from "@/components/shop/home/weekend-discount-banners-two";
import { ShopHeader } from "@/components/shop/layout/header";
import { ShopBottomNav } from "@/components/shop/layout/shoop-bottom-nav";
import { ShopCallToAction } from "@/components/shop/layout/shop-call-to-action";
import { ShopFooter } from "@/components/shop/layout/shop-footer";
import { ShopOffersBanner } from "@/components/shop/shop-offers-banner";
import { Container } from "@/components/ui/container";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  ALCOHOL_CATEGORIES,
  ALCOHOL_CATEGORY_ITEMS,
  FRUITS_CATEGORIES,
  FRUITS_CATEGORY_ITEMS,
} from "@/constants/data";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/shop")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Tooltip>
        <TooltipTrigger className="fixed top-1/2 -translate-y-1/2 right-0 bg-tertiary-foreground">
          <Link
            className="sm:px-3 px-2 py-1 z-50 sm:text-base text-sm font-dosis"
            to="/"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "upright",
            }}
          >
            Home
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>go to main page</p>
        </TooltipContent>
      </Tooltip>
      <ShopHeader />
      <Container className="pt-8 pb-16 space-y-8">
        <ShopOffersBanner />
        <ShopHomeBanner />
        <ShopHomeCategoriesCarousel />
        <ShopOfferTimer />
        <ShopWeekendDiscountedItems />
        <ShopWeekendDiscountBannersOne />
        <ShopCategoryitems
          categories={FRUITS_CATEGORIES}
          items={FRUITS_CATEGORY_ITEMS}
          imageURL="https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-17.jpg"
          title="FRUIT & VEGETABLES"
          subtitle="The freshest greengrocer products are waiting for you"
        />
        <WeekendDiscountBannersTwo />
        <ShopCategoryitems
          categories={ALCOHOL_CATEGORIES}
          items={ALCOHOL_CATEGORY_ITEMS}
          title="DRINKS & ALCOHOL"
          subtitle="The freshest greengrocer products are waiting for you"
          imageURL="https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-16.jpg"
        />
        <ShopBlogList />
      </Container>
      <ShopCallToAction />
      <ShopFooter />
      <ShopBottomNav />
      <ScrollUP />
    </div>
  );
}
