import React, { useState } from 'react';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';

const RegistrationForm = ({ stage, setStage }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <h2 className="mb-14 font-raleway text-md font-normal leading-tight text-gray md:text-lg">
        Hey! Thank you for joining the Valadate community - let’s get started by setting up your
        account!
      </h2>
      <form className="flex flex-wrap md:-mx-5">
        <div className="mb-5 w-full md:w-3/5 md:px-5">
          <Input
            label="First Name"
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
            error={''}
            variant={'secondary'}
          />
        </div>
        <div className="mb-5 w-full md:w-2/5 md:px-5">
          <Input
            label="Last Name"
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
            error={''}
            variant={'secondary'}
          />
        </div>
        <div className="mb-5 w-full md:px-5">
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            error={''}
            variant={'secondary'}
          />
        </div>
        <div className="mb-5 w-full md:px-5">
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            error={''}
            variant={'secondary'}
          />
        </div>
        <div className="m-auto mb-10 flex w-96 flex-col flex-wrap items-center justify-center md:mb-0">
          <div className="mb-5 mt-10 flex items-center justify-center text-center md:mb-12 md:mt-14">
            <div className="devider relative w-24 border-t  border-gray-400 text-center"></div>
            <p className="inline-block px-5  text-center text-sm text-gray-400">Or sign in with</p>
            <div className="devider relative w-24 border-t border-gray-400 text-center"></div>
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
      </form>
      <h2 className="mb-10 font-raleway text-md font-normal leading-tight text-gray md:text-lg">
        Great! Nice to meet you, John! Would you like to link your Facebook friends to your account?
      </h2>
      <h2 className="mb-10 font-raleway text-md font-normal leading-tight text-gray md:text-lg">
        Doing this will allow you to see mutual connections on the platform and could lead to you
        having a more accurate, enjoyable dating experience. You can always change your mind later!
      </h2>

      <div className="connection-wrapper mb-14 mt-14 flex justify-center  space-x-3 md:mb-20 md:mt-20 md:space-x-9">
        <img
          src="/assets/images/fb.svg"
          className="connection-icon  max-w-24 md:max-w-max"
          alt="facebook"
        />
        <img
          src="/assets/images/linkto.svg"
          className="connection-icon max-w-14 md:max-w-max"
          alt="linktofacebook"
        />
        <img
          src="/assets/images/valadate.svg"
          className="connection-icon max-w-24 md:max-w-max"
          alt="avatar"
        />
      </div>

      <div className="btn-wrap container mb-10 flex  flex-wrap justify-center space-x-2 space-y-2 md:space-x-10">
        <Button
          onClick={() => {
            setStage(stage + 1);
          }}
          type="primary"
          size="lg"
        >
          Not Right Now
        </Button>
        <Button
          onClick={() => {
            setStage(stage);
          }}
          type="primary"
          size="lg"
        >
          Let’s Do It!
        </Button>
      </div>
    </>
  );
};

export default RegistrationForm;
