import Modal from 'components/Modal/Modal';
import { useState } from 'react';
import FriendSlider from './FriendSlider';

const YourFriendList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="friend-slider w-full">
        <div className="relative w-full pt-10">
          <h2 className="mb-5 w-full font-raleway text-lg font-semibold leading-6 tracking-wide text-blue">
            Your Friends
          </h2>
          <button onClick={openModal} className="absolute right-0 top-10 md:right-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                d="M15 19.6667V10.3333M19.6667 15H10.3333M29 15C29 22.732 22.732 29 15 29C7.26801 29 1 22.732 1 15C1 7.26801 7.26801 1 15 1C22.732 1 29 7.26801 29 15Z"
                stroke="#145CA8"
                strokeWidth="2"
                strokeLinecap="square"
              />
            </svg>
          </button>
        </div>
        <div className="w-full">
          <FriendSlider />
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <div className="mx-auto max-h-[60vh] rounded-lg bg-white p-6  text-gray md:w-[60%]">
          <h3 className="mb-10 font-raleway text-lg">
            Please enter the email address of the user you’d like to add to your friends. If no
            account exists, we will send them an invite!
          </h3>
          <form>
            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              className="mb w-full rounded-lg border border-gray-300 p-3"
            />
            <div className="mt-5 text-center">
              <input
                type="submit"
                value="Send Invite"
                className="mt-3 inline-block  cursor-pointer rounded-full border border-blue-300 px-10 py-2 hover:bg-blue-300 hover:text-white"
              />
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default YourFriendList;
