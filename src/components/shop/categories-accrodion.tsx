import { CATEGORIES } from "@/constants/data";
import { cn } from "@/lib/utils";
import { ChevronRight, Menu } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { buttonVariants } from "../ui/button";
import { Image } from "../ui/image";
import { Separator } from "../ui/separator";

export const CategoriesAccrodion = () => {
  return (
    <Accordion collapsible type="single">
      <AccordionItem value="categories" className="[&_svg]:text-white">
        <AccordionTrigger
          className={cn(
            buttonVariants({
              size: "lg",
            }),
            "justify-between mx-4"
          )}
        >
          <Menu />
          <p className="font-dosis font-semibold text-[15px]">All Categories</p>
        </AccordionTrigger>
        <AccordionContent className="pt-8">
          {CATEGORIES.map((c) => (
            <a
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              key={c.href}
              className="flex items-center py-2.5 group px-6"
            >
              <div className="flex items-center gap-3 flex-1">
                <div className="relative size-6">
                  <Image src={c.img} alt={c.title} className="object-contain" />
                </div>
                <p className="text-[13px] font-medium text-muted-foreground group-hover:text-primary">
                  {c.title}
                </p>
              </div>
              <ChevronRight stroke="#71717b" className="size-4" />
            </a>
          ))}
          <Separator className="mt-6" />
          <section className="flex flex-col pt-8 px-6">
            <a
              href="#"
              className="hover:text-primary py-2.5 text-muted-foreground text-[13px] font-medium"
            >
              Value of the Day
            </a>
            <a
              href="#"
              className="hover:text-primary py-2.5 text-muted-foreground text-[13px] font-medium"
            >
              Top 100 Offers
            </a>
            <a
              href="#"
              className="hover:text-primary py-2.5 text-muted-foreground text-[13px] font-medium"
            >
              New Arrivals
            </a>
          </section>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
