import googleicon from "../assets/googleicon.png";
import HooperDooper_logo from "../assets/HooperDooper_logo.png";
import cycle from "../assets/cycle.png";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function SignupPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://88.222.214.14:5000/auth/v1/register", {
        fullName,
        email,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
        window.location.href = "/login";
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {/* main div */}
      <div className="w-full sm:w-[70vw] m-auto py-20 px-8 flex flex-col lg:flex-row justify-center">
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
