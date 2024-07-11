import React, {
  useContext,
  useRef,
  useState,
  useCallback,
  useEffect,
} from "react";
import { RgbaColorPicker } from "react-colorful";
import "./ControlsStyles.scss";
import SwapHorizRoundedIcon from "@mui/icons-material/SwapHorizRounded";
import SwapVertRoundedIcon from "@mui/icons-material/SwapVertRounded";
import BlurOnRoundedIcon from "@mui/icons-material/BlurOnRounded";
import CheckBoxOutlineBlankRoundedIcon from "@mui/icons-material/CheckBoxOutlineBlankRounded";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import { ControlsContext } from "../../../hooks/ControlsContext";
import useClickOutside from "../../../hooks/useClickOutside";

const Controls = ({ index }) => {
  const { boxShadows, updateBoxShadow, removeBoxShadow } =
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

  useEffect(() => {
    setShadowColor({
      r: shadow.color.match(/rgba\((\d+), (\d+), (\d+), (\d+)\)/)?.[1] || 0,
      g: shadow.color.match(/rgba\((\d+), (\d+), (\d+), (\d+)\)/)?.[2] || 0,
      b: shadow.color.match(/rgba\((\d+), (\d+), (\d+), (\d+)\)/)?.[3] || 0,
      a: shadow.color.match(/rgba\((\d+), (\d+), (\d+), (\d+)\)/)?.[4] || 1,
    });
  }, [shadow.color]);

  const close = useCallback(() => toggle(false), []);
  useClickOutside(popover, close);

  const rgbaObjectToString = (rgba) => {
    return `rgba(${rgba.r},${rgba.g},${rgba.b},${rgba.a})`;
  };

  const handleColorChange = (newColor) => {
    setShadowColor(newColor);
    updateBoxShadow(index, {
      ...shadow,
      color: rgbaObjectToString(newColor),
    });
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

  return (
    <div className="control-option">
      {index > 0 && (
        <div className="remove-button" onClick={() => removeBoxShadow(index)}>
          <RemoveCircleRoundedIcon />
        </div>
      )}

      <div
        className="color-picker-display"
        style={{ backgroundColor: shadow.color }}
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
          value={shadow.xPosition}
          onChange={handleXPosition}
        />
        <input
          className="xybs-input"
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
          type="number"
          min="-100"
          max="100"
          value={shadow.spreadValue}
          onChange={handleSpreadChange}
        />
      </div>
    </div>
  );
};

export default Controls;
