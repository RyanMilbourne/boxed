import React, { useContext } from "react";
import "./ControlsHomeStyles.scss";
import Controls from "./Controls";
import { ControlsContext } from "../../../hooks/ControlsContext";
import AddShadowButton from "./AddShadowButton";

const ControlsHome = () => {
  const { boxShadows, backgroundColor, textColor, selectPreset } =
    useContext(ControlsContext);

  return (
    <div
      className="controls-container"
      style={{ backgroundColor: backgroundColor, color: textColor }}
    >
      <div className="controls-wrapper">
        <div className="controls-header">shadows</div>
        <div className="controls-body">
          <form className="control-form">
            {boxShadows.map((_, index) => (
              <Controls key={index} index={index} />
            ))}
            <AddShadowButton />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ControlsHome;
