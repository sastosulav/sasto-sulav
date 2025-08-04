import { useLanguage } from "@/providers/hook";
import { LANGUAGE_KEY } from "@/providers/types";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { SheetFooter } from "../ui/sheet";

export const MobileSideBarFooter = () => {
  const { setLanguage, language } = useLanguage();
  return (
    <SheetFooter>
      <small className="text-xs text-gray-400 pb-6 pt-12 block px-6">
        Copyright 2025 © Sasto Sulav Express. All rights reserved.
      </small>
      <RadioGroup
        value={language}
        onValueChange={(lan: LANGUAGE_KEY) => {
          setLanguage(lan);
        }}
        className="gap-0"
      >
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
          <Label htmlFor="jp" className="absolute inset-0" />
          <p className="font-dosis font-semibold text-muted-foreground text-[15px]">
            日本語
          </p>
          <RadioGroupItem
            value="jp"
            id="jp"
            className="[&_svg]:fill-tertiary size-6 [&_svg]:size-4"
          />
        </div>
      </RadioGroup>
    </SheetFooter>
  );
};
