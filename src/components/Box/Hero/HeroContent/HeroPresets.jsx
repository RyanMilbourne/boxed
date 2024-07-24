import React, { useContext } from "react";
import { ControlsContext } from "../../../../hooks/ControlsContext";
import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";

const HeroPresets = () => {
  const { selectPreset, backgroundColor, textColor, addBoxShadow } =
    useContext(ControlsContext);

  const presetStyle = {
    backgroundColor: backgroundColor,
    color: textColor,
  };
  return (
    <div className="shadow-presets-container">
      <div className="preset-menu-wrapper">
        <AutoFixHighRoundedIcon />
      </div>
      <div
        className="preset-wrapper"
        style={presetStyle}
        onClick={() => selectPreset(0)}
      >
        1
      </div>
      <div
        className="preset-wrapper"
        style={presetStyle}
        onClick={() => selectPreset(1)}
      >
        2
      </div>
      <div
        className="preset-wrapper"
        style={presetStyle}
        onClick={() => selectPreset(2)}
      >
        3
      </div>
      <div
        className="preset-wrapper"
        style={presetStyle}
        onClick={() => selectPreset(3)}
      >
        4
      </div>
      <div
        className="preset-wrapper"
        style={presetStyle}
        onClick={() => selectPreset(4)}
      >
        5
      </div>
    </div>
  );
};

export default HeroPresets;
