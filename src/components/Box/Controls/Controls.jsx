import React, { useContext, useRef, useState, useCallback } from "react";
import { HexColorPicker, RgbaColorPicker } from "react-colorful";
import "./ControlsStyles.scss";
import SwapHorizRoundedIcon from "@mui/icons-material/SwapHorizRounded";
import SwapVertRoundedIcon from "@mui/icons-material/SwapVertRounded";
import BlurOnRoundedIcon from "@mui/icons-material/BlurOnRounded";
import CheckBoxOutlineBlankRoundedIcon from "@mui/icons-material/CheckBoxOutlineBlankRounded";
import { ControlsContext } from "../../../hooks/ControlsContext";
import useClickOutside from "../../../hooks/useClickOutside";

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

  const popover = useRef();
  const [isOpen, toggle] = useState(false);
  const [shadowColor, setShadowColor] = useState({ r: 0, g: 0, b: 0, a: 1 });

  const close = useCallback(() => toggle(false), []);
  useClickOutside(popover, close);

  const rgbaObjectToString = (rgba) => {
    return `rgba(${rgba.r},${rgba.g},${rgba.b},${rgba.a})`;
  };

  const handleColorChange = (newColor) => {
    setShadowColor(newColor);
    const heroColor = rgbaObjectToString(newColor);
    setColor(heroColor);
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
      <div
        className="color-picker-display"
        style={{ backgroundColor: color }}
        onClick={() => toggle(true)}
      >
        {isOpen && (
          <div className="popover" ref={popover}>
            <RgbaColorPicker color={shadowColor} onChange={handleColorChange} />
          </div>
        )}
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
