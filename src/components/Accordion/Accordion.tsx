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
    <div className="mb-4 overflow-hidden rounded-lg border">
      <button
        className="flex w-full cursor-pointer items-center justify-between bg-gray px-4 py-2 text-left focus:outline-none"
        onClick={onClick}
      >
        {title}
        <span className="transform transition-transform duration-500">
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
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
