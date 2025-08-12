import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Image } from "@/components/ui/image";
import { cn } from "@/lib/utils";
import { seo } from "@/utils/seo";
import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, Star, Truck } from "lucide-react";

export const Route = createFileRoute("/nepali-dining/delivery")({
  component: RouteComponent,
  head: () => ({
    meta: [
      ...seo({
        title: "Nepali Dining | Delivery",
      }),
    ],
  }),
});

function RouteComponent() {
  const tips = [
    {
      icon: Clock,
      title: "Peak Hours",
      description: "Expect longer delivery times during 6-8 PM",
      color: "bg-orange-50 text-orange-600 border-orange-200",
    },
    {
      icon: Truck,
      title: "Weather Delays",
      description: "Allow extra time during bad weather conditions",
      color: "bg-blue-50 text-blue-600 border-blue-200",
    },
    {
      icon: MapPin,
      title: "Address Details",
      description: "Include apartment/unit numbers and delivery instructions",
      color: "bg-green-50 text-green-600 border-green-200",
    },
    {
      icon: Star,
      title: "Quality Guarantee",
      description: "We ensure food arrives hot and fresh",
      color: "bg-purple-50 text-purple-600 border-purple-200",
    },
  ];
  const popularItems = [
    {
      id: "momo",
      name: "Chicken Momo",
      price: 12.99,
      description: "Steamed dumplings with chicken filling and special sauce",
      rating: 4.8,
      dietary: ["s"],
    },
    {
      id: "dal-bhat",
      name: "Dal Bhat Set",
      price: 18.99,
      description:
        "Traditional Nepali meal with rice, lentils, curry, and pickles",
      rating: 4.9,
      dietary: ["v"],
    },
    {
      id: "chow-mein",
      name: "Chicken Chow Mein",
      price: 14.99,
      description: "Stir-fried noodles with vegetables and tender chicken",
      rating: 4.7,
      dietary: [],
    },
    {
      id: "sekuwa",
      name: "Chicken Sekuwa",
      price: 16.99,
      description: "Grilled marinated chicken skewers with traditional spices",
      rating: 4.8,
      dietary: ["s", "gf"],
    },
    {
      id: "thukpa",
      name: "Chicken Thukpa",
      price: 13.99,
      description: "Hearty noodle soup with chicken and fresh vegetables",
      rating: 4.6,
      dietary: [],
    },
  ];

  const dietaryLabels = {
    gf: { label: "Gluten-Free", color: "bg-green-100 text-green-800" },
    ve: { label: "Vegan", color: "bg-blue-100 text-blue-800" },
    v: { label: "Vegetarian", color: "bg-orange-100 text-orange-800" },
    s: { label: "Spicy", color: "bg-red-100 text-red-800" },
  };

  return (
    <div className="pt-20 max-w-6xl mx-auto">
      <div className="text-center space-y-6 mb-12">
        <h1 className="text-4xl font-bold font-dosis">Delivery Service</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We partner with leading delivery platforms to bring authentic Nepali
          cuisine to your doorstep.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
          <Card className="p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-red-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Truck className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">DoorDash</h3>
            <p className="text-muted-foreground mb-4">
              Fast delivery • Real-time tracking
            </p>
            <div className="space-y-2 text-sm mb-6">
              <div className="flex justify-between">
                <span>Delivery Time:</span>
                <span className="font-medium">25-40 min</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee:</span>
                <span className="font-medium">¥2.99 - ¥4.99</span>
              </div>
              <div className="flex justify-between">
                <span>Minimum Order:</span>
                <span className="font-medium">¥15</span>
              </div>
            </div>
            <Button
              className="w-full rounded-none border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
              variant="outline"
            >
              Order on DoorDash
            </Button>
          </Card>

          <Card className="p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-green-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Truck className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Uber Eats</h3>
            <p className="text-muted-foreground mb-4">
              Quick delivery • Easy ordering
            </p>
            <div className="space-y-2 text-sm mb-6">
              <div className="flex justify-between">
                <span>Delivery Time:</span>
                <span className="font-medium">30-45 min</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee:</span>
                <span className="font-medium">¥1.99 - ¥3.99</span>
              </div>
              <div className="flex justify-between">
                <span>Minimum Order:</span>
                <span className="font-medium">¥12</span>
              </div>
            </div>
            <Button
              className="w-full rounded-none border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
              variant="outline"
            >
              Order on Uber Eats
            </Button>
          </Card>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold font-dosis mb-8">Delivery Areas</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Downtown</h3>
              <p className="text-sm text-muted-foreground">
                Free delivery over ¥25
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                15-25 min delivery
              </p>
            </Card>
            <Card className="p-6">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Suburbs</h3>
              <p className="text-sm text-muted-foreground">
                Free delivery over ¥30
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                25-35 min delivery
              </p>
            </Card>
            <Card className="p-6">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Extended Area</h3>
              <p className="text-sm text-muted-foreground">
                Free delivery over ¥40
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                35-50 min delivery
              </p>
            </Card>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold font-dosis mb-8">
            Most Ordered for Delivery
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularItems.slice(0, 4).map((item) => (
              <Card
                key={item.id}
                className="overflow-hidden p-0 hover:shadow-lg transition-shadow"
              >
                <div className="aspect-square bg-gray-100">
                  <Image
                    src="/logo.png"
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-1">{item.name}</h3>
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{item.rating}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold">¥{item.price}</span>
                    <div className="flex gap-1">
                      {item.dietary.map((diet) => (
                        <Badge
                          key={diet}
                          className={cn(
                            "text-xs",
                            dietaryLabels[diet as keyof typeof dietaryLabels]
                              ?.color
                          )}
                        >
                          {diet.toUpperCase()}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Delivery Tips
            </h2>
            <p className="text-gray-600">
              Everything you need to know for a smooth delivery experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tips.map((tip, index) => {
              const IconComponent = tip.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg border ${tip.color}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {tip.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {tip.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
