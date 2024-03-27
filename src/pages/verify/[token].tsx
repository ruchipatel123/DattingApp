import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'store';
import { verifyAccount } from 'slices/auth';
import { useRouter } from 'next/router';
import Header from 'components/Header/Header';
import Layout from 'layout/Layout';

const ResetPasswordWithLink = () => {
  const dispatch = useAppDispatch();
  const [success, setSuccess] = useState<any>(null);
  const [errormessage, seterrormessage] = useState<any>(null);
  const isLoggedIn = useSelector((state: any) => state?.auth?.isLoggedIn);
  const router = useRouter();
  const [showComponent, setShowComponent] = useState(false);
  const { token } = router.query;
  useEffect(() => {
    if (isLoggedIn) {
      router.push('/discover');
    } else {
      if (token) {
        dispatch(verifyAccount({ token: token }))
          .unwrap()
          .then(() => {
            setShowComponent(true);
            setSuccess(1);
            setTimeout(() => {
              router.push('/login');
            }, 2000);
          })
          .catch((e) => {
            setShowComponent(true);
            setSuccess(2);
            if (e?.response?.data?.errors) {
              seterrormessage(e?.response?.data?.errors.general);
            }
          });
      }
    }
  }, [token]);
  return showComponent && !isLoggedIn ? (
    <>
      <Layout meta={{ title: 'Verify Account' }}>
        <Header />
        <div className='flex h-screen-header flex-wrap items-center justify-center bg-[url("/assets/images/network-background1.png")] bg-cover bg-center'>
          <div className="hidden h-full md:block md:w-[56%]">
            <div className='h-full bg-[url("/assets/images/login-img.jpg")] bg-cover bg-center'></div>
          </div>
          <div className="flex h-full w-full flex-col items-center justify-center md:w-[44%] md:px-5">
            <h1 className="mb-12 font-raleway text-xl font-bold text-blue">Verification</h1>
            <div className="login-form">
              <div className="success">{success == 1 ? 'Account Verified Successfully.' : ''}</div>
              <div className="error-message">
                {success == 2
                  ? 'Failed to verify account! ' + errormessage ?? 'Failed to verify account.'
                  : ''}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  ) : null;
};

export default ResetPasswordWithLink;
