import React, { useContext } from "react";
import { ControlsContext } from "../../hooks/ControlsContext";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import "./ResultsStyles.scss";

const Results = () => {
  const { boxShadows, addBoxShadow } = useContext(ControlsContext);
  const boxShadowValue = boxShadows
    .map(
      (shadow) =>
        `${shadow.xPosition}px ${shadow.yPosition}px ${shadow.blurValue}px ${shadow.spreadValue}px ${shadow.color}`
    )
    .join(", ");
  return (
    <div className="results-container">
      <div className="copy-to-clipboard-wrapper">
        <ContentCopyRoundedIcon />
      </div>
      <div className="results-text">box-shadow: {boxShadowValue}</div>
    </div>
  );
};

export default Results;
