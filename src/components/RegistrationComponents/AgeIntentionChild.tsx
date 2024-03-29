import { useState } from 'react';
import { RangeSlider } from 'next-range-slider';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { getCookie } from 'cookies-next';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
const AgeIntentionChild = ({ stage, handleProgress }) => {
  // State to manage the checked status of individual checkboxes
  const { relationShipStatus, hasChildren } = useSelector((state: any) => {
    return state?.common;
  });

  // Function to handle individual checkbox change
  const [initialValueData] = useState<any>(JSON.parse(getCookie('reguser') ?? '{}'));
  const [low, setLow] = useState(initialValueData?.age_range_min ?? 18);
  const [high, setHigh] = useState(initialValueData?.age_range_max ?? 100);
  const initialValues = {
    age_range_min: initialValueData?.age_range_min ?? 18,
    age_range_max: initialValueData?.age_range_max ?? 100,
    dating_intention: initialValueData?.dating_intention ?? '',
    dating_intention_is_dealbreaker: initialValueData?.dating_intention_is_dealbreaker ?? '',
    has_children: initialValueData?.has_children ?? '',
  };
  const validationSchema = Yup.object().shape({
    age_range_min: Yup.string().required('Please select your age range!'),
    age_range_max: Yup.string().required('Please select your age range!'),
    dating_intention: Yup.string().required('Please select your dating intention!'),
    has_children: Yup.string().required('Please select at least one option.'),
  });
  return (
    <>
      <h2 className="mb-5 font-raleway text-md leading-tight  text-gray md:-mx-10  md:text-lg">
        Great! We want to help you find your perfect match - in order to do that, we need to figure
        out exactly what you’re looking for!
      </h2>
      <div className="setup-form-wrap bg-white-transperent h-[60vh] items-start justify-start overflow-auto rounded-lg p-5 md:-mx-10 md:px-10 md:py-10">
        <div className="setup-form">
          <div className="mb-8 block">
            <h3 className="mb-3 text-md font-medium text-gray">
              What age range are you looking to date within?
            </h3>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(data, { setFieldError, resetForm }) => {
                handleProgress(data, setFieldError, resetForm);
              }}
            >
              {({ values, setFieldValue }) => (
                <Form id={'form' + stage}>
                  <div className="mb-5 flex flex-wrap items-center">
                    <div className="range-slider-wrap w-full md:w-1/2">
                      <RangeSlider
                        min={18}
                        max={100}
                        step={0}
                        options={{
                          leftInputProps: {
                            value: low,
                            onChange: (e) => {
                              setLow(Number(e.target.value));
                              setFieldValue('age_range_min', Number(e.target.value));
                            },
                          },
                          rightInputProps: {
                            value: high,
                            onChange: (e) => {
                              setHigh(Number(e.target.value));
                              setFieldValue('age_range_max', Number(e.target.value));
                            },
                          },
                        }}
                      />
                    </div>
                    <h3 className="ml-3 text-md font-medium text-gray">
                      {low} - {high} years old
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
                            className={`mb-2 mr-3 inline-flex cursor-pointer items-center justify-center  rounded-full px-5 py-1 text-sm  font-light md:mr-7 ${
                              values.dating_intention == element.id.toString()
                                ? 'border border-blue bg-blue text-white'
                                : 'text-gray-800 border border-blue bg-transparent  text-black '
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
                      <div className="relative mb-2 inline-flex items-center">
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
                                className={`mr-3 inline-flex cursor-pointer items-center justify-center  rounded-full px-5 py-1 text-sm  font-light md:mr-7 ${
                                  values.has_children == element.id
                                    ? 'border border-blue bg-blue text-white'
                                    : 'text-gray-800 border border-blue bg-transparent  text-black '
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
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgeIntentionChild;
