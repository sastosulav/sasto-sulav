import { Menu, Search, ShoppingBag, UserRound } from "lucide-react";
import { useEffect, useState } from "react";
import { AutoComplete } from "../ui/auto-complete";
import { Button } from "../ui/button";
import { Container } from "../ui/container";
import { Indicator } from "../ui/indicator";
import { LocationSelector } from "./location-selector";
import { MobileSidebar } from "./mobile-sidebar";

type Posts = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const HeaderOptions = () => {
  const [options, setOptions] = useState<Posts[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const posts = (await res.json()) as Posts[];
      setOptions(posts);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <Container className="flex items-center sm:gap-12 md:justify-start justify-between">
      <section className="flex items-center gap-3">
        <div className="xl:hidden block">
          <MobileSidebar asChild>
            <Button variant="ghost" size="icon">
              <Menu className="text-muted-foreground size-6" />
              <span className="sr-only">Toggle Mobile Sidebar</span>
            </Button>
          </MobileSidebar>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <ShoppingBag className="size-14 text-tertiary lg:block hidden" />
            <h3 className="text-3xl font-bold font-dosis text-tertiary">
              Sasto Sulav
            </h3>
          </div>
          <small className="text-xs text-gray-400 text-center sm:block hidden">
            Online Grocery Shopping Center
          </small>
        </div>
      </section>
      <section className="md:flex-1 flex items-center gap-6">
        <div className="hidden xl:block">
          <LocationSelector />
        </div>
        <div className="md:flex hidden bg-muted rounded-sm items-center px-3 flex-1">
          <AutoComplete
            className="[&_svg]:hidden rounded-sm border-none bg-muted py-7 [&>div]:px-0"
            options={options?.map((post) => ({
              value: post.id.toString(),
              label: post.title,
            }))}
            loadingText="Searching..."
            placeholder="Search for products..."
          />
          <button>
            <Search className="text-muted-foreground size-8" />
          </button>
        </div>
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-full sm:flex hidden items-center justify-center border">
            <UserRound className="size-5 " />
          </div>
          <p className="font-semibold text-sm">$0.00</p>
        </div>
        <Indicator label="1">
          <ShoppingBag className="size-5 text-red-500" />
        </Indicator>
      </section>
    </Container>
  );
};
