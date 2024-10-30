import { useEffect } from "react";

export default function Tickets() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="pt-[80px] lg:pt-[120px] lg:pb-[40px] border-2 rounded-lg">
        <div className="mt-10 text-center font-bold">Get Help</div>
        <div className="mt-3 text-center text-4xl font-bold">
          Raise a Ticket
        </div>
        <div className="p-8">
          <div className="flex justify-center gap-4">
            <input
              type="Name"
              name="name"
              className="mt-1 block w-[95%] lg:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Title *"
            />
            {/* <input
              type="email"
              name="email"
              className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Email *"
            /> */}
          </div>
          <div className="my-6  flex justify-center gap-4">
            <select
              name="select"
              id="select"
              className="block w-[95%] lg:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Type *"
            >
              <option className="font-semibold text-slate-900">
                Order
              </option>
              <option className="font-semibold text-slate-900">
                Refund
              </option>
              <option className="font-semibold text-slate-900">
                Payment
              </option>
              <option className="font-semibold text-slate-900">
                Product
              </option>
            </select>
            {/* <select
              name="select"
              id="select"
              className="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            >
              <option className="font-semibold text-slate-300">
                4:00 Available
              </option>
            </select> */}
          </div>
          <div className="flex justify-center">
            <textarea
              name="textarea"
              id="text"
              cols="30"
              rows="10"
              className="mb-10 h-40 w-[95%] lg:w-[60%] resize-none rounded-md border border-slate-300 p-5 font-semibold text-gray-900"
              placeholder="Message *"
            >
            </textarea>
          </div>
          <div className="text-center flex justify-center">
            <a className="cursor-pointer rounded-lg bg-blue-700 px-8 py-5 text-sm font-semibold text-white">
              Raise a Ticket
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
