import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/utils";
import { ImageOff } from "lucide-react";
import { useCallback, useMemo, useState } from "react";
import {
  ColorCombination,
  defaultColorCombinations,
  hashString,
  SVGPattern,
} from "../icons/image-svg-pattern";

type Props = React.ComponentProps<"img">;
type ImageWrapperProps = React.ComponentProps<"div">;

const ImageWrapper = ({ children, className, style }: ImageWrapperProps) => {
  return (
    <div style={style} className={cn("relative", className)}>
      {children}
    </div>
  );
};

export const Image = (props: Props) => {
  const { ref: imgRef, isIntersecting } = useIntersectionObserver({
    freezeOnceVisible: true,
    rootMargin: "50px",
  });
  const defaultSrc = "/favicon-32x32.png";
  const [status, setStatus] = useState<"loading" | "loaded" | "error">(
    "loading"
  );

  const patternData = useMemo(() => {
    const seedValue = hashString(props.src || "default");
    const colorIndex = seedValue % defaultColorCombinations.length;
    const selectedColors = defaultColorCombinations[colorIndex];

    const randomSeed = seedValue % 1000;
    const uniqueId = `${hashString(props.src || "default")}-${seedValue}`.slice(
      0,
      9
    );

    return {
      colors: selectedColors,
      uniqueId,
      randomSeed,
    };
  }, [props.src]);

  if (!props.src) {
    console.warn("Image: src prop is required");
  }
  if (!props.alt) {
    console.warn("Image: alt prop is required for accessibility");
  }

  const handleLoad = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement>) => {
      setStatus("loaded");
      props.onLoad?.(e);
    },
    [props.onLoad]
  );

  const handleError = useCallback(
    (event: React.SyntheticEvent<HTMLImageElement>) => {
      setStatus("error");
      props.onError?.(event);
    },
    [props.onError]
  );

  if (!props.src || status === "error") {
    return (
      <ImageWrapper
        className={cn("h-full text-sm w-full", props.className)}
        style={props.style}
      >
        <div
          className={cn(
            "h-full w-full flex flex-col items-center justify-center bg-destructive/10 text-font",
            props.className
          )}
        >
          <ImageOff className="h-20 w-20 mb-2" />
          <span className="text-center">Error Loading Image</span>
        </div>
      </ImageWrapper>
    );
  }

  return (
    <ImageWrapper
      ref={imgRef}
      style={props.style}
      className={cn("h-full relative overflow-hidden w-full", props.className)}
    >
      {status === "loading" && (
        <div
          className={cn("absolute inset-0 transition-opacity duration-500")}
          style={{ filter: "blur(50px)" }}
          aria-hidden="true"
        >
          <SVGPattern
            colors={patternData.colors as ColorCombination}
            uniqueId={patternData.uniqueId}
            randomSeed={patternData.randomSeed}
          />
        </div>
      )}
      {isIntersecting && (
        <img
          {...props}
          src={props.src || defaultSrc}
          onLoad={(e) => {
            handleLoad(e);
          }}
          onError={(e) => {
            handleError(e);
          }}
          className={cn(
            "h-full w-full object-cover transition-opacity duration-500 ease-in-out",
            status === "loading" ? "opacity-0" : "opacity-100",
            status === "loaded" ? "animate-blur-in" : "",
            props.className
          )}
        />
      )}
    </ImageWrapper>
  );
};
