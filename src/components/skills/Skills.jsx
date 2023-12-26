import { skillsItems } from "../../constants/constants";

const Skills = () => {
  return (
    <div className="mb-5 w-full md:w-2/3 mx-auto">
      {skillsItems.map((item) => (
        <div key={item.title}>
          <h3 className="text-center text-xl font-extrabold text-gray-100 my-5">
            {item.title}
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-4 grid-flow-row gap-2 items-stretch text-center">
            {item.items.map((item) => (
              <div
                key={item}
                className="text-sm bg-white transition duration-200 ease-in-out bg-opacity-10 hover:bg-opacity-20 rounded-xl p-2 flex items-center justify-center font-semibold"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
