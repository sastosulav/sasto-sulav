import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { Button, ButtonProps } from "../ui/button";
import { SlidingNumber } from "../ui/sliding-number";

export const AddToCartButton = ({
  className,
  variant,
  ...props
}: ButtonProps) => {
  const [count, setCount] = useState(0);
  if (count > 0)
    return (
      <div className="flex items-center justify-between gap-2 border border-border rounded-full sm:mt-3">
        <Button
          onClick={() => {
            setCount((prev) => prev - 1);
          }}
          variant={"secondary"}
          className={cn("rounded-l-full bg-border hover:bg-border")}
          {...props}
        >
          <Minus />
        </Button>
        <SlidingNumber className="text-sm" value={count} />
        <Button
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
          variant={"tertiary"}
          className={cn("rounded-r-full")}
          {...props}
        >
          <Plus />
        </Button>
      </div>
    );

  return (
    <div>
      <div className="lg:hidden flex">
        <Button
          {...props}
          onClick={() => {
            setCount(1);
          }}
          variant={variant || "tertiary"}
          className={cn("rounded-full hover:cursor-pointer w-full", className)}
        >
          Add to cart
        </Button>
      </div>
      <div className="lg:flex hidden absolute bottom-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 z-30 transition-all duration-300 ease-in-out w-full px-4 left-0">
        <Button
          {...props}
          onClick={() => {
            setCount(1);
          }}
          variant={variant || "tertiary"}
          className={cn("rounded-full hover:cursor-pointer w-full", className)}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};
