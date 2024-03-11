import Button from 'components/Button/Button';
import { useRouter } from 'next/router';
import React from 'react';
import { loginFacebook } from 'slices/auth';
import { useAppDispatch } from 'store';

export const FacebookConnect = ({ stage, setStage }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleFacebookLogin = () => {
    dispatch(loginFacebook({}))
      .unwrap()
      .then((data) => {
        router.replace(data.data);
        //window.open(data.data, "facebook", "menubar=1,resizable=1,width=350,height=500");
      });
  };

  return (
    <>
      <h2 className="mb-7 font-raleway text-md font-normal leading-tight text-gray md:text-lg">
        Great! Nice to meet you, John! Would you like to link your Facebook friends to your account?
      </h2>
      <h2 className="mb-9 font-raleway text-md font-normal leading-tight text-gray md:text-lg">
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

      <div className="btn-wrap container mb-10  flex flex-wrap   justify-center space-x-2 pt-7  md:space-x-20">
        <div className="mb-5">
          <Button
            onClick={() => {
              setStage(stage + 1);
            }}
            type="primary"
            size="lg"
          >
            Not Right Now
          </Button>
        </div>
        <div className="mb-5">
          <Button
            onClick={() => {
              handleFacebookLogin();
            }}
            type="primary"
            size="lg"
          >
            Let’s Do It!
          </Button>
        </div>
      </div>
    </>
  );
};
