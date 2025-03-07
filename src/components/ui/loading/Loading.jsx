import "./Loading.css";

const Loading = () => {
  return (
    <div className="w-full h-full min-h-[50vh] flex items-center justify-center bg-gray-100 rounded-2xl">
      <span className="loader-component"></span>
    </div>
  );
};

export default Loading;
