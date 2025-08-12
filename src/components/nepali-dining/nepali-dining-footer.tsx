import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";

export const NepaliDiningFooter = () => {
  return (
    <footer className="flex flex-col items-center gap-y-8">
      <div className="flex sm:flex-nowrap flex-wrap items-center gap-6">
        <Link to="/nepali-dining">Nepali Dining</Link>{" "}
        <p>112 West Main Street, Alhambra, CA, 91801, United States</p>{" "}
        <a href="tel: 6262811035"> 6262811035</a>{" "}
        <a href="mailto:hello@yangskitchenla.com">hello@yangskitchenla.com</a>
      </div>
      <a href="" target="_blank" rel="noopener noreferrer">
        <Instagram className="size-8" />
      </a>
      <small>
        © {new Date().getFullYear()} Nepali Dining. All rights reserved.
      </small>
    </footer>
  );
};
