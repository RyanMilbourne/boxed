import React from "react";
import "./ControlsHomeStyles.scss";

import Controls from "./Controls";

const ControlsHome = () => {
  return (
    <div className="controls-container">
      <div className="controls-wrapper">
        <div className="controls-header">Controls</div>
        <div className="controls-body">
          <form className="control-form">
            <Controls />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ControlsHome;
