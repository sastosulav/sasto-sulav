import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_main/terms-condition")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/terms-condition"!</div>;
}
