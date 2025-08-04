import { Container } from "@/components/ui/container";
import { Image } from "@/components/ui/image";
import { createFileRoute } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export const Route = createFileRoute("/_main/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Container>
      <article className="py-10 grid grid-cols-12 lg:gap-x-28 lg:gap-y-0 gap-y-16 items-stretch lg:min-h-[90dvh] h-auto">
        <section className="col-span-12 lg:col-span-6 lg:h-full sm:h-[30rem] h-[20rem] relative">
          <Image
            src="https://images.unsplash.com/photo-1664575601786-b00156752b61?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="banner"
            className="h-full w-full object-cover"
          />
        </section>
        <div className="col-span-12 lg:col-span-6">
          <h1
            className="text-4xl lg:text-6xl font-bold font-dosis"
            data-i18n="sasto-sulav-express"
          >
            Sasto Sulav Express
          </h1>
          <div className="lg:pt-24 pt-12 space-y-14">
            <section className="space-y-6">
              <div className="flex items-end gap-1">
                <div className="h-0.5 w-10 bg-primary" />
                <h3
                  className="text-2xl lg:text-4xl font-semibold"
                  data-i18n="whoWeAre"
                >
                  Who are we?
                </h3>
              </div>
              <div>
                <p className="text-lg" data-i18n="whoWeAreDesc">
                  Sasto Sulav Express is a dynamic multi-business enterprise
                  established in Japan, bringing together diverse ventures under
                  one umbrella. Founded with a vision to bridge cultures and
                  create value, we've grown from a small family business into a
                  respected name in various sectors including retail, dining,
                  engineering, and import-export services.
                </p>
              </div>
            </section>

            <section className="space-y-6">
              <div className="flex items-end gap-1">
                <div className="h-0.5 w-10 bg-primary" />
                <h3
                  className="text-2xl lg:text-4xl font-semibold"
                  data-i18n="whatWeDo"
                >
                  What we do?
                </h3>
              </div>
              <div>
                <p className="text-lg" data-i18n="whatWeDoDesc">
                  We operate four distinct businesses: Sierra Japan Enterprises
                  specializing in import-export, Nepali Dining offering
                  authentic cuisine, Baral Engineering providing technical
                  solutions, and Sasto Sulav Express delivering quality
                  groceries. Each venture reflects our commitment to excellence
                  and our goal of enriching the Japanese market with diverse,
                  quality services.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h3
                className="text-xl lg:text-2xl underline font-semibold"
                data-i18n="followUs"
              >
                Follow us on
              </h3>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  target="_blank"
                  className="size-10 flex items-center justify-center rounded-lg relative overflow-hidden group bg-blue-600 hover:bg-blue-800 transition-colors"
                  href=""
                >
                  <div className="relative z-20">
                    <Facebook className="text-white" />
                  </div>
                </a>
                <a
                  target="_blank"
                  className="size-10 flex items-center justify-center rounded-lg relative overflow-hidden group bg-pink-500 hover:bg-pink-700 transition-colors"
                  href=""
                >
                  <div className="relative z-20">
                    <Instagram className="text-white" />
                  </div>
                </a>
                <a
                  target="_blank"
                  className="size-10 flex items-center justify-center rounded-lg relative overflow-hidden group bg-blue-400 hover:bg-blue-600 transition-colors"
                  href=""
                >
                  <div className="relative z-20">
                    <Twitter className="text-white" />
                  </div>
                </a>
                <a
                  target="_blank"
                  className="size-10 flex items-center justify-center rounded-lg relative overflow-hidden group bg-red-600 hover:bg-red-800 transition-colors"
                  href=""
                >
                  <div className="relative z-20">
                    <Youtube className="text-white" />
                  </div>
                </a>
              </div>
            </section>
          </div>
        </div>
      </article>
    </Container>
  );
}
