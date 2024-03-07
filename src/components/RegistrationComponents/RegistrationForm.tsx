import React, { useState } from 'react';
import * as Yup from 'yup';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { getCookie } from 'cookies-next';

const RegistrationForm = ({ stage, handleProgress }) => {
  const [initialValueData] = useState<any>(JSON.parse(getCookie('reguser') ?? '{}'));
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required('Please enter first name!')
      .min(1, 'Please enter first name with minimum 1 character!')
      .max(255, 'Please enter last name with maximum 255 characters!'),
    lastName: Yup.string()
      .required('Please enter last name!')
      .min(1, 'Please enter last name with minimum 1 character!')
      .max(255, 'Please enter last name with maximum 255 characters!'),
    email: Yup.string().required('Please enter email!').email('Please enter valid email!'),
    password: Yup.string()
      .required('Please enter password!')
      .min(8, 'Please enter valid password with minimum 8 character!')
      .max(15, 'Please enter valid password with minimum 15 character!')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        'Please enter password with 1 upper case char, 1 lower case char, 1 number and 1 special char'
      ),
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const initialValues = {
    firstName: initialValueData?.firstName ?? '',
    lastName: initialValueData?.lastName ?? '',
    email: initialValueData?.email ?? '',
    password: initialValueData?.password ?? '',
  };

  return (
    <>
      <h2 className="mb-14 font-raleway text-md font-normal leading-tight text-gray md:text-lg">
        Hey! Thank you for joining the Valadate community - let’s get started by setting up your
        account!
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(data, { setFieldError, resetForm }) => {
          handleProgress(data, setFieldError, resetForm);
        }}
      >
        <Form className="flex flex-wrap md:-mx-5" id={'form' + stage}>
          <div className="mb-3 w-full md:w-3/5 md:px-5">
            <label className="block  w-full text-md font-normal">First Name</label>
            <Field
              name="firstName"
              type="text"
              className="m-auto h-[60px] w-full max-w-full rounded-lg border border-gray-400 bg-transparent px-4 py-2 text-md focus:border-black focus:outline-none"
            />
            <ErrorMessage name="firstName" component="div" className="error-message" />
          </div>
          <div className="mb-3 w-full md:w-2/5 md:px-5">
            <label className="block  w-full text-md font-normal">Last Name</label>
            <Field
              name="lastName"
              type="text"
              className="m-auto h-[60px] w-full max-w-full rounded-lg border border-gray-400 bg-transparent px-4 py-2 text-md focus:border-black focus:outline-none"
            />
            <ErrorMessage name="lastName" component="div" className="error-message" />
          </div>
          <div className="mb-4 w-full md:px-5">
            <label className="block  w-full text-md font-normal">Email</label>
            <Field
              name="email"
              type="email"
              className="m-auto h-[60px] w-full max-w-full rounded-lg border border-gray-400 bg-transparent px-4 py-2 text-md focus:border-black focus:outline-none"
            />
            <ErrorMessage name="email" component="div" className="error-message" />
          </div>
          <div className="mb-7 w-full md:px-5">
            <label className="block  w-full text-md font-normal">Password</label>
            <div className="relative">
              <Field
                name="password"
                type={isPasswordVisible ? 'text' : 'password'}
                className="m-auto h-[60px] w-full max-w-full rounded-lg border border-gray-400 bg-transparent px-4 py-2 text-md focus:border-black focus:outline-none"
              />
              <span
                className="text-gray-600 absolute  inset-y-0 right-0 top-0 flex cursor-pointer items-center px-4"
                onClick={togglePasswordVisibility}
              >
                {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <ErrorMessage name="password" component="div" className="error-message" />
          </div>
          <div className="m-auto mb-10 flex w-auto flex-col flex-wrap items-center justify-center md:mb-0">
            <div className="mb-5 mt-10 flex items-center justify-center text-center md:mb-8 md:mt-7">
              <div className="devider relative w-24 border-t border-gray-400  text-center md:w-32"></div>
              <p className="inline-block px-5  text-center text-sm text-gray-400">
                Or Sign Up With
              </p>
              <div className="devider relative  w-24 border-t border-gray-400 text-center md:w-32"></div>
            </div>
            <div className="text-center">
              <button
                className="fb-btn"
                type="button"
                onClick={() => {
                  console.log('first');
                }}
              >
                <img src="assets/images/fb-btn.png" alt="facebook-link-button" />
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default RegistrationForm;
