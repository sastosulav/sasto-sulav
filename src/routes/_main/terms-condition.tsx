import { Container } from "@/components/ui/container";
import { createFileRoute } from "@tanstack/react-router";
import { FileText } from "lucide-react";

export const Route = createFileRoute("/_main/terms-condition")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Container>
      <div className="max-w-4xl mx-auto py-12">
        <div className="text-center mb-16">
          <div className="inline-block p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mb-6">
            <FileText className="text-white" />
          </div>
          <h1
            className="font-dosis text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            data-i18n="termsAndConditions"
          >
            Terms and Conditions
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6" />
          <p
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            data-i18n="termsAndConditionsDesc"
          >
            These terms and conditions (the "Terms") form a legally enforceable
            agreement between Sierra Japan Enterprises (the "Company") and a
            customer who has agreed to the Terms and created an account for the
            Application ("You"), which sets out the terms and conditions of Your
            use of the online shopping application "Sasto Sulav Express" (the
            "Application").
          </p>
        </div>

        <div className="space-y-12">
          <section className=" rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-emerald-500 to-teal-600 rounded-full" />
              <h3
                className="font-dosis text-2xl lg:text-3xl font-semibold text-gray-900"
                data-i18n="useOfapplication"
              >
                Use of the application
              </h3>
            </div>
            <div className="space-y-4">
              <p
                className="text-lg text-gray-700 leading-relaxed"
                data-i18n="useOfApplicationDesc"
              >
                The Company will use Your Personal Information for the purposes
                listed below:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                  <span>
                    Based on the Terms, You may use the Application on Android
                    or iOS devices. You need to create an account and log in to
                    Your account in order to purchase items via the Application.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                  <span>
                    If you want the Company to delete Your account information,
                    You will send Your name and email address by e-mail to
                    support@sastosulavexpress.com. The Company will take
                    necessary actions after the request has been confirmed by
                    email.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                  <span>
                    By using the Application, You agree to comply with the
                    provisions of the Terms and any other applicable terms and
                    conditions that the Company may set out from time to time.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                  <span>
                    While using the Application on Android or iOS, You must
                    comply with the provisions of the Terms, Privacy Policy, and
                    any other applicable terms and conditions that the Company
                    may set out from time to time. If you violate any of those
                    provisions, the Company reserves the right to restrict Your
                    use of the Application, including termination of Your
                    account.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                  <span>
                    The Company may from time to time publish any additional
                    terms applicable to Your use of the Application. You agree
                    that such additional terms immediately apply to Your use of
                    the Application, if and when published.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <section className=" rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-violet-600 rounded-full" />
              <h3
                className="font-dosis text-2xl lg:text-3xl font-semibold text-gray-900"
                data-i18n="intellectualProperty"
              >
                Intellectual Property
              </h3>
            </div>
            <p
              className="text-lg text-gray-700 leading-relaxed"
              data-i18n="intellectualPropertyDesc"
            >
              Between You and the Company, the Company reserves all rights,
              including any and all intellectual property rights, in and to the
              Application and its associated services.
            </p>
          </section>

          {/* Prohibited Actions */}
          <section className=" rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-red-500 to-rose-600 rounded-full" />
              <h3
                className="font-dosis text-2xl lg:text-3xl font-semibold text-gray-900"
                data-i18n="prohibitedActions"
              >
                Prohibited Actions and Consequences
              </h3>
            </div>
            <div className="space-y-4">
              <p
                className="text-lg text-gray-700 leading-relaxed"
                data-i18n="prohibitedActionsDesc"
              >
                When You use the Application, You agree that You will not engage
                in any actions listed below. If You breach this Section, the
                Company may suspend or terminate Your use of the Application,
                including suspending delivery of any items purchased through the
                Application and taking any other measures that the Company deems
                appropriate, including reporting any suspicious activities to
                the law enforcement. You are liable to the Company and stores in
                the Application for any damages caused by Your breach of this
                Section.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                  <span>
                    To impersonate other people than you to use the Application
                    when Your account has been suspended or terminated
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                  <span>
                    To commit or attempt to commit a crime, or to suggest others
                    to do so
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                  <span>
                    To violate a law or ordinance or commit an offense against
                    public order and safety
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                  <span>
                    While using the Application on Android or iOS, You must
                    comply with the provisions of the Terms, Privacy Policy, and
                    any other applicable terms and conditions that the Company
                    may set out from time to time. If You violate any of those
                    provisions, the Company reserves the right to restrict Your
                    use of the Application, including termination of Your
                    account.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                  <span>
                    To engage in any other actions or omissions that the Company
                    deems inappropriate in its sole discretion
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <section className=" rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-amber-500 to-orange-600 rounded-full" />
              <h3 className="font-dosis text-2xl lg:text-3xl font-semibold text-gray-900">
                Personal Information
              </h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              The Company will collect, store, use, and otherwise manage Your
              Personal Information according to its Privacy Policy. Please refer
              to the Privacy Policy for more detail.
            </p>
          </section>

          <section className=" rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full" />
              <h3 className="font-dosis text-2xl lg:text-3xl font-semibold text-gray-900">
                Future Revisions
              </h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              The Company may from time to time revise any part of the Terms.
              Such revisions will become effective immediately when it is
              published on this site or in the Application.
            </p>
          </section>

          <section className=" rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full" />
              <h3 className="font-dosis text-2xl lg:text-3xl font-semibold text-gray-900">
                Disclaimer
              </h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              The Company reserves the right to add, modify, eliminate any
              features or functions of the Application, or otherwise make any
              changes to the Application. The Company will not be liable for any
              inconvenience or damages that such changes may cause.
            </p>
          </section>

          <section className=" rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-teal-500 to-emerald-600 rounded-full" />
              <h3 className="font-dosis text-2xl lg:text-3xl font-semibold text-gray-900">
                Governing Law and Jurisdiction
              </h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0" />
                <span>The Terms are governed by the law of Japan.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0" />
                <span>
                  If there is a claim that arises out of or in relation to Your
                  use of the Application between You and the Company, You and
                  the Company will initially attempt to amicably resolve such a
                  claim in good faith. Any such claims will be litigated
                  exclusively at the Saitama District Court of Japan, and the
                  parties agree to the personal jurisdiction of the court.
                </span>
              </li>
            </ul>
          </section>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-500">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </Container>
  );
}
