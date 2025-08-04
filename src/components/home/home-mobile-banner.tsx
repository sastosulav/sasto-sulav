import { PanelRight } from "lucide-react";
import { MobileSideBar } from "../layout/mobile-sidebar";
import { Button } from "../ui/button";
import { Image } from "../ui/image";

export const HomeMobileBanner = () => {
  return (
    <div className="md:hidden flex flex-col justify-between min-h-screen bg-cover bg-center bg-no-repeat bg-[url(/home_mobile_bg.png)]">
      <div className="flex items-center justify-between p-5">
        <h1 className="text-5xl font-bold font-dosis leading-[60px] text-accent/80">
          Sasto Sualav <br />
          <span className="text-accent-foreground/80">Express</span>
        </h1>
        <MobileSideBar asChild>
          <Button size="icon" variant="secondary">
            <PanelRight />
          </Button>
        </MobileSideBar>
      </div>
      <div className="p-5">
        <div className="border border-border rounded-3xl p-6">
          <h3
            className="text-center text-3xl font-semibold font-atma text-muted"
            data-aos="zoom-out"
            data-i18n="servingCommunity"
          >
            Serving the community for years.
          </h3>
        </div>
        <div className="pt-20" data-aos="fade-up" data-aos-delay="100">
          <div>
            <Image
              src="/home_mobile_banner.png"
              alt="engineers_talking"
              className="w-full aspect-video object-contain"
            />
          </div>
          <div className="flex justify-center pt-3">
            <a
              data-i18n="exploreMore"
              href="#sasto-info"
              className="rounded-full bg-gradient-to-r from-primary to-[#6192B3] text-white px-4 py-2"
            >
              Explore more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
