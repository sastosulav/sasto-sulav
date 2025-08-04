import { NAV_LINKS } from "@/constants/data";
import { Button } from "../../../ui/button";
import { Container } from "../../../ui/container";
import { CategoriesDropDown } from "../../categories-drop-down";
import { ShopListDropDown } from "../../shop-list-drop-down";

export const ShopMainNav = () => {
  return (
    <Container className="xl:flex items-center justify-between hidden">
      <CategoriesDropDown />
      <section className="flex items-center gap-6">
        <Button
          variant="ghost"
          className="rounded-full uppercase font-dosis text-[15px] font-semibold text-muted-foreground"
        >
          Home
        </Button>
        <ShopListDropDown />
        {NAV_LINKS.map((l) => (
          <Button
            key={l.href}
            variant="ghost"
            className="rounded-full hover:bg-primary-foreground hover:text-primary uppercase font-dosis text-[15px] font-semibold text-muted-foreground"
          >
            {l.icon && l.icon} {l.label}
          </Button>
        ))}
      </section>
    </Container>
  );
};
