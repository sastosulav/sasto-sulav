import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

export const NepaliDiningSidebar = () => {
  const [opened, setOpend] = useState(false);
  return (
    <Sheet open={opened} onOpenChange={setOpend}>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent side="top" className="h-full">
        <SheetHeader>
          <SheetTitle>
            <Link
              to="/nepali-dining"
              className="text-2xl font-normal font-atma"
            >
              Nepali Dining
            </Link>
          </SheetTitle>
        </SheetHeader>
        <section className="size-full flex justify-center items-center p-3">
          <div className="flex flex-col">
            <Link
              onClick={() => setOpend(false)}
              to="/nepali-dining/menu"
              className="font-dosis py-3 font-semibold"
              activeProps={{
                className: "underline text-primary",
              }}
            >
              1 View Our Menu
            </Link>
            <Link
              onClick={() => setOpend(false)}
              className="font-dosis py-3 font-semibold"
              activeProps={{
                className: "underline text-primary",
              }}
              to="/nepali-dining/reservation"
            >
              2 Make a Reservation (dinner)
            </Link>
            <Link
              onClick={() => setOpend(false)}
              className="font-dosis py-3 font-semibold"
              activeProps={{
                className: "underline text-primary",
              }}
              to="/nepali-dining/takeout"
            >
              3 Order takeout
            </Link>
            <Link
              onClick={() => setOpend(false)}
              className="font-dosis py-3 font-semibold"
              activeProps={{
                className: "underline text-primary",
              }}
              to="/nepali-dining/delivery"
            >
              4 Order delivery
            </Link>
          </div>
        </section>
      </SheetContent>
    </Sheet>
  );
};
