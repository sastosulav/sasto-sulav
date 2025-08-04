import { AspectRatio } from "@/components/ui/aspect-ratio";
import { buttonVariants } from "@/components/ui/button";
import { Image } from "@/components/ui/image";
import { cn } from "@/lib/utils";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/nepali-dining/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="pt-12">
      <AspectRatio ratio={16 / 9}>
        <Image
          src={
            "https://tblg.k-img.com/restaurant/images/Rvw/280910/320x320_rect_30d97d96aa3c94630ac000b0f560363e.jpg"
          }
          alt="restarurant-banner"
        />
      </AspectRatio>
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
            to="/nepali-dining/delivery"
            className={cn(
              buttonVariants({
                variant: "outline",
              }),
              "rounded-none border-black border-2 hover:bg-black hover:text-white min-h-16 px-16 font-times font-semibold"
            )}
          >
            ORDER ONLINE
          </Link>
        </section>
      </div>
    </div>
  );
}
