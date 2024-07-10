import React, { useContext, useState } from "react";
import "./HeroBoxStyles.scss";
import RoundedCornerIcon from "@mui/icons-material/RoundedCorner";
import { ControlsContext } from "../../../hooks/ControlsContext";
const HeroBox = () => {
  const [radius, setRadius] = useState(20);
  const [aspectRatio, setAspectRatio] = useState("1/1");
  const [boxColor, setBoxColor] = useState("#42ff8b");
  const [backgroundColor, setBackgroundColor] = useState("#f5f5f5");

  const { color, xPosition, yPosition, blurValue, spreadValue } =
    useContext(ControlsContext);

  const boxStyle = {
    borderRadius: `${radius}px`,
    aspectRatio: aspectRatio,
    backgroundColor: boxColor,
    boxShadow: `${xPosition}px ${yPosition}px ${blurValue}px ${spreadValue}px ${color}`,
  };

  const onRadiusChange = (e) => {
    setRadius(e.target.value);
  };

  const onRatioChange = (e) => {
    setAspectRatio(e.target.textContent);
  };

  const handleBoxColor = (e) => {
    setBoxColor(e.target.value);
  };

  const handleBackgroundColor = (e) => {
    setBackgroundColor(e.target.value);
  };

  return (
    <div
      className="hero-box-container"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="hero-box" style={boxStyle}></div>
      <div className="hero-box-radius-container">
        <RoundedCornerIcon />
        <span>border-radius</span>
        <input
          type="range"
          min="0"
          max="200"
          className="hero-radius slider"
          value={radius}
          onChange={onRadiusChange}
        />
        <input
          className="hero-radius"
          type="number"
          min="0"
          max="200"
          value={radius}
          onChange={onRadiusChange}
        />
      </div>
      <div className="hero-box-aspect-ratio-container">
        {["1/1", "3/4", "4/3", "4/5", "5/4", "16/9"].map((ratio) => (
          <div
            key={ratio}
            className={`aspect-ratio ${aspectRatio === ratio ? "active" : ""}`}
            style={{ border: `1px solid ${backgroundColor}` }}
            onClick={onRatioChange}
          >
            {ratio}
          </div>
        ))}
      </div>
      <div className="hero-box-color-container">
        <div
          className="color-picker-display"
          style={{ backgroundColor: boxColor }}
        >
          <input
            className="color-picker"
            type="color"
            value={boxColor}
            onChange={handleBoxColor}
          />
        </div>
        {boxColor}
        <div
          className="color-picker-display"
          style={{
            backgroundColor: backgroundColor,
            border: "1px solid black",
          }}
        >
          <input
            className="color-picker"
            type="color"
            value={backgroundColor}
            onChange={handleBackgroundColor}
          />
        </div>
        {backgroundColor}
      </div>
    </div>
  );
};

export default HeroBox;
