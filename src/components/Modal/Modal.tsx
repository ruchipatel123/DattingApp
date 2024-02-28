import React, { useEffect } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27 && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEsc);

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
      <div className="fixed inset-0 bg-black opacity-50" onClick={handleOverlayClick}></div>
      <div className="absolute right-0 top-0 pr-10 pt-10">
        <button onClick={onClose} className="hover:text-gray-500 text-gray-400">
          <span className="sr-only">Close</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <circle cx="20" cy="20" r="15" fill="#FBFDFF" />
            <path
              d="M26.6663 13.3333L13.333 26.6666"
              stroke="#145CA8"
              strokeWidth="2"
              strokeLinecap="square"
              stroke-linejoin="round"
            />
            <path
              d="M13.3337 13.3333L26.667 26.6666"
              stroke="#145CA8"
              strokeWidth="2"
              strokeLinecap="square"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="relative z-50 w-full max-w-[90%] overflow-hidden">{children}</div>
    </div>
  );
};

export default Modal;
