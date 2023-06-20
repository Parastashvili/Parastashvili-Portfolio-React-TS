import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Techstack from "./components/TechStack/Techstack";
import Skills from "./components/Skills/Skills";
import scroll from "../src/assets/scroll-up.png";
import { useState } from "react";
import Slider from "./components/Slider/Slider";
import Experience from "./components/Experience/Experience";
import data from "./topData";
function App() {
  const [scroller, setScroller] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 500) {
      setScroller(true);
    } else {
      setScroller(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", handleScroll);
  return (
    <div className="mainContainer">
      <Header />
      <Hero />
      <h3 id="projects" className="sectionHeader">
        Latest Projects
      </h3>
      <div className="projectsContainer">
        {data.map((item) => (
          <Projects
            key={item.id}
            projectName={item.name}
            projectIMG={item.img}
            projectDSC={item.text}
            projectLink={item.githubLink}
            liveLink={item.liveLink}
          />
        ))}
      </div>
      <h3 className="sectionHeader">All Projects</h3>
      <div className="sliderCont">
        <Slider />
      </div>
      <h3 id="tech" className="sectionHeader">
        Tech Stack
      </h3>
      <Techstack level={8} name="Html5" />
      <Techstack level={7} name="CSS3 / SASS / SCSS" />
      <Techstack level={5} name="Bootstrap & Tailwind" />
      <Techstack level={7} name="Javascript (Vanilla)" />
      <Techstack level={6} name="Typescript" />
      <Techstack level={7} name="React" />
      <Techstack level={6} name="jQuerry" />
      <Techstack level={8} name="FlexBox Layout" />
      <Techstack level={6} name="Grid Layout" />
      <Techstack level={7} name="Git / Github" />
      <Techstack level={5} name="Node.js" />
      <Techstack level={5} name="Firebase" />
      <h3 id="skills" className="sectionHeader">
        Personal Skills and Abilities
      </h3>
      <Skills />
      <h3 id="experience" className="sectionHeader">
        Experience
      </h3>
      <Experience />
      <h3 id="about" className="sectionHeader">
        About Me
      </h3>
      {scroller ? (
        <img
          onClick={scrollToTop}
          className="scrollUP"
          src={scroll}
          alt="scroll up icon"
        />
      ) : null}
    </div>
  );
}

export default App;
