import Button from 'components/Button/Button';
import RegistrationHeader from 'components/Header/RegistrationHeader';
import LocationForm from 'components/RegistrationComponents/LocationForm';
import ProgressBar from 'components/ProgressBar/Progressbar';
import Layout from 'layout/Layout';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useAppDispatch } from 'store';
import { getQuestionList } from 'slices/common';
import RegistrationForm from 'components/RegistrationComponents/RegistrationForm';
import GenderSelection from 'components/RegistrationComponents/GenderSelection';
import Progress from './progress';
import { FacebookConnect } from 'components/RegistrationComponents/FacebookConnect';
import LookingFor from 'components/RegistrationComponents/LookingFor';
import QuestionSet1 from 'components/RegistrationComponents/QuestionSet1';
import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import AgeIntentionChild from 'components/RegistrationComponents/AgeIntentionChild';
import QuestionSet2 from 'components/RegistrationComponents/QuestionSet2';
import QuestionSet3 from 'components/RegistrationComponents/QuestionSet3';
import ImageAndBio from 'components/RegistrationComponents/ImageAndBio';
import { checkEmail, register } from 'slices/auth';

const Register = () => {
  const router = useRouter();
  const [questionList, setQuestionList] = useState<any>({});
  const [stage, setStage] = useState(0);
  const [showComponent, setShowComponent] = useState(0);
  const totalStages = 11;
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const regUser = getCookie('reguser') ?? '{}';
    if (!JSON.parse(regUser).user_type)
      setCookie('reguser', { ...JSON.parse(regUser), ...{ user_type: 2 } });
    setStage(parseInt(getCookie('stage') ?? '0'));
    dispatch(getQuestionList({}))
      .unwrap()
      .then((resp) => {
        setQuestionList(resp.profileQuestions);
        setShowComponent(1);
      });
  }, []);

  const handleProgress = (formValue, setFieldError, resetForm) => {
    if (stage < 11) {
      if (stage == 0) {
        setLoading(true);
        dispatch(checkEmail({ email: formValue?.email }))
          .unwrap()
          .then((data) => {
            if (data) setStage(stage + 1);
            setLoading(false);
          })
          .catch((e) => {
            if (e?.response?.data?.errors) {
              Object.keys(e?.response?.data?.errors).map((element) => {
                setFieldError(element, e?.response?.data?.errors[element][0] ?? '');
              });
              setLoading(false);
            }
          });
      } else {
        setStage(stage + 1);
        setCookie('stage', stage + 1);
      }
    } else {
      setStage(11);
      setCookie('stage', 11);
    }
    const regUser = getCookie('reguser') ?? '{}';
    setCookie('reguser', { ...JSON.parse(regUser), ...formValue });
    if (stage == 11) {
      setLoading(true);
      dispatch(register({ ...JSON.parse(regUser), ...formValue }))
        .unwrap()
        .then(() => {
          resetForm();
          deleteCookie('reguser');
          deleteCookie('stage');
          setLoading(false);
          router.push('/');
        })
        .catch((e) => {
          if (e?.response?.data?.errors) {
            Object.keys(e?.response?.data?.errors).map((element) => {
              setFieldError(element, e?.response?.data?.errors[element][0] ?? '');
            });
            setLoading(false);
          }
        });
    }
  };
  return (
    <Layout meta={{ title: 'Register' }}>
      {showComponent ? (
        <div
          className="semitransperent-header min-h-screen"
          style={{ background: 'linear-gradient(69deg, #FDEAB6 0%, #F9DB6D 89.75%)' }}
        >
          {stage !== 5 && stage !== 8 ? (
            <>
              <RegistrationHeader />
              <div className="mt-5 ">
                <ProgressBar totalStages={totalStages} currentStage={stage} />
              </div>
              <div className="btn-wrap container left-0 right-0 top-0 mt-4 flex space-x-2 md:absolute md:justify-end md:space-x-10">
                <Button
                  onClick={() => {
                    if (stage == 0) {
                      router.push('/');
                    } else if (stage <= 10) {
                      setStage(stage - 1);
                      setCookie('stage', stage - 1);
                    } else {
                      setStage(10);
                      setCookie('stage', 10);
                    }
                  }}
                  disabled={loading}
                  type="primary"
                  size="lg"
                >
                  Go Back
                </Button>
                {[0, 2, 3, 4, 6, 7, 8, 9, 10, 11].indexOf(stage) >= 0 ? (
                  <button
                    form={'form' + stage}
                    type="submit"
                    disabled={loading}
                    className="btn primary lg rounded-full border border-blue px-6 py-2 font-raleway text-md leading-none text-blue hover:bg-blue hover:text-white md:px-10"
                  >
                    Continue
                  </button>
                ) : (
                  <Button
                    onClick={() => {
                      if (stage < 11) {
                        setStage(stage + 1);
                      } else {
                        setStage(11);
                      }
                    }}
                    type="primary"
                    size="lg"
                    disabled={loading}
                  >
                    Continue
                  </Button>
                )}
              </div>{' '}
            </>
          ) : (
            <></>
          )}

          {[0, 1, 2, 3, 4, 6, 7, 9, 10, 11].indexOf(stage) >= 0 ? (
            <div className="container flex min-h-[70vh] flex-wrap items-center justify-center pb-10 pt-14">
              <div
                className={
                  stage == 11 ? 'w-full text-gray-400' : 'w-full max-w-[880px] text-gray-400'
                }
              >
                {stage == 0 && <RegistrationForm stage={stage} handleProgress={handleProgress} />}
                {stage == 1 && <FacebookConnect stage={stage} setStage={setStage} />}
                {stage == 2 && <LocationForm stage={stage} handleProgress={handleProgress} />}
                {stage == 3 && <GenderSelection stage={stage} handleProgress={handleProgress} />}
                {stage == 4 && <LookingFor stage={stage} handleProgress={handleProgress} />}
                {stage == 6 && <AgeIntentionChild stage={stage} handleProgress={handleProgress} />}
                {stage == 7 && (
                  <QuestionSet1
                    stage={stage}
                    questionList={questionList}
                    handleProgress={handleProgress}
                  />
                )}
                {stage == 9 && (
                  <QuestionSet2
                    stage={stage}
                    questionList={questionList}
                    handleProgress={handleProgress}
                  />
                )}
                {stage == 10 && (
                  <QuestionSet3
                    stage={stage}
                    questionList={questionList}
                    handleProgress={handleProgress}
                  />
                )}
                {stage == 11 && <ImageAndBio stage={stage} handleProgress={handleProgress} />}
              </div>
            </div>
          ) : (
            <>
              {' '}
              {stage == 5 && <Progress setStage={setStage} stage={stage} />}
              {stage == 8 && <Progress setStage={setStage} stage={stage} />}
            </>
          )}
        </div>
      ) : (
        <></>
      )}
    </Layout>
  );
};

export default Register;
