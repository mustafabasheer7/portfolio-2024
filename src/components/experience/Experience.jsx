import ExperienceItem from "./ExperienceItem";

const Experience = () => {
  const events = [
    {
      date: "Jan. 2018 – April 2018",
      content: "JR Support Officer ",
      company: "@Immigration, Refugees and Citizenship Canada",
      side: "right",
    },
    {
      date: "Sept. 2018 – Dec. 2018",
      content: "Software Developer ",
      company: "@Ribbon Communications",
      side: "left",
    },
    {
      date: "May 2019 – Dec. 2019",
      content: "Database Developer ",
      company: "@University of Ottawa",
      side: "right",
    },
    {
      date: "May 2020 – Aug. 2020",
      content: "Web Developer ",
      company: "@University of Ottawa",
      side: "left",
    },
    {
      date: "Jan. 2021 – Jan. 2022",
      content: "Web Developer ",
      company: "@freelance",
      side: "right",
    },
    {
      date: "Jan. 2022 – Present",
      content: "Web Developer ",
      company: "@Noterro",
      side: "left",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full py-8">
      <div className="relative">
        <div className="absolute border-l-2 border-gray-200 h-full left-1/2 transform -translate-x-1/2"></div>

        {events.map((event) => (
          <ExperienceItem
            key={event.content}
            side={event.side}
            date={event.date}
            content={event.content}
            company={event.company}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
