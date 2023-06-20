import data from "../../data.js";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";
import "./slider.css";

function Slider() {
  return (
    <div className="container2">
      <div className="cards">
        <Splide
          aria-label="Testimonials"
          options={{
            autoHeight: true,
            autoWidth: true,
            perPage: 3,
            autoplay: true,
            padding: "5rem",
            fixedWidth: "300px",
            focus: "center",
            isNavigation: true,
            type: "loop",
            drag: "free",
            autoScroll: {
              speed: 22,
            },
          }}
        >
          {data.map((item) => (
            <SplideSlide key={item.id}>
              <div className="projectOuterSlider">
                <div className="projectInner">
                  <img
                    className="projectIMG"
                    src={item.img}
                    alt="Project Name"
                  />
                  <h1 className="projectName">{item.name}</h1>
                  <div className="divider"></div>
                </div>
                <div>
                  <p className="projectDSC">{item.text}</p>
                  <div className="buttonCont">
                    <a href={item.githubLink} target="_blank">
                      <button className="viewCodeBTN">Code</button>
                    </a>
                    <a href={item.liveLink} target="_blank">
                      <button className="viewCodeBTN">Live Site</button>
                    </a>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
}

export default Slider;
