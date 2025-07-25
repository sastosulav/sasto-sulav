"use client";

import { cn } from "@/lib/utils";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Chineseflag } from "../icons/chinese-flag";
import { IndianFlag } from "../icons/indian-flag";
import { JapanFlag } from "../icons/japan-flag";
import { NepalIFlag } from "../icons/nepali-flag";
import { UkFlag } from "../icons/uk-flag";
import { UsaFlag } from "../icons/usa-flag";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "../ui/command";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const countries: { label: string; value: string; icon: React.ReactNode }[] = [
  {
    label: "Nepal",
    value: "nepal",
    icon: <NepalIFlag />,
  },
  {
    label: "India",
    value: "india",
    icon: <IndianFlag />,
  },
  {
    label: "USA",
    value: "usa",
    icon: <UsaFlag />,
  },
  {
    label: "UK",
    value: "uk",
    icon: <UkFlag />,
  },
  {
    label: "Australia",
    value: "australia",
    icon: <UsaFlag />,
  },
  {
    label: "Japan",
    value: "japan",
    icon: <JapanFlag />,
  },
  {
    label: "China",
    value: "china",
    icon: <Chineseflag />,
  },
];

export const LocationSelector = ({ className }: { className?: string }) => {
  const [open, setOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<string>("nepal");
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        className={cn(
          "border rounded-[5px] flex items-center justify-baseline p-2 gap-x-12 shadow-sm hover:shadow-lg cursor-pointer transition-all duration-300 ease-in-out",
          className
        )}
      >
        <div className="flex items-start gap-y-1 flex-col">
          <p className="text-xs text-muted-foreground font-dosis">
            Your Location
          </p>
          <p className="text-xs font-semibold text-tertiary">
            {countries.find((c) => c.value === selectedCountry)?.label}
          </p>
        </div>
        <ChevronDown className="text-tertiary xl:size-3 size-4" />
      </DialogTrigger>
      <DialogContent className="p-0">
        <DialogHeader className="p-6">
          <DialogTitle>Choose your Delivery Location</DialogTitle>
          <DialogDescription className="text-xs">
            Enter your address and we will specify the offer for your area.
          </DialogDescription>
        </DialogHeader>
        <section>
          <Command>
            <CommandInput
              placeholder="Search your area..."
              wrapperClassName="border-none rounded-b-xs rounded-none h-12 bg-muted"
              className="rounded-b-xs"
            />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                {countries.map((c) => (
                  <CommandItem
                    className="py-3"
                    onSelect={() => {
                      setSelectedCountry(c.value);
                      setOpen(false);
                    }}
                    key={c.value}
                  >
                    {c.icon}
                    {c.label}
                    <CommandShortcut>
                      <ChevronRight />
                    </CommandShortcut>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </section>
      </DialogContent>
    </Dialog>
  );
};
