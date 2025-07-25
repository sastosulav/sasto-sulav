import { Button } from "../ui/button";
import { Image } from "../ui/image";

export const WeekendDiscountBannersOne = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 items-center gap-6">
      <section className="h-60 overflow-hidden relative rounded-lg aspect-square w-full">
        <a
          href="https://tetoteto.co.jp/shop/sasto-sulav-express"
          target="_blank"
          rel="noopener noreferrer"
          className="inset-0 absolute z-10 flex items-center"
        >
          <div className="px-10 space-y-3">
            <div className="space-y-1">
              <h6 className="text-[30px] font-semibold font-dosis leading-tight">
                Organic <br /> Breakfast
              </h6>
              <p className="text-xs text-pink-500">
                Sasto Sulav Weekend Discount
              </p>
            </div>
            <Button className="rounded-full bg-orange-500 hover:bg-orange-500/80">
              Shop Now
            </Button>
          </div>
        </a>
        <Image
          src={
            "https://klbtheme.com/bacola/wp-content/uploads/2021/08/home-banner-19.jpg"
          }
          alt="banner1"
          className="object-cover"
        />
      </section>
      <section className="h-60 overflow-hidden relative rounded-lg aspect-square w-full">
        <a
          href="https://tetoteto.co.jp/shop/sasto-sulav-express"
          target="_blank"
          rel="noopener noreferrer"
          className="inset-0 absolute z-10 flex items-center"
        >
          <div className="px-10 space-y-3">
            <div className="space-y-1">
              <h6 className="text-[30px] font-semibold font-dosis leading-tight">
                Organic <br /> Baby Food
              </h6>
              <p className="text-xs text-pink-500">
                Sasto Sulav Weekend Discount
              </p>
            </div>
            <Button className="rounded-full bg-orange-500 hover:bg-orange-500/80">
              Shop Now
            </Button>
          </div>
        </a>
        <Image
          src={
            "https://klbtheme.com/bacola/wp-content/uploads/2021/08/home-banner-20.jpg"
          }
          alt="banner2"
          className="object-cover"
        />
      </section>
      <section className="h-60 overflow-hidden relative rounded-lg aspect-square w-full">
        <a
          href="https://tetoteto.co.jp/shop/sasto-sulav-express"
          target="_blank"
          rel="noopener noreferrer"
          className="inset-0 absolute z-10 flex items-center"
        >
          <div className="px-10 space-y-3">
            <div className="space-y-1">
              <h6 className="text-[30px] font-semibold font-dosis leading-tight text-white">
                Organic <br /> Breakfasts
              </h6>
              <p className="text-xs text-gray-100">
                Sasto Sulav Weekend Discount
              </p>
            </div>
            <Button className="rounded-full" variant="tertiary">
              Shop Now
            </Button>
          </div>
        </a>
        <Image
          src={
            "https://klbtheme.com/bacola/wp-content/uploads/2021/08/home-banner-21.jpg"
          }
          alt="banner3"
          className="object-cover"
        />
      </section>
    </div>
  );
};
