import { Link } from "@tanstack/react-router";

export const Footer = () => {
  return (
    <footer className="bg-muted py-4 text-center -space-y-5">
      <p>
        ©{new Date().getFullYear()} Sasto Sulav Express. All rights reserved.
      </p>
      <br />
      <div className="flex divide-x-2 items-center justify-center">
        <Link to="/privacy-policy" className="text-tertiary px-3">
          Privacy Policy
        </Link>
        <Link to="/terms-condition" className="text-tertiary px-3">
          Terms and Conditions
        </Link>
      </div>
    </footer>
  );
};
