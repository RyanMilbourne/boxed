import React, { useContext } from "react";
import { ControlsContext } from "../../../../hooks/ControlsContext";
import AspectRatioRoundedIcon from "@mui/icons-material/AspectRatioRounded";

const HeroAspectRatios = () => {
  const { backgroundColor, textColor, aspectRatio, handleHeroAspectRatio } =
    useContext(ControlsContext);

  return (
    <div className="hero-box-aspect-ratio-container">
      <div className="preset-menu-wrapper">
        <AspectRatioRoundedIcon />
      </div>
      {["1/1", "3/4", "4/3", "16/9", "21/9"].map((ratio) => (
        <div
          key={ratio}
          className={`aspect-ratio ${aspectRatio === ratio ? "active" : ""}`}
          style={{
            border: `1px solid ${backgroundColor}`,
            backgroundColor:
              aspectRatio === ratio ? backgroundColor : "transparent",
            color: aspectRatio === ratio ? textColor : "white",
          }}
          onClick={() => handleHeroAspectRatio(ratio)}
        >
          {ratio}
        </div>
      ))}
    </div>
  );
};

export default HeroAspectRatios;
