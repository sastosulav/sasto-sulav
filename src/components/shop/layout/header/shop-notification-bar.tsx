import { CAN_USE_DOM } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../../../ui/button";

export const ShopNotificationBar = () => {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (CAN_USE_DOM) {
      const showNotification =
        window.sessionStorage.getItem("showNotification");
      if (showNotification === "false") {
        setShowNotification(false);
      } else {
        setShowNotification(true);
      }
    }
  }, []);

  return (
    <AnimatePresence>
      {showNotification && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-tertiary p-1 text-white text-center flex justify-between items-center overflow-hidden"
        >
          <div />
          <p className="sm:text-xs text-[10px]">
            We ship <span className="font-semibold">fast and effortless</span> -
            your order will arrive in no time!
          </p>
          <Button
            variant="ghost"
            size={"icon"}
            onClick={() => {
              if (!CAN_USE_DOM) return;
              setShowNotification(false);
              window.sessionStorage.setItem("showNotification", "false");
            }}
          >
            <X />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
