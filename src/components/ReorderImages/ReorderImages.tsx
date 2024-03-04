import React, { useState } from 'react';
import { Reorder } from 'framer-motion';

const ReorderImages = () => {
  const [images, setImages] = useState([
    { id: '1', src: '/assets/images/image-1.png' },
    { id: '2', src: '/assets/images/image-2.png' },
    { id: '3', src: '/assets/images/image-1.png' },
    { id: '4', src: '/assets/images/image-1.png' },
    { id: '5', src: '/assets/images/image-2.png' },
    { id: '6', src: '/assets/images/image-1.png' },
    { id: '7', src: '/assets/images/image-1.png' },
    { id: '8', src: '/assets/images/image-1.png' },
    { id: '9', src: '/assets/images/image-2.png' },
  ]);

  const removeImage = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };

  return (
    <Reorder.Group
      axis="x"
      values={images}
      onReorder={setImages}
      className="flex space-x-4 overflow-auto"
    >
      {images.map((image, index) => (
        <Reorder.Item
          key={image.id}
          value={image}
          className="relative flex w-52 flex-none flex-col items-center overflow-hidden rounded bg-white shadow-lg"
        >
          <div
            className={`bg-image  h-64 w-full rounded-lg bg-cover bg-center`}
            style={{ backgroundImage: `url(${image.src})` }}
          ></div>
          {index === 0 && (
            <span
              className="absolute bottom-0 left-0 right-0 mt-2 pb-20 text-xs font-bold text-yellow"
              style={{
                background:
                  'linear-gradient(180deg, rgba(20, 92, 168, 0.00) 0%, rgba(20, 92, 168, 0.40) 26.43%, rgba(20, 92, 168, 0.80) 73%, #145CA8 100%)',
                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
              }}
            >
              <span className="absolute bottom-2 left-2 text-shadow-sm">Main Image</span>
            </span>
          )}
          <button onClick={() => removeImage(image.id)} className="absolute right-2 top-2 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle cx="12" cy="12" r="9" fill="#FBFDFF" />
              <path
                d="M16 8L8 16"
                stroke="#145CA8"
                stroke-width="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 8L16 16"
                stroke="#145CA8"
                stroke-width="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
};

export default ReorderImages;
