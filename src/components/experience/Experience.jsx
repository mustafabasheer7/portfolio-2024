import { experienceEvents } from "../../constants/constants";
import ExperienceItem from "./ExperienceItem";

const Experience = () => {
  return (
    <div className="flex flex-col items-center w-full py-8">
      <div className="relative">
        <div className="absolute border-l-2 border-gray-200 h-full left-1/2 transform -translate-x-1/2"></div>
        {experienceEvents.map((event) => (
          <ExperienceItem
            key={event.content + event.date}
            side={event.side}
            date={event.date}
            content={event.content}
            company={event.company}
            link={event.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
