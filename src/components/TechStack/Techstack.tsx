import React from "react";
import "./techstack.css";
export default function Techstack(props: any) {
  const divStyle = {
    width: `${props.level*10}%`,
  };

  let level;
  if (props.level <= 3) {
    level = "Beginner";
  } else if (props.level > 3 && props.level < 7) {
    level = "Regular";
  } else if (props.level > 6 && props.level < 9) {
    level = "Advanced";
  } else {
    level = "Expert";
  }
  return (
    <div className="techCont">
      <div className="textCont">
        <p className="nameText">{props.name}</p>
        <p className="levelText">{level}</p>
      </div>
      <div className="sliderCont">
        <input
          type="range"
          value={props.level}
          className="slider"
          step={1}
          min={1}
          max={10}
        />
        <div style={divStyle} className="filled"></div>
      </div>
    </div>
  );
}
