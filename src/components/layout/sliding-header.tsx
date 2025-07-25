import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const SlidingHeader = ({ children, className }: Props) => {
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
    <div
      className={cn(
        scrolly > 300
          ? "lg:animate-none animate-slide-in-down w-full top-0 z-50 lg:static fixed left-1/2 -translate-x-1/2 bg-background"
          : "",
        className
      )}
    >
      {children}
    </div>
  );
};
