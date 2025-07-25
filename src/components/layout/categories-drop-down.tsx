import { CATEGORIES } from "@/constants/data";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu } from "lucide-react";
import { Badge } from "../ui/badge";
import { buttonVariants } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Image } from "../ui/image";

export const CategoriesDropDown = () => {
  const totalProducts = CATEGORIES.reduce((acc, c) => acc + Number(c.total), 0);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          buttonVariants({
            size: "xl",
          }),
          "rounded-full gap-6 font-semibold uppercase font-dosis text-[15px] relative"
        )}
      >
        <div className="flex items-center gap-3">
          <Menu /> All Categories
        </div>
        <ChevronDown />
        <Badge
          className="text-xs font-dosis absolute z-10 left-1/2 -translate-x-1/2 -bottom-2.5"
          variant="secondary"
        >
          Total {totalProducts} products
        </Badge>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {CATEGORIES.map((c, i) => (
          <DropdownMenuGroup key={i}>
            <DropdownMenuItem asChild>
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="gap-x-6 cursor-pointer"
              >
                <p className="text-xs font-medium">{c.title}</p>
                <DropdownMenuShortcut className="relative size-6">
                  <Image alt={c.title} src={c.img} className="object-contain" />
                </DropdownMenuShortcut>
              </a>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
