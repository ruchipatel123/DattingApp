import LandingHeader from 'components/Header/LandingHeader';
import Banner from '../components/Banner/Banner';
import ImageContent from '../components/ImageContentBlock/ImageContent';

const LandingPage = () => {
  return (
    <>
      <div className="bg-[url('/assets/images/network-background.png')] bg-contain bg-center">
        <LandingHeader />
        <Banner />
        <ImageContent />
      </div>
    </>
  );
};

export default LandingPage;
