import LandingHeader from 'components/Header/LandingHeader';
import LoginForm from 'components/LoginForm/LoginForm';
import React from 'react';

const Login = () => {
  return (
    <>
      <LandingHeader />
      <div className='flex h-screen-header flex-wrap items-center justify-center bg-[url("/assets/images/network-background1.png")] bg-cover bg-center'>
        <div className="hidden h-full md:block md:w-[56%]">
          <div className='h-full bg-[url("/assets/images/login-img.jpg")] bg-cover bg-center'></div>
        </div>
        <div className="flex h-full w-full flex-col items-center justify-center md:w-[44%] md:px-5">
          <h1 className="mb-12 font-raleway text-xl font-bold text-blue">Welcome Back!</h1>
          <div className="login-form">
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
