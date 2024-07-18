import React, { useContext } from "react";
import "./BoxHomeStyles.scss";
import HeroBox from "./Hero/HeroBox";
import ControlsHome from "./Controls/ControlsHome";
import { ControlsContext } from "../../hooks/ControlsContext";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";

const BoxHome = () => {
  const { selectPreset, backgroundColor, textColor, addBoxShadow } =
    useContext(ControlsContext);

  const presetStyle = {
    backgroundColor: backgroundColor,
    color: textColor,
  };
  return (
    <div className="box-home-container">
      <div
        className="controls-add-container"
        onClick={addBoxShadow}
        style={{ color: textColor }}
      >
        <button className="add-shadow-layer">
          <AddCircleRoundedIcon style={{ width: "35px", height: "35px" }} />
        </button>
      </div>
      <ControlsHome />
      <HeroBox />
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
    </div>
  );
};

export default BoxHome;
