import React, { useEffect } from 'react';
import Layout from 'layout/Layout';
import shallow from 'zustand/shallow';
import { UserStore } from 'store/UserStore';
import LandingPage from './LandingPage';

const Page = ({ data }) => {
  console.log(data);
  const { setUsers } = UserStore(
    (state) => ({
      users: state.users,
      processing: state.processing,
      setUsers: state.setUsers,
    }),
    shallow
  );
  useEffect(() => {
    setUsers(data);
  }, []);

  return (
    <Layout meta={{ title: 'Valadate' }}>
      <LandingPage />
    </Layout>
  );
};
export default Page;
