import React from "react";
import "./about.css";

export default function About() {
  return (
    <div className="experienceCont">
      <div className="contInner">
        <div className="outerDiv">
          <p className="years">Feb</p>
          <div className="circle"></div>
        </div>
        <div className="outerDiv">
          <p className="years">Mar</p>
          <div className="circle"></div>
        </div>
        <div className="outerDiv">
          <p className="years">Apr</p>
          <div className="circle"></div>
        </div>
        <div className="outerDiv">
          <p className="years">May</p>
          <div className="circle"></div>
        </div>
        <div className="outerDiv">
          <p className="years">Jun</p>
          <div className="circle"></div>
        </div>
      </div>
      <div className="contInnerSecond">
        <div className="outerDiv">
          <p className="story">
            I transitioned from e-commerce category manager to front-end
            engineer, following my passion for development.
          </p>
        </div>
        <div className="outerDiv">
          <p className="story">
            In my first month as a front-end engineer, I built multiple simple
            websites using HTML and CSS, honing my skills in page structure,
            styles, and responsive design.
          </p>
        </div>
        <div className="outerDiv">
          <p className="story">
            I mastered JavaScript through daily practice and exercises while
            also becoming proficient in Git and GitHub for collaborative
            development.
          </p>
        </div>
        <div className="outerDiv">
          <p className="story">
            Mastered JavaScript, embraced CSS frameworks (Tailwind, Bootstrap),
            built single-page apps, and created engaging games like Memory and
            Tic Tac Toe, showcasing technical skills and creativity.
          </p>
        </div>
        <div className="outerDiv">
          <p className="story">
            Mastered JavaScript and swiftly adopted React, followed by learning
            TypeScript. Currently, I focus on daily practice, honing my skills
            in React and TypeScript while building my portfolio.
          </p>
        </div>
      </div>
    </div>
  );
}
