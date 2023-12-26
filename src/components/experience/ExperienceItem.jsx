const ExperienceItem = ({ content, side, date, company, link }) => {
  const handleClick = () => {
    if (link) {
      window.open(link, "_blank");
    }
  };

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
        <div className="text-xs md:text-lg font-bold text-gray-400">{date}</div>
        <h3 className="text-xs md:text-lg font-semibold text-gray-400">
          {content}
          <span
            className={`bg-gradient-to-r from-purple-500 to-pink-600 inline-block text-transparent bg-clip-text text-xs md:text-sm ${
              link
                ? "cursor-pointer transition duration-200 ease-in-out hover:scale-105"
                : ""
            } `}
            onClick={handleClick}
          >
            {company}
          </span>
        </h3>
      </div>
      <div className="w-0 flex-grow relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border-2 border-gray-200 rounded-full w-2 md:w-3 h-2 md:h-3"></div>
      </div>
      <div className="w-1/2"></div>
    </div>
  );
};

export default ExperienceItem;
