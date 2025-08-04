import { ShopMobileSidebar } from "@/components/shop/layout/shop-mobile-sidebar";
import { BOTTOM_NAVLINKS } from "@/constants/data";
import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";

export const ShopBottomNav = () => {
  return (
    <div className="fixed z-50 bottom-0 w-full grid grid-cols-4 justify-between bg-background shadow-sm py-3 md:hidden border-t">
      {BOTTOM_NAVLINKS.map((l, index) => (
        <Link
          to={l.href}
          key={index}
          className="flex flex-col items-center gap-0.5 text-muted-foreground"
          activeProps={{ className: "text-primary" }}
        >
          {l.icon}
          <p className="text-xs font-medium">{l.label}</p>
        </Link>
      ))}
      <ShopMobileSidebar
        asChild
        className="text-muted-foreground data-[state=open]:text-primary"
      >
        <button className="flex flex-col items-center gap-0.5 ">
          <Menu />
          <p className="text-xs font-medium">Categroies</p>
        </button>
      </ShopMobileSidebar>
    </div>
  );
};
