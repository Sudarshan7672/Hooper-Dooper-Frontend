import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Tickets() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    axios
      .get("https://api.hooperdooper.in/isAuthenticated", {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (!res?.data?.authenticated) {
          console.log("Not authenticated");
          window.location.href = "/login";
        }
      })
      .catch((err) => {
        console.log(err);
        window.location.href = "/login";
      });
  }, []);

  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const [category, setCategory] = useState("");

  const submitHandler = () => {
    setIsLoading(true);
    axios
      .post(
        "https://api.hooperdooper.in/ticket/new",
        {
          title: title,
          description: description,
          category: category.toLowerCase(),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )
      .then((res) => {
        setIsLoading(false);
        toast.success("Ticket raised successfully");
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
        if (err.response.status === 401 || err.response.status === 403) {
          window.location.href = "/login";
        }
        toast.error(err?.response?.data?.message || "Something went wrong");
      });
  };
  return (
    <>
      {isLoading && (
        <div className="loader absolute z-30 bg-black/40 w-full h-full">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[50%]">
            <div className="flex-col gap-4 w-full flex items-center justify-center">
              <div className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
                <div className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="pt-[80px] lg:pt-[120px] lg:pb-[40px] border-2 rounded-lg">
        <div className="mt-10 text-center font-bold">Get Help</div>
        <div className="mt-3 text-center text-4xl font-bold">
          Raise a Ticket
        </div>
        <div className="p-8">
          <div className="flex justify-center gap-4">
            <input
              type="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              name="select"
              id="select"
              className="block w-[95%] lg:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="category *"
            >
              <option
                value={"General"}
                className="font-semibold text-slate-900"
              >
                General
              </option>
              <option
                value={"Complaint"}
                className="font-semibold text-slate-900"
              >
                Complaint
              </option>
              <option value={"Order"} className="font-semibold text-slate-900">
                Order
              </option>
              <option value={"Return"} className="font-semibold text-slate-900">
                Return
              </option>
              <option value={"Refund"} className="font-semibold text-slate-900">
                refund
              </option>
              <option
                value={"Product"}
                className="font-semibold text-slate-900"
              >
                Product
              </option>
              <option
                value={"Payment"}
                className="font-semibold text-slate-900"
              >
                Payment
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
              value={description}
              onChange={(e) => setdescription(e.target.value)}
              name="textarea"
              id="text"
              cols="30"
              rows="10"
              className="mb-10 h-40 w-[95%] lg:w-[60%] resize-none rounded-md border border-slate-300 p-5 font-semibold text-gray-900"
              placeholder="description *"
            ></textarea>
          </div>
          <div
            onClick={submitHandler}
            className="text-center flex justify-center"
          >
            <a className="cursor-pointer rounded-lg bg-blue-700 px-8 py-5 text-sm font-semibold text-white">
              Raise a Ticket
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
