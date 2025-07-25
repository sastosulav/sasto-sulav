"use client";

import { cn } from "@/lib/utils";
import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export const ScrollUP = () => {
  const [scrolly, setScrolly] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === "undefined") return;
      setScrolly(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Button
      onClick={() => {
        if (typeof window === "undefined") return;
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className={cn(
        "fixed md:bottom-4 bottom-20 right-4 z-50 transition-all duration-300 ease-in-out",
        scrolly < 300 ? "opacity-0 translate-x-10" : "opacity-100 translate-x-0"
      )}
    >
      <ChevronUp />
    </Button>
  );
};
