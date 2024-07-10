import React, { useContext, useState } from "react";
import "./ControlsStyles.scss";
import SwapHorizRoundedIcon from "@mui/icons-material/SwapHorizRounded";
import SwapVertRoundedIcon from "@mui/icons-material/SwapVertRounded";
import BlurOnRoundedIcon from "@mui/icons-material/BlurOnRounded";
import CheckBoxOutlineBlankRoundedIcon from "@mui/icons-material/CheckBoxOutlineBlankRounded";
import { ControlsContext } from "../../../hooks/ControlsContext";

const Controls = () => {
  const {
    color,
    setColor,
    xPosition,
    setXPosition,
    yPosition,
    setYPosition,
    blurValue,
    setBlurValue,
    spreadValue,
    setSpreadValue,
  } = useContext(ControlsContext);

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleXPosition = (e) => {
    setXPosition(e.target.value);
  };

  const handleYPosition = (e) => {
    setYPosition(e.target.value);
  };

  const handleBlurChange = (e) => {
    setBlurValue(e.target.value);
  };

  const handleSpreadChange = (e) => {
    setSpreadValue(e.target.value);
  };

  return (
    <div className="control-option">
      <div className="color-picker-display" style={{ backgroundColor: color }}>
        <input
          className="color-picker"
          type="color"
          value={color}
          onChange={handleColorChange}
        />
      </div>
      <div className="xybs-position-container">
        <SwapHorizRoundedIcon />
        <input
          className="xybs-input"
          type="range"
          min="-100"
          max="100"
          value={xPosition}
          onChange={handleXPosition}
        />
        <input
          className="xybs-input"
          type="number"
          min="-100"
          max="100"
          value={xPosition}
          onChange={handleXPosition}
        />
      </div>
      <div className="xybs-position-container">
        <SwapVertRoundedIcon />
        <input
          className="xybs-input"
          type="range"
          min="-100"
          max="100"
          value={yPosition}
          onChange={handleYPosition}
        />
        <input
          className="xybs-input"
          type="number"
          min="-100"
          max="100"
          value={yPosition}
          onChange={handleYPosition}
        />
      </div>
      <div className="xybs-position-container">
        <BlurOnRoundedIcon />
        <input
          className="xybs-input"
          type="range"
          min="0"
          max="100"
          value={blurValue}
          onChange={handleBlurChange}
        />
        <input
          className="xybs-input"
          type="number"
          min="0"
          max="100"
          value={blurValue}
          onChange={handleBlurChange}
        />
      </div>
      <div className="xybs-position-container">
        <CheckBoxOutlineBlankRoundedIcon />
        <input
          className="xybs-input"
          type="range"
          min="-100"
          max="100"
          value={spreadValue}
          onChange={handleSpreadChange}
        />
        <input
          className="xybs-input"
          type="number"
          min="-100"
          max="100"
          value={spreadValue}
          onChange={handleSpreadChange}
        />
      </div>
    </div>
  );
};

export default Controls;
