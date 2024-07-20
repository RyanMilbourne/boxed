import React, { useState, useContext, useRef } from "react";
import { ControlsContext } from "../../../../hooks/ControlsContext";
import boxFillerData from "../../../../data/boxFillerData";

const HeroText = ({
  textAlign,
  verticalAlign,
  customTextColor,
  textSize,
  textWeight,
}) => {
  const [textData, setTextData] = useState(boxFillerData.text);
  const textareaRef = useRef(null);

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
        style={{
          color: customTextColor,
          textAlign: textAlign,
          fontSize: `${textSize}px`,
          fontWeight: textWeight,
        }}
      />
    </div>
  );
};

export default HeroText;
