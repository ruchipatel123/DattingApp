const ProgressBar = ({ totalStages, currentStage }) => {
  const percentage = Math.max(((currentStage - 1) / (totalStages - 1)) * 100, 0);

  return (
    <div className="h-2 w-full bg-blue-100 ">
      <div
        className="h-full "
        style={{
          width: `${percentage}%`,
          background: `linear-gradient(90deg, #145CA8 ${percentage}%, #B5D4F6 100%)`,
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
