import { X } from "lucide-react";
import { Button } from "../ui/button";

export const NotificationBar = () => {
  return (
    <div className="bg-tertiary p-1 text-white text-center flex justify-between items-center">
      <div />
      <p className="sm:text-xs text-[10px]">
        We ship <span className="font-semibold">fast and effortless</span> -
        your order will arrive in no time!
      </p>
      <Button variant="ghost" size={"icon"}>
        <X />
      </Button>
    </div>
  );
};
