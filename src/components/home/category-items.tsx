import { cn } from "@/lib/utils";
import { ITEMS } from "@/types/items";
import { MoveRight } from "lucide-react";
import { ItemCard } from "../item/item-card";
import { Button } from "../ui/button";
import { Image } from "../ui/image";

interface Props {
  title: string;
  subtitle: string;
  imageURL: string;
  items: ITEMS[];
  categories: { label: string; href: string }[];
}

export const Categoryitems = ({
  subtitle,
  title,
  imageURL,
  items,
  categories,
}: Props) => {
  return (
    <div className="space-y-8">
      <section className="flex items-center justify-between gap-x-4">
        <div>
          <h3 className="font-dosis sm:text-xl text-lg font-semibold uppercase">
            {title}
          </h3>
          <p className="text-muted-foreground text-xs">{subtitle}</p>
        </div>
        <Button
          className="rounded-full text-muted-foreground sm:text-sm text-xs font-medium"
          variant="outline"
          size="sm"
        >
          <p>View All</p>{" "}
          <MoveRight className="sm:size-5 stroke-[1px] size-4" />
        </Button>
      </section>
      <section className="border rounded-sm lg:flex items-stretch overflow-hidden">
        <div className="text-[13px] w-96 text-gray-700 flex flex-col items-start lg:py-10 py-5 lg:px-8 px-5">
          {categories.map((c, index) => (
            <a
              href={c.href}
              key={c.href + index}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary py-2 cursor-pointer"
            >
              <p className="line-clamp-1"> {c.label}</p>
            </a>
          ))}
        </div>
        <div className="flex-[40%] lg:block hidden relative overflow-hidden">
          <a
            href="https://tetoteto.co.jp/shop/sasto-sulav-express"
            target="_blank"
            rel="noopener noreferrer"
            className="inset-0 absolute left-0 top-0 z-20 p-10 space-y-3"
          >
            <p className="font-dosis text-destructive text-lg">delicious</p>
            <h5 className="text-2xl font-extralight leading-tight">
              The freshest of <br />{" "}
              <span className="font-semibold">all products</span>{" "}
            </h5>
            <p className="font-dosis text-sm text-muted-foreground font-semibold pt-2">
              Just in Sasto Sulav Express
            </p>
          </a>
          <Image src={imageURL} alt="banner" className="object-cover" />
        </div>
        <div className="grid md:grid-cols-3 base:grid-cols-2 grid-cols-1 flex-[100%] lg:border-t-0 border-t">
          {items.map((item, index) => {
            const isBottomRow = index >= items.length - 3;

            return (
              <ItemCard
                item={item}
                key={index}
                className={cn(
                  "border-r base:border-r-border border-r-transparent border-b nth-[3n]:md:border-r-0",
                  isBottomRow && "md:border-b-0"
                )}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};
