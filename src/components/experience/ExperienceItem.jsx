const ExperienceItem = ({ content, side, date, company }) => {
  return (
    <div
      className={`flex ${
        side === "right" ? "flex-row-reverse" : ""
      } items-center w-full my-8`}
    >
      <div
        className={`w-1/2 px-4 py-2 ${
          side === "right" ? "text-left" : "text-right"
        }`}
      >
        <div className="text-lg font-bold text-gray-400">{date}</div>
        <h3 className="text-lg font-semibold text-gray-400">
          {content}
          <span className="bg-gradient-to-r from-purple-500 to-pink-600 inline-block text-transparent bg-clip-text text-sm cursor-pointer">
            {company}
          </span>
        </h3>
      </div>
      <div className="w-0 flex-grow relative">
        <div className="absolute -top-[30px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border-2 border-gray-200 rounded-full w-3 h-3"></div>
      </div>
      <div className="w-1/2"></div>
    </div>
  );
};

export default ExperienceItem;
