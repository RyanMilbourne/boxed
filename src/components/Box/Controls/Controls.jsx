import React, { useContext, useRef, useState, useCallback } from "react";
import { RgbaColorPicker } from "react-colorful";
import "./ControlsStyles.scss";
import SwapHorizRoundedIcon from "@mui/icons-material/SwapHorizRounded";
import SwapVertRoundedIcon from "@mui/icons-material/SwapVertRounded";
import BlurOnRoundedIcon from "@mui/icons-material/BlurOnRounded";
import CheckBoxOutlineBlankRoundedIcon from "@mui/icons-material/CheckBoxOutlineBlankRounded";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import ZoomInMapRoundedIcon from "@mui/icons-material/ZoomInMapRounded";
import ZoomOutMapRoundedIcon from "@mui/icons-material/ZoomOutMapRounded";
import { ControlsContext } from "../../../hooks/ControlsContext";
import useClickOutside from "../../../hooks/useClickOutside";

const Controls = ({ index }) => {
  const { boxShadows, updateBoxShadow, removeBoxShadow, textColor } =
    useContext(ControlsContext);
  const shadow = boxShadows[index];

  const popover = useRef();
  const [isOpen, toggle] = useState(false);
  const [shadowColor, setShadowColor] = useState({
    r: 0,
    g: 0,
    b: 0,
    a: 1,
  });
  const [rgbaInputValue, setRgbaInputValue] = useState("rgba(0,0,0,1)");

  const close = useCallback(() => toggle(false), []);
  useClickOutside(popover, close);

  const rgbaStringToObject = (rgbaString) => {
    const rgbaPattern =
      /^rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),?\s*(\d?\.?\d*)?\)$/;
    const match = rgbaString.match(rgbaPattern);

    if (match) {
      return {
        r: parseInt(match[1], 10),
        g: parseInt(match[2], 10),
        b: parseInt(match[3], 10),
        a: match[4] ? parseFloat(match[4]) : 1,
      };
    }

    throw new Error("Invalid RGBA string");
  };

  const rgbaObjectToString = (rgba) => {
    return `rgba(${rgba.r},${rgba.g},${rgba.b},${rgba.a})`;
  };

  const handleColorChange = (newColor) => {
    setShadowColor(newColor);
    setRgbaInputValue(rgbaObjectToString(newColor));
    updateBoxShadow(index, {
      ...shadow,
      color: rgbaObjectToString(newColor),
    });
  };

  const handleRgbaInputChange = (e) => {
    const rgbaString = e.target.value;
    setRgbaInputValue(rgbaString);
    try {
      const newColor = rgbaStringToObject(rgbaString);
      setShadowColor(newColor);
      updateBoxShadow(index, {
        ...shadow,
        color: rgbaString,
      });
    } catch (error) {
      console.error("Invalid RGBA string");
    }
  };

  const handleXPosition = (e) => {
    updateBoxShadow(index, {
      ...shadow,
      xPosition: e.target.value,
    });
  };

  const handleYPosition = (e) => {
    updateBoxShadow(index, {
      ...shadow,
      yPosition: e.target.value,
    });
  };

  const handleBlurChange = (e) => {
    updateBoxShadow(index, {
      ...shadow,
      blurValue: e.target.value,
    });
  };

  const handleSpreadChange = (e) => {
    updateBoxShadow(index, {
      ...shadow,
      spreadValue: e.target.value,
    });
  };

  const handleInset = (value) => {
    updateBoxShadow(index, {
      ...shadow,
      inset: value,
    });
  };

  const dynamicBorder = {
    border: `1px solid ${textColor}`,
  };

  const smallIcon = {
    width: "1.1rem",
    height: "1.1rem",
  };

  return (
    <div className="control-option">
      {index > 0 && (
        <div className="remove-button" onClick={() => removeBoxShadow(index)}>
          <RemoveCircleRoundedIcon />
        </div>
      )}
      <div className="xybs-position-container color">
        <div
          className="color-picker-display hero"
          style={{
            backgroundColor: shadow.color,
            border: `1px solid ${textColor}`,
          }}
          onClick={() => toggle(true)}
        >
          {isOpen && (
            <>
              <div className="popover" ref={popover}>
                <RgbaColorPicker
                  color={shadowColor}
                  onChange={handleColorChange}
                />
                <input
                  className="rgba-input"
                  value={rgbaInputValue}
                  onChange={handleRgbaInputChange}
                />
              </div>
            </>
          )}
        </div>
      </div>
      <div className="xybs-position-container">
        <SwapHorizRoundedIcon />
        <input
          className="xybs-input"
          type="range"
          min="-100"
          max="100"
          value={shadow.xPosition}
          onChange={handleXPosition}
        />
        <input
          className="xybs-input"
          style={dynamicBorder}
          type="number"
          min="-100"
          max="100"
          value={shadow.xPosition}
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
          value={shadow.yPosition}
          onChange={handleYPosition}
        />
        <input
          className="xybs-input"
          style={dynamicBorder}
          type="number"
          min="-100"
          max="100"
          value={shadow.yPosition}
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
          value={shadow.blurValue}
          onChange={handleBlurChange}
        />
        <input
          className="xybs-input"
          style={dynamicBorder}
          type="number"
          min="0"
          max="100"
          value={shadow.blurValue}
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
          value={shadow.spreadValue}
          onChange={handleSpreadChange}
        />
        <input
          className="xybs-input"
          style={dynamicBorder}
          type="number"
          min="-100"
          max="100"
          value={shadow.spreadValue}
          onChange={handleSpreadChange}
        />
      </div>
      <div className="xybs-position-container">
        <div
          className={`inset-outset-container ${
            shadow.inset === "inset" ? "selected" : ""
          }`}
          onClick={() => handleInset("inset")}
        >
          <ZoomInMapRoundedIcon style={smallIcon} />
        </div>
        <div
          className={`inset-outset-container ${
            shadow.inset === "" ? "selected" : ""
          }`}
          onClick={() => handleInset("")}
        >
          <ZoomOutMapRoundedIcon style={smallIcon} />
        </div>
      </div>
    </div>
  );
};

export default Controls;
