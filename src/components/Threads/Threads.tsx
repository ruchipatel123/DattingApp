import ThreadSlider from './ThreadSlider';
import ThreadSliderMatchMaker from './ThreadSliderMatchMaker';

const Threads = () => {
  return (
    <>
      <h2 className="mb-5 w-full font-raleway text-lg font-semibold leading-6 tracking-wide text-blue">
        Threads
      </h2>
      <div className="w-full">
        <ThreadSlider />
        {/* <ThreadSliderMatchMaker /> */}
      </div>
    </>
  );
};

export default Threads;
