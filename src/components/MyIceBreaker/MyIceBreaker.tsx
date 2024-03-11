import Modal from 'components/Modal/Modal';
import React, { useState } from 'react';

const MyIceBreaker = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <h2 className="mb-4 font-raleway text-lg font-semibold text-blue">My Ice Breakers</h2>
      <div className="flex w-full flex-wrap space-y-2 md:space-y-5">
        <div className="w-full px-0 xxl:px-0">
          <div className="rounded-lg border-2 border-yellow bg-white p-5 font-raleway  font-semibold leading-tight text-blue">
            <h3 className="mb-3  font-raleway text-base font-normal tracking-wider">
              Two Truths And A Lie
            </h3>
            <ol className="list-decimal space-y-1  pl-5 text-lg tracking-wide">
              <li>My most sever allergies are peanuts, hazelnuts, and horses</li>
              <li>I’ve managed to get every COVID variant at least once</li>
              <li>My family has a top secret cheesecake recipe</li>
            </ol>
          </div>
        </div>

        <div className="w-full px-0   xxl:px-0">
          <div className="rounded-lg border-2 border-yellow  bg-white p-5 font-raleway font-semibold leading-tight text-blue">
            <h3 className="mb-3 font-raleway text-base font-normal tracking-wider">
              I’ll Pick The Topic If You Start The Conversation
            </h3>
            <ul className="space-y-1 text-lg tracking-wide">
              <li>Who should have ended up CEO of Waystar / Royco in Succession?</li>
            </ul>
          </div>
        </div>

        <div className="w-full px-0 xxl:px-0">
          <div className="relative  border border-dashed border-yellow">
            <div className="relative flex h-full w-full items-center justify-center">
              <button
                onClick={openModal}
                className=" flex h-full w-full items-center justify-center py-2 font-raleway text-base text-blue"
              >
                <span className="mr-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path d="M8 4L8 12" stroke="#145CA8" strokeWidth="2" strokeLinecap="round" />
                    <path d="M12 8L4 8" stroke="#145CA8" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
                Add an Icebreaker
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <div className="mx-auto   max-h-[60vh] overflow-auto rounded-lg bg-white p-6 text-gray md:w-[60%]">
          <div className="mb-4 font-raleway text-lg  font-bold text-gray">List of Ice Breakers</div>
          <ol className="list-decimal space-y-2 pl-5 text-sm">
            <li>What&apos;s the most interesting thing you&apos;ve read or seen this week?</li>
            <li>If you could live in any city in the world for a year, where would it be?</li>
            <li>What&apos;s your go-to karaoke song?</li>
            <li>If you could have dinner with any historical figure, who would it be?</li>
            <li>What&apos;s one hobby you&apos;ve always wanted to try but haven&apos;t yet?</li>
            <li>What was the best vacation you&apos;ve ever taken?</li>
            <li>If you could instantly become an expert in something, what would it be?</li>
            <li>What&apos;s the most unusual food you&apos;ve ever tried?</li>
            <li>What movie can you watch over and over without ever getting tired of?</li>
            <li>What&apos;s a passion of yours that most people might not know about?</li>
            <li>What&apos;s the best piece of advice you&apos;ve ever received?</li>
            <li>What&apos;s one book that impacted you profoundly?</li>
            <li>
              If you could only listen to one musician or band for the rest of your life, who would
              it be?
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
            <li>What&apos;s something you&apos;ve done that took you out of your comfort zone?</li>
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
  );
};

export default MyIceBreaker;
