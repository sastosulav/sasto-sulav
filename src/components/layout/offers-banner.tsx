import { CopyButton } from "../ui/copy-button";

export const OffersBanner = () => {
  return (
    <div className="bg-red-100/60 flex sm:flex-row flex-col items-center justify-center gap-3 p-3 py-5 rounded-xs">
      <p className="text-red-500">
        Super Discount for you{" "}
        <span className="underline font-semibold text-red-600">
          {" "}
          first purchase.
        </span>
      </p>
      <div className="flex items-center gap-3">
        <CopyButton
          size={"default"}
          variant={"outline"}
          textToCopy="FREE25BACUse"
          className="border-dashed border-red-500 text-red-600 bg-transparent rounded-full hover:bg-red-500/10 hover:text-red-600 font-dosis font-semibold"
        >
          FREE25BAC
        </CopyButton>
        <p className="text-muted-foreground text-xs">
          Use discount code in checkout!
        </p>
      </div>
    </div>
  );
};
