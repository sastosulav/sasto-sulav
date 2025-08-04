import { Container } from "@/components/ui/container";
import { FooterContacts } from "./footer-contacts";
import { FooterCopyright } from "./footer-copyright";
import { FooterLinks } from "./footer-links";
import { ShopFooterDeliveryFeatures } from "./shop-footer-delivery-features";

export const ShopFooter = () => {
  return (
    <footer className="md:pb-0 pb-16">
      <div className="bg-gray-50 lg:pb-28 pb-20 lg:space-y-28 space-y-10">
        <ShopFooterDeliveryFeatures />
        <FooterLinks />
      </div>
      <Container>
        <FooterContacts />
        <FooterCopyright />
      </Container>
    </footer>
  );
};
