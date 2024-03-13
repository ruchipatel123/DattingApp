import AuthHeader from 'components/Header/AuthHeader';
import Modal from 'components/Modal/Modal';
import Sidebar from 'components/SideBar/SideBar';
import { Reorder } from 'framer-motion';
import Layout from 'layout/Layout';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { me } from 'slices/auth';
import { useAppDispatch } from 'store';

const MyProfile = () => {
  const { relationShipStatus } = useSelector((state: any) => {
    return state?.common;
  });
  const [images, setImages] = useState<any>([]);

  const [isOpen, setIsOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [isOpenModel, setIsOpenModel] = useState(false);
  const openIceBreakerModal = () => {
    setIsOpenModel(true);
  };
  const closeIcebreakerModel = () => {
    setIsOpenModel(false);
  };

  const [hobbyQuestion, setHobbyQuestion] = useState<any>({});
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const [user, setUser] = useState<any>({});
  const dispatch = useAppDispatch();

  const removeImage = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };

  useEffect(() => {
    dispatch(me({}))
      .unwrap()
      .then((data) => {
        setUser(data?.user);
        setHobbyQuestion(
          data?.user?.questions?.filter((element: any) => {
            return element?.question == 'Hobbies';
          })[0] || []
        );
        setImages(data?.user?.userProfileImages);
      });
  }, []);
  return (
    <>
      <Layout meta={{ title: 'Valadate' }}>
        <AuthHeader />
        <div className="flex min-h-[100vh] flex-wrap">
          <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
          <div className={`flex w-[100%] flex-wrap  pb-[80px] pl-5 pr-5 pt-[100px]  md:pl-[20%]`}>
            <Reorder.Group
              axis="x"
              values={images}
              onReorder={setImages}
              className="flex space-x-4 overflow-auto"
            >
              {images.map((image, index) => (
                <Reorder.Item
                  key={image.id}
                  value={image}
                  className="relative flex w-52 flex-none flex-col items-center overflow-hidden rounded bg-white shadow-lg"
                >
                  <div
                    className={`bg-image  h-64 w-full rounded-lg bg-cover bg-center`}
                    style={{ backgroundImage: `url(${image.file_url})` }}
                  ></div>
                  {index === 0 && (
                    <span
                      className="absolute bottom-0 left-0 right-0 mt-2 pb-20 text-xs font-bold text-yellow"
                      style={{
                        background:
                          'linear-gradient(180deg, rgba(20, 92, 168, 0.00) 0%, rgba(20, 92, 168, 0.40) 26.43%, rgba(20, 92, 168, 0.80) 73%, #145CA8 100%)',
                        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                      }}
                    >
                      <span className="absolute bottom-2 left-2 text-shadow-sm">Main Image</span>
                    </span>
                  )}
                  {images.length > 2 ? (
                    <button
                      onClick={() => removeImage(image.id)}
                      className="absolute right-2 top-2 rounded"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle cx="12" cy="12" r="9" fill="#FBFDFF" />
                        <path
                          d="M16 8L8 16"
                          stroke="#145CA8"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8 8L16 16"
                          stroke="#145CA8"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  ) : (
                    ''
                  )}
                </Reorder.Item>
              ))}
            </Reorder.Group>
            <div className="mb-5 mt-10 h-max w-full rounded-lg border border-yellow p-5 ">
              <div className="flex w-full justify-between">
                <h2 className="mb-4 font-raleway text-lg font-semibold text-blue">
                  {user?.firstname ?? ''} <span className="font-light">{user?.age ?? ''}</span>
                </h2>
                <div
                  className="smile w-[20px]"
                  onClick={() => {
                    setEditMode(!editMode);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                  >
                    <path
                      d="M6.78697 22.5466L6.78698 22.5466L6.81311 22.5401L6.81312 22.5401L10.1078 21.7164C10.124 21.7124 10.1401 21.7084 10.1562 21.7044C10.375 21.65 10.5853 21.5978 10.7767 21.4894C10.9682 21.381 11.1212 21.2275 11.2804 21.0679C11.2921 21.0561 11.3039 21.0444 11.3157 21.0325L20.0097 12.3385L20.0365 12.3117C20.3469 12.0014 20.6211 11.7272 20.8125 11.4764C21.0199 11.2046 21.1855 10.891 21.1855 10.5C21.1855 10.109 21.0199 9.79543 20.8125 9.52361C20.6211 9.27285 20.3469 8.99864 20.0366 8.68835L20.0097 8.66152L19.3382 7.98995L19.3113 7.96312C19.001 7.65279 18.7268 7.37853 18.4761 7.1872C18.2042 6.97981 17.8907 6.81421 17.4997 6.81421C17.1086 6.81421 16.7951 6.97981 16.5233 7.1872C16.2725 7.37853 15.9983 7.6528 15.688 7.96314L15.6612 7.98995L6.96712 16.684C6.95532 16.6958 6.94354 16.7076 6.93178 16.7193C6.77216 16.8785 6.61871 17.0315 6.51032 17.2229C6.40192 17.4144 6.34966 17.6247 6.2953 17.8435C6.29129 17.8596 6.28728 17.8757 6.28323 17.8919L5.45304 21.2127C5.45063 21.2223 5.44819 21.2321 5.44573 21.2419C5.40712 21.3959 5.36345 21.5702 5.34894 21.7185C5.33279 21.8836 5.33427 22.1828 5.57556 22.4241C5.81684 22.6654 6.11608 22.6669 6.2812 22.6507C6.42946 22.6362 6.60372 22.5926 6.75779 22.5539C6.7676 22.5515 6.77733 22.5491 6.78697 22.5466Z"
                      stroke="#5AA1EC"
                      strokeWidth="1.2"
                    />
                    <path d="M14.583 8.75L19.2497 13.4167" stroke="#5AA1EC" strokeWidth="1.2" />
                  </svg>
                </div>
              </div>
              <ul className="w-full text-base font-light">
                <li className="flex w-full items-center">
                  <span className="mr-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M19.3612 17C20.1072 17.4561 20.5 17.9734 20.5 18.5C20.5 19.0266 20.1072 19.5439 19.3612 20C18.6152 20.4561 17.5422 20.8348 16.25 21.0981C14.9578 21.3614 13.4921 21.5 12 21.5C10.5079 21.5 9.04216 21.3614 7.75 21.0981C6.45784 20.8348 5.38482 20.4561 4.63878 20C3.89275 19.5439 3.5 19.0266 3.5 18.5C3.5 17.9734 3.89275 17.4561 4.63878 17"
                        stroke="#72859A"
                        strokeLinecap="round"
                      />
                      <path
                        d="M19.5 10C19.5 15.018 14.0117 18.4027 12.4249 19.2764C12.1568 19.424 11.8432 19.424 11.5751 19.2764C9.98831 18.4027 4.5 15.018 4.5 10C4.5 5.5 8.13401 2.5 12 2.5C16 2.5 19.5 5.5 19.5 10Z"
                        stroke="#72859A"
                      />
                      <circle cx="12" cy="10" r="3.5" stroke="#72859A" />
                    </svg>
                  </span>
                  {user?.city || ''},{user?.state || ''},{user?.zipcode || ''}
                </li>
                <li className="flex w-full items-center">
                  <span className="mr-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle cx="11" cy="11" r="6" stroke="#72859A" />
                      <path
                        d="M11 8C10.606 8 10.2159 8.0776 9.85195 8.22836C9.48797 8.37913 9.15726 8.6001 8.87868 8.87868C8.6001 9.15726 8.37913 9.48797 8.22836 9.85195C8.0776 10.2159 8 10.606 8 11"
                        stroke="#72859A"
                        strokeLinecap="round"
                      />
                      <path d="M20 20L17 17" stroke="#72859A" strokeLinecap="round" />
                    </svg>
                  </span>
                  {relationShipStatus?.filter((element: any) => {
                    return element?.id == user?.dating_intention;
                  })[0]?.value || ''}
                </li>
                <li className="flex w-full items-center">
                  <span className="mr-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M20.3333 6.40004H16.1667V5.60001C16.1667 4.7176 15.4192 4 14.5 4H9.49999C8.58081 4 7.83331 4.71756 7.83331 5.60001V6.4H3.66668C2.74746 6.40004 2 7.1176 2 8.00001V18.4C2 19.2824 2.74746 20 3.66668 20H20.3333C21.2525 20 22 19.2824 22 18.4V8.00001C22 7.1176 21.2525 6.40004 20.3333 6.40004ZM8.66667 5.60001C8.66667 5.15901 9.04061 4.80002 9.49999 4.80002H14.5C14.9594 4.80002 15.3333 5.15901 15.3333 5.60001V6.4H8.66667V5.60001ZM21.1666 18.4C21.1666 18.841 20.7927 19.2 20.3333 19.2H3.66668C3.2073 19.2 2.83336 18.841 2.83336 18.4V12.5775C3.07949 12.7153 3.36176 12.8 3.66668 12.8H10.3333V14C10.3333 14.2211 10.5197 14.4001 10.75 14.4001H13.25C13.4803 14.4001 13.6667 14.2211 13.6667 14V12.8H20.3334C20.6383 12.8 20.9206 12.7153 21.1667 12.5775V18.4H21.1666ZM11.1667 13.6V12H12.8333V13.6H11.1667ZM21.1666 11.2C21.1666 11.641 20.7927 12 20.3333 12H13.6667V11.6C13.6667 11.3789 13.4803 11.2 13.25 11.2H10.75C10.5197 11.2 10.3333 11.3789 10.3333 11.6V12H3.66668C3.2073 12 2.83336 11.641 2.83336 11.2V8.00005C2.83336 7.55905 3.2073 7.20006 3.66668 7.20006H20.3333C20.7927 7.20006 21.1666 7.55905 21.1666 8.00005V11.2Z"
                        fill="#72859A"
                      />
                    </svg>
                  </span>
                  Architect
                </li>
              </ul>
              {user?.questions
                ?.filter((element: any) => {
                  return element?.question !== 'Hobbies';
                })
                .map((question: any) => {
                  return (
                    <div className="mt-2 flex w-full flex-wrap" key={question?.id}>
                      <h2 className="mb-2 w-full font-raleway text-sm tracking-wide	text-blue">
                        {editMode
                          ? question?.question
                          : question?.question?.replace(' (Select all that apply)', '')}
                      </h2>
                      <div className="flex flex-wrap">
                        {question?.options?.map((option) => {
                          return (
                            <span
                              key={option.id}
                              className={
                                question.selectedOptions.indexOf(option?.id) >= 0
                                  ? 'mr-2 mt-2 rounded-full border border-blue-100 bg-[#E1EEFC]  px-5 py-2 text-xs'
                                  : 'mr-2 mt-2 rounded-full border border-blue-100 px-5 py-2 text-xs'
                              }
                            >
                              {option?.option}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              <div className="mt-2 flex w-full flex-wrap">
                <h2 className="mb-2 w-full font-raleway text-sm tracking-wide	text-blue">
                  Interests
                </h2>
                <div className="flex flex-wrap">
                  {hobbyQuestion.options?.map((option) => {
                    return (
                      <span
                        key={option.id}
                        className={
                          hobbyQuestion.selectedOptions.indexOf(option?.id) >= 0
                            ? 'mr-2 mt-2 rounded-full border border-blue-100 bg-[#E1EEFC]  px-5 py-2 text-xs'
                            : 'mr-2 mt-2 rounded-full border border-blue-100 px-5 py-2 text-xs'
                        }
                      >
                        {option?.option}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
            <div>
              <h2 className="mb-4 font-raleway text-lg font-semibold text-blue">My Ice Breakers</h2>
              <div className="flex w-full flex-wrap space-y-2 md:space-y-5">
                <div className="w-full px-0 xxl:px-0">
                  <div className="rounded-lg border-2 border-yellow bg-white p-5 font-raleway  font-semibold leading-tight text-blue">
                    <h3 className="mb-3  font-raleway text-base font-normal tracking-wider">
                      Two Truths And A Lie
                    </h3>
                    <ol className="list-decimal space-y-1  pl-5 text-lg tracking-wide">
                      {user?.ice_breakers?.map((element: any) => {
                        return (
                          <li key={element?.id}>
                            {element?.ice_breaker_master?.breaker_question || ''}
                          </li>
                        );
                      })}
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
                        onClick={openIceBreakerModal}
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
                            <path
                              d="M8 4L8 12"
                              stroke="#145CA8"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                            <path
                              d="M12 8L4 8"
                              stroke="#145CA8"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        </span>
                        Add an Icebreaker
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <Modal isOpen={isOpenModel} onClose={closeIcebreakerModel}>
                <div className="mx-auto   max-h-[60vh] overflow-auto rounded-lg bg-white p-6 text-gray md:w-[60%]">
                  <div className="mb-4 font-raleway text-lg  font-bold text-gray">
                    List of Ice Breakers
                  </div>
                  <ol className="list-decimal space-y-2 pl-5 text-sm">
                    <li>
                      What&apos;s the most interesting thing you&apos;ve read or seen this week?
                    </li>
                    <li>
                      If you could live in any city in the world for a year, where would it be?
                    </li>
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
                      If you could only listen to one musician or band for the rest of your life,
                      who would it be?
                    </li>
                    <li>What&apos;s the most spontaneous thing you&apos;ve ever done?</li>
                    <li>If you could have any superpower, what would it be?</li>
                    <li>What&apos;s your idea of a perfect day?</li>
                    <li>
                      What&apos;s something you&apos;re proud of but never have an excuse to talk
                      about?
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
                    <li>
                      If you could only eat one food for the rest of your life, what would it be?
                    </li>
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
      </Layout>
    </>
  );
};

export default MyProfile;
