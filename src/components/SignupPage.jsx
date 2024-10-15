import googleicon from "../assets/googleicon.webp";
import HooperDooper_logo from "../assets/HooperDooper_Logo.webp";
import cycle from "../assets/cycle.webp";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
export default function SignupPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("http://88.222.214.14:5000/auth/v1/register", {
        fullName,
        email,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        toast.success(
          "Signup successful. redirecting to login page. in 3 seconds"
        );
        setTimeout(() => {
          window.location.href = "/login";
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        toast.error("Signup failed. Please try again.");
      });
  };
  return (
    <>
      {isLoading && (
        <div className="absolute w-screen h-screen bg-white/40">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex-col gap-4 w-full flex items-center justify-center">
              <div className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
                <div className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* main div */}
      <div className="w-full sm:w-[70vw] m-auto py-20 px-8 flex flex-col lg:pt-[150px] lg:flex-row justify-center">
        {/* first half div  */}
        <div className="w-full lg:w-[50%] m-auto flex flex-col justify-center">
          <div className="w-full mt-[20px] flex justify-center">
            <img src={HooperDooper_logo} alt="" />
          </div>
          <div className="w-full mt-[20px] flex justify-center">
            <p>BALANCE BIKE</p>
          </div>
          <div className="w-full mt-[50px] flex justify-center">
            <img
              src={cycle}
              className="w-[150px] sm:w-[300px] h-[100px] sm:h-[200px]"
              alt=""
            />
          </div>
        </div>
        {/* second half div  */}
        <div className="w-full poppins-medium lg:w-[40%] m-auto">
          <div>
            <form action="" onSubmit={handleSubmit}>
              <div className="w-full flex justify-center items-center">
                <p className="text-2xl font-bold">Sign Up</p>
              </div>
              <div className="mt-[20px]">
                <p>Name</p>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                  }}
                  className="w-full p-2 rounded-md border-2 mt-1"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="mt-[20px]">
                <p>Email Address</p>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="w-full p-2 my-3 rounded-md border-2 mt-1"
                  placeholder="Enter Your Email"
                />
              </div>
              <div>
                <p>Password</p>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="w-full p-2 rounded-md border-2 mt-1"
                  placeholder="Set Your Password"
                />
              </div>
              <div className="w-full mt-[20px] flex justify-center">
                <button type="submit">
                  <div className="py-1 text-lg w-[100px] mb-1 bg-black text-white rounded-2xl flex justify-center items-center">
                    <p>Sign Up</p>
                  </div>
                </button>
              </div>
              <div className="w-full flex justify-center mt-[5px]">
                <p>OR</p>
              </div>
              <Link to="/continuewithgoogle">
              <div className="flex h-[48px] mt-[5px] bg-blue-500 w-full rounded-lg justify-center items-center">
                <div className="p-1 bg-white rounded-xl">
                  <img
                    src={googleicon}
                    className="h-[22px] w-[22px]"
                    alt="Google Icon"
                  />
                </div>
                <p className="text-white ml-[10px] font-sans">
                  Continue With Google
                </p>
              </div>
              </Link>
            </form>
            <div className="flex-col justify-center items-center mt-5 w-full">
              <div className="w-full flex justify-center">
                <p className="text-md mb-2 text-center">
                  Already have an account?
                </p>
              </div>
              <Link to="../login" className="w-full flex justify-center">
                <div className="h-[30px] w-[100px] border-2 border-zinc-700 rounded-2xl flex justify-center text-center items-center">
                  <p>Login</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
