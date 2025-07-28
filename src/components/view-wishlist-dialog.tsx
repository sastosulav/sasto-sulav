"use client";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

type Props = {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  itemName: string;
};

export const ViewWishListDialog = (props: Props) => {
  return (
    <Dialog open={props.opened} onOpenChange={props.setOpened}>
      <DialogContent showCloseButton={false} className="sm:max-w-sm rounded-xs">
        <DialogHeader className="sr-only">
          <DialogTitle>View WishList</DialogTitle>
        </DialogHeader>
        <p className="text-sm">
          <span className="font-bold">{props.itemName}</span> has been added to
          Wishlist.
        </p>
        <section className="flex flex-col items-center gap-y-3">
          <Button className="w-full rounded-none" variant="tertiary" size="lg">
            View Wishlist
          </Button>
          <DialogClose
            className={cn(
              buttonVariants({
                size: "lg",
                variant: "secondary",
              }),
              "w-full rounded-none"
            )}
          >
            Close
          </DialogClose>
        </section>
      </DialogContent>
    </Dialog>
  );
};
