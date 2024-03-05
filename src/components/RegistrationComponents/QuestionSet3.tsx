import { useState } from 'react';
import { getCookie } from 'cookies-next';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const QuestionSet3 = ({ stage, handleProgress, questionList }) => {
  const [initialValueData] = useState<any>(JSON.parse(getCookie('reguser') ?? '{}'));
  const fields = {};
  let validationSchema = {
    height_feet: Yup.string().required('Please select Height'),
    height_inch: Yup.string().required('Please select Height'),
  };

  questionList
    .filter((question) => {
      return question.page == 3;
    })
    .forEach((question) => {
      fields[`question__${question.id}`] =
        initialValueData['question__' + question.id] ?? (question.question_type == 1 ? [] : '');
      fields['question__' + question.id + '_is_deal_breaker'] =
        initialValueData['question__' + question.id + '_is_deal_breaker'] ?? '';
      validationSchema = {
        ...validationSchema,
        [`question__${question.id}`]:
          question.question_type == 1
            ? Yup.array()
                .min(1, 'Please select atleast ${min} option!')
                .max(4, 'Please select max ${max} option!')
                .required('Please select option!')
            : Yup.string().required('Please select option!'),
      };
    });
  const validationSchemaData = Yup.object().shape(validationSchema);
  const initialValues = {
    height_feet: initialValueData?.height_feet ?? '',
    height_inch: initialValueData?.height_inch ?? '',
    ...fields,
  };
  const optionft = [
    { value: '1 ft', label: '1 ft' },
    { value: '2 ft', label: '2 ft' },
    { value: '3 ft', label: '3 ft' },
    { value: '4 ft', label: '4 ft' },
    { value: '5 ft', label: '5 ft' },
    { value: '6 ft', label: '6 ft' },
  ];

  const optionin = [
    { value: '1 in', label: '1 in' },
    { value: '2 in', label: '2 in' },
    { value: '3 in', label: '3 in' },
    { value: '4 in', label: '4 in' },
    { value: '5 in', label: '5 in' },
    { value: '6 in', label: '6 in' },
  ];

  return (
    <>
      <h2 className="mb-7 font-raleway  text-md  text-gray md:-mx-10  md:text-lg">
        You’re doing great! Please finish filling out your profile!
      </h2>
      <div className="setup-form-wrap bg-white-transperent h-[60vh] items-start justify-start overflow-auto rounded-lg p-5 md:-mx-10 md:px-10 md:py-10">
        <div className="setup-form">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchemaData}
            onSubmit={(data, { setFieldError, resetForm }) => {
              handleProgress(data, setFieldError, resetForm);
            }}
          >
            {({ values }) => (
              <Form id={'form' + stage}>
                <div className="mb-8 block">
                  <h3 className="mb-3 text-md font-medium text-gray">How tall are you?</h3>
                  <div className="flex space-x-8 text-gray md:w-96">
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
                          <option key={element?.value} value={element?.value}>
                            {element?.label}
                          </option>
                        );
                      })}
                    </Field>
                    <ErrorMessage name={'height_feet'} component="div" className="error-message" />
                    <Field
                      as="select"
                      name="height_inch"
                      className="focus:shadow-outline inline-block h-full w-auto min-w-40 appearance-none rounded border border-black bg-transparent bg-[url('/assets/images/arrow.png')] bg-[90%] bg-no-repeat px-4 py-2 pr-8 text-md leading-tight focus:outline-none"
                    >
                      <option key={'sheightinch'} value="">
                        Select
                      </option>
                      {optionin.map((element) => {
                        return (
                          <option key={element?.value} value={element?.value}>
                            {element?.label}
                          </option>
                        );
                      })}
                    </Field>
                    <ErrorMessage name={'height_inch'} component="div" className="error-message" />
                  </div>
                </div>
                {questionList
                  .filter((question) => {
                    return question.page == 3;
                  })
                  .map((question) => {
                    return (
                      <>
                        <h3 className="mb-3 text-md font-medium text-gray">{question.question}</h3>
                        <div className="flex flex-wrap ">
                          {[0, 1].indexOf(question?.question_type) >= 0 ? (
                            question.options.map((element) => {
                              return (
                                <div key={element.value} className="relative flex items-center ">
                                  <label
                                    className={`m-1 mr-3 inline-flex cursor-pointer items-center justify-center  rounded-full px-6 py-2 text-sm  font-medium md:mr-7 ${
                                      values['question__' + question.id] &&
                                      values['question__' + question.id]?.indexOf(
                                        element.id.toString()
                                      ) >= 0
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
                                className="`inline-block border-${borderColor} focus:shadow-outline h-full w-full min-w-40 appearance-none rounded border bg-transparent bg-[url('/assets/images/arrow.png')] bg-[90%] bg-no-repeat px-4 py-2 pr-8 text-md leading-tight focus:outline-none"
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
                            <div className="mb-8 block">
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
                      </>
                    );
                  })}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default QuestionSet3;
