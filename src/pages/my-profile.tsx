import AuthHeader from 'components/Header/AuthHeader';
import ImageUpdate from 'components/ImageUpload/ImageUpdate';
import Modal from 'components/Modal/Modal';
import Profile from 'components/MyProfile/Profile';
import QuestionSet from 'components/MyProfile/QuestionSet';
import Sidebar from 'components/SideBar/SideBar';
import { ErrorMessage, Field, FieldArray, FieldArrayRenderProps, Form, Formik } from 'formik';
import { Reorder } from 'framer-motion';
import Layout from 'layout/Layout';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { me, updateMyIceBreaker } from 'slices/auth';
import { getIcebreakerQuestionList } from 'slices/common';
import { useAppDispatch } from 'store';
import * as Yup from 'yup';
const MyProfile = () => {
  const { relationShipStatus } = useSelector((state: any) => {
    return state?.common;
  });
  const validationSchema = Yup.object().shape({
    iceBreaker: Yup.array()
      .max(3, 'Please select max 3 ice breaker')
      .min(1, 'Please select Ice breaker')
      .of(
        Yup.object().shape({
          question_id: Yup.string().required('Select the question'),
          answer: Yup.string().required('Please enter some content'),
        })
      ),
  });

  const [images, setImages] = useState<any>([]);
  const [iceBreakerQuestionList, setIceBreakerQuestionList] = useState<any>([]);
  const [iceBreakerQuestionEditing, setIceBreakerQuestionEditing] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [iceBreakereditMode, seticeBreakerEditMode] = useState(false);
  const [iceBreakerList, seticeBreakerList] = useState<any>([]);
  const [isOpenModel, setIsOpenModel] = useState(false);
  const [hobbyQuestion, setHobbyQuestion] = useState<any>({});
  const openIceBreakerModal = () => {
    setIsOpenModel(true);
  };
  const closeIcebreakerModel = () => {
    setIsOpenModel(false);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const ArrayHelperRef = useRef<FieldArrayRenderProps>();
  const addQuestionToIceBreaker = (question) => {
    if (
      ArrayHelperRef?.current?.form?.values?.iceBreaker?.length < 4 &&
      question.question_id &&
      ArrayHelperRef?.current?.form?.values?.iceBreaker?.filter((ele) => {
        return ele.question_id == question.question_id;
      }) <= 0
    ) {
      ArrayHelperRef?.current?.push(question);
      seticeBreakerList([...iceBreakerList, question]);
    }
  };
  //const [user, setUser] = useState<any>({});
  const dispatch = useAppDispatch();

  const removeImage = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };

  useEffect(() => {
    dispatch(me({}))
      .unwrap()
      .then((data) => {
        //setUser(data?.user);
        setHobbyQuestion(
          data?.user?.questions?.filter((element: any) => {
            return element?.question == 'Hobbies';
          })[0] || []
        );
        seticeBreakerList(
          data?.user?.ice_breakers?.map((question) => {
            return {
              question_id: question?.ice_breaker_master_id,
              answer: question.answer,
              breaker_question: question?.ice_breaker_master.breaker_question,
            };
          }) ?? []
        );
        setImages(data?.user?.userProfileImages);
        if (iceBreakerQuestionList.length == 0) {
          dispatch(getIcebreakerQuestionList({}))
            .unwrap()
            .then((response) => {
              setIceBreakerQuestionList(response.icebreakerQuestions);
            });
        }
      });
  }, [iceBreakereditMode]);
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
            {images.length < 5 && (
              <div className="ml-3 h-64 w-52">
                <ImageUpdate />
              </div>
            )}
            {!editMode ? (
              <Profile
                editMode={editMode}
                setEditMode={setEditMode}
                hobbyQuestion={hobbyQuestion}
                relationShipStatus={relationShipStatus}
                iceBreakereditMode={iceBreakereditMode}
              />
            ) : (
              <QuestionSet relationShipStatus={relationShipStatus} setEditMode={setEditMode} />
            )}
            <div className="mb-5 mt-10 h-max w-full rounded-lg border border-yellow p-5 ">
              <div className="flex w-full justify-between">
                <h2 className="mb-4 font-raleway text-lg font-semibold text-blue">
                  My Ice Breakers
                </h2>
                {!iceBreakereditMode && !editMode ? (
                  <div
                    className="smile w-[20px]"
                    onClick={() => {
                      seticeBreakerEditMode(!iceBreakereditMode);
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
                ) : (
                  ''
                )}
              </div>
              <div className="flex w-full flex-wrap space-y-2 md:space-y-5">
                {!iceBreakereditMode ? (
                  iceBreakerList?.map((element: any) => {
                    return (
                      <div key={element?.question_id} className="w-full px-0 xxl:px-0">
                        <div className="rounded-lg border-2 border-yellow  bg-white p-5 font-raleway font-semibold leading-tight text-blue">
                          <h3 className="mb-3 font-raleway text-base font-normal tracking-wider">
                            {element?.breaker_question || ''}
                          </h3>
                          <ul className="space-y-1 text-lg tracking-wide">
                            <li>{element?.answer || ''}</li>
                          </ul>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <Formik
                    initialValues={{
                      iceBreaker: iceBreakerList,
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(data, { setFieldError, resetForm }) => {
                      setIceBreakerQuestionEditing(true);
                      dispatch(updateMyIceBreaker(data))
                        .unwrap()
                        .then(() => {
                          resetForm();
                          seticeBreakerEditMode(false);
                        })
                        .catch((e) => {
                          if (e?.response?.data?.errors) {
                            Object.keys(e?.response?.data?.errors).map((element) => {
                              setFieldError(element, e?.response?.data?.errors[element][0] ?? '');
                            });
                          }
                        })
                        .finally(() => {
                          setIceBreakerQuestionEditing(false);
                        });
                    }}
                  >
                    {({ values }) => (
                      <Form id="saveIceBreaker" className="w-full">
                        <div className="mb-5 flex w-full flex-wrap space-y-2 md:space-y-0 xxl:space-x-10">
                          <FieldArray
                            name="iceBreaker"
                            render={(arrayHelper) => {
                              ArrayHelperRef.current = arrayHelper;
                              return (
                                <>
                                  {values?.iceBreaker &&
                                    values?.iceBreaker.length > 0 &&
                                    values.iceBreaker.map((breakerData, index) => (
                                      <div
                                        key={breakerData.question_id}
                                        className="relative mb-2 w-full xxl:w-[31%] xxl:px-0"
                                      >
                                        <div className="min-h-[200px] rounded-lg border-2 border-blue-300 bg-white p-5 font-raleway  font-semibold leading-tight text-blue">
                                          <h3 className="mb-3 text-center font-raleway text-base font-normal tracking-wider">
                                            {breakerData.breaker_question}
                                          </h3>
                                          <Field
                                            type="hidden"
                                            name={`iceBreaker.${index}.question_id`}
                                          />
                                          <Field
                                            as="textarea"
                                            name={`iceBreaker.${index}.answer`}
                                            placeholder="Please enter some details"
                                            className="text-bold h-20 w-full max-w-full list-decimal space-y-1 p-1 tracking-wide"
                                          />
                                          <ErrorMessage
                                            name={`iceBreaker.${index}.answer`}
                                            component="div"
                                            className="error-message"
                                          />
                                        </div>
                                        <button
                                          type="button"
                                          className="hover:text-blue-500 absolute right-0 top-0 mr-2 mt-2 text-blue-400 xxl:right-0"
                                          onClick={() => arrayHelper.remove(index)}
                                          hidden={values.iceBreaker.length <= 1}
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 40 40"
                                            fill="none"
                                          >
                                            <circle cx="20" cy="20" r="15" fill="#145CA8" />
                                            <path
                                              d="M26.6663 13.3333L13.333 26.6666"
                                              stroke="#fff"
                                              strokeWidth="2"
                                              strokeLinecap="square"
                                              strokeLinejoin="round"
                                            />
                                            <path
                                              d="M13.3337 13.3333L26.667 26.6666"
                                              stroke="#fff"
                                              strokeWidth="2"
                                              strokeLinecap="square"
                                              strokeLinejoin="round"
                                            />
                                          </svg>
                                        </button>
                                      </div>
                                    ))}
                                </>
                              );
                            }}
                          />
                        </div>
                        {values.iceBreaker?.length < 3 && iceBreakereditMode ? (
                          <div className="w-full px-0 xxl:px-0">
                            <div className="relative  border border-dashed border-yellow">
                              <div className="relative flex h-full w-full items-center justify-center">
                                <button
                                  type="button"
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
                        ) : (
                          ''
                        )}
                      </Form>
                    )}
                  </Formik>
                )}
                {iceBreakerQuestionEditing ? (
                  <div className="mb-8 w-full md:w-[100%] md:px-5">
                    <div className="flex w-full justify-center">
                      <button
                        type="button"
                        onClick={() => {
                          seticeBreakerEditMode(false);
                        }}
                        className="btn lg  border-bluebg-transparent rounded-full border px-3 py-3 font-raleway leading-none text-blue hover:border-red-500 hover:bg-red-500 hover:text-white lg:px-5 lg:text-md xl:px-10"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        form="saveIceBreaker"
                        disabled={iceBreakerQuestionEditing}
                        className="btn primary lg ml-2 rounded-full border border-blue px-3 py-3 font-raleway leading-none text-blue hover:bg-blue hover:text-white lg:px-5 lg:text-md xl:px-10"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                ) : (
                  ''
                )}
              </div>

              <Modal isOpen={isOpenModel} onClose={closeIcebreakerModel}>
                <div className="mx-auto   max-h-[60vh] overflow-auto rounded-lg bg-white p-6 text-gray md:w-[60%]">
                  <div className="mb-4 font-raleway text-lg  font-bold text-gray">
                    List of Ice Breakers
                  </div>
                  <ol className="list-decimal space-y-2 pl-5 text-sm">
                    {iceBreakerQuestionList?.map((question) => {
                      return (
                        <li
                          key={question?.id}
                          onClick={() => {
                            addQuestionToIceBreaker({
                              question_id: question.id,
                              breaker_question: question.breaker_question,
                              answer: '',
                            });
                            closeIcebreakerModel();
                          }}
                        >
                          {question?.breaker_question}
                        </li>
                      );
                    })}
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
