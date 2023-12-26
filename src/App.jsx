import Title from "./components/title/Title";
import Socials from "./components/socials/Socials";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Hr from "./components/hr/Hr";
import Skills from "./components/skills/Skills";
import Resume from "./components/resume/Resume";

const App = () => {
  return (
    <div className="w-full md:w-1/2 mx-auto py-20 md:py-28 px-8 md:px-0">
      <section className="home">
        <Title />
        <Socials />
        <Resume />
        <About />
      </section>
      <Hr />
      <section className="experience">
        <h4 className="text-2xl font-extrabold text-gray-100 mt-5 text-center md:text-left">
          Experience
        </h4>
        <Experience />
      </section>
      <Hr />
      <section className="Tech">
        <h4 className="text-2xl font-extrabold text-gray-100 mt-5 text-center md:text-left">
          Technical Skills
        </h4>
        <Skills />
      </section>
    </div>
  );
};

export default App;
