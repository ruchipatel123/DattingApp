import Button from 'components/Button/Button';
import RegistrationHeader from 'components/Header/RegistrationHeader';
import ImageUpload from 'components/ImageUpload/ImageUpload';
import Modal from 'components/Modal/Modal';
import ProgressBar from 'components/ProgressBar/Progressbar';
import { useState } from 'react';

const AccountSetUp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div
      className="semitransperent-header min-h-screen"
      style={{ background: 'linear-gradient(69deg, #FDEAB6 0%, #F9DB6D 89.75%)' }}
    >
      <RegistrationHeader />

      <div className="mt-5 ">
        <ProgressBar progress={90} />
      </div>

      <div className="btn-wrap container left-0 right-0 top-0 mt-4 flex space-x-2 md:absolute md:justify-end md:space-x-10">
        <Button onClick={''} type="primary" size="lg">
          Go Back
        </Button>
        <Button onClick={''} type="primary" size="lg">
          Continue
        </Button>
      </div>

      <div className="container  flex flex-wrap  pt-14">
        <div className="mb-14 w-full text-gray-400">
          <h2 className="mb-10 px-5 font-raleway text-md font-normal leading-tight text-gray md:text-lg xxl:px-0">
            Please add some pictures to your profile (at least 2)
          </h2>
          <div className="flex flex-wrap  px-2  md:space-y-0 xxl:-mx-5">
            <div className="mb-4 w-1/2 px-2 md:w-1/5 md:px-5">
              <ImageUpload />
            </div>
            <div className="mb-4 w-1/2 px-2 md:w-1/5 md:px-5">
              <ImageUpload />
            </div>
            <div className="mb-4 w-1/2 px-2 md:w-1/5 md:px-5">
              <ImageUpload />
            </div>
            <div className="mb-4 w-1/2 px-2 md:w-1/5 md:px-5">
              <ImageUpload />
            </div>
            <div className="mb-4 w-1/2 px-2 md:w-1/5 md:px-5">
              <ImageUpload />
            </div>
          </div>
        </div>
        <div className="w-full pb-14 text-gray-400">
          <h2 className="mb-10 px-5 font-raleway text-md font-normal leading-tight text-gray md:text-lg xxl:px-0">
            Finally, add at least 1 ice breaker to your profile so everyone can get to know you a
            little better!
          </h2>
          <div className="flex w-full flex-wrap space-y-2 md:space-y-0 xxl:space-x-10 ">
            <div className="w-full px-5  md:w-1/3 xxl:w-[31%] xxl:px-0">
              <div className="min-h-[200px] rounded-lg border-2 border-blue-300  bg-white p-5 font-raleway font-semibold leading-tight text-blue">
                <h3 className="mb-3 text-center font-raleway text-base font-normal tracking-wider">
                  I’ll Pick The Topic If You Start The Conversation
                </h3>
                <ul className="space-y-1 tracking-wide">
                  <li>Who should have ended up CEO of Waystar / Royco in Succession?</li>
                </ul>
              </div>
            </div>
            <div className="w-full px-5 md:w-1/3 xxl:w-[31%] xxl:px-0">
              <div className="min-h-[200px]  rounded-lg border-2 border-blue-300 bg-white p-5 font-raleway  font-semibold leading-tight text-blue">
                <h3 className="mb-3 text-center font-raleway text-base font-normal tracking-wider">
                  Two Truths And A Lie
                </h3>
                <ol className="list-decimal space-y-1 pl-5 tracking-wide">
                  <li>My most sever allergies are peanuts, hazelnuts, and horses</li>
                  <li>I’ve managed to get every COVID variant at least once</li>
                  <li>My family has a top secret cheesecake recipe</li>
                </ol>
              </div>
            </div>

            <div className="w-full px-5 md:w-1/3 xxl:w-[31%] xxl:px-0">
              <div className="relative min-h-[200px] rounded-xl border border-dashed border-blue-300">
                <div className="absolute flex h-full w-full items-center justify-center">
                  <button
                    onClick={openModal}
                    className="absolute flex h-full w-full items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="46"
                      height="46"
                      viewBox="0 0 46 46"
                      fill="none"
                    >
                      <path
                        d="M23 3V43M43 23H3"
                        stroke="#5AA1EC"
                        stroke-width="5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <Modal isOpen={isOpen} onClose={closeModal}>
            <div className="max-h-[60vh] overflow-auto p-6 text-gray">
              <div className="mb-4 font-raleway text-lg  font-bold text-gray">
                List of Ice Breakers
              </div>
              <ol className="list-decimal space-y-2 pl-5 text-sm">
                <li>What&apos;s the most interesting thing you&apos;ve read or seen this week?</li>
                <li>If you could live in any city in the world for a year, where would it be?</li>
                <li>What&apos;s your go-to karaoke song?</li>
                <li>If you could have dinner with any historical figure, who would it be?</li>
                <li>
                  What&apos;s one hobby you&apos;ve always wanted to try but haven&apos;t yet?
                </li>
                <li>What was the best vacation you&apos;ve ever taken?</li>
                <li>If you could instantly become an expert in something, what would it be?</li>
                <li>What&apos;s the most unusual food you&apos;ve ever tried?</li>
                <li>What movie can you watch over and over without ever getting tired of?</li>
                <li>What&apos;s a passion of yours that most people might not know about?</li>
                <li>What&apos;s the best piece of advice you&apos;ve ever received?</li>
                <li>What&apos;s one book that impacted you profoundly?</li>
                <li>
                  If you could only listen to one musician or band for the rest of your life, who
                  would it be?
                </li>
                <li>What&apos;s the most spontaneous thing you&apos;ve ever done?</li>
                <li>If you could have any superpower, what would it be?</li>
                <li>What&apos;s your idea of a perfect day?</li>
                <li>
                  What&apos;s something you&apos;re proud of but never have an excuse to talk about?
                </li>
                <li>If you could be a character in any movie, who would you be?</li>
                <li>What&apos;s your favorite way to relax after a long day?</li>
                <li>What are three things on your bucket list?</li>
                <li>What&apos;s a skill you&apos;d like to learn this year?</li>
                <li>
                  What&apos;s something you&apos;ve done that took you out of your comfort zone?
                </li>
                <li>How do you like to spend your weekends?</li>
                <li>What&apos;s the most interesting fact you know?</li>
                <li>What&apos;s one thing that can always make you smile?</li>
                <li>If you could only eat one food for the rest of your life, what would it be?</li>
                <li>What&apos;s the best concert or live event you&apos;ve ever attended?</li>
                <li>What&apos;s your favorite quote or saying?</li>
                <li>I&apos;ll pick the topic if you start the conversation.</li>
                <li>Can you figure out my two truths and my lie?</li>
              </ol>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default AccountSetUp;
