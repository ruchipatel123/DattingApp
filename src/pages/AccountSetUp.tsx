import Button from 'components/Button/Button';
import RegistrationHeader from 'components/Header/RegistrationHeader';
import ImageUpload from 'components/ImageUpload/ImageUpload';
import ProgressBar from 'components/ProgressBar/Progressbar';

const AccountSetUp = () => {
  return (
    <div
      className="semitransperent-header min-h-screen"
      style={{ background: 'linear-gradient(69deg, #FDEAB6 0%, #F9DB6D 89.75%)' }}
    >
      <RegistrationHeader />

      <div className="mt-5 ">
        <ProgressBar progress={90} />
      </div>

      <div className="btn-wrap container left-0 right-0 top-0 mt-4 flex space-x-2 md:absolute md:justify-end md:space-x-10">
        <Button onClick={''} type="primary" size="lg">
          Go Back
        </Button>
        <Button onClick={''} type="primary" size="lg">
          Continue
        </Button>
      </div>

      <div className="container  flex min-h-[70vh] flex-wrap items-center justify-center pt-14">
        <div className="w-full text-gray-400">
          <h2 className="mb-10 font-raleway text-md font-normal leading-tight text-gray md:text-lg">
            Please add some pictures to your profile (at least 2)
          </h2>
          <div className="-mx-5 flex flex-wrap">
            <div className="w-1/5 px-5">
              <ImageUpload />
            </div>
            <div className="w-1/5 px-5">
              <ImageUpload />
            </div>
            <div className="w-1/5 px-5">
              <ImageUpload />
            </div>
            <div className="w-1/5 px-5">
              <ImageUpload />
            </div>
            <div className="w-1/5 px-5">
              <ImageUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSetUp;
