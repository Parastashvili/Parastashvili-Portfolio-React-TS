import React from "react";
import "./projects.css";
export default function Projects(props: any) {
  return (
    <div className="projectOuter">
      <div className="projectInner">
        <img className="projectIMG" src={props.projectIMG} alt="Project Name" />
        <h1 className="projectName">{props.projectName}</h1>
        <div className="divider"></div>
      </div>
      <div>
        <p className="projectDSC">{props.projectDSC}</p>
        <div className="buttonCont">
          <a href={props.projectLink} target="_blank">
            <button className="viewCodeBTN">Code</button>
          </a>
          <a href={props.projectLink} target="_blank">
            <button className="viewCodeBTN">Live Site</button>
          </a>
        </div>
      </div>
    </div>
  );
}
