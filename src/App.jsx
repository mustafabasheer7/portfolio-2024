import Title from "./components/title/Title";
import Socials from "./components/socials/Socials";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Hr from "./components/hr/Hr";

const App = () => {
  return (
    <div className="w-1/2 mx-auto py-28">
      <section className="home">
        <Title />
        <Socials />
        <About />
      </section>
      <Hr />
      <section className="experience">
        <h4 className="bg-clip-text text-2xl font-extrabold text-gray-100 mt-5">
          Experience
        </h4>
        <Experience />
      </section>
      <Hr />
      <section className="Tech">
        <h4 className="bg-clip-text text-2xl font-extrabold text-gray-100 mt-5">
          Technical Skills
        </h4>
        <Experience />
      </section>
      <Hr />
      <section className="projects">
        <h4 className="bg-clip-text text-2xl font-extrabold text-gray-100 mt-5">
          Projects
        </h4>
        <Experience />
      </section>
    </div>
  );
};

export default App;
