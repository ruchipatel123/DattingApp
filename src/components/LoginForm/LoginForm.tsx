import Input from 'components/Input/Input';
import React, { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with:', { email, password });
    // Add your login logic here
  };

  return (
    <form className="m-auto w-[80%] text-gray lg:w-[400px] lg:max-w-full" onSubmit={handleSubmit}>
      <div className="mb-4">
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          error={undefined}
          variant={'primary'}
        />
      </div>
      <div className="relative mb-2">
        <a
          href="#"
          className="text-blue-500 absolute right-0 top-2 inline-block align-baseline text-base font-light leading-none underline hover:text-blue"
        >
          Forgot Password?
        </a>
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          error={undefined}
          variant={'primary'}
        />
      </div>
      <div className="mb-4 flex items-center">
        <input
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
          <img src="assets/images/fb-btn.png" />
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
