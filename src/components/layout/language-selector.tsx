import { cn } from "@/lib/utils";

import { useLanguage } from "@/providers/hook";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export const LanguageSelector = ({ className }: { className?: string }) => {
  const { language, setLanguage } = useLanguage();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          "text-xs text-gray-700 font-medium  flex items-center hover:text-primary cursor-default gap-0.5",
          className
        )}
      >
        {language === "en" ? "English" : "日本語"}
        <ChevronDown className="size-3 group-hover:text-primary" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col shadow bg-background min-w-fit">
        <DropdownMenuItem asChild>
          <button
            onClick={() => {
              setLanguage("en");
            }}
            className={cn(
              "py-2 px-3 text-xs text-muted-foreground font-medium",
              language === "en" && "bg-secondary text-tertiary"
            )}
          >
            English
          </button>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <button
            onClick={() => {
              setLanguage("jp");
            }}
            className={cn(
              "py-2 px-3 text-xs text-muted-foreground font-medium",
              language === "jp" && "bg-secondary text-tertiary"
            )}
          >
            日本語
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
