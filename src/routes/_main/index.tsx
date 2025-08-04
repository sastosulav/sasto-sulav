import { HomeContent } from "@/components/home/home-content";
import { HomeMobileBanner } from "@/components/home/home-mobile-banner";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_main/")({
  component: Home,
});

function Home() {
  return (
    <main>
      <HomeMobileBanner />
      <HomeContent />
    </main>
  );
}
