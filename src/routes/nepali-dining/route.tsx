import { Container } from "@/components/ui/container";
import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/nepali-dining")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Container className="py-10">
      <div className="grid grid-cols-3 justify-between items-center">
        <div />
        <Link to="/nepali-dining" className="font-atma text-4xl font-medium">
          Sasto Sulav Express
        </Link>
        <section className=" font-dosis font-medium uppercase flex flex-col ml-auto">
          <Link to="/nepali-dining/menu" className="py-1 hover:underline">
            1 View Our Menu
          </Link>
          <Link
            to="/nepali-dining/reservation"
            className="py-1 hover:underline"
          >
            2 Make a Reservation (dinner)
          </Link>
          <div className="flex items-center gap-3">
            <Link className="py-1 hover:underline" to="/nepali-dining/takeout">
              3 Order takeout
            </Link>
            <Link className="py-1 hover:underline" to="/nepali-dining/delivery">
              4 Order delivery
            </Link>
          </div>
        </section>
      </div>
      <Outlet />
    </Container>
  );
}
