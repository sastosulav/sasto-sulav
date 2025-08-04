import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/nepali-dining/menu")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptate
      suscipit quos necessitatibus magnam exercitationem corporis nobis, placeat
      labore quidem odio itaque consequuntur officia ex cupiditate aut nihil
      iure harum.
    </div>
  );
}
