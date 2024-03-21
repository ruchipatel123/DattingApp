import { ErrorMessage, Field, Form, Formik } from 'formik';
import { RangeSlider } from 'next-range-slider';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { me, updateMyProfile } from 'slices/auth';
import { useAppDispatch } from 'store';
import * as Yup from 'yup';

const QuestionSet = ({ setEditMode, relationShipStatus }) => {
  const fields = {};
  let validationSchema = {};
  const { genderList, lookingFor, hasChildren } = useSelector((state: any) => {
    return state?.common;
  });
  const { user } = useSelector((state: any) => {
    return state?.auth;
  });
  user?.questions?.forEach((question) => {
    fields[`question__${question.id}`] =
      question.question_type == 1
        ? question?.selectedOptions.map((questionOption) => {
            return questionOption.toString();
          })
        : question?.selectedOptions[0];
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
    ...validationSchema,
  });
  const [high, setHigh] = useState(user?.radius_miles ?? 100);
  const [lowRange, setLowRange] = useState(user?.age_range_min ?? 100);
  const [highRange, setHighRange] = useState(user?.age_range_max ?? 100);

  const initialValues = {
    ...{
      firstname: user?.firstname,
      lastname: user?.lastname,
      city: user?.city,
      state: user?.state,
      zipcode: user?.zipcode,
      latitude: user?.latitude?.toString(),
      longitude: user?.longitude?.toString(),
      radius_miles: user?.radius_miles ?? 100,
      gender: user?.gender,
      looking_for: user?.looking_for,
      age_range_max: user?.age_range_max,
      age_range_min: user?.age_range_min,
      dating_intention: user?.dating_intention,
      dating_intention_is_dealbreaker: user?.dating_intention_is_dealbreaker,
      has_children: user?.has_children,
      height_feet: user?.height_feet,
      height_inch: user?.height_inch,
    },
    ...fields,
  };
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const handleFormSubmit = (formValue, setFieldError, resetForm) => {
    setLoading(true);
    dispatch(updateMyProfile(formValue))
      .unwrap()
      .then(() => {
        dispatch(me({}))
          .unwrap()
          .then(() => {
            resetForm();
            setEditMode(false);
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
        setLoading(false);
      });
  };
  return (
    <div className="mb-5 mt-10 h-max w-full rounded-lg border border-yellow p-5 ">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(data, { setFieldError, resetForm }) => {
          handleFormSubmit(data, setFieldError, resetForm);
        }}
      >
        {({ values, setFieldValue }) => (
          <Form className="mb-5 flex flex-wrap md:-mx-5" id={'formprofile'}>
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
                className="m-auto h-[60px] w-full max-w-full rounded-lg border border-gray-400 bg-transparent px-4 py-2 text-md focus:border-black focus:outline-none"
              />
              <ErrorMessage name="city" component="div" className="error-message" />
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
                <ErrorMessage name="radius_miles" component="div" className="error-message" />
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
                    <div key={element.id + 'Lookingfor'} className="relative flex items-center ">
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
                  <ErrorMessage name="dating_intention" component="div" className="error-message" />

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
                            {question.question == 'Hobbies' ? 'Interests' : question.question}
                          </h3>
                          <div className="mb-5 flex flex-wrap">
                            {[0, 1].indexOf(question?.question_type) >= 0 ? (
                              question.options.map((element) => {
                                return (
                                  <div key={element.value} className="relative flex items-center ">
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
                                        type={question?.question_type == 1 ? 'checkbox' : 'radio'}
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
                                      values['question__' + question.id + '_is_deal_breaker'] &&
                                      values['question__' + question.id + '_is_deal_breaker'] == 1
                                    }
                                  />
                                  <label
                                    htmlFor={'question__' + question.id + '_is_deal_breaker'}
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
            <div className="mb-8 w-full md:w-[100%] md:px-5">
              <div className="flex w-full justify-center">
                <button
                  type="button"
                  disabled={loading}
                  onClick={() => {
                    setEditMode(false);
                  }}
                  className="btn lg py- rounded-full border  border-blue bg-transparent px-3 font-raleway text-md leading-none text-blue hover:border-red-500 hover:bg-red-500 hover:text-white lg:px-5 lg:text-md xl:px-10"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn primary lg ml-2 rounded-full border border-blue px-3 py-3 font-raleway leading-none text-blue hover:bg-blue hover:text-white lg:px-5 lg:text-md xl:px-10"
                >
                  Save
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default QuestionSet;
