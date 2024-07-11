import React, { useContext, useRef, useState } from "react";
import { ControlsContext } from "../../hooks/ControlsContext";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import "./ResultsStyles.scss";

const Results = () => {
  const { boxShadows, backgroundColor } = useContext(ControlsContext);

  const boxShadowValue = boxShadows
    .map(
      (shadow) =>
        `${shadow.xPosition}px ${shadow.yPosition}px ${shadow.blurValue}px ${shadow.spreadValue}px ${shadow.color}`
    )
    .join(", ");

  const [copySuccess, setCopySuccess] = useState(false);
  const textRef = useRef(null);

  const copyToClipboard = async (e) => {
    try {
      await navigator.clipboard.writeText(`box-shadow: ${boxShadowValue}`);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 1000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const iconStyle = {
    width: "1.5rem",
    height: "1.5rem",
    color: backgroundColor,
    margin: "0",
    padding: "0",
  };
  return (
    <div
      className="results-container"
      style={{ border: `2px solid ${backgroundColor}` }}
    >
      <div
        className={
          !copySuccess
            ? "copy-to-clipboard-wrapper"
            : "copy-to-clipboard-wrapper success"
        }
        onClick={copyToClipboard}
      >
        {copySuccess && <CheckCircleOutlineRoundedIcon style={iconStyle} />}
        {!copySuccess && <ContentCopyRoundedIcon style={iconStyle} />}
      </div>
      <div className="results-text" ref={textRef}>
        box-shadow: {boxShadowValue}
      </div>
    </div>
  );
};

export default Results;
