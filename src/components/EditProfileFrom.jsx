import Modal from "./Modal";
import React, { useState } from "react";

export default function EditProfileForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
    <div className="flex justify-center px-8">
    <button onClick={handleOpenModal} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-teal-700">
                Edit Profile
            </button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
      <form className="max-w-2xl">
        <div className="flex flex-wrap border shadow rounded-lg p-3 dark:bg-zinc-200">
          <h2 className="text-xl text-gray-600 dark:text-gray-900 pb-2">
            Account settings:
          </h2>

          <div className="flex flex-col gap-2 w-full border-gray-400">
            {/* <div>
              <label className="text-gray-600 dark:text-gray-400">
                User name
              </label>
              <input
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                type="text"
              />
            </div> */}

            <div>
              <label className="text-gray-600 dark:text-gray-900">Email</label>
              <input
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-100 dark:text-gray-900"
                type="text"
              />
            </div>

            <div>
              <label className="text-gray-600 dark:text-gray-900">Address</label>
              <textarea
                className="w-full py-3 border border-slate-900 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-100 dark:text-gray-900"
                name="bio"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                className="py-1.5 px-3 m-1 text-center bg-violet-700 border rounded-md text-white  hover:bg-violet-500 hover:text-gray-100 dark:text-gray-200 dark:bg-violet-700"
                type="submit"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </form>
      </Modal>
    </div>
    </>
  );
}
