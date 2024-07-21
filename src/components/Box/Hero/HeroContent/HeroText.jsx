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
    const minHeight = `${textSize}px`;

    textarea.style.height = "auto";
    const scrollHeight = textarea.scrollHeight;

    textarea.style.height = `${Math.max(
      scrollHeight,
      parseFloat(minHeight)
    )}px`;
  };

  return (
    <div className="box-display" style={{ alignItems: verticalAlign }}>
      <textarea
        ref={textareaRef}
        className="hero-box-text-input"
        value={textData}
        onChange={(e) => {
          handleTextChange(e);
          adjustTextareaHeight();
        }}
        spellCheck="false"
        style={{
          color: customTextColor,
          textAlign: textAlign,
          fontSize: `${textSize}px`,
          fontWeight: textWeight,
          minHeight: `${textSize}px`,
          lineHeight: `${textSize}px`,
        }}
      />
    </div>
  );
};

export default HeroText;
