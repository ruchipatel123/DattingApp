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
import AccountSetup from 'components/RegistrationComponents/AccountSetup';
import Progress from './progress';

const Register = () => {
  const router = useRouter();
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
        {stage !== 3 ? (
          <>
            <RegistrationHeader />
            <div className="mt-5 ">
              <ProgressBar progress={2} />
            </div>
            <div className="btn-wrap container left-0 right-0 top-0 mt-4 flex space-x-2 md:absolute md:justify-end md:space-x-10">
              <Button
                onClick={() => {
                  if (stage == 0) router.push('/');
                  else if (stage <= 4) {
                    setStage(stage - 1);
                  } else {
                    setStage(4);
                  }
                }}
                type="primary"
                size="lg"
              >
                Go Back
              </Button>
              <Button
                onClick={() => {
                  if (stage < 4) {
                    setStage(stage + 1);
                  } else {
                    setStage(4);
                  }
                  // setStage(stage + 1);
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

        {[0, 1, 2, 4].indexOf(stage) >= 0 ? (
          <div className="container flex min-h-[70vh] flex-wrap items-center justify-center pt-14">
            <div className="w-full max-w-[840px] text-gray-400">
              {stage == 0 && <RegistrationForm stage={stage} setStage={setStage} />}
              {stage == 1 && <GenderSelection />}
              {stage == 2 && <LocationForm />}
              {stage == 4 && <AccountSetup />}
            </div>
          </div>
        ) : (
          stage == 3 && <Progress setStage={setStage} stage={stage} />
        )}
      </div>
    </Layout>
  );
};

export default Register;
