import { OfferCounter } from "./offer-countdown";

export const ShopOfferTimer = () => {
  return (
    <div className="flex sm:flex-row flex-col lg:justify-center justify-between items-center gap-6">
      <section>
        <h6 className="lg:text-right sm:text-left text-center lg:text-[26px] text-xl lg:text-foreground text-tertiary">
          Special Offers{" "}
          <span className="font-semibold text-destructive underline">
            of the week!
          </span>
        </h6>
        <p className="lg:text-sm text-[15px] text-gray-700 lg:text-right sm:text-left text-center">
          Ut placerat, magna quis porttitor vulputate, magna nunc auctor ante.
        </p>
      </section>
      <section>
        <OfferCounter />
      </section>
    </div>
  );
};
