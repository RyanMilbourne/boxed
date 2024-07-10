import React, { useState } from "react";
import "./HeroBoxStyles.scss";
const HeroBox = () => {
  const [radius, setRadius] = useState(20);

  const boxStyle = {
    borderRadius: `${radius}px`,
  };

  const onRadiusChange = (e) => {
    setRadius(e.target.value);
  };

  return (
    <div className="hero-box-container">
      <div className="hero-box" style={boxStyle}></div>
      <div className="hero-box-radius-container">
        <span>border-radius</span>
        <input
          type="range"
          min="0"
          max="200"
          className="hero-radius slider"
          value={radius}
          onChange={onRadiusChange}
        />
        {/* {radius}px */}
        <input
          className="hero-radius"
          type="number"
          min="0"
          max="200"
          value={radius}
          onChange={onRadiusChange}
        />
      </div>
    </div>
  );
};

export default HeroBox;
