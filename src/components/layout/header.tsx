import { HeaderOptions } from "./header-options";
import { MainNav } from "./main-nav";
import { NotificationBar } from "./notification-bar";
import { SlidingHeader } from "./sliding-header";
import { UserNav } from "./user-nav";

export const Header = () => {
  return (
    <header>
      <NotificationBar />
      <UserNav />
      <SlidingHeader className="md:pt-6 md:pb-2 pt-3 pb-3 md:shadow-none shadow-sm border-b border-b-border md:space-y-6">
        <HeaderOptions />
        <MainNav />
      </SlidingHeader>
    </header>
  );
};
