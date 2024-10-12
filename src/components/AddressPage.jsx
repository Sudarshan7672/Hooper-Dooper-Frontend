import Modal from './Modal';
import React, { useState } from 'react';

export default function AddressPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <button onClick={handleOpenModal} className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-700">
                Add Address
            </button>

            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <h1 className="text-2xl font-bold text-gray-800 dark:text-black mb-4">Add Address</h1>
                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-700 dark:text-black mb-2">Shipping Address</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="first_name" className="block text-gray-700 dark:text-black mb-1">Full Name</label>
                            <input type="text" id="first_name" className="w-full rounded-lg border py-2 px-3 dark:bg-white-100 dark:text-white dark:border-black"/>
                        </div>
                        <div>
                            <label htmlFor="last_name" className="block text-gray-700 dark:text-black mb-1">Contact Number</label>
                            <input type="number" id="last_name" className="w-full rounded-lg border py-2 px-3 dark:bg-white-100 dark:text-white dark:border-black"/>
                        </div>
                    </div>

                    <div className="mt-4">
                        <label htmlFor="address" className="block text-gray-700 dark:text-black mb-1">Address</label>
                        <input type="text" id="address" className="w-full rounded-lg border py-2 px-3 dark:bg-white-100 dark:text-white dark:border-black"/>
                    </div>

                    <div className="mt-4">
                        <label htmlFor="city" className="block text-gray-700 dark:text-black mb-1">City</label>
                        <input type="text" id="city" className="w-full rounded-lg border py-2 px-3 dark:bg-white-100 dark:text-white dark:border-black"/>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div>
                            <label htmlFor="state" className="block text-gray-700 dark:text-black mb-1">State</label>
                            <input type="text" id="state" className="w-full rounded-lg border py-2 px-3 dark:bg-white-100 dark:text-white dark:border-black"/>
                        </div>
                        <div>
                            <label htmlFor="zip" className="block text-gray-700 dark:text-black mb-1">ZIP Code</label>
                            <input type="text" id="zip" className="w-full rounded-lg border py-2 px-3 dark:bg-white-100 dark:text-white dark:border-black"/>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex justify-end">
                    <button className="bg-teal-500 text-black px-4 py-2 rounded-lg hover:bg-teal-700 dark:bg-teal-600 dark:text-black dark:hover:bg-teal-900">Add</button>
                </div>
            </Modal>
        </div>
    );
}
