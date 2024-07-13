import React, { useContext } from "react";
import "./BoxHomeStyles.scss";
import HeroBox from "./Hero/HeroBox";
import ControlsHome from "./Controls/ControlsHome";
import { ControlsContext } from "../../hooks/ControlsContext";

const BoxHome = () => {
  const { selectPreset, backgroundColor, textColor } =
    useContext(ControlsContext);

  const presetStyle = {
    backgroundColor: backgroundColor,
    color: textColor,
  };
  return (
    <div className="box-home-container">
      <ControlsHome />
      <HeroBox />
      <div className="shadow-presets-container">
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
