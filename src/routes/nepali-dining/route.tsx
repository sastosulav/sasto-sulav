import { NepaliDiningSidebar } from "@/components/nepali-dining/nepali-dining-sidebar";
import { Container } from "@/components/ui/container";
import { seo } from "@/utils/seo";
import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/nepali-dining")({
  component: RouteComponent,
  head: () => ({
    meta: [
      ...seo({
        title: "Nepali Dining",
        description:
          "Experience the authentic taste of Nepal in the heart of Japan. Our restaurant serves traditional Nepali cuisine prepared by expert chefs, offering a perfect blend of flavors and spices. From classNameic momos to rich curries, we bring the warmth and hospitality of Nepal to your dining experience.",
      }),
    ],
  }),
});

function RouteComponent() {
  return (
    <Container className="py-10">
      <div className="grid grid-cols-3 justify-between items-center">
        <div />
        <Link
          to="/nepali-dining"
          className="font-atma text-4xl font-medium text-center text-nowrap"
        >
          Nepali Dining
        </Link>
        <section className="font-dosis md:flex hidden font-medium uppercase  flex-col ml-auto text-gray-600">
          <Link
            to="/nepali-dining/menu"
            activeProps={{
              className: "underline text-primary",
            }}
            className="py-1 hover:underline"
          >
            1 View Our Menu
          </Link>
          <Link
            to="/nepali-dining/reservation"
            className="py-1 hover:underline"
            activeProps={{
              className: "underline text-primary",
            }}
          >
            2 Make a Reservation (dinner)
          </Link>
          <div className="flex items-center gap-3">
            <Link
              activeProps={{
                className: "underline text-primary",
              }}
              className="py-1 hover:underline"
              to="/nepali-dining/takeout"
            >
              3 Order takeout
            </Link>
            <Link
              activeProps={{
                className: "underline text-primary",
              }}
              className="py-1 hover:underline"
              to="/nepali-dining/delivery"
            >
              4 Order delivery
            </Link>
          </div>
        </section>
        <div className="md:hidden flex ml-auto">
          <NepaliDiningSidebar />
        </div>
      </div>
      <Outlet />
    </Container>
  );
}
