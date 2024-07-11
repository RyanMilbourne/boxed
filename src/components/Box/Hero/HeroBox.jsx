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
  const [backgroundColor, setBackgroundColor] = useState("#d4fdc9");
  const [textColor, setTextColor] = useState("#0b090d");
  const [scale, setScale] = useState(1);

  const { color, xPosition, yPosition, blurValue, spreadValue } =
    useContext(ControlsContext);

  const boxStyle = {
    borderRadius: `${radius}px`,
    aspectRatio: aspectRatio,
    backgroundColor: boxColor,
    boxShadow: `${xPosition}px ${yPosition}px ${blurValue}px ${spreadValue}px ${color}`,
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

  const handleBackgroundColor = (e) => {
    const newColor = e.target.value;
    setBackgroundColor(newColor);
    updateTextColor(newColor);
  };

  const calculateLuminance = (hexColor) => {
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  const updateTextColor = (bgColor) => {
    const luminance = calculateLuminance(bgColor);
    const newTextColor = luminance > 128 ? "#000000" : "#ffffff";
    setTextColor(newTextColor);
  };

  const handleScaleIncrease = () => {
    setScale((prevScale) => Math.min(prevScale + 0.1, 1));
  };

  const handleScaleDecrease = () => {
    setScale((prevScale) => Math.max(prevScale - 0.1, 0.1));
  };

  useEffect(() => {
    updateTextColor(backgroundColor);
  }, [backgroundColor]);

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
        {boxColor}
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
            onChange={handleBackgroundColor}
          />
        </div>
        {backgroundColor}
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
