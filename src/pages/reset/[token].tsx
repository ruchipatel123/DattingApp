import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'store';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { resetPasswordWithOtp } from 'slices/auth';
import { useRouter } from 'next/router';
import Header from 'components/Header/Header';
import Layout from 'layout/Layout';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const ResetPasswordWithLink = () => {
  const dispatch = useAppDispatch();
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required('Please enter password!')
      .min(8, 'Please enter valid password with minimum 8 character!')
      .max(15, 'Please enter valid password with minimum 15 character!')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        'Please enter password with at least 1 upper case char, 1 lower case char, 1 number and 1 special char'
      ),
    password_confirmation: Yup.string()
      .required('Please enter confirm password!')
      .oneOf([Yup.ref('password')], 'Please enter valid confirm password same as password'),
  });
  const [loading, setLoading] = useState<boolean>(false);
  const isLoggedIn = useSelector((state: any) => state?.auth?.isLoggedIn);
  const router = useRouter();
  const [showComponent, setShowComponent] = useState(false);
  const { token } = router.query;
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };
  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible((prevState) => !prevState);
  };
  useEffect(() => {
    setShowComponent(true);
    if (isLoggedIn) {
      router.push('/discover');
    }
  }, [isLoggedIn]);
  const handelResetPassword = (formValue, setFieldError, resetForm) => {
    const { password } = formValue;
    setLoading(true);
    dispatch(resetPasswordWithOtp({ password: password, token: token }))
      .unwrap()
      .then(() => {
        resetForm();
        router.push('/login');
      })
      .catch((e) => {
        if (e?.response?.data?.errors) {
          Object.keys(e?.response?.data?.errors).map((element) => {
            setFieldError(element, e?.response?.data?.errors[element][0] ?? '');
          });
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const initialValues = {
    email: '',
  };
  return showComponent && !isLoggedIn ? (
    <>
      <Layout meta={{ title: 'Reset Password' }}>
        <Header />
        <div className='flex h-screen-header flex-wrap items-center justify-center bg-[url("/assets/images/network-background1.png")] bg-cover bg-center'>
          <div className="hidden h-full md:block md:w-[56%]">
            <div className='h-full bg-[url("/assets/images/login-img.jpg")] bg-cover bg-center'></div>
          </div>
          <div className="flex h-full w-full flex-col items-center justify-center md:w-[44%] md:px-5">
            <h1 className="mb-12 font-raleway text-xl font-bold text-blue">Change Password</h1>
            <div className="login-form">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(data, { setFieldError, resetForm }) => {
                  handelResetPassword(data, setFieldError, resetForm);
                }}
              >
                <Form className="m-auto w-[80%] text-gray lg:w-[400px] lg:max-w-full">
                  <div className="mb-4">
                    <div className="relative mb-5">
                      <label className="block  w-full text-md font-normal">Password</label>
                      <div className="relative">
                        <Field
                          name="password"
                          type={isPasswordVisible ? 'text' : 'password'}
                          className="m-auto min-h-10 w-full max-w-full rounded-lg border border-gray-400 px-4 py-2 focus:border-black focus:outline-none"
                        />
                        <span
                          className="text-gray-600 absolute inset-y-0 right-0 flex items-center px-4"
                          onClick={togglePasswordVisibility}
                        >
                          {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                        </span>
                      </div>
                      <ErrorMessage name="password" component="div" className="error-message" />
                    </div>
                    <div className="relative mb-7">
                      <label className="block  w-full text-md font-normal">Confirm Password</label>
                      <div className="relative">
                        <Field
                          name="password_confirmation"
                          type={isConfirmPasswordVisible ? 'text' : 'password'}
                          className="m-auto min-h-10 w-full max-w-full rounded-lg border border-gray-400 px-4 py-2 focus:border-black focus:outline-none"
                        />
                        <span
                          className="text-gray-600 absolute inset-y-0 right-0  flex items-center px-4"
                          onClick={toggleConfirmPasswordVisibility}
                        >
                          {isConfirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                        </span>
                      </div>
                      <ErrorMessage
                        name="password_confirmation"
                        component="div"
                        className="error-message"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <button
                      type="submit"
                      disabled={loading}
                      className="focus:shadow-outline rounded-full border border-transparent bg-yellow px-10 py-1  text-md font-normal text-blue  hover:scale-105 hover:border-blue focus:outline-none"
                    >
                      Change Password
                    </button>
                  </div>
                  <div className="devider relative mb-12 mt-16 border-t border-gray-400 text-center">
                    <p className="absolute left-1/2 top-2/4 -mt-3 inline-block -translate-x-1/2  bg-white px-5 text-center text-sm text-gray-400">
                      Or sign in with
                    </p>
                  </div>
                  <div className="text-center">
                    <button className="fb-btn">
                      <img src="../assets/images/fb-btn.png" alt="facebook" />
                    </button>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </Layout>
    </>
  ) : null;
};

export default ResetPasswordWithLink;
