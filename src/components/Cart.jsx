import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../config/constants";
import { toast } from "react-toastify";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const shipping = 500;

  const getCartItems = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(`${BASE_URL}/cart`, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      setProducts(res?.data?.data);
      calculateTotals(res?.data?.data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      toast.error(err?.response?.data?.message);
    }
  };

  const calculateTotals = (items) => {
    const subtotal = items.reduce((acc, item) => {
      return acc + (item.price * item.quantity);
    }, 0);
    setSubTotal(subtotal);
    setTotal(subtotal + shipping);
  };

  useEffect(() => {
    getCartItems();
  }, []);

  const updateQuantity = async (productId, newQuantity) => {
    try {
      await axios.post(
        `${BASE_URL}/cart/changeQuantity`,
        { productId, newQuantity },
        { withCredentials: true }
      );
      getCartItems();
    } catch (err) {
      toast.error(err?.response?.data?.message || "Something went wrong");
    }
  };

  const addingQuantity = (productId, quantity) => {
    updateQuantity(productId, quantity + 1);
  };

  const subtractingQuantity = (productId, quantity) => {
    if (quantity === 1) {
      removeFromCartHandler(productId);
      return;
    }
    updateQuantity(productId, quantity - 1);
  };

  const removeFromCartHandler = async (id) => {
    try {
      const res = await axios.delete(`${BASE_URL}/cart/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      
      const updatedProducts = products.filter(product => product.orderItem !== id);
      setProducts(updatedProducts);
      calculateTotals(updatedProducts);
      toast.success(res.data.data.message);
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(amount);
  };

  // Rest of the JSX remains the same...
  return (
		<div className="min-h-screen bg-gray-100 pt-32">
			<h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
			{products.length > 0 ? (
				<div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
					<div className="rounded-lg md:w-2/3">
						{products.map((product, idx) => (
							<div
								key={idx}
								className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
							>
								<img
									src={`${product?.image}`}
									alt={product?.name}
									className="w-full rounded-lg sm:w-40"
								/>
								<div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
									<div className="mt-5 sm:mt-0">
										<h2 className="text-lg font-bold text-gray-900">
											{product?.name}
										</h2>

										<p className="mt-1 text-xs text-gray-700">
											Colour - {product?.color}
										</p>
									</div>
									<div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
										<div className="flex items-center border-gray-100">
											<span
												onClick={()=>{subtractingQuantity(
													product?.orderItem,
													product?.quantity 
												)}}
												className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
											>
												{" "}
												-{" "}
											</span>
											<input
												className="h-8 w-8 border bg-white text-center text-xs outline-none"
												type="number"
												value={product?.quantity}
												min="1"
												readOnly
											/>
											<span
												onClick={()=>{addingQuantity(
													product?.orderItem,
													product?.quantity 
												)}}
												className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
											>
												{" "}
												+{" "}
											</span>
										</div>
										<div className="flex items-center space-x-4">
											<p className="text-sm">
												{formatCurrency(product?.price * product?.quantity)}
											</p>
											<button
												onClick={() => {
													removeFromCartHandler(product?.orderItem);
												}}
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													strokeWidth="1.5"
													stroke="currentColor"
													className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M6 18L18 6M6 6l12 12"
													/>
												</svg>
											</button>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
					{/* Subtotal Section */}
					<div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
						<div className="mb-2 flex justify-between">
							<p className="text-gray-700">Subtotal</p>
							<p className="text-gray-700">{formatCurrency(subTotal)}</p>
						</div>
						<div className="flex justify-between">
							<p className="text-gray-700">Shipping</p>
							<p className="text-gray-700">{formatCurrency(shipping)}</p>
						</div>
						<hr className="my-4" />
						<div className="flex justify-between">
							<p className="text-lg font-bold">Total</p>
							<div>
								<p className="mb-1 text-lg font-bold">
									{formatCurrency(total)}
								</p>
								<p className="text-sm text-gray-700">including GST</p>
							</div>
						</div>
						<button
							disabled
							className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
						>
							Check out
						</button>
					</div>
				</div>
			) : (
				<div className="flex justify-center items-center h-96">
					{isLoading ? (
						<p className="text-2xl">Loading...</p>
					) : (
						<p className="text-2xl">No items in the cart</p>
					)}
				</div>
			)}
		</div>
	);
};

export default Cart;