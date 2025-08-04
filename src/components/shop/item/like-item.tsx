"use client";

import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { Button, ButtonProps } from "../../ui/button";
import { ViewWishListDialog } from "../../view-wishlist-dialog";

interface Props extends ButtonProps {
  itemName: string;
}

export const LikeItem = ({ itemName, ...props }: Props) => {
  const [isLiked, setIsLiked] = useState(false);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (isLiked) {
      setOpened(true);
    }
  }, [isLiked]);
  return (
    <div>
      <Button
        onClick={() => {
          setIsLiked((prev) => !prev);
        }}
        className={cn(
          "rounded-full hover:bg-tertiary hover:text-white cursor-pointer lg:translate-x-4 delay-100 group-hover:translate-x-0 transition-all lg:ease-linear lg:opacity-0 group-hover:opacity-100",
          props.className
        )}
        variant={props.variant || "outline"}
        size={props.size || "icon"}
        {...props}
      >
        <Heart className={cn(isLiked && "fill-red-500 stroke-red-500")} />
      </Button>
      <ViewWishListDialog
        itemName={itemName}
        opened={opened}
        setOpened={setOpened}
      />
    </div>
  );
};
