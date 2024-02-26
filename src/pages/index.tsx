import React, { useEffect, useState } from 'react';
import Layout from 'layout/Layout';
import { useSelector } from 'react-redux';
import Header from 'components/Header/Header';
import Banner from 'components/Banner/Banner';
import ImageContent from 'components/ImageContentBlock/ImageContent';
import { getCookie } from 'cookies-next';
import { jwt } from 'jsonwebtoken';

const Page = () => {
  const isLoggedIn = useSelector((state: any) => state?.auth?.isLoggedIn);
  const [showComponent, setShowComponent] = useState(false);
  useEffect(() => {
    // rome-ignore lint/complexity/useSimplifiedLogicExpression: <explanation>
    setShowComponent(true);
  }, [isLoggedIn]);
  return showComponent ? (
    <Layout meta={{ title: 'Valadate' }}>
      <div className="bg-[url('/assets/images/network-background.png')] bg-contain bg-center">
        <Header />
        <Banner />
        <ImageContent />
      </div>
    </Layout>
  ) : (
    <div></div>
  );
};

export const getServerSideProps = async ({ req, res }) => {
  const cookie = getCookie('token', { req, res });
  if (!cookie) return { props: { isAuthenticated: false } };
  try {
    const isAuthenticated = await jwt.verify(cookie, process.env.NEXT_PUBLIC_JWT_KEY);
    return { props: { isAuthenticated: isAuthenticated } };
  } catch (err) {
    return { props: { isAuthenticated: false } };
  }
};
export default Page;
