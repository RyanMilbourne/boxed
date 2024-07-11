import React, { useContext } from "react";
import "./ControlsHomeStyles.scss";
import Controls from "./Controls";
import { ControlsContext } from "../../../hooks/ControlsContext";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";

const ControlsHome = () => {
  const { boxShadows, addBoxShadow, backgroundColor, textColor } =
    useContext(ControlsContext);

  return (
    <div
      className="controls-container"
      style={{ backgroundColor: backgroundColor, color: textColor }}
    >
      <div className="controls-wrapper">
        <div className="controls-header">Controls</div>
        <div className="controls-body">
          <form className="control-form">
            {boxShadows.map((_, index) => (
              <Controls key={index} index={index} />
            ))}
          </form>
          <div className="controls-add-container" onClick={addBoxShadow}>
            <button className="add-shadow-layer">
              <AddCircleRoundedIcon style={{ width: "35px", height: "35px" }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlsHome;
