import { NAV_LINKS } from "@/constants/data";
import { Link } from "@tanstack/react-router";
import { ChevronDown, ShoppingBag } from "lucide-react";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { ScrollArea } from "../ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { CategoriesAccrodion } from "./categories-accrodion";
import { LocationSelector } from "./location-selector";

export const MobileSidebar = (
  props: React.ComponentProps<typeof SheetTrigger>
) => {
  return (
    <Sheet>
      <SheetTrigger {...props} />
      <SheetContent side="left" className="flex flex-col p-0 pb-20">
        <Link to="/">
          <SheetHeader className="p-6 pb-4 flex-row items-center gap-3">
            <ShoppingBag className="text-tertiary size-8" />
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
          <section>
            <small className="text-xs text-gray-400 pb-6 pt-12 block px-6">
              Copyright 2025 © Sasto Sulav Express. All rights reserved.
            </small>
            <RadioGroup defaultValue="en" className="gap-0">
              <div className="flex items-center justify-between border-y py-3 px-6 relative overflow-hidden">
                <Label htmlFor="en" className="absolute inset-0" />
                <p className="font-dosis font-semibold text-muted-foreground text-[15px]">
                  English
                </p>
                <RadioGroupItem
                  value="en"
                  id="en"
                  className="[&_svg]:fill-tertiary size-6 [&_svg]:size-4"
                />
              </div>
              <div className="flex items-center justify-between border-b py-3 px-6 relative overflow-hidden">
                <Label htmlFor="ja" className="absolute inset-0" />
                <p className="font-dosis font-semibold text-muted-foreground text-[15px]">
                  日本語
                </p>
                <RadioGroupItem
                  value="ja"
                  id="ja"
                  className="[&_svg]:fill-tertiary size-6 [&_svg]:size-4"
                />
              </div>
            </RadioGroup>
          </section>
          <div className="h-20" />
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
