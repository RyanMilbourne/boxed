import React, { useState } from "react";
import "./ControlsStyles.scss";
import SwapHorizRoundedIcon from "@mui/icons-material/SwapHorizRounded";
import SwapVertRoundedIcon from "@mui/icons-material/SwapVertRounded";
import BlurOnRoundedIcon from "@mui/icons-material/BlurOnRounded";
import CheckBoxOutlineBlankRoundedIcon from "@mui/icons-material/CheckBoxOutlineBlankRounded";

const Controls = () => {
  const [color, setColor] = useState("#000000");
  const [xPosition, setXPosition] = useState(1);
  const [yPosition, setYPosition] = useState(1);
  const [blurValue, setBlurValue] = useState(0);
  const [spreadValue, setSpreadValue] = useState(0);

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
          type="number"
          value={xPosition}
          onChange={handleXPosition}
        />
      </div>
      <div className="xybs-position-container">
        <SwapVertRoundedIcon />
        <input
          className="xybs-input"
          type="number"
          value={yPosition}
          onChange={handleYPosition}
        />
      </div>
      <div className="xybs-position-container">
        <BlurOnRoundedIcon />
        <input
          className="xybs-input"
          type="number"
          min="0"
          value={blurValue}
          onChange={handleBlurChange}
        />
      </div>
      <div className="xybs-position-container">
        <CheckBoxOutlineBlankRoundedIcon />
        <input
          className="xybs-input"
          type="number"
          min="0"
          value={spreadValue}
          onChange={handleSpreadChange}
        />
      </div>
    </div>
  );
};

export default Controls;
