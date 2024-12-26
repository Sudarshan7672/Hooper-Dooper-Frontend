import {useEffect } from "react";

export default function ReturnPolicy(){
    useEffect(() => {
        window.scrollTo(0, 0);
        }
    );
  return (
    <div className="bg-gray-100 py-10 pt-[100px]">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Return Policy
        </h1>
        <div className="space-y-4 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-gray-900">What is HooperDooper Toys Return Policy?</h2>
            <p>
              HooperDooper Toys allows returns for items purchased for any reason within a 
              specified return period (15 days from delivery). Products must remain unused 
              and in their original condition with tags and packaging intact.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900">Hassle-Free Returns Policy</h2>
            <ul className="list-disc list-inside">
              <li>
                Refunds are prompt (minus return shipping charges) for products returned in 
                new, unassembled condition. Buyers are responsible for return shipping.
              </li>
              <li>
                Defective parts or damages in transit will be replaced within 30 days of purchase.
              </li>
              <li>
                Assembled products or those not in original packaging may incur charges.
              </li>
              <li>
                Warranty-related queries can be addressed at 
                <a href="mailto:care.hooperdooper@gmail.com" className="text-blue-500 underline">
                  care.hooperdooper@gmail.com
                </a>.
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900">How Does Return Work?</h2>
            <p>
              <strong>Pick-Up:</strong> Free pick-up is available. During pick-up, delivery agents 
              may perform a quality check. If a product fails this check, the return will not be accepted.
            </p>
            <ul className="list-disc list-inside">
              <li>Returned items must be unused with all original tags and packaging intact.</li>
              <li>
                Refunds will not be processed for used or damaged products, or those missing tags.
              </li>
              <li>Exchange is not available; only returns are permitted.</li>
              <li>
                Free products associated with an order must be returned along with the main item.
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900">Steps to Return</h2>
            <ol className="list-decimal list-inside">
              <li>Log in to your account on <a href="https://www.hooperdooper.in" className="text-blue-500 underline">www.hooperdooper.in</a>.</li>
              <li>Go to "My Accounts" &gt; "Order History".</li>
              <li>Create a return request and note the Return ID.</li>
            </ol>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900">Refund Timeline</h2>
            <p>
              Payments made via Credit Cards, Debit Card, Net Banking, or wallets will be refunded within 7-10 working days after order cancellation.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900">Additional FAQs</h2>
            <ul className="list-disc list-inside">
              <li>
                Multiple products from a single order can be returned by selecting them under "My Orders."
              </li>
              <li>We provide a pick-up facility for returns.</li>
              <li>Returns are accepted within 15 days from the purchase date.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
