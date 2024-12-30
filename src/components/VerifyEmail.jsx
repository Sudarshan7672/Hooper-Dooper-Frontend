import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import React from "react";
import { BASE_URL } from "../config/constants";

const VerifyEmail = () => {
	const { token } = useParams();
	const verifyEmail = async () => {
		try {
			const res = await axios.get(
				`${BASE_URL}/auth/verify-email/${token}`
			);
			if (res.status === 200){
			toast.success("Email Verified Successfully!");
			setTimeout(() => {
                window.location.replace("/login");
            }, 3000);
		}
		else{
			toast.error("Email Verification Failed!");
		}
		} catch (error) {
			toast.error(error.response.data);
		}
	};
	return <div className="w-screen h-[50vh] flex justify-center items-center">
		<button className="px-12 py-3 bg-blue-500 font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition-all ease-in-out duration-300" onClick={verifyEmail}>Verify Email</button>
	</div>
};

export default VerifyEmail;
