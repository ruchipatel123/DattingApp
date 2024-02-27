import { redirect } from 'next/navigation';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'store';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { login } from 'slices/auth';
import { useRouter } from 'next/router';
import Header from 'components/Header/Header';
import Layout from 'layout/Layout';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useAppDispatch();
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Please enter email!').email('Please enter valid email!'),
    password: Yup.string().required('Please enter password!'),
  });
  const [loading, setLoading] = useState<boolean>(false);
  const isLoggedIn = useSelector((state: any) => state?.auth?.isLoggedIn);
  const router = useRouter();
  const [showComponent, setShowComponent] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  useEffect(() => {
    setShowComponent(true);
    if (isLoggedIn) {
      router.push('/discover');
    }
  }, [isLoggedIn]);
  const handleLogin = (formValue, setFieldError, resetForm) => {
    const { username, password } = formValue;
    setLoading(true);
    dispatch(login({ username: username, password: password }))
      .unwrap()
      .then(() => {
        resetForm();
        redirect('/discover');
      })
      .catch((e) => {
        if (e?.response?.data?.errors) {
          Object.keys(e?.response?.data?.errors).map((element) => {
            setFieldError(element, e?.response?.data?.errors[element][0] ?? '');
          });
        }
        setLoading(false);
      });
  };

  const initialValues = {
    username: '',
    password: '',
  };
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };
  return showComponent ? (
    <>
      <Layout meta={{ title: 'Login' }}>
        <Header />
        <div className='flex h-screen-header flex-wrap items-center justify-center bg-[url("/assets/images/network-background1.png")] bg-cover bg-center'>
          <div className="hidden h-full md:block md:w-[56%]">
            <div className='h-full bg-[url("/assets/images/login-img.jpg")] bg-cover bg-center'></div>
          </div>
          <div className="flex h-full w-full flex-col items-center justify-center md:w-[44%] md:px-5">
            <h1 className="mb-12 font-raleway text-xl font-bold text-blue">Welcome Back!</h1>
            <div className="login-form">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(data, { setFieldError, resetForm }) => {
                  handleLogin(data, setFieldError, resetForm);
                }}
              >
                <Form className="m-auto w-[80%] text-gray lg:w-[400px] lg:max-w-full">
                  <div className="mb-4">
                    <div className="input-container">
                      <label className="block  w-full text-md font-normal">Email</label>
                      <Field
                        name="username"
                        type="email"
                        className="m-auto min-h-10 w-full max-w-full rounded-lg border border-gray-400 px-4 py-2 focus:border-black focus:outline-none"
                      />
                      <ErrorMessage name="username" component="div" className="error-message" />
                    </div>
                  </div>
                  <div className="relative mb-2">
                    <Link
                      href="/forgot-password"
                      className="text-blue-500 absolute right-0 top-2 inline-block align-baseline text-base font-light leading-none underline hover:text-blue"
                    >
                      Forgot Password?
                    </Link>
                    <div className="input-container">
                      <label className="block  w-full text-md font-normal">Password</label>
                      <Field
                        name="password"
                        type={isPasswordVisible ? 'text' : 'password'}
                        className="m-auto min-h-10 w-full max-w-full rounded-lg border border-gray-400 px-4 py-2 focus:border-black focus:outline-none"
                      />
                      <span
                        className="text-gray-600 absolute inset-y-0 right-0 mt-5 flex items-center px-4"
                        onClick={togglePasswordVisibility}
                      >
                        {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                      </span>
                      <ErrorMessage name="password" component="div" className="error-message" />
                    </div>
                  </div>
                  <div className="mb-4 flex items-center">
                    <Field
                      type="checkbox"
                      id="rememberMe"
                      className="mr-2 h-5 w-5 leading-tight"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <label htmlFor="rememberMe" className="text-md font-light  text-gray">
                      Remember me
                    </label>
                  </div>
                  <div className="flex items-center justify-center">
                    <button
                      type="submit"
                      disabled={loading}
                      className="focus:shadow-outline rounded-full border border-transparent bg-yellow px-10 py-1  text-md font-normal text-blue  hover:scale-105 hover:border-blue focus:outline-none"
                    >
                      Log In
                    </button>
                  </div>
                  <div className="devider relative mb-12 mt-16 border-t border-gray-400 text-center">
                    <p className="absolute left-1/2 top-2/4 -mt-3 inline-block -translate-x-1/2  bg-white px-5 text-center text-sm text-gray-400">
                      Or sign in with
                    </p>
                  </div>
                  <div className="text-center">
                    <button className="fb-btn">
                      <img src="assets/images/fb-btn.png" alt="facebook" />
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

export default Login;
