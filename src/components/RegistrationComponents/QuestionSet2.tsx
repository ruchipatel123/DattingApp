import { getCookie } from 'cookies-next';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
const QuestionSet2 = ({ stage, handleProgress, questionList }) => {
  const [initialValueData] = useState<any>(JSON.parse(getCookie('reguser') ?? '{}'));
  const fields = {};
  let validationSchema = {};

  questionList
    .filter((question) => {
      return question.page == 2;
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
                .max(10, 'Please select max ${max} options!')
                .required('Please select option!')
            : Yup.string().required('Please select option!'),
      };
    });
  validationSchema = Yup.object().shape(validationSchema);
  const initialValues = {
    ...fields,
  };
  return (
    <>
      <h2 className="mb-7 font-raleway  text-md  text-gray md:-mx-10  md:text-lg">
        One key to a long-term match is finding people with shared values and lifestyles. Let’s
        figure out who’s best for you!
      </h2>
      <div className="setup-form-wrap bg-white-transperent h-[60vh] items-start justify-start overflow-auto rounded-lg p-5 md:-mx-10 md:px-10 md:py-5">
        <div className="setup-form">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(data, { setFieldError, resetForm }) => {
              handleProgress(data, setFieldError, resetForm);
            }}
          >
            {({ values }) => (
              <Form className="flex flex-wrap md:-mx-5" id={'form' + stage}>
                <div className="mb-2 block">
                  {questionList
                    .filter((question) => {
                      return question.page == 2;
                    })
                    .map((question) => {
                      const questionOption = question?.options.reduce(function (r, a) {
                        r[a.option_group] = r[a.option_group] || [];
                        r[a.option_group].push(a);
                        return r;
                      }, Object.create(null));

                      return Object.keys(questionOption)?.map((ele, index) => {
                        return (
                          <>
                            {index == 0 ? (
                              <div className="mb-3">
                                <ErrorMessage
                                  name={'question__' + question.id}
                                  component="div"
                                  className="error-message"
                                />
                              </div>
                            ) : (
                              ''
                            )}

                            <div className="mb-5">
                              <h3 className="mb-3 text-md font-medium text-gray">{ele}</h3>
                              <div className="flex flex-wrap ">
                                {[0, 1].indexOf(question?.question_type) >= 0 ? (
                                  questionOption[ele]?.map((element) => {
                                    return (
                                      <div
                                        key={element.value}
                                        className="relative flex items-center "
                                      >
                                        <label
                                          className={`mb-4 mr-3 inline-flex cursor-pointer items-center justify-center  rounded-full px-5 py-1 text-sm  font-medium md:mr-7 ${
                                            values['question__' + question.id] &&
                                            values['question__' + question.id]?.indexOf(
                                              element.id.toString()
                                            ) >= 0
                                              ? 'border border-blue bg-blue text-white'
                                              : 'text-gray-800 border border-blue bg-transparent  text-gray'
                                          } focus:ring-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2`}
                                        >
                                          <Field
                                            type={
                                              question?.question_type == 1 ? 'checkbox' : 'radio'
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
                                      className="`inline-block border-${borderColor} focus:shadow-outline h-full w-full min-w-40 appearance-none rounded border bg-transparent bg-[url('/assets/images/arrow.png')] bg-[90%] bg-no-repeat px-4 py-2 pr-8 text-md leading-tight focus:outline-none"
                                    >
                                      <option key={'s' + question.id} value="">
                                        Select
                                      </option>
                                      {questionOption[ele]?.map((element) => {
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
                            </div>
                            {question.is_dealbreaker == 1 ? (
                              <div className=" flex items-center">
                                <div className="mb-2 block">
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
                      });
                    })}
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default QuestionSet2;
