import { getCookie, setCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { loginFacebookCallback } from 'slices/auth';
import { useAppDispatch } from 'store';

const Facebook = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const loginWithFacebook = async (code) => {
    dispatch(loginFacebookCallback({ code: code }))
      .unwrap()
      .then((data) => {
        console.log(data);
        if (getCookie('stage')) setCookie('stage', Number(getCookie('stage')) + 2);
        router.push('/register');
      });
  };
  useEffect(() => {
    if (router.query.code) {
      loginWithFacebook(router.query.code);
    }
  }, [router.query.code]);
};

export default Facebook;
