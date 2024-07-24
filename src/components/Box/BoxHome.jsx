import React, { useContext } from "react";
import "./BoxHomeStyles.scss";
import HeroBox from "./Hero/HeroBox";
import ControlsHome from "./Controls/ControlsHome";
import { ControlsContext } from "../../hooks/ControlsContext";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import HeroPresets from "./Hero/HeroContent/HeroPresets";

const BoxHome = () => {
  const { textColor, addBoxShadow } = useContext(ControlsContext);

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
      <HeroPresets />
    </div>
  );
};

export default BoxHome;
