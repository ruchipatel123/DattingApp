import React from 'react';
import { uploadFile } from 'slices/common';
import { useAppDispatch } from 'store';

const ImageUpload = ({ setFieldValue, fieldName, values, element }) => {
  const dispatch = useAppDispatch();
  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      dispatch(uploadFile(e.target.files[0]))
        .unwrap()
        .then((data) => {
          setFieldValue(fieldName, data?.file_url);
        });
    }
  };

  return (
    <>
      <div className="relative rounded-xl border border-dashed border-blue">
        <div className="absolute flex h-full w-full items-center justify-center">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="absolute bottom-0 left-0 right-0 top-0 z-10 h-full w-full opacity-0"
          />
          {!values.images[element] && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              className="absolute"
            >
              <path d="M23 3V43M43 23H3" stroke="#145CA8" strokeWidth="5" strokeLinecap="round" />
            </svg>
          )}
        </div>
        <div className="image_wrap relative overflow-hidden pb-[120%] text-center">
          {values.images[element] && (
            <img
              src={values.images[element]}
              alt="Uploaded image"
              className="absolute bottom-0 left-0 right-0 top-0 m-auto inline-block h-full w-auto max-w-max "
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ImageUpload;
