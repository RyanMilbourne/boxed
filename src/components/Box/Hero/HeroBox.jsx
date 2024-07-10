import React, { useState } from "react";
import "./HeroBoxStyles.scss";
import RoundedCornerIcon from "@mui/icons-material/RoundedCorner";
const HeroBox = () => {
  const [radius, setRadius] = useState(20);
  const [aspectRatio, setAspectRatio] = useState("1/1");

  const boxStyle = {
    borderRadius: `${radius}px`,
    aspectRatio: aspectRatio,
  };

  const onRadiusChange = (e) => {
    setRadius(e.target.value);
  };

  const onRatioChange = (e) => {
    setAspectRatio(e.target.textContent);
  };

  return (
    <div className="hero-box-container">
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
            onClick={onRatioChange}
          >
            {ratio}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroBox;
