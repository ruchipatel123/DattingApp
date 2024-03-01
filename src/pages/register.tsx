import Button from 'components/Button/Button';
import RegistrationHeader from 'components/Header/RegistrationHeader';
import LocationForm from 'components/RegistrationComponents/LocationForm';
import ProgressBar from 'components/ProgressBar/Progressbar';
import Layout from 'layout/Layout';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useAppDispatch } from 'store';
import { getQuestionList } from 'slices/common';
import RegistrationForm from 'components/RegistrationComponents/RegistrationForm';
import GenderSelection from 'components/RegistrationComponents/GenderSelection';
import AccountSetup from 'components/RegistrationComponents/AccountSetup';
import Progress from './progress';
import { FacebookConnect } from 'components/RegistrationComponents/FacebookConnect';
import LookingFor from 'components/RegistrationComponents/LookingFor';
import AccountSetup1 from 'components/RegistrationComponents/AccountSetup1';
import AccountSetup2 from 'components/RegistrationComponents/AccountSetup2';
import AccountSetup3 from 'components/RegistrationComponents/AccountSetup3';

const Register = () => {
  const router = useRouter();
  const formRef = useRef();
  const [stage, setStage] = useState(0);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getQuestionList({}))
      .unwrap()
      .then((resp) => {
        console.log(resp);
      });
  }, []);
  return (
    <Layout meta={{ title: 'Register' }}>
      <div
        className="semitransperent-header min-h-screen"
        style={{ background: 'linear-gradient(69deg, #FDEAB6 0%, #F9DB6D 89.75%)' }}
      >
        {stage !== 5 ? (
          <>
            <RegistrationHeader />
            <div className="mt-5 ">
              <ProgressBar progress={2} />
            </div>
            <div className="btn-wrap container left-0 right-0 top-0 mt-4 flex space-x-2 md:absolute md:justify-end md:space-x-10">
              <Button
                onClick={() => {
                  if (stage == 0) {
                    router.push('/');
                  } else if (stage <= 9) {
                    setStage(stage - 1);
                  } else {
                    setStage(9);
                  }
                }}
                type="primary"
                size="lg"
              >
                Go Back
              </Button>
              <Button
                onClick={() => {
                  if (stage < 9) {
                    setStage(stage + 1);
                  } else {
                    setStage(9);
                  }
                }}
                type="primary"
                size="lg"
              >
                Continue
              </Button>
            </div>{' '}
          </>
        ) : (
          <></>
        )}

        {[0, 1, 2, 3, 4, 6, 7, 8, 9].indexOf(stage) >= 0 ? (
          <div className="container flex min-h-[70vh] flex-wrap items-center justify-center pt-14">
            <div className="w-full max-w-[840px] text-gray-400">
              {stage == 0 && (
                <RegistrationForm stage={stage} setStage={setStage} formRef={formRef} />
              )}
              {stage == 1 && <FacebookConnect stage={stage} setStage={setStage} />}
              {stage == 2 && <LocationForm />}
              {stage == 3 && <GenderSelection />}
              {stage == 4 && <LookingFor />}
              {stage == 6 && <AccountSetup />}
              {stage == 7 && <AccountSetup1 />}
              {stage == 8 && <AccountSetup2 />}
              {stage == 9 && <AccountSetup3 />}
            </div>
          </div>
        ) : (
          stage == 5 && <Progress setStage={setStage} stage={stage} />
        )}
      </div>
    </Layout>
  );
};

export default Register;
