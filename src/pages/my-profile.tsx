import AuthHeader from 'components/Header/AuthHeader';
import MyProfileInfo from 'components/MyProfileInfo/MyProfileInfo';
import Sidebar from 'components/SideBar/SideBar';
import Layout from 'layout/Layout';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { me } from 'slices/auth';
import { useAppDispatch } from 'store';

const MyProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const [user, setUser] = useState({});
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(me({}))
      .unwrap()
      .then((data) => {
        setUser(data?.user);
      });
  }, []);
  return (
    <>
      <Layout meta={{ title: 'Valadate' }}>
        <AuthHeader />
        <div className="flex min-h-[100vh] flex-wrap">
          <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
          <MyProfileInfo user={user} />
        </div>
      </Layout>
    </>
  );
};

export default MyProfile;
