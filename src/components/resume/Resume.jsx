import { faCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Resume = () => {
  const downloadResume = () => {};

  return (
    <div className="mb-5 text-center md:text-left">
      <a
        href={"/resume/MustafaBasheerResume.pdf"}
        download="MustafaBasheerResume.pdf"
      >
        <div
          className={`bg-gradient-to-r from-purple-500 to-pink-600 inline-block text-transparent bg-clip-text cursor-pointer transition duration-200 ease-in-out hover:scale-105 text-lg font-bold items-center`}
          onClick={downloadResume}
        >
          <FontAwesomeIcon
            icon={faCircleDown}
            size="sm"
            className="text-white mr-2"
          />
          Download Resume
        </div>
      </a>
    </div>
  );
};

export default Resume;
