import { getCookie } from 'cookies-next';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';

const LookingFor = ({ stage, handleProgress }) => {
  const { genderList } = useSelector((state: any) => {
    return state.common;
  });
  const [initialValueData] = useState<any>(JSON.parse(getCookie('reguser') ?? '{}'));
  const initialValues = {
    looking_for: initialValueData?.looking_for ?? '',
  };
  const validationSchema = Yup.object().shape({
    looking_for: Yup.string().required('Please select your gender!'),
  });

  return (
    <div>
      <h2 className="mb-7 font-raleway text-lg text-gray">Looking for a...</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(data, { setFieldError, resetForm }) => {
          handleProgress(data, setFieldError, resetForm);
        }}
      >
        {({ values }) => (
          <Form id={'form' + stage}>
            <div className="space-y-2">
              {genderList.map((element: any) => {
                return (
                  <div key={element.id} className="relative flex items-center ">
                    <label
                      className={`${
                        values.looking_for == element.id
                          ? 'w-full bg-white px-5 py-4 font-raleway text-lg text-gray'
                          : 'bg-yellow-transperant w-full px-5 py-4 font-raleway text-lg text-gray'
                      }`}
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
              <ErrorMessage name="looking_for" component="div" className="error-message" />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LookingFor;
