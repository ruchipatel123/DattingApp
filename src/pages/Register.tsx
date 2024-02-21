import AccountSetup from 'components/AccountSetup/AccountSetup';
import Button from 'components/Button/Button';
import GenderSelection from 'components/GenderSelection/GenderSelection';
import RegistrationHeader from 'components/Header/RegistrationHeader';
import LinkAccount from 'components/LinkAccounts/LinkAccount';
import LocationForm from 'components/LocationForm/LocationForm';
import ProgressBar from 'components/ProgressBar/Progressbar';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';

const Register = () => {
  return (
    <div
      className="semitransperent-header min-h-screen"
      style={{ background: 'linear-gradient(69deg, #FDEAB6 0%, #F9DB6D 89.75%)' }}
    >
      <RegistrationHeader />

      <div className="mt-5 ">
        <ProgressBar progress={2} />
      </div>

      <div className="btn-wrap container left-0 right-0 top-0 mt-4 flex space-x-2 md:absolute md:justify-end md:space-x-10">
        <Button onClick={''} type="primary" size="lg">
          Go Back
        </Button>
        <Button onClick={''} type="primary" size="lg">
          Continue
        </Button>
      </div>

      <div className="container flex min-h-[70vh] flex-wrap items-center justify-center pt-14">
        <div className="w-full max-w-[840px] text-gray-400">
          {/* <RegistrationForm/> */}
          {/* <LinkAccount/> */}
          {/* <GenderSelection/> */}
          {/* <LocationForm/> */}
          <AccountSetup />
        </div>
      </div>
    </div>
  );
};

export default Register;
