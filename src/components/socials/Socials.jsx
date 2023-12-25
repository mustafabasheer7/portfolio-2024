import Social from "./Social";
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Socials = () => {
  return (
    <div className="mb-5">
      <div className="flex items-center gap-x-5 text-3xl bg-white bg-opacity-10 w-min rounded-xl p-4">
        <Social link="https://github.com/mustafabasheer7">
          <FontAwesomeIcon icon={faSquareGithub} size="lg" />
        </Social>
        <Social link="https://www.linkedin.com/in/mustafa-basheer-31430012b/">
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </Social>
        <Social link="mailto:mustafa.basheer55@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
        </Social>
      </div>
    </div>
  );
};

export default Socials;
