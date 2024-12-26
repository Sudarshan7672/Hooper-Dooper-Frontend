import { useEffect } from "react";


export default function ShippingPolicy() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <div className="bg-gray-100 py-10 pt-[100px]">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Shipping Policy
        </h1>
        <div className="space-y-4 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-gray-900">Shipping and Delivery</h2>
            <p>
              HooperDooper Toys strives to avoid any delays in production or shipping. 
              However, shipment and delivery dates are estimates provided by our shipment 
              suppliers. We are not responsible for delays caused by the shipping company, 
              customs issues, weather conditions, or any other circumstances beyond our or 
              our supplier’s control.
            </p>
            <p>
              If you experience any delays, please email us, and we will promptly follow 
              up with our shipment suppliers to ensure delivery schedules are met.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900">Availability of Parts</h2>
            <p>
              Looking for specific parts like a wheel, seat, or clamp? Most parts are 
              readily available in the market. If you’re unsure where to buy them or need 
              assistance with technical details, we’re here to help!
            </p>
            <p>
              Email us, and we can provide the required parts at a minimal manufacturer’s 
              price. We’ll ship the parts directly to your address to ensure convenience.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900">Contact Us</h2>
            <p>
              For any shipping-related concerns or assistance with parts, please email us at{" "}
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
