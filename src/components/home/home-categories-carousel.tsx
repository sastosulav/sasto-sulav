import { CATEGORIES } from "@/constants/data";
import { AspectRatio } from "../ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Image } from "../ui/image";

export const HomeCategoriesCarousel = () => {
  return (
    <div className="border">
      <Carousel
        opts={{
          dragFree: true,
        }}
      >
        <CarouselContent>
          {CATEGORIES.map((item, index) => (
            <CarouselItem
              key={index}
              className="lg:basis-1/6 sm:basis-1/4 basis-1/2 border-r border-r-border last:border-r-transparent pb-5 pt-3 space-y-1.5"
            >
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <AspectRatio
                  ratio={4 / 3}
                  className=" relative overflow-hidden"
                >
                  <Image
                    alt={item.title}
                    className="object-contain group-hover:scale-105 transition-all duration-300 ease-in-out"
                    src={item.img}
                  />
                </AspectRatio>
              </a>
              <div className="flex flex-col items-center gap-y-1">
                <h6 className="text-sm font-semibold">{item.title}</h6>
                <p className="text-xs text-zinc-900">{item.total} items</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="-right-4 shadow-sm" />
        <CarouselPrevious className="-left-4 shadow-sm" />
      </Carousel>
    </div>
  );
};
