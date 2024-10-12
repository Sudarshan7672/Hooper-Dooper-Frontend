import { Link } from "react-router-dom";
import AddressPage from "./AddressPage";
export default function Profile() {
    return(
        <section className="relative pt-40 pb-24">
        <img src="https://pagedone.io/asset/uploads/1705473908.png" alt="cover-image" className="w-full absolute top-0 left-0 z-0 h-60 object-cover" />
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
            <div className="flex items-center justify-center sm:justify-start relative z-10 mb-5">
                <img src="/Profileimg.jpg" alt="user-avatar-image"
                    className="border-4 w-[150px] h-[150px] border-solid border-white rounded-full object-cover" />
            </div>
            <div className="flex items-center justify-center flex-col sm:flex-row max-sm:gap-5 sm:justify-between mb-5">
                <div className="block">
                    <h3 className="font-manrope font-bold text-4xl text-gray-900 mb-1 max-sm:text-center">Emma Smith</h3>
                    <p className="font-normal text-base leading-7 text-gray-500  max-sm:text-center">Engineer at BB Agency Industry <br className="hidden sm:block"/>New
                        York, United States</p>
                </div>
                <Link to='/'>
                <button
                    className="py-3.5 px-5 flex rounded-full bg-indigo-600 items-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700">
                    <span className="px-2 font-semibold text-base leading-7 text-white">Logout</span>
                </button>
                </Link>
            </div>
            <div className="flex max-sm:flex-wrap max-sm:justify-center items-center gap-3">
                <a href="javascript:;" className="rounded-full py-3 px-6 bg-stone-100 text-gray-700 font-semibold text-sm leading-6 transition-all duration-500 hover:bg-stone-200 hover:text-gray-900">My Orders</a>
                <a href="javascript:;" className="rounded-full py-3 px-6 bg-stone-100 text-gray-700 font-semibold text-sm leading-6 transition-all duration-500 hover:bg-stone-200 hover:text-gray-900">My Cart</a>
                <a href="javascript:;" className="rounded-full py-3 px-6 bg-stone-100 text-gray-700 font-semibold text-sm leading-6 transition-all duration-500 hover:bg-stone-200 hover:text-gray-900">Edit profile</a>
                <AddressPage />
            </div>
        </div>
    </section>
                                            
    );}