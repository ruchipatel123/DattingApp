import AutoCompleteDropdown from '../../components/RegistrationComponents/AutoCompleteDropdown';
import AuthHeader from '../../components/Header/AuthHeader';
import Modal from '../../components/Modal/Modal';
import { ErrorMessage, Field, FieldArray, FieldArrayRenderProps, Form, Formik } from 'formik';
import Layout from '../../layout/Layout';
import { RangeSlider } from 'next-range-slider';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { getIcebreakerQuestionList } from '../../slices/common';
import { useAppDispatch } from '../../store';
import * as Yup from 'yup';
import ImageUpload from '../../components/ImageUpload/ImageUpload';
import { completeMyProfile, me } from '../../slices/auth';
import { useRouter } from 'next/router';

const CompleteMyProfile = () => {
  const fields = {};
  let validationSchema = {};
  const { relationShipStatus, genderList, lookingFor, hasChildren, optionft, optionin } =
    useSelector((state: any) => {
      return state?.common;
    });
  const { user } = useSelector((state: any) => {
    return state?.auth;
  });
  user?.questions?.forEach((question) => {
    fields[`question__${question.id}`] =
      question.question_type == 1
        ? question?.selectedOptions?.map((questionOption) => {
            return questionOption.toString();
          })
        : question?.selectedOptions[0] ?? null;
    fields['question__' + question.id + '_is_deal_breaker'] =
      question.is_dealbreaker_selected || '';
    validationSchema = {
      ...validationSchema,
      [`question__${question.id}`]:
        question.question_type == 1
          ? Yup.array()
              .min(1, 'Please select atleast ${min} option!')
              .max(question?.question == 'Hobbies' ? 10 : 4, 'Please select max ${max} option!')
              .required('Please select option!')
          : Yup.string().required('Please select option!'),
    };
  });
  validationSchema = Yup.object().shape({
    ...{
      firstname: Yup.string()
        .required('Please enter first name!')
        .min(1, 'Please enter first name with minimum 1 character!')
        .max(255, 'Please enter last name with maximum 255 characters!'),
      lastname: Yup.string()
        .required('Please enter last name!')
        .min(1, 'Please enter last name with minimum 1 character!')
        .max(255, 'Please enter last name with maximum 255 characters!'),
      gender: Yup.string().required('Please select your gender!'),
      looking_for: Yup.string().required('Please select whom you are looking for!'),
      city: Yup.string()
        .required('Please enter city name!')
        .min(1, 'Please enter city name with minimum 1 character!')
        .max(255, 'Please enter city name with maximum 255 characters!'),
      latitude: Yup.string().required('Please enter city name from auto suggestion!'),
      state: Yup.string()
        .required('Please enter state name!')
        .min(1, 'Please enter state name with minimum 1 character!')
        .max(255, 'Please enter state name with maximum 255 characters!'),
      zipcode: Yup.string()
        .required('Please enter zip code!')
        .min(1, 'Please enter zip code with minimum 1 character!')
        .max(255, 'Please enter zip code with maximum 255 characters!'),
      radius_miles: Yup.string().required('Please select miles!').min(1, 'Please select miles!'),
    },
    ice_breaker: Yup.array()
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
    ...validationSchema,
  });

  const [high, setHigh] = useState(user?.radius_miles ?? 100);
  const [lowRange, setLowRange] = useState(user?.age_range_min ?? 18);
  const [highRange, setHighRange] = useState(user?.age_range_max ?? 100);

  const [loading, setLoading] = useState<boolean>(false);
  const [saving, setSaving] = useState<boolean>(false);

  const [iceBreakerQuestionList, setIceBreakerQuestionList] = useState<any>([]);
  const [iceBreakerList, seticeBreakerList] = useState<any>([]);
  const [isOpenModel, setIsOpenModel] = useState(false);
  const dispatch = useAppDispatch();
  const [initialValues, setInitialValues] = useState<any>({});
  const openIceBreakerModal = () => {
    setIsOpenModel(true);
  };

  const closeIcebreakerModel = () => {
    setIsOpenModel(false);
  };

  const ArrayHelperRef = useRef<FieldArrayRenderProps>();

  const addQuestionToIceBreaker = (question) => {
    if (
      ArrayHelperRef?.current?.form?.values?.ice_breaker?.length < 4 &&
      question.question_id &&
      ArrayHelperRef?.current?.form?.values?.ice_breaker?.filter((ele) => {
        return ele.question_id == question.question_id;
      }) <= 0
    ) {
      ArrayHelperRef?.current?.push(question);
      seticeBreakerList([...iceBreakerList, question]);
    }
  };
  //const [user, setUser] = useState<any>({});
  const router = useRouter();
  const handleFormSubmit = (formValue, setFieldError, resetForm) => {
    setSaving(true);
    dispatch(completeMyProfile({ ...formValue, ...{ social_media_id: user?.social_media_id } }))
      .unwrap()
      .then(() => {
        dispatch(me({}))
          .unwrap()
          .then(() => {
            resetForm();
            router.push('/discover');
          });
      })
      .catch((e) => {
        if (e?.response?.data?.errors) {
          Object.keys(e?.response?.data?.errors).map((element) => {
            setFieldError(element, e?.response?.data?.errors[element][0] ?? '');
          });
        }
      })
      .finally(() => {
        setSaving(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    dispatch(me({}))
      .unwrap()
      .then((data) => {
        //setUser(data?.user);
        seticeBreakerList(
          data?.user?.ice_breakers?.map((question) => {
            return {
              question_id: question?.ice_breaker_master_id,
              answer: question.answer,
              breaker_question: question?.ice_breaker_master.breaker_question,
            };
          }) ?? []
        );
        setInitialValues({
          ...{
            images: user?.userProfileImages ?? [],
            firstname: user?.firstname ?? null,
            lastname: user?.lastname ?? null,
            city: user?.city ?? null,
            state: user?.state ?? null,
            zipcode: user?.zipcode ?? null,
            latitude: user?.latitude?.toString() ?? null,
            longitude: user?.longitude?.toString() ?? null,
            radius_miles: user?.radius_miles ?? 100,
            gender: user?.gender ?? null,
            looking_for: user?.looking_for ?? null,
            age_range_min: user?.age_range_min ?? 18,
            age_range_max: user?.age_range_max ?? 100,
            dating_intention: user?.dating_intention,
            dating_intention_is_dealbreaker: user?.dating_intention_is_dealbreaker ?? null,
            has_children: user?.has_children ?? null,
            height_feet: user?.height_feet ?? '',
            height_inch: user?.height_inch ?? '',
            ice_breaker: iceBreakerList.length
              ? iceBreakerList
              : [
                  {
                    question_id: iceBreakerQuestionList[0]?.id,
                    breaker_question: iceBreakerQuestionList[0]?.breaker_question,
                    answer: '',
                  },
                ],
          },
          ...fields,
        });
        if (iceBreakerQuestionList.length == 0) {
          dispatch(getIcebreakerQuestionList({}))
            .unwrap()
            .then((response) => {
              setIceBreakerQuestionList(response.icebreakerQuestions);
            });
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Layout meta={{ title: 'Valadate' }}>
      <AuthHeader />
      <div className="flex min-h-[100vh] flex-wrap bg-[url('/assets/images/network-background.png')]  bg-top">
        <div className={`flex w-[100%] flex-wrap  pb-[80px] pl-5 pr-5 pt-[100px]  md:pl-[10%]`}>
          {loading ? (
            <></>
          ) : (
            <>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(data, { setFieldError, resetForm }) => {
                  handleFormSubmit(data, setFieldError, resetForm);
                }}
              >
                {({ values, setFieldValue, errors }) => (
                  <Form id={'formProfileComplete'} className="overflow-auto">
                    {JSON.stringify(errors)}
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
                    <div className="mb-5 flex flex-wrap md:-mx-5">
                      <div className="mb-3 w-full md:w-3/5 md:px-5">
                        <label className="block  w-full text-md font-normal">First Name</label>
                        <Field
                          name="firstname"
                          type="text"
                          className="m-auto h-[60px] w-full max-w-full rounded-lg border border-gray-400 bg-transparent px-4 py-2 text-md focus:border-black focus:outline-none"
                        />
                        <ErrorMessage name="firstname" component="div" className="error-message" />
                      </div>
                      <div className="mb-3 w-full md:w-2/5 md:px-5">
                        <label className="block  w-full text-md font-normal">Last Name</label>
                        <Field
                          name="lastname"
                          type="text"
                          className="m-auto h-[60px] w-full max-w-full rounded-lg border border-gray-400 bg-transparent px-4 py-2 text-md focus:border-black focus:outline-none"
                        />
                        <ErrorMessage name="lastname" component="div" className="error-message" />
                      </div>
                      <div className="mb-8 w-full md:w-[50%] md:px-5">
                        <label className="block  w-full text-md font-normal">City</label>
                        <Field
                          name="city"
                          type="text"
                          component={AutoCompleteDropdown}
                          className="m-auto h-[60px] w-full max-w-full rounded-lg border border-gray-400 bg-transparent px-4 py-2 text-md focus:border-black focus:outline-none"
                        />
                        {errors?.city ? (
                          <ErrorMessage name="city" component="div" className="error-message" />
                        ) : (
                          <ErrorMessage name="latitude" component="div" className="error-message" />
                        )}
                      </div>
                      <div className="mb-5 w-full md:w-[25%] md:px-5">
                        <label className="block  w-full text-md font-normal">State</label>
                        <Field
                          name="state"
                          type="text"
                          className="m-auto h-[60px] w-full max-w-full rounded-lg border border-gray-400 bg-transparent px-4 py-2 text-md focus:border-black focus:outline-none"
                        />
                        <ErrorMessage name="state" component="div" className="error-message" />
                      </div>
                      <div className="mb-8 w-full md:w-[25%] md:px-5">
                        <label className="block  w-full text-md font-normal">Zip Code</label>
                        <Field
                          name="zipcode"
                          type="text"
                          className="m-auto h-[60px] w-full max-w-full rounded-lg border border-gray-400 bg-transparent px-4 py-2 text-md focus:border-black focus:outline-none"
                        />
                        <Field
                          name="latitude"
                          type="hidden"
                          className="m-auto h-[60px] w-full max-w-full rounded-lg border border-gray-400 bg-transparent px-4 py-2 text-md focus:border-black focus:outline-none"
                        />
                        <Field
                          name="age_range_min"
                          type="hidden"
                          className="m-auto h-[60px] w-full max-w-full rounded-lg border border-gray-400 bg-transparent px-4 py-2 text-md focus:border-black focus:outline-none"
                        />
                        <Field
                          name="age_range_max"
                          type="hidden"
                          className="m-auto h-[60px] w-full max-w-full rounded-lg border border-gray-400 bg-transparent px-4 py-2 text-md focus:border-black focus:outline-none"
                        />
                        <Field
                          name="longitude"
                          type="hidden"
                          className="m-auto h-[60px] w-full max-w-full rounded-lg border border-gray-400 bg-transparent px-4 py-2 text-md focus:border-black focus:outline-none"
                        />
                        <ErrorMessage name="zipcode" component="div" className="error-message" />
                      </div>
                      <div className="mb-3 w-full md:w-[50%] md:px-5">
                        <h2 className="mb-2 font-raleway  text-md  text-gray md:text-lg">
                          I’m looking for someone within
                        </h2>
                        <div className="h-[60px]">
                          <div className="w-full">
                            <div className="range-slider-wrap range_slider_single inline-block w-3/5">
                              <RangeSlider
                                min={10}
                                max={100}
                                step={0}
                                options={{
                                  leftInputProps: {
                                    value: 10,
                                  },
                                  rightInputProps: {
                                    value: high,
                                    onChange: (e) => {
                                      setFieldValue('radius_miles', Number(e.target.value));
                                      setHigh(Number(e.target.value));
                                    },
                                  },
                                }}
                              />
                            </div>
                            <span className="align-center ml-2 font-raleway text-md text-gray md:text-lg">
                              {high} miles
                            </span>
                          </div>
                          <ErrorMessage
                            name="radius_miles"
                            component="div"
                            className="error-message"
                          />
                        </div>
                      </div>
                      <div className="mb-5 w-full md:px-5">
                        <h2 className="mb-2 font-raleway text-lg text-gray">I am a...</h2>
                        <div className="relative mb-2 flex flex-wrap items-center">
                          {genderList.map((element: any) => {
                            return (
                              <div key={element.id} className="relative flex items-center ">
                                <label
                                  className={`m-1 mr-3 inline-flex cursor-pointer items-center justify-center  rounded-full px-5 py-1 text-sm  font-medium md:mr-7 
                        ${
                          values.gender == element.id
                            ? 'border border-blue bg-blue text-white'
                            : 'text-gray-800 border border-blue bg-transparent  text-gray'
                        } focus:ring-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2`}
                                >
                                  <Field
                                    type="radio"
                                    name="gender"
                                    value={element?.id}
                                    className="form-checkbox text-blue-600 absolute bottom-0 left-0 right-0 top-0 hidden h-5 w-5"
                                  />
                                  {element?.value}
                                </label>
                              </div>
                            );
                          })}
                          <ErrorMessage name="gender" component="div" className="error-message" />
                        </div>
                      </div>
                      <div className="mb-5 w-full md:px-5">
                        <h2 className="mb-2 font-raleway text-lg text-gray">Looking for a...</h2>
                        <div className="relative flex flex-wrap items-center">
                          {lookingFor.map((element: any) => {
                            return (
                              <div
                                key={element.id + 'Lookingfor'}
                                className="relative flex items-center "
                              >
                                <label
                                  className={`m-1 mr-3 inline-flex cursor-pointer items-center justify-center  rounded-full px-5 py-1 text-sm  font-medium md:mr-7 
                                     ${
                                       values.looking_for == element.id
                                         ? 'border border-blue bg-blue text-white'
                                         : 'text-gray-800 border border-blue bg-transparent  text-gray'
                                     } focus:ring-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2`}
                                >
                                  <Field
                                    type="radio"
                                    name="looking_for"
                                    value={element?.id}
                                    className="form-checkbox text-blue-600 absolute bottom-0 left-0 right-0 top-0 hidden h-5 w-5"
                                  />
                                  {element?.value}
                                </label>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <div className="mb-5 w-full md:px-5">
                        <h2 className="mb-2 font-raleway text-lg text-gray">How tall are you?</h2>
                        <div className="flex items-start text-gray md:w-96">
                          <div className="block">
                            <Field
                              as="select"
                              name="height_feet"
                              className="focus:shadow-outline inline-block h-full w-auto min-w-40 appearance-none rounded border border-black bg-transparent bg-[url('/assets/images/arrow.png')] bg-[90%] bg-no-repeat px-4 py-2 pr-8 text-md leading-tight focus:outline-none"
                            >
                              <option key={'sheightfeet'} value="">
                                Select
                              </option>
                              {optionft.map((element) => {
                                return (
                                  <option key={element?.id} value={element?.id}>
                                    {element?.value}
                                  </option>
                                );
                              })}
                            </Field>
                            <ErrorMessage
                              name={'height_feet'}
                              component="div"
                              className="error-message"
                            />
                          </div>
                          <div className="ml-3 block">
                            <Field
                              as="select"
                              name="height_inch"
                              className="focus:shadow-outline inline-block h-full w-auto min-w-40 appearance-none rounded border border-black bg-transparent bg-[url('/assets/images/arrow.png')] bg-[90%] bg-no-repeat px-4 py-2 pr-8 text-md leading-tight text-black focus:outline-none"
                            >
                              <option key={'sheightinch'} value="">
                                Select
                              </option>
                              {optionin.map((element) => {
                                return (
                                  <option key={element?.id} value={element?.id}>
                                    {element?.value}
                                  </option>
                                );
                              })}
                            </Field>
                            <ErrorMessage
                              name={'height_inch'}
                              component="div"
                              className="error-message"
                            />
                          </div>
                        </div>
                      </div>
                      <div className=" mb-5  px-0  md:px-5">
                        <div className="setup-form ">
                          <div className="mb-5 block">
                            <h3 className="mb-2 text-md font-medium text-gray">
                              What age range are you looking to date within?
                            </h3>
                            <div className="mb-5 flex flex-wrap items-center">
                              <div className="range-slider-wrap w-full md:w-1/2">
                                <RangeSlider
                                  min={18}
                                  max={100}
                                  step={0}
                                  options={{
                                    leftInputProps: {
                                      value: lowRange,
                                      onChange: (e) => {
                                        setLowRange(Number(e.target.value));
                                        setFieldValue('age_range_min', Number(e.target.value));
                                      },
                                    },
                                    rightInputProps: {
                                      value: highRange,
                                      onChange: (e) => {
                                        setHighRange(Number(e.target.value));
                                        setFieldValue('age_range_max', Number(e.target.value));
                                      },
                                    },
                                  }}
                                />
                              </div>
                              <h3 className="ml-3 text-md font-medium text-gray">
                                {lowRange} - {highRange} years old
                              </h3>
                            </div>

                            <h3 className="mb-3 text-md font-medium text-gray">
                              What are your dating intentions?
                            </h3>
                            <div className="relative mb-2 flex flex-wrap items-center">
                              {relationShipStatus.map((element) => {
                                return (
                                  <div key={element.id} className="relative flex items-center ">
                                    <label
                                      className={`mb-2 mr-3 inline-flex cursor-pointer items-center justify-center  rounded-full px-5 py-1 text-sm  font-medium md:mr-7 ${
                                        values.dating_intention == element.id
                                          ? 'border border-blue bg-blue text-white'
                                          : 'text-gray-800 border border-blue bg-transparent  text-gray'
                                      } focus:ring-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2`}
                                    >
                                      <Field
                                        type="radio"
                                        name="dating_intention"
                                        value={element?.id}
                                        className={'hidden'}
                                      />
                                      {element?.value}
                                    </label>
                                  </div>
                                );
                              })}
                            </div>
                            <ErrorMessage
                              name="dating_intention"
                              component="div"
                              className="error-message"
                            />

                            <div className="mb-8 block">
                              <div className="mb-4 mt-2 flex items-center">
                                <Field
                                  type="checkbox"
                                  name="dating_intention_is_dealbreaker"
                                  id="dating_intention_is_dealbreaker"
                                  className="mr-2 h-4 w-4 bg-transparent leading-tight"
                                  value={1}
                                  checked={values?.dating_intention_is_dealbreaker == 1}
                                />
                                <label
                                  htmlFor="dating_intention_is_dealbreaker"
                                  className="text-base font-medium text-gray"
                                >
                                  This is a dealbreaker for me
                                </label>
                              </div>
                            </div>

                            <div className="mb-8 block">
                              <h3 className="mb-3 text-md font-medium text-gray">
                                Are you ok with dating someone who already has children?
                              </h3>
                              <div className="flex flex-wrap">
                                <div className="relative mb-2 flex flex-wrap items-center">
                                  {hasChildren.map((element) => {
                                    return (
                                      <div key={element.id} className="relative flex items-center ">
                                        <Field
                                          type="radio"
                                          name="has_children"
                                          value={element?.id}
                                          className="hidden"
                                          id={'has_children_' + element.id}
                                        />
                                        <label
                                          htmlFor={'has_children_' + element.id}
                                          className={`mr-3 inline-flex cursor-pointer items-center justify-center  rounded-full px-5 py-1 text-sm  font-medium md:mr-7 ${
                                            values.has_children == element.id
                                              ? 'border border-blue bg-blue text-white'
                                              : 'text-gray-800 border border-blue bg-transparent  text-gray'
                                          } focus:ring-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2`}
                                        >
                                          {element?.value}
                                        </label>
                                      </div>
                                    );
                                  })}
                                </div>
                                <div className="w-full">
                                  <ErrorMessage
                                    name="has_children"
                                    component="div"
                                    className="error-message block w-full"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="mb-5 block">
                              {user?.questions?.map((question) => {
                                return (
                                  <div key={question?.id}>
                                    <h3 className="mb-2 text-md font-medium text-gray">
                                      {question.question == 'Hobbies'
                                        ? 'Interests'
                                        : question.question}
                                    </h3>
                                    <div className="mb-5 flex flex-wrap">
                                      {[0, 1].indexOf(question?.question_type) >= 0 ? (
                                        question.options.map((element) => {
                                          return (
                                            <div
                                              key={element.value}
                                              className="relative flex items-center "
                                            >
                                              <label
                                                className={`m-1 mr-3 inline-flex cursor-pointer items-center justify-center  rounded-full px-5 py-1 text-sm  font-medium md:mr-7 
                                      ${
                                        (values['question__' + question.id] &&
                                          values['question__' + question.id][0] &&
                                          values['question__' + question.id]?.indexOf(
                                            element.id.toString()
                                          ) >= 0) ||
                                        (values['question__' + question.id] &&
                                          values['question__' + question.id] ==
                                            element.id.toString())
                                          ? 'border border-blue bg-blue text-white'
                                          : 'text-gray-800 border border-blue bg-transparent  text-gray'
                                      } focus:ring-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2`}
                                              >
                                                <Field
                                                  type={
                                                    question?.question_type == 1
                                                      ? 'checkbox'
                                                      : 'radio'
                                                  }
                                                  name={'question__' + question.id}
                                                  className={'hidden'}
                                                  value={element?.id}
                                                />
                                                {element?.option}
                                              </label>
                                            </div>
                                          );
                                        })
                                      ) : (
                                        <div>
                                          <Field
                                            as="select"
                                            name={'question__' + question.id}
                                            className="`inline-block border-${borderColor} focus:shadow-outline h-full w-full min-w-40 appearance-none rounded border bg-transparent bg-[url('/assets/images/arrow.png')] bg-[96%] bg-no-repeat px-4 py-2 pr-8 text-md leading-tight focus:outline-none"
                                          >
                                            <option key={'s' + question.id} value="">
                                              Select
                                            </option>
                                            {question.options.map((element) => {
                                              return (
                                                <option key={element?.id} value={element?.id}>
                                                  {element?.option}
                                                </option>
                                              );
                                            })}
                                          </Field>
                                        </div>
                                      )}
                                    </div>
                                    <ErrorMessage
                                      name={'question__' + question.id}
                                      component="div"
                                      className="error-message"
                                    />
                                    {question.is_dealbreaker == 1 ? (
                                      <div className=" flex items-center">
                                        <div className="mb-5 block">
                                          <div className="mb-4 mt-2 flex items-center">
                                            <Field
                                              type="checkbox"
                                              name={'question__' + question.id + '_is_deal_breaker'}
                                              id={'question__' + question.id + '_is_deal_breaker'}
                                              className="mr-2 h-4 w-4 bg-transparent leading-tight"
                                              value={1}
                                              checked={
                                                values[
                                                  'question__' + question.id + '_is_deal_breaker'
                                                ] &&
                                                values[
                                                  'question__' + question.id + '_is_deal_breaker'
                                                ] == 1
                                              }
                                            />
                                            <label
                                              htmlFor={
                                                'question__' + question.id + '_is_deal_breaker'
                                              }
                                              className="text-base font-medium text-gray"
                                            >
                                              This is a dealbreaker for me
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                    ) : (
                                      ''
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-5 mt-10 h-max w-full  ">
                      <div className="flex w-full justify-between">
                        <h2 className="mb-4 font-raleway text-lg font-semibold text-blue">
                          My Ice Breakers
                        </h2>
                      </div>
                      <div className="flex w-full flex-wrap space-y-2 md:space-y-5">
                        <div className="mb-5 flex w-full flex-wrap space-y-2 md:space-y-0 xxl:space-x-10">
                          <FieldArray
                            name="ice_breaker"
                            render={(arrayHelper) => {
                              ArrayHelperRef.current = arrayHelper;
                              return (
                                <>
                                  {values?.ice_breaker &&
                                    values?.ice_breaker.length > 0 &&
                                    values.ice_breaker.map((breakerData, index) => (
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
                                            name={`ice_breaker.${index}.question_id`}
                                          />
                                          <Field
                                            as="textarea"
                                            name={`ice_breaker.${index}.answer`}
                                            placeholder="Please enter some details"
                                            className="text-bold h-20 w-full max-w-full list-decimal space-y-1 p-1 tracking-wide"
                                          />
                                          <ErrorMessage
                                            name={`ice_breaker.${index}.answer`}
                                            component="div"
                                            className="error-message"
                                          />
                                        </div>
                                        <button
                                          type="button"
                                          className="hover:text-blue-500 absolute right-0 top-0 mr-2 mt-2 text-blue-400 xxl:right-0"
                                          onClick={() => arrayHelper.remove(index)}
                                          hidden={values.ice_breaker.length <= 1}
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
                        {values?.ice_breaker?.length < 3 ? (
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

                        <div className="mb-8 w-full md:w-[100%] md:px-5">
                          <div className="flex w-full justify-center">
                            <button
                              type="button"
                              onClick={(e) => {
                                console.log(e);
                              }}
                              disabled={saving}
                              className="btn lg  border-bluebg-transparent rounded-full border px-3 py-3 font-raleway leading-none text-blue hover:border-red-500 hover:bg-red-500 hover:text-white lg:px-5 lg:text-md xl:px-10"
                            >
                              Cancel
                            </button>
                            <button
                              type="submit"
                              form="formProfileComplete"
                              disabled={saving}
                              className="btn primary lg ml-2 rounded-full border border-blue px-3 py-3 font-raleway leading-none text-blue hover:bg-blue hover:text-white lg:px-5 lg:text-md xl:px-10"
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
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
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CompleteMyProfile;
