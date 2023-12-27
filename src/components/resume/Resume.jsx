import { faCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Resume = () => {
  return (
    <div className="mb-5 text-center md:text-left cursor-pointer">
      <div className="h-[48px] w-[210px] rounded-md bg-gradient-to-r from-purple-500 to-pink-600 p-0.5 mx-auto md:mx-0">
        <div className="h-full w-full bg-[#171736] hover:bg-gradient-to-r md:from-purple-500 md:to-pink-600 hover:text-[#171736] flex items-center justify-center">
          <a
            href={"/resume/MustafaBasheerResume.pdf"}
            download="MustafaBasheerResume.pdf"
          >
            <div
              className={`text-lg font-bold flex items-center justify-center gap-2`}
            >
              <FontAwesomeIcon icon={faCircleDown} size="sm" />
              Download Resume
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
