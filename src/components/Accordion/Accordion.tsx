import React, { useRef, useEffect, useState } from 'react';

const Accordion = ({ title, children, isOpen, onClick }) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState('0px');

  useEffect(() => {
    if (contentRef.current !== null) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  }, [isOpen]);

  return (
    <div className="overflow-hidden border-t border-blue-100 last-of-type:border-b ">
      <button
        className="flex w-full cursor-pointer items-center py-2 text-left font-raleway text-md tracking-wide focus:outline-none"
        onClick={onClick}
      >
        <img
          src="/assets/images/joan.png"
          alt="Icon"
          style={{ width: '40px', height: '40px', marginRight: '10px' }}
        />

        {title}
        <span className="absolute right-5 transform transition-transform duration-500">
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path d="M30 25L20 15L10 25" stroke="#222222" strokeWidth="2" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path d="M30 15L20 25L10 15" stroke="#222222" strokeWidth="2" />
            </svg>
          )}
        </span>
      </button>
      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className="transition-max-height duration-500 ease-in-out"
      >
        <div className="py-2">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
