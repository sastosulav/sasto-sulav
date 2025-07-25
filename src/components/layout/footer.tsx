import { Container } from "../ui/container";
import { FooterContacts } from "./footer-contacts";
import { FooterCopyright } from "./footer-copyright";
import { FooterDeliveryFeatures } from "./footer-delivery-features";
import { FooterLinks } from "./footer-links";

export const Footer = () => {
  return (
    <footer className="md:pb-0 pb-16">
      <div className="bg-gray-50 lg:pb-28 pb-20 lg:space-y-28 space-y-10">
        <FooterDeliveryFeatures />
        <FooterLinks />
      </div>
      <Container>
        <FooterContacts />
        <FooterCopyright />
      </Container>
    </footer>
  );
};
