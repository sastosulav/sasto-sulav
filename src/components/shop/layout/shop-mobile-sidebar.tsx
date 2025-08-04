import { MobileSideBarFooter } from "@/components/layout/mobile-sidebar-footer";
import { Image } from "@/components/ui/image";
import { NAV_LINKS } from "@/constants/data";
import { Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { ScrollArea } from "../../ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../ui/sheet";
import { CategoriesAccrodion } from "../categories-accrodion";
import { LocationSelector } from "./location-selector";

export const ShopMobileSidebar = (
  props: React.ComponentProps<typeof SheetTrigger>
) => {
  return (
    <Sheet>
      <SheetTrigger {...props} />
      <SheetContent side="left" className="flex flex-col p-0 pb-20">
        <Link to="/">
          <SheetHeader className="p-6 pb-4 flex-row items-center gap-3">
            <Image src="/logo.png" alt="logo" className="size-8 rounded-lg" />
            <SheetTitle className="font-bold font-dosis text-tertiary text-2xl">
              Sasto Sulav
            </SheetTitle>
          </SheetHeader>
        </Link>
        <ScrollArea className="flex-1 h-full">
          <div className="px-8 mb-4">
            <LocationSelector className="w-full justify-between rounded-sm px-6 py-3" />
          </div>
          <CategoriesAccrodion />
          <section>
            <h3 className="font-dosis text-[15px] font-semibold uppercase px-6 pt-8 pb-4 text-gray-400">
              Site Navigation
            </h3>
            <a
              href={"/"}
              className="flex items-center gap-3 justify-between py-3 font-dosis text-[15px] font-semibold text-muted-foreground capitalize px-6 border-b"
            >
              <p>Home</p> <ChevronDown className="size-4" />
            </a>
            <a
              href={"/"}
              className="flex items-center gap-3 justify-between py-3 font-dosis text-[15px] font-semibold text-muted-foreground capitalize px-6 border-b"
            >
              <p>Shop</p> <ChevronDown className="size-4" />
            </a>
            {NAV_LINKS.map((l, index) => (
              <a
                href={l.href}
                key={index}
                className="flex items-center gap-3 py-3 font-dosis text-[15px] font-semibold text-muted-foreground capitalize px-6 border-b"
              >
                {l.icon && l.icon} {l.label}
              </a>
            ))}
          </section>
          <MobileSideBarFooter />
          <div className="h-10" />
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
