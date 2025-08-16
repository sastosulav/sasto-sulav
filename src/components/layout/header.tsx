import { cn } from "@/lib/utils";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { Container } from "../ui/container";
import { Image } from "../ui/image";
import { LanguageSelector } from "./language-selector";
import { MobileSideBar } from "./mobile-sidebar";

export const Header = () => {
  const { pathname } = useLocation();
  return (
    <header
      className={cn(
        "justify-center z-30 sticky top-0 transition-all ease-in-out duration-200 pt-3 font-dosis",
        pathname === "/" ? "md:flex hidden" : "flex"
      )}
    >
      <Container>
        <nav
          id="nav"
          className="flex w-full items-center justify-between py-3 rounded-full pl-6 pr-3 shadow border border-border bg-background/50 backdrop-blur"
        >
          <Link
            to="/"
            className="text-2xl font-bold flex items-center gap-1"
            data-i18n="sasto-sulav-express"
          >
            <Image src="/logo.png" alt="logo" className="size-8 rounded-lg" />
            {/* <div className="w-10 h-12 bg-tertiary absolute top-1/2 -translate-y-1/2 -left-4 rounded-l-full" /> */}
            <h1 className="relative z-50">Sasto Sulav</h1>
          </Link>
          <ul className="md:flex items-center font-medium text-sm hidden gap-x-1">
            <li>
              <Link
                to="/shop"
                className="py-2 px-3 rounded-sm hover:bg-secondary uppercase"
                data-i18n="sastoSulav"
              >
                Sasto Sulav Express
              </Link>
            </li>
            <li>
              <Link
                to="/nepali-dining"
                className="py-2 px-3 rounded-sm hover:bg-secondary uppercase"
                data-i18n="nepaliDining"
              >
                NEPALI Dining
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                activeProps={{
                  className: "bg-secondary text-tertiary",
                }}
                className="py-2 px-3 rounded-sm hover:bg-secondary uppercase"
                data-i18n="about"
              >
                ABOUT
              </Link>
            </li>
          </ul>
          <div className="flex items-center gap-3">
            <LanguageSelector className="text-sm font-semibold" />
            <MobileSideBar className="md:hidden flex">
              <Menu />
            </MobileSideBar>
          </div>
        </nav>
      </Container>
    </header>
  );
};
