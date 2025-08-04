import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/nepali-dining/reservation")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="pt-20">
      <Card className="max-w-2xl mx-auto rounded-none shadow-none">
        <CardHeader>
          <CardTitle className="font-dosis text-xl">
            Reservation at Nepali Dining
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="grid grid-cols-2 items-center gap-6">
            <Input placeholder="john doe" className="h-12" />
            <Input placeholder="+81529055944" className="h-12" />
            <Input placeholder="s****@gmail.com" className="h-12" />
            <Input placeholder="your " className="h-12" />
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
