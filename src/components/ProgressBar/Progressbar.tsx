const ProgressBar = ({ progress }) => {
  return (
    <div className="h-2 w-full bg-blue-100 ">
      <div
        className="h-full "
        style={{
          width: `${progress}%`,
          background: `linear-gradient(90deg, #145CA8 ${progress}%, #B5D4F6 100%)`,
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
