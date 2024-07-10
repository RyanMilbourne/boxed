import React from "react";
import "./ControlsStyles.scss";

const Controls = () => {
  return (
    <div className="controls-container">
      <div className="controls-wrapper">
        <div className="controls-header">Controls</div>
        <div className="controls-body">
          <form className="control-form">
            <div className="control-option">
              <span>color</span>
              <span>x</span>
              <span>y</span>
              <span>blur</span>
              <span>spread</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Controls;
