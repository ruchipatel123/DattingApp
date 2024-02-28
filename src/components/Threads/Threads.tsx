import ThreadSlider from './ThreadSlider';

const Threads = () => {
  return (
    <>
      <h2 className="mb-5 w-full font-raleway text-lg font-semibold leading-6 tracking-wide text-blue">
        Threads
      </h2>
      <div className="w-full">
        <ThreadSlider />
      </div>
    </>
  );
};

export default Threads;
