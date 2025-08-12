import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Image } from "@/components/ui/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { seo } from "@/utils/seo";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/nepali-dining/menu")({
  component: RouteComponent,
  head: () => ({
    meta: [
      ...seo({
        title: "Nepali Dining | Menu",
      }),
    ],
  }),
});

const menuData = {
  BRUNCH: {
    sections: [
      {
        title: "Small Bites & Specials",
        items: [
          {
            name: "Chicken Liver Mousse",
            price: "¥16",
            description:
              "Smooth chicken liver mousse with grilled sourdough toast",
            details:
              "Jidori chicken liver mousse, grilled Bub & Grandma's sourdough sesame toast, house jam, Chavez Farms market pickles, seasonal herbs",
            dietary: [],
            image: "/placeholder.svg?height=200&width=300",
          },
          {
            name: "Smoked Fish Dip",
            price: "¥14",
            description: "Fresh smoked fish dip with herbs and sourdough toast",
            details:
              "Smoked fish-of-the-moment dip, Bub & Grandma's sesame sourdough toast, herbs (contains dairy and shallots)",
            dietary: [],
            image: "/placeholder.svg?height=200&width=300",
          },
          {
            name: "Yang's Fried Chicken Wings",
            price: "¥18",
            description:
              "Crispy heirloom chicken wings with lemon and house seasoning",
            details:
              "Mary's Heirloom chicken wings, lemon, house salt & pepper",
            dietary: ["gf"],
            image: "/placeholder.svg?height=200&width=300",
          },
        ],
      },
      {
        title: "'Shareables'",
        items: [
          {
            name: "Cold Sesame Noodles",
            price: "¥16",
            description:
              "Organic spaghetti with house sesame sauce and fresh vegetables",
            details:
              "Semolina organic spaghetti, house sesame sauce, organic Persian cucumbers, pickled carrots, crushed peanuts, cilantro, scallion, house chili crisp *contains nuts*",
            dietary: ["ve", "s"],
            addOn: "+ Pastured chicken breast / avocado (+¥6)",
            image: "/placeholder.svg?height=200&width=300",
          },
          {
            name: "Cornmeal Mochi Pancake",
            price: "¥14",
            description: "Fluffy mochi pancake with seasonal toppings",
            details:
              "Grist & Toll cornmeal, Koda Farms mochiko rice flour, organic whipped cream, seasonal toppings",
            dietary: ["gf", "v"],
            image: "/placeholder.svg?height=200&width=300",
          },
        ],
      },
    ],
  },
  DINNER: {
    sections: [
      {
        title: "Appetizers",
        items: [
          {
            name: "Oysters on the Half Shell",
            price: "¥18",
            description: "Fresh daily selection of oysters with mignonette",
            details:
              "6 pieces, daily selection from Pacific Northwest, house mignonette, lemon, cocktail sauce",
            dietary: ["gf"],
            image: "/placeholder.svg?height=200&width=300",
          },
          {
            name: "Burrata & Stone Fruit",
            price: "¥22",
            description: "Creamy burrata with seasonal stone fruit and herbs",
            details:
              "House-made burrata, seasonal stone fruit, arugula, basil oil, aged balsamic, grilled sourdough",
            dietary: ["v"],
            image: "/placeholder.svg?height=200&width=300",
          },
          {
            name: "Tuna Crudo",
            price: "¥24",
            description: "Fresh tuna with citrus and avocado",
            details:
              "Sashimi-grade tuna, yuzu kosho, avocado, cucumber, radish, sesame oil, micro shiso",
            dietary: ["gf"],
            image: "/placeholder.svg?height=200&width=300",
          },
        ],
      },
      {
        title: "Mains",
        items: [
          {
            name: "Grilled Salmon",
            price: "¥32",
            description: "Wild salmon with seasonal vegetables and herb butter",
            details:
              "Wild king salmon, roasted vegetables, fingerling potatoes, herb compound butter, lemon",
            dietary: ["gf"],
            image: "/placeholder.svg?height=200&width=300",
          },
          {
            name: "Dry-Aged Ribeye",
            price: "¥58",
            description: "28-day dry-aged ribeye with bone marrow butter",
            details:
              "16oz dry-aged ribeye, bone marrow butter, roasted mushrooms, crispy potatoes, watercress",
            dietary: ["gf"],
            image: "/placeholder.svg?height=200&width=300",
          },
          {
            name: "Mushroom Risotto",
            price: "¥28",
            description:
              "Creamy arborio rice with wild mushrooms and truffle oil",
            details:
              "Arborio rice, wild mushroom medley, parmesan, truffle oil, fresh herbs, white wine",
            dietary: ["v", "gf"],
            image: "/placeholder.svg?height=200&width=300",
          },
        ],
      },
    ],
  },
  BEVERAGES: {
    sections: [
      {
        title: "Coffee & Tea",
        items: [
          {
            name: "Espresso",
            price: "¥4",
            description: "Single shot of our house blend espresso",
            details:
              "Single origin beans from Guatemala, medium roast, served in traditional cup",
            dietary: ["ve", "gf"],
            image: "/placeholder.svg?height=200&width=300",
          },
          {
            name: "Matcha Latte",
            price: "¥6",
            description: "Ceremonial grade matcha with steamed milk",
            details:
              "Ceremonial grade matcha powder, choice of oat, almond, or dairy milk, light sweetener",
            dietary: ["v", "gf"],
            image: "/placeholder.svg?height=200&width=300",
          },
          {
            name: "Cold Brew",
            price: "¥5",
            description: "Smooth cold brew coffee served over ice",
            details:
              "24-hour cold brew, Ethiopian beans, served black or with cream",
            dietary: ["ve", "gf"],
            image: "/placeholder.svg?height=200&width=300",
          },
        ],
      },
      {
        title: "Fresh Juices",
        items: [
          {
            name: "Green Goddess",
            price: "¥8",
            description: "Kale, spinach, apple, cucumber, lemon, ginger",
            details: "Fresh pressed daily, organic vegetables, no added sugar",
            dietary: ["ve", "gf"],
            image: "/placeholder.svg?height=200&width=300",
          },
          {
            name: "Citrus Sunrise",
            price: "¥7",
            description: "Orange, grapefruit, lime, mint",
            details:
              "Fresh squeezed citrus fruits, organic mint, served over ice",
            dietary: ["ve", "gf"],
            image: "/placeholder.svg?height=200&width=300",
          },
        ],
      },
    ],
  },
  "COCKTAILS/BEER/SAKE/WINE": {
    sections: [
      {
        title: "Signature Cocktails",
        items: [
          {
            name: "House Old Fashioned",
            price: "¥16",
            description: "Bourbon, house bitters, orange peel, cherry",
            details:
              "Bulleit bourbon, house-made bitters, demerara sugar, expressed orange peel, luxardo cherry",
            dietary: [],
            image: "/placeholder.svg?height=200&width=300",
          },
          {
            name: "Yuzu Margarita",
            price: "¥14",
            description: "Tequila, yuzu, lime, agave, salt rim",
            details:
              "Blanco tequila, fresh yuzu juice, lime, agave nectar, himalayan salt rim",
            dietary: ["gf"],
            image: "/placeholder.svg?height=200&width=300",
          },
          {
            name: "Smoky Mezcal Negroni",
            price: "¥18",
            description: "Mezcal, Campari, sweet vermouth, orange twist",
            details:
              "Artisanal mezcal, Campari, Carpano Antica, expressed orange oils, smoked glass",
            dietary: [],
            image: "/placeholder.svg?height=200&width=300",
          },
        ],
      },
      {
        title: "Wine by the Glass",
        items: [
          {
            name: "Champagne - Veuve Clicquot",
            price: "¥18",
            description: "Classic French champagne, crisp and elegant",
            details: "Brut, Reims France, notes of apple and brioche",
            dietary: ["gf", "v"],
            image: "/placeholder.svg?height=200&width=300",
          },
          {
            name: "Pinot Noir - Willamette Valley",
            price: "¥14",
            description: "Oregon Pinot Noir with cherry and earth notes",
            details:
              "2021 vintage, Oregon, light body, cherry, mushroom, spice",
            dietary: ["gf", "ve"],
            image: "/placeholder.svg?height=200&width=300",
          },
          {
            name: "Sauvignon Blanc - Sancerre",
            price: "¥16",
            description: "Crisp French white with citrus and mineral notes",
            details:
              "Loire Valley, France, gooseberry, lime zest, wet stone minerality",
            dietary: ["gf", "ve"],
            image: "/placeholder.svg?height=200&width=300",
          },
        ],
      },
      {
        title: "Craft Beer",
        items: [
          {
            name: "Local IPA",
            price: "¥8",
            description: "Hoppy IPA from local brewery",
            details: "7.2% ABV, citrus hops, pine notes, medium body",
            dietary: ["ve"],
            image: "/placeholder.svg?height=200&width=300",
          },
          {
            name: "Japanese Lager",
            price: "¥6",
            description: "Crisp and clean Japanese-style lager",
            details: "5.0% ABV, light and refreshing, perfect with sushi",
            dietary: ["ve"],
            image: "/placeholder.svg?height=200&width=300",
          },
        ],
      },
    ],
  },
};
const dietaryLabels = {
  gf: { label: "Gluten-Free", color: "bg-green-100 text-green-800" },
  ve: { label: "Vegan", color: "bg-blue-100 text-blue-800" },
  v: { label: "Vegetarian", color: "bg-orange-100 text-orange-800" },
  s: { label: "Spicy", color: "bg-red-100 text-red-800" },
};

type TabType = keyof typeof menuData;

function RouteComponent() {
  const tabs: TabType[] = [
    "BRUNCH",
    "DINNER",
    "BEVERAGES",
    "COCKTAILS/BEER/SAKE/WINE",
  ];

  return (
    <div className="max-w-6xl mx-auto pt-20">
      <Tabs defaultValue="BRUNCH" className="w-full" variant="underline">
        <ScrollArea>
          <ScrollBar orientation="horizontal" />
          <TabsList className="grid w-full max-w-4xl mx-auto sm:gap-x-0 gap-x-6 grid-cols-4 mb-8">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="text-xs whitespace-nowrap block"
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>
        </ScrollArea>

        <div className="mb-8 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-sm font-semibold mb-2">Dietary Information:</h3>
          <div className="flex flex-wrap gap-2">
            {Object.entries(dietaryLabels).map(([key, info]) => (
              <Badge key={key} className={info.color}>
                {key.toUpperCase()} - {info.label}
              </Badge>
            ))}
          </div>
        </div>

        {tabs.map((tab) => (
          <TabsContent key={tab} value={tab} className="space-y-12">
            {menuData[tab].sections.map((section, sectionIndex) => (
              <section key={sectionIndex}>
                <h2 className="text-2xl font-bold text-center mb-8 text-accent-foreground">
                  {section.title}
                </h2>
                <div className="grid xs:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.items.map((item, itemIndex) => (
                    <Card key={itemIndex} className="p-0 overflow-hidden group">
                      <div className="aspect-video w-full overflow-hidden bg-gray-100">
                        <Image
                          src="/logo.png"
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-bold text-lg leading-tight">
                            {item.name}
                          </h3>
                          <span className="font-bold text-lg text-green-700 ml-2 flex-shrink-0">
                            {item.price}
                          </span>
                        </div>
                        {item.dietary.length > 0 && (
                          <div className="flex gap-1 mb-3 flex-wrap">
                            {item.dietary.map((diet) => (
                              <Badge
                                key={diet}
                                className={`text-xs ${dietaryLabels[diet as keyof typeof dietaryLabels].color}`}
                              >
                                {diet.toUpperCase()}
                              </Badge>
                            ))}
                          </div>
                        )}
                        <p className="text-accent-foreground font-medium mb-3">
                          {item.description}
                        </p>
                        <Separator className="my-3" />
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.details}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
