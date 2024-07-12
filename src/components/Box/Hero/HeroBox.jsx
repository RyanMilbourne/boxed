import React, { useContext, useEffect, useState } from "react";
import "./HeroBoxStyles.scss";
import RoundedCornerIcon from "@mui/icons-material/RoundedCorner";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import { ControlsContext } from "../../../hooks/ControlsContext";

const HeroBox = () => {
  const [radius, setRadius] = useState(30);
  const [aspectRatio, setAspectRatio] = useState("1/1");
  const [boxColor, setBoxColor] = useState("#42ff8b");
  const [scale, setScale] = useState(1);

  const {
    boxShadows,
    backgroundColor,
    textColor,
    handleBackgroundColor,
    updateTextColor,
  } = useContext(ControlsContext);

  const boxShadowValue = boxShadows
    .map(
      (shadow) =>
        `${shadow.inset} ${shadow.xPosition}px ${shadow.yPosition}px ${shadow.blurValue}px ${shadow.spreadValue}px ${shadow.color}`
    )
    .join(", ");

  const boxStyle = {
    borderRadius: `${radius}px`,
    aspectRatio: aspectRatio,
    backgroundColor: boxColor,
    boxShadow: boxShadowValue,
    transform: `scale(${scale})`,
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

  const handleBackgroundColorChange = (e) => {
    handleBackgroundColor(e.target.value);
  };

  const handleScaleIncrease = () => {
    setScale((prevScale) => Math.min(prevScale + 0.1, 1));
  };

  const handleScaleDecrease = () => {
    setScale((prevScale) => Math.max(prevScale - 0.1, 0.1));
  };

  useEffect(() => {
    updateTextColor(backgroundColor);
  }, [backgroundColor, updateTextColor]);

  return (
    <div
      className="hero-box-container"
      style={{ backgroundColor: backgroundColor, color: textColor }}
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
            style={{
              border: `1px solid ${backgroundColor}`,
              backgroundColor:
                aspectRatio === ratio ? backgroundColor : "transparent",
              color: aspectRatio === ratio ? textColor : "white",
            }}
            onClick={onRatioChange}
          >
            {ratio}
          </div>
        ))}
      </div>
      <div className="hero-box-color-container">
        <div
          className="color-picker-display"
          style={{
            border: `1px solid ${textColor}`,
            backgroundColor: boxColor,
          }}
        >
          <input
            className="color-picker"
            type="color"
            value={boxColor}
            onChange={handleBoxColor}
          />
        </div>
        <input
          className="simple-input"
          type="text"
          value={boxColor}
          onChange={handleBoxColor}
        />
        <div
          className="color-picker-display"
          style={{
            backgroundColor: backgroundColor,
            border: `1px solid ${textColor}`,
          }}
        >
          <input
            className="color-picker"
            type="color"
            value={backgroundColor}
            onChange={handleBackgroundColorChange}
          />
        </div>
        <input
          className="simple-input"
          type="text"
          value={backgroundColor}
          onChange={handleBackgroundColorChange}
        />
      </div>
      <div className="hero-box-scale-container">
        <div className="scale-icon" onClick={handleScaleDecrease}>
          <RemoveCircleRoundedIcon />
        </div>
        <div className="scale-icon">
          <AddCircleRoundedIcon onClick={handleScaleIncrease} />
        </div>
      </div>
    </div>
  );
};

export default HeroBox;
