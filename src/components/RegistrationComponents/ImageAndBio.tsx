import ImageUpload from 'components/ImageUpload/ImageUpload';
import Modal from 'components/Modal/Modal';
import { getCookie } from 'cookies-next';
import { ErrorMessage, Field, FieldArray, FieldArrayRenderProps, Form, Formik } from 'formik';
import React, { useEffect, useRef, useState } from 'react';
import { getIcebreakerQuestionList } from 'slices/common';
import { useAppDispatch } from 'store';
import * as Yup from 'yup';
const ImageAndBio = ({ stage, handleProgress }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [iceBreakersList, setIceBreakersList] = useState<any>([]);
  const [initialValueData] = useState<any>(JSON.parse(getCookie('reguser') ?? '{}'));
  const [showComponent, setShowComponent] = useState<boolean>(false);
  const [iceBreakersSelectedQuestion, setIceBreakersSelectedQuestion] = useState<any>([]);
  const ArrayHelperRef = useRef<FieldArrayRenderProps>();
  const dispatch = useAppDispatch();
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
    images: Yup.array()
      .max(5, 'Please select max 5 images')
      .min(2, 'Please select minimum 2 images!'),
  });

  useEffect(() => {
    dispatch(getIcebreakerQuestionList({}))
      .unwrap()
      .then((data) => {
        setIceBreakersList(data?.icebreakerQuestions ?? []);
        setShowComponent(true);
      });
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };

  const addQuestionToIceBreaker = (question) => {
    if (
      ArrayHelperRef?.current?.form?.values?.iceBreaker?.length < 4 &&
      question.question_id &&
      ArrayHelperRef?.current?.form?.values?.iceBreaker?.filter((ele) => {
        return ele.question_id == question.question_id;
      }) <= 0
    ) {
      ArrayHelperRef?.current?.push(question);
      setIceBreakersSelectedQuestion([...iceBreakersSelectedQuestion, question]);
    }
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return showComponent ? (
    <Formik
      initialValues={{
        iceBreaker: initialValueData?.iceBreaker ?? [
          {
            question_id: iceBreakersList[0]?.id,
            breaker_question: iceBreakersList[0]?.breaker_question,
            answer: '',
          },
        ],
        images: initialValueData?.images ?? [],
      }}
      validationSchema={validationSchema}
      onSubmit={(data, { setFieldError, resetForm }) => {
        handleProgress(data, setFieldError, resetForm);
      }}
    >
      {({ values, setFieldValue }) => (
        <Form id={'form' + stage}>
          <div className="container flex flex-wrap  pt-14">
            <div className="mb-14 w-full text-gray-400">
              <h2 className="mb-10 px-5 font-raleway text-md font-normal leading-tight text-gray md:text-lg xxl:px-0">
                Please add some pictures to your profile (at least 2)
              </h2>
              <div className="flex flex-wrap  px-2  md:space-y-0 xxl:-mx-5">
                {[0, 1, 2, 3, 4].map((element, index) => {
                  return (
                    <div className="mb-4 w-1/2 px-2 md:w-1/5 md:px-5" key={index}>
                      <ImageUpload
                        setFieldValue={setFieldValue}
                        values={values}
                        fieldName={`images[${element}]`}
                        element={element}
                      />
                    </div>
                  );
                })}
              </div>
              <ErrorMessage name={'images'} component="div" className="error-message" />
            </div>
            <div className="w-full pb-14 text-gray-400">
              <h2 className="mb-10 px-5 font-raleway text-md font-normal leading-tight text-gray md:text-lg xxl:px-0">
                Finally, add at least 1 ice breaker to your profile so everyone can get to know you
                a little better!
              </h2>
              <div className="flex w-full flex-wrap space-y-2 md:space-y-0 xxl:space-x-10 ">
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
                              className="relative w-full px-5 md:w-1/3 xxl:w-[31%] xxl:px-0"
                            >
                              <div className="min-h-[200px] rounded-lg border-2 border-blue-300 bg-white p-5 font-raleway  font-semibold leading-tight text-blue">
                                <h3 className="mb-3 text-center font-raleway text-base font-normal tracking-wider">
                                  {breakerData.breaker_question}
                                </h3>
                                <Field type="hidden" name={`iceBreaker.${index}.question_id`} />
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
                                className="hover:text-blue-500 absolute right-0 top-0 mr-2 mt-2 text-blue-400"
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
                <div
                  className="w-full px-5 md:w-1/3 xxl:w-[31%] xxl:px-0"
                  hidden={values.iceBreaker.length >= 3}
                >
                  <div className="relative min-h-[200px] rounded-xl border border-dashed border-blue-300">
                    <div className="absolute flex h-full w-full items-center justify-center">
                      <button
                        type="button"
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
                            strokeWidth="5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Modal isOpen={isOpen} onClose={closeModal}>
              <div className="mx-auto   max-h-[60vh] overflow-auto rounded-lg bg-white p-6 text-black md:w-[60%]">
                <div className="mb-4 font-raleway text-lg font-regular text-black xxl:text-[32px]">
                  List of Ice Breakers
                </div>
                <ol className="list-decimal space-y-1 pl-5 font-raleway text-sm md:text-md">
                  {iceBreakersList?.map((question) => {
                    return (
                      <li
                        key={question?.id}
                        onClick={() => {
                          addQuestionToIceBreaker({
                            question_id: question.id,
                            breaker_question: question.breaker_question,
                            answer: '',
                          });
                          closeModal();
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
        </Form>
      )}
    </Formik>
  ) : (
    <></>
  );
};

export default ImageAndBio;
