import { WEEKEND_ITEMS } from "@/constants/data";
import { cn } from "@/lib/utils";
import { Expand } from "lucide-react";
import { AspectRatio } from "../../ui/aspect-ratio";
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import { Card, CardContent, CardHeader } from "../../ui/card";
import { Image } from "../../ui/image";
import { Progress } from "../../ui/progress";
import { Rating, RatingButton } from "../../ui/rating";
import { AddToCartButton } from "../item/add-to-cart-btn";
import { ItemViewer } from "../item/item-viewer";
import { LikeItem } from "../item/like-item";

export const ShopWeekendDiscountedItems = () => {
  return (
    <div className="border-2 border-destructive rounded-sm grid lg:grid-cols-5 md:grid-cols-3 base:grid-cols-2 overflow-hidden">
      {WEEKEND_ITEMS.map((item, index) => (
        <Card
          key={index}
          className={cn(
            "sm:p-6 p-4 sm:block flex flex-col justify-between shadow-none rounded-none border-r md:last:border-none relative group hover:bg-tertiary/5"
          )}
        >
          <div className="absolute flex flex-col gap-y-1 top-2 right-2 text-muted-foreground z-20">
            <ItemViewer asChild item={item}>
              <Button
                className="rounded-full hover:bg-tertiary hover:text-white cursor-pointer lg:translate-x-4 group-hover:translate-x-0 transition-all lg:ease-linear lg:opacity-0 group-hover:opacity-100"
                variant="outline"
                size="icon"
              >
                <Expand />
              </Button>
            </ItemViewer>
            <LikeItem itemName={item.name} />
          </div>
          <CardHeader className="p-0 relative">
            <div className="top-2 left-2 z-20 absolute flex flex-col gap-y-1">
              {item?.discountPercentage && (
                <Badge className="rounded-xs">{item.discountPercentage}</Badge>
              )}
              {item?.category && (
                <Badge
                  className={cn(
                    "rounded-xs uppercase font-dosis text-xs font-semibold",
                    item.category === "frozen"
                      ? "bg-blue-100 text-blue-500"
                      : "bg-orange-100 text-orange-500"
                  )}
                >
                  {item.category}
                </Badge>
              )}
              {item?.recommended && (
                <Badge
                  className="rounded-xs text-white bg-gray-500 font-dosis text-xs font-semibold uppercase"
                  variant="secondary"
                >
                  recommended
                </Badge>
              )}
            </div>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer block"
            >
              <AspectRatio ratio={4 / 3}>
                <Image
                  alt={item.name}
                  src={item.image || "/placeholder.svg"}
                  className="object-contain"
                />
              </AspectRatio>
            </a>
          </CardHeader>

          <CardContent className="p-0 space-y-3 relative z-20">
            <div className="flex items-baseline gap-x-2 justify-center">
              <p
                className={cn(
                  "text-gray-400 font-dosis font-semibold text-[15px]",
                  item.discountPercentage && " line-through"
                )}
              >
                {item.price}
              </p>
              {!!item?.discountPercentage && (
                <p className="text-destructive font-semibold font-dosis text-lg">
                  {item.discountPrice}
                </p>
              )}
            </div>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-zinc-800 text-center cursor-pointer hover:text-tertiary block"
            >
              {item.name}
            </a>
            <div className="flex items-center gap-x-2 justify-center">
              {item.stock && (
                <p className="text-[11px] text-muted-foreground">
                  {item.stock}
                </p>
              )}
              {item.inStock && (
                <p className="font-dosis text-[11px] text-green-500 uppercase font-semibold">
                  In Stock
                </p>
              )}
            </div>
            <div className="flex items-center gap-1 justify-center">
              <Rating readOnly defaultValue={item.ratings} className="gap-0">
                {Array.from({ length: 5 }).map((_, index) => (
                  <RatingButton className="[&_svg]:size-3 w-3" key={index} />
                ))}
              </Rating>
              <p className="font-semibold font-dosis text-xs text-muted-foreground">
                {item.ratingCount}
              </p>
            </div>
            <div className="pt-2">
              <Progress
                value={
                  item?.availableItem && item?.totalItems
                    ? (item.availableItem / item.totalItems) * 100
                    : 0
                }
                className="h-1.5 bg-muted"
                indicatorClassName="bg-gray-400"
              />
            </div>
            <div>
              <p className="text-center text-[11px] text-gray-800">
                The available products:{" "}
                <span className="font-dosis font-semibold text-xl">
                  {item.availableItem}
                </span>
              </p>
            </div>
          </CardContent>
          <AddToCartButton variant="destructive" />
        </Card>
      ))}
    </div>
  );
};
