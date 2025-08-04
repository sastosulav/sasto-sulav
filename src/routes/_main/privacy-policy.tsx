import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_main/privacy-policy")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <article className="py-10 grid grid-cols-12 lg:gap-x-28 lg:gap-y-0 gap-y-16 items-stretch lg:min-h-[90dvh] h-auto">
      <div className="col-span-12">
        <h1
          className="text-3xl lg:text-4xl font-bold"
          data-i18n="privacyPolicy"
        >
          Privacy Policy
        </h1>
        <p className="text-lg mt-4" data-i18n="lastUpdated">
          Last updated: 12th May 2025
        </p>
        <p className="text-lg mt-4" data-i18n="privacyPolicyDesc">
          This Privacy Policy describes how your personal information is
          collected, used, and shared when you visit or make a purchase from
          Sasto Sulav Express.
        </p>
        <p className="text-lg mt-4" data-i18n="privacyPolicyDesc2">
          Sasto Sulav Express (the “Application”) is a marketplace for the
          purchase and sale of grocery foods, owned and run by Sierra Japan
          Exterprises (the “Company”). It is our top priority and social
          responsibility to handle the Personal Information of our customers
          properly and in compliance with applicable laws. Hence, we hereby
          declare that the Company will take the following measures in order to
          protect Personal Information.
        </p>
        <div className="lg:pt-12 pt-8 space-y-14">
          <section className="space-y-6">
            <div className="flex items-end gap-1">
              <h3
                className="text-2xl lg:text-3xl font-semibold"
                data-i18n="personalInformation"
              >
                Personal Information We Collect
              </h3>
            </div>
            <div>
              <p className="text-lg" data-i18n="personalInformationDesc">
                Personal Information refers to any information that can be used
                to identify individuals. The Company will collect the following
                Personal Information: your name, login ID, address, telephone
                number, email addresses, and any other information that the
                Company needs in order to deliver the items you ordered. The
                Company will also collect information about your order history,
                including the items you purchased, the date of purchase, and the
                amount paid.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex items-end gap-1">
              <h3
                className="text-2xl lg:text-3xl font-semibold"
                data-i18n="useOfPersonalInformation"
              >
                Use of Personal Information
              </h3>
            </div>
            <div>
              <p className="text-lg" data-i18n="useOfPersonalInformationDesc">
                The Company will use Your Personal Information for the purposes
                listed below:
              </p>
              <ul className="list-disc pl-6">
                <li>To verify your identity and login</li>
                <li>
                  To ship and deliver items that you purchase to your location
                </li>
                <li>To perform transactions and issue receipts for payments</li>
                <li>To show personalized items to you in the Application</li>
                <li>To run campaigns and offers</li>
                <li>
                  To provide support for items and services, and deal with
                  inquiries
                </li>
                <li>
                  To provide or receive necessary information regarding any
                  refunds for goods or services provided
                </li>
                Further, the Company may provide Your Personal Information to
                third parties including delivery company and payment service
                providers solely for the purpose of sale, payment transactions,
                shipment, and delivery of the items You purchase through the
                Application.
              </ul>
            </div>
          </section>
          <section className="space-y-6">
            <div className="flex items-end gap-1">
              <h3
                className="text-2xl lg:text-3xl font-semibold"
                data-i18n="handlingPersonalInformation"
              >
                Safe Handling of Personal Information
              </h3>
            </div>
            <div>
              <p
                className="text-lg"
                data-i18n="handlingPersonalInformationDesc"
              >
                The Company will ensure that all Personal Information will be
                securely encrypted before being stored on a local server.
                Payment information such as credit cards and other related
                financial information of a customer will never be stored in the
                local server, but only used via token to connect with the
                payment gateway. Moreover, the Company will manage Personal
                Information properly and proactively take any necessary measures
                to ensure there is no unauthorized access to, leakage, loss, or
                destruction of Personal Information.
              </p>
            </div>
          </section>
          <section className="space-y-6">
            <div className="flex items-end gap-1">
              <h3
                className="text-2xl lg:text-3xl font-semibold"
                data-i18n="handlingPersonalInformation"
              >
                Safe Handling of Personal Information
              </h3>
            </div>
            <div>
              <p
                className="text-lg"
                data-i18n="handlingPersonalInformationDesc"
              >
                The Company will ensure that all Personal Information will be
                securely encrypted before being stored on a local server.
                Payment information such as credit cards and other related
                financial information of a customer will never be stored in the
                local server, but only used via token to connect with the
                payment gateway. Moreover, the Company will manage Personal
                Information properly and proactively take any necessary measures
                to ensure there is no unauthorized access to, leakage, loss, or
                destruction of Personal Information.
              </p>
            </div>
          </section>
          <section className="space-y-6">
            <div className="flex items-end gap-1">
              <h3
                className="text-2xl lg:text-3xl font-semibold"
                data-i18n="complianceWithLaw"
              >
                Compliance with Law
              </h3>
            </div>
            <div>
              <p className="text-lg" data-i18n="complianceWithLawDesc">
                The Company will comply with all applicable laws of Japan,
                ordinances, government-issued guidelines, and any other
                applicable regulations and standards related to the collection,
                use, protection, and management of Personal Information.
              </p>
            </div>
          </section>
          <section className="space-y-6">
            <div className="flex items-end gap-1">
              <h3
                className="text-2xl lg:text-3xl font-semibold"
                data-i18n="protectionOfPersonalInformation"
              >
                Protection of Personal Information
              </h3>
            </div>
            <div>
              <p
                className="text-lg"
                data-i18n="protectionOfPersonalInformationDesc"
              >
                The Company will provide appropriate training on this Privacy
                Policy to all employees, and ensure all employees understand and
                abide by this Privacy Policy to protect Personal Information.
              </p>
            </div>
          </section>
          <section className="space-y-6">
            <div className="flex items-end gap-1">
              <h3
                className="text-2xl lg:text-3xl font-semibold"
                data-i18n="inquiriesAboutPersonalInformation"
              >
                Inquiries about Personal Information
              </h3>
            </div>
            <div>
              <p
                className="text-lg"
                data-i18n="inquiriesAboutPersonalInformationDesc"
              >
                Please contact us if there are any concerns or questions about
                our handling of Personal Information. The Company will look into
                any issues or concerns raised with high priority and deal with
                them appropriately. In accordance with laws and regulations, you
                may have the right to request us to correct, delete, or cease
                using your Personal Information managed by the Company. However,
                please be advised that, even in such cases, the Company may not
                be able to comply with your request in order to operate
                appropriately under the law.
              </p>
            </div>
          </section>
          <section className="space-y-6">
            <div className="flex items-end gap-1">
              <h3
                className="text-2xl lg:text-3xl font-semibold"
                data-i18n="revisionOfPrivacyPolicy"
              >
                Revision of Privacy Policy
              </h3>
            </div>
            <div>
              <p className="text-lg" data-i18n="revisionOfPrivacyPolicyDesc">
                The Company will periodically review and update this Privacy
                Policy in a timely manner, and respond to any changes in the
                applicable laws and regulations pertinent to the protection of
                Personal Information. Any changes to this Privacy Policy will
                become available promptly to all customers through our website
                or the Application. Before using our service, please review and
                understand the Privacy Policy. When you use our service, it is
                deemed that you have agreed to the latest version of the Privacy
                Policy.
              </p>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
