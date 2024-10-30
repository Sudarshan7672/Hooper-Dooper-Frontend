import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white dark:bg-white-800 p-8 rounded-lg shadow-md border dark:border-gray-700 w-full max-w-3xl">
                <button onClick={onClose} className="absolute top-16 right-16 scale-150 text-gray-700 dark:text-white">
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node, // Add this line to validate children prop
};

export default Modal;
