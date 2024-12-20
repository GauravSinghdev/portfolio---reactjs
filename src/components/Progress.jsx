
const Progress = ({active}) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      <div
        className="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500"
        style={{ width: "45%" }}
      ></div>
    </div>
  );
};

export default Progress;
