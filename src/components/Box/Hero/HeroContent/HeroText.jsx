import React, { useState, useContext, useRef } from "react";
import { ControlsContext } from "../../../../hooks/ControlsContext";
import boxFillerData from "../../../../data/boxFillerData";

const HeroText = ({ textAlign, verticalAlign }) => {
  const [textData, setTextData] = useState(boxFillerData.text);
  const textareaRef = useRef(null);

  const { textColor } = useContext(ControlsContext);

  const handleTextChange = (e) => {
    setTextData(e.target.value);
    adjustTextareaHeight();
  };

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  return (
    <div className="box-display" style={{ alignItems: verticalAlign }}>
      <textarea
        ref={textareaRef}
        className="hero-box-text-input"
        value={textData}
        onChange={handleTextChange}
        spellCheck="false"
        style={{ color: textColor, textAlign: textAlign }}
      />
    </div>
  );
};

export default HeroText;
