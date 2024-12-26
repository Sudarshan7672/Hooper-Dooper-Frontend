import { useEffect } from "react";
export default function TermsAndConditions(){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className="bg-gray-100 py-10 px-5 pt-[100px]">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 border-b-2 border-gray-300 pb-3 mb-6">
          Website Terms of Use
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">About This Website</h2>
          <p className="text-gray-600">
            These Website Terms of Use apply to the website owned and operated by HooperDooper Toys
            Pvt Ltd under the domain name <span className="font-medium">hooperdooper.in</span>.
          </p>
          <p className="text-gray-600 mt-2">
            Your use of the information, graphics, text, software, and materials (Content) on the
            Website is governed by these Terms of Use. If you do not agree with these Terms of Use,
            you should cease using the Website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Information Available at the Website</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Constitute an offer or inducement to enter into a legally binding contract.</li>
            <li>Form part of the terms and conditions for our products and services.</li>
          </ul>
          <p className="text-gray-600 mt-2">
            If you purchase goods that do not match the description, Your Consumer Rights may entitle
            you to a refund, repair, or replacement.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Orders</h2>
          <p className="text-gray-600">
            By placing an order, you make an offer to purchase the goods for the price specified on
            the Website at the time. We reserve the right to accept or reject any offer for various
            reasons.
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
            <li>We currently offer delivery services exclusively within India.</li>
            <li>We accept payments from most credit/debit cards issued internationally.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Security</h2>
          <p className="text-gray-600">
            We use Razor Pay Payment Gateway for secure credit card transactions. Your details are
            transmitted securely and not stored on our servers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Availability of the Website</h2>
          <p className="text-gray-600">
            While we ensure the Website is free from defects, internet services are subject to
            interruption, viruses, and other errors. We recommend maintaining updated virus
            prevention software on all devices used to access the Website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your Conduct</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Do not interfere with the proper working of the Website.</li>
            <li>Do not transmit viruses, keyloggers, or other malicious software.</li>
            <li>Do not use the Website for illegal activities or data mining.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Limitation of Liability</h2>
          <p className="text-gray-600">
            We limit liability to the maximum extent possible under applicable law. Notify us without
            delay of any loss and take reasonable steps to minimize it.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Children</h2>
          <p className="text-gray-600">
            The Website is intended for a general audience. Minors accessing the Website should have
            the permission and assistance of a parent or guardian.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Jurisdiction</h2>
          <p className="text-gray-600">
            The courts at Pune District have exclusive jurisdiction over any disputes related to this
            Website.
          </p>
        </section>

        {/* <footer className="text-sm text-gray-500 mt-10 text-center">
          Last updated: 25/12/2024 | HooperDooper Toys Pvt Ltd
        </footer> */}
      </div>
    </div>
  );
}
