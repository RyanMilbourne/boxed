import React, { useState } from "react";
import "./ControlsStyles.scss";

const Controls = () => {
  const [color, setColor] = useState("#000000");

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };
  return (
    <div className="controls-container">
      <div className="controls-wrapper">
        <div className="controls-header">Controls</div>
        <div className="controls-body">
          <form className="control-form">
            <div className="control-option">
              <div
                className="color-picker-container"
                style={{ backgroundColor: color }}
              >
                <input
                  className="color-picker"
                  type="color"
                  value={color}
                  onChange={handleColorChange}
                />
              </div>
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
