import { Container } from "@/components/ui/container";
import { Image } from "@/components/ui/image";
import { HOME_DATA } from "@/constants/data";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export const HomeContent = () => {
  return (
    <article id="sasto-info" className="space-y-14 bg-secondary py-20">
      {HOME_DATA.map((d, index) => {
        const isEven = index % 2 === 0;
        return (
          <Container
            key={index}
            className="lg:h-[50rem] grid grid-cols-12 lg:gap-x-8 lg:gap-y-0 gap-y-10 items-center"
          >
            <motion.div
              initial={{ opacity: 0, x: isEven ? 100 : -100 }}
              transition={{ duration: 0.5 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={cn(
                "col-span-12 lg:col-span-6 lg:h-full md:h-[50dvh] h-[40dvh] overflow-hidden p-0 relative",
                isEven ? "order-2" : ""
              )}
            >
              <Image
                src={d.image}
                alt={d.title}
                className="h-full w-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-12 lg:col-span-6 space-y-10"
            >
              <div className="space-y-6">
                <h3
                  className="lg:text-5xl text-4xl font-semibold font-dosis"
                  data-i18n="nepaliDining"
                >
                  {d.title}
                </h3>
                <p data-i18n="nepaliDiningDesc">{d.description}</p>
              </div>
              <div>
                <Link to={d.href}>
                  <button className="group relative h-[calc(48px+8px)] rounded-full border border-primary py-1 pr-14 font-medium bg-secondary text-secondary-foreground shadow-sm flex items-center px-4 cursor-pointer">
                    <span
                      data-i18n="knowMore"
                      className="z-10 pr-2 group-hover:text-white capitalize"
                    >
                      Know More
                    </span>
                    <div className="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full bg-muted-foreground transition-[width] group-hover:w-[calc(100%-8px)]">
                      <div className="flex size-12 items-center justify-center">
                        <ArrowRight className="size-4 text-white" />
                      </div>
                    </div>
                  </button>
                </Link>
              </div>
            </motion.div>
          </Container>
        );
      })}
    </article>
  );
};
