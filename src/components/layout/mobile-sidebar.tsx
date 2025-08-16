import { Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { MobileSideBarFooter } from "./mobile-sidebar-footer";

export const MobileSideBar = (
  props: React.ComponentProps<typeof SheetTrigger>
) => {
  return (
    <Sheet>
      <SheetTrigger {...props} />
      <SheetContent>
        <div className="min-h-[100dvh] flex flex-col">
          <SheetHeader className="relative border-b">
            <SheetTitle className="font-semibold font-dosis text-2xl">
              <Link to="/">Sasto Sulav Express</Link>
            </SheetTitle>
          </SheetHeader>
          <section className="flex flex-col pt-12 flex-1">
            <Link
              to="/shop"
              className="flex items-center gap-3 justify-between py-3 font-dosis text-[15px] font-semibold text-muted-foreground capitalize px-6 border-b"
            >
              <p>Shop</p> <ChevronDown className="size-4" />
            </Link>
            <Link
              to="/nepali-dining"
              className="flex items-center gap-3 justify-between py-3 font-dosis text-[15px] font-semibold text-muted-foreground capitalize px-6 border-b"
            >
              <p>Nepali Dining</p> <ChevronDown className="size-4" />
            </Link>
            <Link
              to="/about"
              className="flex items-center gap-3 justify-between py-3 font-dosis text-[15px] font-semibold text-muted-foreground capitalize px-6 border-b"
            >
              <p>About</p> <ChevronDown className="size-4" />
            </Link>
          </section>
          <MobileSideBarFooter className="pb-8" />
        </div>
      </SheetContent>
    </Sheet>
  );
};
