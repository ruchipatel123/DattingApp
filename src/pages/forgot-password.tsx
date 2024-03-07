import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'store';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { forgetPassword } from 'slices/auth';
import { useRouter } from 'next/router';
import Header from 'components/Header/Header';
import Layout from 'layout/Layout';
import Link from 'next/link';
const ForgotPassword = () => {
  const dispatch = useAppDispatch();
  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Please enter email!').email('Please enter valid email!'),
  });
  const [loading, setLoading] = useState<boolean>(false);
  const isLoggedIn = useSelector((state: any) => state?.auth?.isLoggedIn);
  const router = useRouter();
  const [showComponent, setShowComponent] = useState(false);
  useEffect(() => {
    setShowComponent(true);
    if (isLoggedIn) {
      router.push('/discover');
    }
  }, [isLoggedIn]);
  const handleForgotPasswordLink = (formValue, setFieldError, resetForm) => {
    const { email } = formValue;
    setLoading(true);
    dispatch(forgetPassword({ email: email }))
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
      <Layout meta={{ title: 'Forgot Password' }}>
        <Header />
        <div className='flex h-screen-header flex-wrap items-center justify-center bg-[url("/assets/images/network-background1.png")] bg-cover bg-center'>
          <div className="hidden h-full md:block md:w-[56%]">
            <div className='h-full bg-[url("/assets/images/login-img.jpg")] bg-cover bg-center'></div>
          </div>
          <div className="flex h-full w-full flex-col items-center justify-center px-5 md:w-[44%] md:px-5">
            <h1 className="mb-12 font-raleway text-xl font-bold text-blue">Forgot Password?</h1>
            <div className="login-form w-full">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(data, { setFieldError, resetForm }) => {
                  handleForgotPasswordLink(data, setFieldError, resetForm);
                }}
              >
                <Form className="m-auto  text-gray lg:w-[400px] lg:max-w-full">
                  <div className="mb-10">
                    <div className="input-container">
                      <label className="block  w-full text-md font-normal">Email</label>
                      <Field
                        name="email"
                        type="email"
                        className="m-auto min-h-10 w-full max-w-full rounded-lg border border-gray-400 px-4 py-2 focus:border-black focus:outline-none"
                      />
                      <ErrorMessage name="email" component="div" className="error-message" />
                    </div>
                    <div className="relative mb-2">
                      <Link
                        href="/login"
                        className="text-blue-500 absolute right-0 top-2 inline-block align-baseline text-base font-light leading-none underline hover:text-blue"
                      >
                        Back to login?
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <button
                      type="submit"
                      disabled={loading}
                      className="focus:shadow-outline rounded-full border border-transparent bg-yellow px-10 py-1  text-md font-normal text-blue  hover:scale-105 hover:border-blue focus:outline-none"
                    >
                      Forgot Password
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

export default ForgotPassword;
