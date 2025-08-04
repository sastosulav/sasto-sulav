import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/nepali-dining/reservation"
)({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_nepali_dining/nepali-dining/reservation"!</div>;
}
