import { MoveRight } from "lucide-react";
import { motion } from "motion/react";
import { AspectRatio } from "../../ui/aspect-ratio";
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import { Image } from "../../ui/image";

export const ShopHomeBanner = () => {
  return (
    <div className="grid md:grid-cols-2 items-center gap-6">
      <motion.section
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <AspectRatio
          ratio={4 / 3}
          className="rounded-[10px] overflow-hidden relative"
        >
          <a
            href="https://tetoteto.co.jp/shop/sasto-sulav-express"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10 flex bg-black/5 items-center justify-start px-10 py-12"
          >
            <div className="lg:space-y-6 space-y-2.5">
              <section className="flex items-center gap-3">
                <p className="uppercase font-dosis font-medium lg:text-sm text-xs">
                  Exclusive Offer
                </p>
                <Badge className="text-[#038E42] bg-gradient-to-r from-green-500/20 rounded-full lg:px-4 px-3 lg:py-2 py-1 text-sm font-dosis font-medium to-transparent">
                  -20% OFF
                </Badge>
              </section>
              <section>
                <h3 className=" font-semibold lg:text-[40px] text-2xl lg:leading-[48px]">
                  Fresh Organic <br />
                  Vegetables
                </h3>
                <p className="text-zinc-700 sm:text-base text-sm">
                  Only this week. Don&apos;t miss...
                </p>
              </section>
              <section>
                <p className="text-xs text-zinc-700 font-medium">
                  from{" "}
                  <span className="text-destructive font-dosis font-bold lg:text-4xl text-[30px]">
                    ¥7.99
                  </span>
                </p>
              </section>
              <Button className="rounded-full" variant="destructive">
                Shop Now <MoveRight />
              </Button>
            </div>
          </a>
          <Image
            alt="banner1"
            className="object-cover"
            src="https://images.unsplash.com/photo-1586788224331-947f68671cf1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </AspectRatio>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <AspectRatio
          ratio={4 / 3}
          className="rounded-[10px] overflow-hidden relative"
        >
          <a
            href="https://tetoteto.co.jp/shop/sasto-sulav-express"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10 flex bg-black/20 items-center justify-start px-10 py-12"
          >
            <div className="lg:space-y-6 space-y-2.5">
              <section className="flex items-center gap-3">
                <p className="uppercase font-dosis font-medium lg:text-sm text-xs text-white">
                  Exclusive Offer
                </p>
                <Badge className="text-[#038E42] bg-gradient-to-r from-green-500/20 rounded-full lg:px-4 px-3 lg:py-2 py-1 text-sm font-dosis font-medium to-transparent">
                  -20% OFF
                </Badge>
              </section>
              <section>
                <h3 className="text-white font-semibold lg:text-[40px] text-2xl lg:leading-[48px]">
                  Premium Quality <br />
                  Groceries
                </h3>
                <p className="text-gray-200 sm:text-base text-sm">
                  Just don&apos;t miss the special this week...
                </p>
              </section>
              <section>
                <p className="text-xs text-gray-200 font-medium">
                  from{" "}
                  <span className="text-destructive font-bold font-dosis lg:text-4xl text-[30px]">
                    ¥6.25
                  </span>
                </p>
              </section>
              <Button className="rounded-full">
                Shop Now <MoveRight />
              </Button>
            </div>
          </a>
          <Image
            alt="banner2"
            className="object-cover"
            src="https://klbtheme.com/bacola/wp-content/uploads/2021/08/home-banner-18.jpg"
          />
        </AspectRatio>
      </motion.section>
    </div>
  );
};
