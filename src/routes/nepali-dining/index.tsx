import { PressMediaSection } from "@/components/nepali-dining/media-section";
import { NepaliDiningFooter } from "@/components/nepali-dining/nepali-dining-footer";
import { NepaliDiningLocation } from "@/components/nepali-dining/nepali-dining-location";
import { RestaurantGallerySection } from "@/components/nepali-dining/restaurant-gallery-section";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { buttonVariants } from "@/components/ui/button";
import { Image } from "@/components/ui/image";
import { cn } from "@/lib/utils";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";

export const Route = createFileRoute("/nepali-dining/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="pt-12">
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <AspectRatio ratio={16 / 9}>
          <Image
            src={
              "https://images.squarespace-cdn.com/content/v1/5c42b91c697a9873ebf844b8/1566868990918-JPJBFE44OW13OFILDIOM/yangskitchen_home.jpg?format=2500w"
            }
            alt="restarurant-banner"
          />
        </AspectRatio>
      </motion.div>
      <div className="pt-20 space-y-10">
        <section className="text-center space-y-5">
          <h3 className="font-bold">DINNER RESERVATIONS!</h3>
          <p className="font-dosis">
            We are now open for dinner service Thursday through Sunday! We’ll be
            accepting limited walk-ins and <br />{" "}
            <Link
              to="/nepali-dining/reservation"
              className="underline decoration-muted-foreground underline-offset-4"
            >
              reservations
            </Link>{" "}
            on OpenTable.
          </p>
          <p className="font-dosis">
            For brunch, we still do not take reservations as we seat guests on a
            first come first serve basis. However, you <br /> can join our Yelp!
            Waitlist to save your spot ahead of time (same day only)!
          </p>
        </section>
        <section className="text-center space-y-5">
          <h3 className="font-bold">PARKING INFO</h3>
          <p className="font-dosis">
            <span className="font-bold">
              DO NOT park in Rick&apos;s parking lot
            </span>{" "}
            - they <span className="font-bold">WILL TOW</span> at all times of
            the day! The open parking lot directly behind <br /> our restaurant
            has 2 hour free parking, or is free after 5:00PM. Nearby, South and
            North of Main St on <br /> 1st St, there are two parking structures
            with 4 hour free parking.
          </p>
        </section>
        <section className="text-center space-y-5">
          <h3 className="font-bold">BUSINESS HOURS</h3>
          <p className="font-dosis">
            BRUNCH: Thursday, Friday & Monday 9:00am - 2:00pm
          </p>
          <p className="font-dosis">Saturday & Sunday 9:00am - 2:30pm </p>
          <p className="font-dosis">
            DINNER: Thursday & Sunday 5:00pm - 9:00pm
          </p>
          <p className="font-dosis">Friday & Saturday 5:00pm - 10:00pm</p>
          <p className="font-dosis">CLOSED Tuesdays & Wednesdays</p>
          <p className="font-dosis font-medium">
            Dine-in, takeout, and delivery (via DoorDash & UberEats) available
          </p>
          <Link
            to="/nepali-dining/takeout"
            className={cn(
              buttonVariants({
                variant: "outline",
              }),
              "rounded-none group relative overflow-hidden border-2 border-black hover:text-white min-h-16 px-16 font-times font-semibold"
            )}
          >
            <p className="relative z-20">ORDER ONLINE</p>
            <div className="absolute w-full bottom-0 left-0 h-0 bg-black group-hover:h-full transition-all duration-300 ease-in-out" />
          </Link>
        </section>
      </div>
      <div className="pt-36 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:items-start items-center md:gap-y-0 gap-y-10 text-center">
        <section className="md:space-y-6 space-y-3">
          <h3 className="font-times font-medium text-xl tracking-[0.5rem]">
            LOCATION
          </h3>
          <div className="text-sm text-muted-foreground space-y-1">
            <p>112 W Main St.</p>
            <p>Alhambra, CA 91801</p>
          </div>
        </section>
        <section className="md:space-y-6 space-y-3">
          <h3 className="font-times font-medium text-xl tracking-[0.5rem]">
            HOURS
          </h3>
          <div className="text-sm text-muted-foreground space-y-3">
            <p>Brunch: Thursday, Friday & Monday, 9am to 2:00pm</p>
            <p>Saturday & Sunday, 9am to 2:30pm</p>
            <p>Dinner: Thursday & Sunday, 5pm to 9pm</p>
            <p>Friday & Saturday, 5pm to 10pm</p>
            <p>Closed Tuesdays & Wednesdays</p>
          </div>
        </section>
        <section className="md:space-y-6 space-y-3">
          <h3 className="font-times font-medium text-xl tracking-[0.5rem]">
            CONTACT
          </h3>
          <div className="text-sm text-muted-foreground space-y-1">
            <a className="block" href={"tel:6262811035"}>
              (626) 281-1035
            </a>
            <a className="block" href={"mailto:hello@yangskitchenla.com"}>
              hello@yangskitchenla.com
            </a>
          </div>
        </section>
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-28 pt-20 pb-32 sm:gap-y-0 gap-y-10">
        <section className="flex flex-col gap-y-3">
          <AspectRatio ratio={4 / 3}>
            <Image
              alt="banner"
              src="https://images.squarespace-cdn.com/content/v1/5c42b91c697a9873ebf844b8/1566963493871-ETXLCH49FLZUB3A0Y1QT/yangskitchen_01.png?format=1000w"
            />
          </AspectRatio>
          <p className="text-sm font-dosis text-muted-foreground">
            Images shot on location at{" "}
            <a
              href="https://maps.app.goo.gl/Xp1TPQA2r7t1QHVD9"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Nepali Cuisine
            </a>
          </p>
          <div className="sm:flex hidden flex-1 w-full items-center justify-center">
            <Image
              src="/logo_transparent.png"
              className="size-32 object-contain"
              alt="logo"
            />
          </div>
        </section>
        <section className="space-y-12">
          <AspectRatio ratio={3 / 4}>
            <Image
              alt="banner"
              src="https://images.squarespace-cdn.com/content/v1/5c42b91c697a9873ebf844b8/1566964014153-2JAH31CL236V51TSY4SW/yangskitchen_02.png?format=750w"
            />
          </AspectRatio>
          <Image
            src="/logo_transparent.png"
            className="size-32 object-contain sm:hidden block mx-auto"
            alt="logo"
          />
          <p className="font-dosis text-muted-foreground">
            Nepali Dining strives to source local, sustainable and organic when
            possible. We work hard to source premium ingredients and we cook
            everything from scratch with love. We also do our best to pay our
            employees living wages (tips are shared with all employees,
            including kitchen staff) and to reduce our environmental footprint
            wherever we can. Overall, these factors translate to higher menu
            prices, but we hope that you find value and feel a sense of comfort
            in knowing that we aim to get better everyday at doing what is
            important to us.
          </p>
        </section>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{
          once: true,
        }}
      >
        <AspectRatio ratio={16 / 9}>
          <Image
            alt="banner"
            src="https://images.squarespace-cdn.com/content/v1/5c42b91c697a9873ebf844b8/1619135748199-I56FXBEVWXC1QXGK17BZ/Apr+11+2021DSC07442.jpg?format=2500w"
          />
        </AspectRatio>
      </motion.div>
      <NepaliDiningLocation />
      <PressMediaSection />
      <RestaurantGallerySection />
      <NepaliDiningFooter />
    </div>
  );
}
