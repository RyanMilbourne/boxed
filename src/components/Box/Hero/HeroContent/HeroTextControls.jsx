import React, { useState, useContext } from "react";
import FormatAlignLeftRoundedIcon from "@mui/icons-material/FormatAlignLeftRounded";
import FormatAlignCenterRoundedIcon from "@mui/icons-material/FormatAlignCenterRounded";
import FormatAlignRightRoundedIcon from "@mui/icons-material/FormatAlignRightRounded";
import FormatAlignJustifyRoundedIcon from "@mui/icons-material/FormatAlignJustifyRounded";
import VerticalAlignTopRoundedIcon from "@mui/icons-material/VerticalAlignTopRounded";
import VerticalAlignCenterRoundedIcon from "@mui/icons-material/VerticalAlignCenterRounded";
import VerticalAlignBottomRoundedIcon from "@mui/icons-material/VerticalAlignBottomRounded";

const HeroTextControls = ({
  setTextAlign,
  setVerticalAlign,
  setTextWeight,
  textSize,
  setTextSize,
  customTextColor,
  setCustomTextColor,
  backgroundColor,
  borderColor,
}) => {
  const iconStyle2 = {
    width: "1.25rem",
    height: "1.25rem",
  };

  const handleTextAlign = (value) => {
    setTextAlign(value);
  };

  const handleVerticalAlign = (value) => {
    setVerticalAlign(value);
  };

  const handleCustomTextColor = (e) => {
    setCustomTextColor(e.target.value);
  };

  const handleTextSize = (e) => {
    setTextSize(e.target.value);
  };

  const handleTextWeight = (e) => {
    setTextWeight(e.target.value);
  };

  const customStyle = {
    border: `1px solid ${borderColor}`,
  };

  return (
    <div className="text-settings-wrapper">
      <div className="text-align-wrapper">
        <div
          className="color-picker-display text-color"
          style={{
            backgroundColor: customTextColor,
          }}
        >
          <input
            className="color-picker"
            type="color"
            onChange={handleCustomTextColor}
          />
        </div>
        <button
          className="text-align-button"
          style={customStyle}
          onClick={() => handleTextAlign("left")}
        >
          <FormatAlignLeftRoundedIcon style={iconStyle2} />
        </button>
        <button
          className="text-align-button"
          style={customStyle}
          onClick={() => handleTextAlign("center")}
        >
          <FormatAlignCenterRoundedIcon style={iconStyle2} />
        </button>
        <button
          className="text-align-button"
          style={customStyle}
          onClick={() => handleTextAlign("right")}
        >
          <FormatAlignRightRoundedIcon style={iconStyle2} />
        </button>
        <button
          className="text-align-button"
          style={customStyle}
          onClick={() => handleTextAlign("justify")}
        >
          <FormatAlignJustifyRoundedIcon style={iconStyle2} />
        </button>
        <button
          className="text-align-button"
          style={customStyle}
          onClick={() => handleVerticalAlign("flex-start")}
        >
          <VerticalAlignTopRoundedIcon style={iconStyle2} />
        </button>
        <button
          className="text-align-button"
          style={customStyle}
          onClick={() => handleVerticalAlign("center")}
        >
          <VerticalAlignCenterRoundedIcon style={iconStyle2} />
        </button>
        <button
          className="text-align-button"
          style={customStyle}
          onClick={() => handleVerticalAlign("flex-end")}
        >
          <VerticalAlignBottomRoundedIcon style={iconStyle2} />
        </button>

        <input
          className="text-size-input"
          type="number"
          min="0"
          value={textSize}
          onChange={handleTextSize}
          style={customStyle}
        />
        <select
          name="fontWeight"
          id="fontWeight"
          className="text-weight-input"
          onChange={handleTextWeight}
          defaultValue="400"
          style={customStyle}
        >
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="300">300</option>
          <option value="400">400</option>
          <option value="500">500</option>
          <option value="600">600</option>
          <option value="700">700</option>
        </select>
      </div>
    </div>
  );
};

export default HeroTextControls;
