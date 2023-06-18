import "./hero.css";
import parastashvili from "../../assets/parastashvili.png";
import expand from "../../assets/expand.png";
import { useState } from "react";
export default function Hero() {
  const [show, setShow] = useState(true);
  const expandHnadler = () => {
    setShow(!show);
    if (document.querySelector(".expand")?.classList.contains("rotated")) {
      document.querySelector(".expand")?.classList.remove("rotated");
      document.querySelector(".heroContInner")?.classList.add("closed");
      document.querySelector(".avatar")?.classList.add("moveDown");
      changeHeight();
    } else {
      document.querySelector(".expand")?.classList.add("rotated");
      document.querySelector(".heroContInner")?.classList.remove("closed");
      document.querySelector(".avatar")?.classList.remove("moveDown");
      changeHeight();
    }
  };
  const [windowHeight, setWindowHeight] = useState<number>(444);
  const [increase, setIncrease] = useState<boolean>(false);
  const changeHeight = () => {
    if (increase) {
      setWindowHeight(windowHeight + 400);
    } else {
      setWindowHeight(windowHeight - 400);
    }
    setIncrease(!increase);
  };
  return (
    <div>
      <div
        style={{
          height: `${windowHeight}px`,
          transition: "height 0.5s ease",
        }}
        className="heroContOuter"
      >
        <div className="heroContInner">
          <div className="content">
            <h2 className="heroText mainHeader">Hi there! 👋</h2>
            <h3 className="heroText intro">
              I'm Levan Parastashvili, a{" "}
              <b className="frontend">Frontend Enginner </b> 💻🌱
            </h3>
            <p className="heroText paragraph">
              I have a deep passion for coding and am always looking for new
              challenges to improve my skills and knowledge. 🤓💪 I believe that
              coding is not just a skill, but a mindset that allows me to solve
              problems and create innovative solutions. My approach to coding is
              to combine creativity and technical skills to deliver exceptional
              results. 🚀💡 Feel free to explore my profile and projects, and
              don't hesitate to get in touch with me for any collaboration or
              discussion.
            </p>
            <a
              target="_blank"
              href="https://doc-14-3c-prod-00-apps-viewer.googleusercontent.com/viewer2/prod-00/pdf/rbn120bqsodec9c8eau1e97ur3kj2f6e/t840p6jjjfnvk5t8kgj2gbjve69okbv5/1687100700000/3/109807439512094463550/APznzaYRa71qPPFLHCIYi5tsEXEzxUFrR2ZKiHytZo07hhvrPYZuuf1krZcz85j5duylx3PmT-_Ax2ITFsVwbCALbGywL4fTcfLH5FRk3dGj8KPjBew_Ukvp1acoG7DmsQRTerbhXXfCeBNUkQZ9p5-ppsJkJTgZFfqvDZJJORAeK06u-Wt6U2AAuHAlyKlI1kDC5-f9o29FsQOOA3EHVHfbpbQE7psGInWi9MPVbTv1s2F1AgUlyPG8cpo_tp0etrfczgfyrFw_Z1PNeA0uSvbXkUH-NSlIyuT4ppPTN0etMbFqBX4VhvxhXAme4OyJyCc4Rpv8pvSj_OXtGuBZ8m2-sKX3G3bducxKnUc278c29LNxsuSmNLBoUoPyTMX_YluZ5ZUfOPqh_di2B6T-isZBhLFoCyuKgQ==?authuser=2&nonce=u5gmnrem1asrs&user=109807439512094463550&hash=jkqi6csn0jtb4jgjm726lav5jgvge29g"
            >
              <button className="heroText connectBTN">
                Let's make great things together! 🤝🌟
              </button>
            </a>
          </div>
          <div className="imgCont">
            <img
              className="avatar"
              src={parastashvili}
              alt="parastashvili photo"
            />
          </div>
        </div>
        <img
          onClick={expandHnadler}
          className="expand rotated"
          src={expand}
          alt="expand arrow"
        />
      </div>
    </div>
  );
}
