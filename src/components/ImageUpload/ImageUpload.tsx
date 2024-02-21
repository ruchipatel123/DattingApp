import React, { useState } from 'react';

const ImageUpload = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <>
     <div className='border border-dashed border-blue rounded-xl relative'>
          <div className='flex justify-center items-center h-full absolute w-full'>
            <input type="file" accept="image/*" onChange={handleImageChange} className='absolute top-0 left-0 right-0 bottom-0 h-full z-10 w-full opacity-0'/>
            {!image && <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none" className='absolute'>
              <path d="M23 3V43M43 23H3" stroke="#145CA8" stroke-width="5" stroke-linecap="round"/>
            </svg>}
          </div>
          <div className='image_wrap relative pb-[120%] overflow-hidden text-center'>
            
            {image && <img src={URL.createObjectURL(image)} alt="Uploaded image" className='h-full inline-block max-w-max m-auto w-auto absolute left-0 right-0 top-0 bottom-0 ' />}
          </div>
      </div>
    </>
  );
};

export default ImageUpload;
