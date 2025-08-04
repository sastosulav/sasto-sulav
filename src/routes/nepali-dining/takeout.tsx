import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/nepali-dining/takeout')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_nepali_dining/nepali-dining/takeout"!</div>
}
