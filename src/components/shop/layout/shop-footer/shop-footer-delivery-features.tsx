import { BadgePercent, CircleDollarSign, Milk, Truck } from "lucide-react";
import { Container } from "../../../ui/container";

const items = [
  {
    icon: <Milk />,
    title: "Everyday fresh products",
  },
  {
    icon: <Truck />,
    title: "Free delivery for order over $70",
  },
  {
    icon: <BadgePercent />,
    title: "Daily Mega Discounts",
  },
  {
    icon: <CircleDollarSign />,
    title: "Best price on the market",
  },
];

export const ShopFooterDeliveryFeatures = () => {
  return (
    <Container className="py-8 border-b">
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 lg:gap-y-0 gap-y-6 items-center lg:divide-x">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 lg:justify-center"
          >
            <div className="flex-shrink-0 size-6">{item.icon}</div>
            <span className="text-[13px] font-medium ">{item.title}</span>
          </div>
        ))}
      </div>
    </Container>
  );
};
