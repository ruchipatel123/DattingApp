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
        <div className="w-full mb-14 text-gray-400">
          <h2 className="mb-10 px-5 xxl:px-0 font-raleway text-md font-normal leading-tight text-gray md:text-lg">
            Please add some pictures to your profile (at least 2)
          </h2>
          <div className="xxl:-mx-5 px-2  md:space-y-0  flex flex-wrap">
            <div className="w-1/2 mb-4 px-2 md:w-1/5 md:px-5">
              <ImageUpload />
            </div>
            <div className="w-1/2 mb-4 px-2 md:w-1/5 md:px-5">
              <ImageUpload />
            </div>
            <div className="w-1/2 mb-4 px-2 md:w-1/5 md:px-5">
              <ImageUpload />
            </div>
            <div className="w-1/2 mb-4 px-2 md:w-1/5 md:px-5">
              <ImageUpload />
            </div>
            <div className="w-1/2 mb-4 px-2 md:w-1/5 md:px-5">
              <ImageUpload />
            </div>
          </div>
        </div>
        <div className='w-full pb-14 text-gray-400'>
        <h2 className="mb-10 px-5 xxl:px-0 font-raleway text-md font-normal leading-tight text-gray md:text-lg">
             Finally, add at least 1 ice breaker to your profile so everyone can get to know you a little better!
        </h2>
        <div className="flex space-y-2 md:space-y-0 xxl:space-x-10 flex-wrap w-full ">
            <div className="w-full md:w-1/3 px-5 xxl:w-[31%]">
                <div className='bg-white border-2 min-h-[200px] leading-tight  font-raleway font-semibold border-blue-300 text-blue rounded-lg p-5'>
                    <h3 className='text-base font-raleway font-normal tracking-wider text-center mb-3'>I’ll Pick The Topic If You Start The Conversation</h3>
                    <ul className='space-y-1 tracking-wide'>
                      <li>Who should have ended up CEO of Waystar / Royco in Succession?</li>
                    </ul>
                </div>
            </div>
            <div className="w-full md:w-1/3 px-5 xxl:w-[31%]">
                <div className='bg-white  border-2 min-h-[200px] leading-tight font-raleway font-semibold border-blue-300  text-blue rounded-lg p-5'>
                    <h3 className='text-base font-raleway font-normal tracking-wider text-center mb-3'>Two Truths And A Lie</h3>
                    <ol className='space-y-1 tracking-wide list-decimal pl-5'>
                      <li>My most sever allergies are peanuts, hazelnuts, and horses</li>
                      <li>I’ve managed to get every COVID variant at least once</li>
                      <li>My family has a top secret cheesecake recipe</li>
                    </ol>
                </div>
            </div>
         
          <div className="w-full md:w-1/3 px-5 xxl:w-[31%]">
          <div className="relative min-h-[200px] rounded-xl border border-dashed border-blue-300">
            <div className="absolute flex h-full w-full items-center justify-center">
                    <button onClick={openModal} className='absolute flex h-full w-full items-center justify-center'><svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                            <path d="M23 3V43M43 23H3" stroke="#5AA1EC" stroke-width="5" stroke-linecap="round"/>
                           </svg>
                    </button>
            </div>
          </div>
          </div>
          </div>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <div className="p-6 text-gray max-h-[60vh] overflow-auto">
          <div className="text-lg font-raleway text-gray  font-bold mb-4">List of Ice Breakers</div>
          <ol className='list-decimal text-sm space-y-2 pl-5'>
             <li>What's the most interesting thing you've read or seen this week?</li>
             <li>If you could live in any city in the world for a year, where would it be?</li>
             <li>What's your go-to karaoke song?</li>
             <li>If you could have dinner with any historical figure, who would it be?</li>
             <li>What's one hobby you've always wanted to try but haven't yet?</li>
             <li>What was the best vacation you've ever taken?</li>
             <li>If you could instantly become an expert in something, what would it be?</li>
             <li>What's the most unusual food you've ever tried?</li>
             <li>What movie can you watch over and over without ever getting tired of?</li>
             <li>What's a passion of yours that most people might not know about?</li>
             <li>What's the best piece of advice you've ever received?</li>
             <li>What's one book that impacted you profoundly?</li>
             <li>If you could only listen to one musician or band for the rest of your life, who would it be?</li>
             <li>What's the most spontaneous thing you've ever done?</li>
             <li>If you could have any superpower, what would it be?</li>
             <li>What's your idea of a perfect day?</li>
             <li>What's something you're proud of but never have an excuse to talk about?</li>
             <li>If you could be a character in any movie, who would you be?</li>
             <li>What's your favorite way to relax after a long day?</li>
             <li>What are three things on your bucket list?</li>
             <li>What's a skill you'd like to learn this year?</li>
             <li>What's something you've done that took you out of your comfort zone?</li>
             <li>How do you like to spend your weekends?</li>
             <li>What's the most interesting fact you know?</li>
             <li>What's one thing that can always make you smile?</li>
             <li>If you could only eat one food for the rest of your life, what would it be?</li>
             <li>What's the best concert or live event you've ever attended?</li>
             <li>What's your favorite quote or saying?</li>
             <li>I’ll pick the topic if you start the conversation.</li>
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