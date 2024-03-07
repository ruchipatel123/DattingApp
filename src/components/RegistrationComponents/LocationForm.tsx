import Datepicker from 'components/DatePicker/Datepicker';
import { getCookie } from 'cookies-next';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { RangeSlider } from 'next-range-slider';
import { useState } from 'react';
import * as Yup from 'yup';

const LocationForm = ({ stage, handleProgress }) => {
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(100);
  const [initialValueData] = useState<any>(JSON.parse(getCookie('reguser') ?? '{}'));
  const validationSchema = Yup.object().shape({
    dob: Yup.string().required('Please enter birthdate!'),
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
  });

  const initialValues = {
    city: initialValueData?.city ?? '',
    state: initialValueData?.state ?? '',
    zipcode: initialValueData?.zipcode ?? '',
    dob: initialValueData?.dob ?? '',
    radius_miles: initialValueData?.radius_miles ?? '',
    latitude: initialValueData?.latitude ?? '118.2426',
    longitude: initialValueData?.longitude ?? '34.0549',
  };

  return (
    <>
      <h2 className="mb-3 font-raleway  text-md  text-gray md:text-lg">I live in</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(data, { setFieldError, resetForm }) => {
          handleProgress(data, setFieldError, resetForm);
        }}
      >
        {({ values, setFieldValue }) => (
          <Form className="flex flex-wrap md:-mx-5" id={'form' + stage}>
            <div className="mb-8 w-full md:w-[50%] md:px-5">
              <label className="block  w-full text-md font-normal">City</label>
              <Field
                name="city"
                type="text"
                className="m-auto h-[60px] w-full max-w-full rounded-lg border border-gray-400 bg-transparent px-4 py-2 text-md focus:border-black focus:outline-none"
              />
              <ErrorMessage name="city" component="div" className="error-message" />
            </div>
            <div className="mb-8 w-full md:w-[25%] md:px-5">
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
            <div className="mb-5 w-full md:w-[50%] md:px-5">
              <h2 className="mb-3 font-raleway  text-md  text-gray md:text-lg">
                I’m looking for someone within
              </h2>
              <div className="h-[60px]">
                {/* <Field
                  type="select"
                  as="select"
                  name="radius_miles"
                  className="border-${borderColor} focus:shadow-outline small inline-block h-full w-auto min-w-40 appearance-none rounded border bg-transparent bg-[url('/assets/images/arrow.png')] bg-[90%] bg-no-repeat px-4 py-2 pr-8 text-md leading-tight focus:outline-none"
                >
                  {options.map((element) => {
                    return (
                      <option key={'l' + element.value} value={element.value}>
                        {element.label}
                      </option>
                    );
                  })}
                </Field> */}
                <div className="w-full">
                  <div className="range-slider-wrap range_slider_single inline-block w-3/5">
                    <RangeSlider
                      min={10}
                      max={100}
                      step={0}
                      options={{
                        leftInputProps: {
                          value: 10,
                          onChange: () => setLow(0),
                        },
                        rightInputProps: {
                          value: initialValueData?.radius_miles ?? high,
                          onChange: (e) => {
                            setFieldValue('radius_miles', Number(e.target.value));
                            setHigh(Number(e.target.value));
                          },
                        },
                      }}
                    />
                  </div>
                  <span className="ml-2 align-bottom font-raleway   text-md  text-gray md:text-lg">
                    {initialValueData?.radius_miles ?? high} miles
                  </span>
                </div>
                <ErrorMessage name="radius_miles" component="div" className="error-message" />
              </div>
            </div>
            <div className="mb-5 w-full md:w-[50%] md:px-5">
              <h2 className="mb-3 font-raleway  text-md text-gray md:text-lg">My Birthday Is:</h2>
              <Datepicker
                selectedDate={values?.dob ?? ''}
                onChange={(data) => {
                  setFieldValue('dob', data);
                }}
              />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LocationForm;
