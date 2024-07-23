import React, { useState } from "react";
import boxFillerData from "../../../../data/boxFillerData";

const HeroText = ({
  textAlign,
  verticalAlign,
  customTextColor,
  textSize,
  textWeight,
}) => {
  const [textData, setTextData] = useState(boxFillerData.text);

  return (
    <div className="box-display">
      <div
        className="hero-text-area"
        contentEditable
        spellCheck="false"
        style={{
          color: customTextColor,
          textAlign: textAlign,
          justifyContent: verticalAlign,
          fontSize: `${textSize}px`,
          fontWeight: textWeight,
        }}
      >
        {textData}
      </div>
    </div>
  );
};

export default HeroText;
