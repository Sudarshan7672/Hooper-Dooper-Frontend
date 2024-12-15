import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const VerifyEmail = () => {
	const { token } = useParams();
	const verifyEmail = async () => {
		try {
			const res = await axios.get(
				`https://api.hooperdooper.in/auth/verify-email/${token}`
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
	return <div className="w-full h-full flex justify-center items-center">
		<button className="px-20 py-5 bg-blue-500 " onClick={verifyEmail}>Verify Email</button>
	</div>;
};

export default VerifyEmail;
