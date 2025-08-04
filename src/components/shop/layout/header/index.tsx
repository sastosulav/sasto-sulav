import { SlidingHeader } from "@/components/layout/sliding-header";
import { HeaderOptions } from "./header-options";
import { ShopMainNav } from "./shop-main-nav";
import { ShopNotificationBar } from "./shop-notification-bar";
import { ShopUserNav } from "./shop-user-nav";

export const ShopHeader = () => {
  return (
    <header>
      <ShopNotificationBar />
      <ShopUserNav />
      <SlidingHeader className="md:pt-6 md:pb-2 pt-3 pb-3 md:shadow-none shadow-sm border-b border-b-border md:space-y-6">
        <HeaderOptions />
        <ShopMainNav />
      </SlidingHeader>
    </header>
  );
};
