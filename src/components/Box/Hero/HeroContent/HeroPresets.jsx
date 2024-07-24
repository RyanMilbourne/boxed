import React, { useContext } from "react";
import { ControlsContext } from "../../../../hooks/ControlsContext";
import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";

const HeroPresets = () => {
  const {
    selectPreset,
    backgroundColor,
    textColor,
    addBoxShadow,
    activePreset,
  } = useContext(ControlsContext);

  return (
    <div className="shadow-presets-container">
      <div className="preset-menu-wrapper">
        <AutoFixHighRoundedIcon />
      </div>
      {["1", "2", "3", "4", "5"].map((preset, index) => (
        <div
          key={preset}
          className="preset-wrapper"
          style={{
            border: `1px solid ${backgroundColor}`,
            backgroundColor:
              activePreset === index ? backgroundColor : "transparent",
            color: activePreset === index ? textColor : "white",
          }}
          onClick={() => selectPreset(index)}
        >
          {preset}
        </div>
      ))}
    </div>
  );
};

export default HeroPresets;
