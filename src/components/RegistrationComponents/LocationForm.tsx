import Datepicker from 'components/DatePicker/Datepicker';
import { getCookie } from 'cookies-next';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

const LocationForm = ({ stage, handleProgress }) => {
  const [initialValueData] = useState<any>(JSON.parse(getCookie('reguser') ?? '{}'));
  const options = [
    { value: '', label: 'Select miles' },
    { value: '10', label: '10' },
    { value: '20', label: '20' },
    { value: '30', label: '30' },
  ];

  const [birthdate, setBirthdate] = useState(initialValueData?.birthdate ?? null);
  const validationSchema = Yup.object().shape({
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
    birthdate: initialValueData?.birthdate ?? '',
  };

  const handleDateChange = (date) => {
    setBirthdate(date);
  };
  return (
    <>
      <h2 className="mb-7 font-raleway  text-md  text-gray md:text-lg">I live in</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(data, { setFieldError, resetForm }) => {
          handleProgress(data, setFieldError, resetForm);
        }}
      >
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
            <ErrorMessage name="zipcode" component="div" className="error-message" />
          </div>
          <div className="mb-5 w-full md:w-[50%] md:px-5">
            <h2 className="mb-3 font-raleway  text-md  text-gray md:text-lg">
              I’m looking for someone within
            </h2>
            <div className="h-[60px]">
              <Field
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
              </Field>
              <span className="ml-2 align-bottom font-raleway   text-md  text-gray md:text-lg">
                miles
              </span>
              <ErrorMessage name="radius_miles" component="div" className="error-message" />
            </div>
          </div>
          <div className="mb-5 w-full md:w-[50%] md:px-5">
            <h2 className="mb-3 font-raleway  text-md text-gray md:text-lg">My Birthday Is:</h2>
            <Datepicker selectedDate={birthdate} onChange={handleDateChange} />
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default LocationForm;
