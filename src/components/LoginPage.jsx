import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axios.post("http://localhost:5000/login", {
                username,
                password,
            });
            console.log(res.data);
            window.location.href = "/";
        } catch (err) {
            console.error(err);
            toast.error("Login failed. Please check your credentials.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="w-full sm:w-[70vw] m-auto flex flex-col lg:flex-row justify-center">
                <div className="w-full lg:w-[50%] m-auto flex flex-col justify-center">
                    <div className="w-full mt-[20px] flex justify-center">
                        <img src={HooperDooper_logo} alt="Logo" />
                    </div>
                    <div className="w-full mt-[20px] flex justify-center">
                        <p>BALANCE BIKE</p>
                    </div>
                    <div className="w-full mt-[50px] flex justify-center">
                        <img src={cycle} className="w-[150px] sm:w-[300px] h-[100px] sm:h-[200px]" alt="Cycle" />
                    </div>
                </div>
                <div className="w-full lg:w-[40%] m-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="w-full flex justify-center items-center">
                            <p className="text-2xl font-bold">Login</p>
                        </div>
                        <div className="mt-[20px]">
                            <label htmlFor="username">Email Address</label>
                            <input
                                id="username"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                className="w-full rounded-md border-2 h-[35px]"
                                placeholder="Enter Your Email"
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full rounded-md border-2 h-[35px]"
                                placeholder="Enter Your Password"
                            />
                        </div>
                        <div className="w-full mt-[20px] flex justify-center">
                            <button type="submit" disabled={loading}>
                                <div className="h-[30px] w-[100px] bg-black text-white rounded-2xl flex justify-center items-center">
                                    {loading ? "Loading..." : "Log in"}
                                </div>
                            </button>
                        </div>
                        <div className="flex justify-center mt-[5px]">
                            <p className="text-sm">Forgot Password?</p>
                        </div>
                        <div className="w-full flex justify-center mt-[5px]">
                            <p>OR</p>
                        </div>
                        <div className="flex h-[40px] mt-[5px] bg-blue-500 w-full rounded-lg justify-center items-center">
                            <img src={googleicon} className="h-[22px] w-[22px]" alt="Google Icon" />
                            <p className="text-white ml-[10px] font-sans">Continue With Google</p>
                        </div>
                    </form>
                    <div className="flex-col justify-center items-center mt-[5px] w-full">
                        <div className="w-full flex justify-center">
                            <p className="text-md text-center">Don&apos;t have an account?</p>
                        </div>
                        <div className="w-full flex justify-center">
                            <button type="button" className="h-[30px] w-[100px] border-2 border-red-500 rounded-2xl flex justify-center text-center items-center">
                                <p>Sign up</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
