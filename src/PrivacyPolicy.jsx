import { useEffect } from "react";

export default function PrivacyPolicy(){
    useEffect(() => {    
        window.scrollTo(0, 0);
    }, []);
  return (
    <div className="bg-gray-100 py-10 pt-[100px]">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Privacy Policy
        </h1>
        <div className="space-y-4 text-gray-700">
          <p>
            This privacy notice discloses the privacy practices for{" "}
            <a
              href="https://www.hooperdooper.in"
              className="text-blue-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.hooperdooper.in
            </a>{" "}
            and its product brand. This notice applies solely to information
            collected by the company and product website.
          </p>
          <section>
            <h2 className="text-xl font-semibold text-gray-900">Information Collection</h2>
            <p>
              We are the sole owners of the information collected on this site.
              The information collected is voluntarily provided by you via email
              or other direct contact. We will not sell or rent this information
              to anyone.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900">Usage of Information</h2>
            <p>
              The information you provide will be used to respond to your queries
              or fulfill your requests, such as shipping an order. Your information
              will not be shared with third parties outside our organization except
              as necessary to fulfill your request.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900">Communication</h2>
            <p>
              Unless you request otherwise, we may contact you via email in the
              future to share information about specials, new products, services,
              or updates to this privacy policy.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900">Opt-Out Policy</h2>
            <p>
              You can opt out of future communications at any time by contacting
              us via the email address or phone number listed on our website.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900">Concerns</h2>
            <p>
              If you feel that we are not abiding by this privacy policy, please
              contact us immediately at{" "}
              <a
                href="mailto:care@hooperdooper.in"
                className="text-blue-500 underline"
              >
                care@hooperdooper.in
              </a>{" "}
              or{" "}
              <a
                href="mailto:care.hooperdooper@gmail.com"
                className="text-blue-500 underline"
              >
                care.hooperdooper@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
