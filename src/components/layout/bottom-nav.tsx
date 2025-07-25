import { BOTTOM_NAVLINKS } from "@/constants/data";
import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { MobileSidebar } from "./mobile-sidebar";

export const BottomNav = () => {
  return (
    <div className="fixed z-50 bottom-0 w-full grid grid-cols-4 justify-between bg-background shadow-sm py-3 md:hidden border-t">
      {BOTTOM_NAVLINKS.map((l, index) => (
        <Link
          to={l.href}
          key={index}
          className="flex flex-col items-center gap-0.5"
        >
          {l.icon}
          <p className="text-muted-foreground text-xs font-medium">{l.label}</p>
        </Link>
      ))}
      <MobileSidebar asChild>
        <button className="flex flex-col items-center gap-0.5">
          <Menu className="text-muted-foreground" />
          <p className="text-muted-foreground text-xs font-medium">
            Categroies
          </p>
        </button>
      </MobileSidebar>
    </div>
  );
};
