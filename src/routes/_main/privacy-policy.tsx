import { Container } from "@/components/ui/container";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_main/privacy-policy")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Container>
      <article className="py-16 max-w-4xl mx-auto">
        <div>
          <div className="text-center mb-12 pb-8 border-b border-slate-200">
            <h1
              className="text-4xl lg:text-5xl font-dosis font-bold text-tertiary mb-4"
              data-i18n="privacyPolicy"
            >
              Privacy Policy
            </h1>
            <p
              className="text-slate-600 text-lg font-medium"
              data-i18n="lastUpdated"
            >
              Last updated: 12th May 2025
            </p>
          </div>

          <div className="mb-12 space-y-6">
            <p
              className="text-slate-700 leading-relaxed font-medium"
              data-i18n="privacyPolicyDesc"
            >
              This Privacy Policy describes how your personal information is
              collected, used, and shared when you visit or make a purchase from
              Sasto Sulav Express.
            </p>
            <p
              className="text-slate-700 leading-relaxed"
              data-i18n="privacyPolicyDesc2"
            >
              Sasto Sulav Express (the "Application") is a marketplace for the
              purchase and sale of grocery foods, owned and run by Sierra Japan
              Exterprises (the "Company"). It is our top priority and social
              responsibility to handle the Personal Information of our customers
              properly and in compliance with applicable laws. Hence, we hereby
              declare that the Company will take the following measures in order
              to protect Personal Information.
            </p>
          </div>

          <div className="space-y-10">
            <section className=" rounded-xl p-8 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full" />
                <h3
                  className="text-2xl lg:text-3xl font-dosis font-bold text-slate-800"
                  data-i18n="personalInformation"
                >
                  Personal Information We Collect
                </h3>
              </div>
              <p
                className="text-slate-700 leading-relaxed"
                data-i18n="personalInformationDesc"
              >
                Personal Information refers to any information that can be used
                to identify individuals. The Company will collect the following
                Personal Information: your name, login ID, address, telephone
                number, email addresses, and any other information that the
                Company needs in order to deliver the items you ordered. The
                Company will also collect information about your order history,
                including the items you purchased, the date of purchase, and the
                amount paid.
              </p>
            </section>

            <section className=" rounded-xl p-8 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-8 bg-gradient-to-b from-green-500 to-green-600 rounded-full" />
                <h3
                  className="text-2xl lg:text-3xl font-dosis font-bold text-slate-800"
                  data-i18n="useOfPersonalInformation"
                >
                  Use of Personal Information
                </h3>
              </div>
              <div className="space-y-4">
                <p
                  className="text-lg text-slate-700 leading-relaxed"
                  data-i18n="useOfPersonalInformationDesc"
                >
                  The Company will use Your Personal Information for the
                  purposes listed below:
                </p>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <span>To verify your identity and login</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <span>
                      To ship and deliver items that you purchase to your
                      location
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <span>
                      To perform transactions and issue receipts for payments
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <span>
                      To show personalized items to you in the Application
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <span>To run campaigns and offers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <span>
                      To provide support for items and services, and deal with
                      inquiries
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <span>
                      To provide or receive necessary information regarding any
                      refunds for goods or services provided
                    </span>
                  </li>
                </ul>
                <p className="text-slate-700 leading-relaxed mt-4 p-4 bg-slate-50 rounded-lg border-l-4 border-green-500">
                  Further, the Company may provide Your Personal Information to
                  third parties including delivery company and payment service
                  providers solely for the purpose of sale, payment
                  transactions, shipment, and delivery of the items You purchase
                  through the Application.
                </p>
              </div>
            </section>

            <section className=" rounded-xl p-8 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-purple-600 rounded-full" />
                <h3
                  className="text-2xl lg:text-3xl font-dosis font-bold text-slate-800"
                  data-i18n="handlingPersonalInformation"
                >
                  Safe Handling of Personal Information
                </h3>
              </div>
              <p
                className=" text-slate-700 leading-relaxed"
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
            </section>

            <section className=" rounded-xl p-8 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-8 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full" />
                <h3
                  className="text-2xl lg:text-3xl font-dosis font-bold text-slate-800"
                  data-i18n="complianceWithLaw"
                >
                  Compliance with Law
                </h3>
              </div>
              <p
                className="text-lg text-slate-700 leading-relaxed"
                data-i18n="complianceWithLawDesc"
              >
                The Company will comply with all applicable laws of Japan,
                ordinances, government-issued guidelines, and any other
                applicable regulations and standards related to the collection,
                use, protection, and management of Personal Information.
              </p>
            </section>

            <section className=" rounded-xl p-8 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-8 bg-gradient-to-b from-teal-500 to-teal-600 rounded-full" />
                <h3
                  className="text-2xl lg:text-3xl font-dosis font-bold text-slate-800"
                  data-i18n="protectionOfPersonalInformation"
                >
                  Protection of Personal Information
                </h3>
              </div>
              <p
                className="text-slate-700 leading-relaxed"
                data-i18n="protectionOfPersonalInformationDesc"
              >
                The Company will provide appropriate training on this Privacy
                Policy to all employees, and ensure all employees understand and
                abide by this Privacy Policy to protect Personal Information.
              </p>
            </section>

            <section className=" rounded-xl p-8 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-8 bg-gradient-to-b from-red-500 to-red-600 rounded-full" />
                <h3
                  className="text-2xl lg:text-3xl font-dosis font-bold text-slate-800"
                  data-i18n="inquiriesAboutPersonalInformation"
                >
                  Inquiries about Personal Information
                </h3>
              </div>
              <p
                className="text-slate-700 leading-relaxed"
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
            </section>

            <section className=" rounded-xl p-8 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-8 bg-gradient-to-b from-indigo-500 to-indigo-600 rounded-full" />
                <h3
                  className="text-2xl lg:text-3xl font-dosis font-bold text-slate-800"
                  data-i18n="revisionOfPrivacyPolicy"
                >
                  Revision of Privacy Policy
                </h3>
              </div>
              <p
                className=" text-slate-700 leading-relaxed"
                data-i18n="revisionOfPrivacyPolicyDesc"
              >
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
            </section>
          </div>
        </div>
      </article>
    </Container>
  );
}
