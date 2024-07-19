import React, { useState, useContext } from "react";
import { ControlsContext } from "../../../../hooks/ControlsContext";
import boxFillerData from "../../../../data/boxFillerData";

const HeroText = () => {
  const [textData, setTextData] = useState(boxFillerData.text);

  const { textColor, heroRadius } = useContext(ControlsContext);
  const handleTextChange = (e) => {
    setTextData(e.target.value);
  };

  return (
    <div className="box-display">
      <textarea
        className="hero-box-text-input"
        value={textData}
        onChange={handleTextChange}
        spellCheck="false"
        style={{ color: textColor }}
      />
    </div>
  );
};

export default HeroText;
