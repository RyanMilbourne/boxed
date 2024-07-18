import React, { useContext, useState } from "react";
import LibraryAddRoundedIcon from "@mui/icons-material/LibraryAddRounded";
import { ControlsContext } from "../../../hooks/ControlsContext";

const AddShadowButton = () => {
  const { textColor, backgroundColor, addBoxShadow } =
    useContext(ControlsContext);
  const [hovered, setHovered] = useState(false);

  const style = {
    border: `1px dashed ${textColor}`,
    ...(hovered && {
      backgroundColor: textColor,
      color: backgroundColor,
    }),
  };
  return (
    <div
      className="control-option add-new"
      style={style}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={addBoxShadow}
    >
      <LibraryAddRoundedIcon />
      Add Shadow
    </div>
  );
};

export default AddShadowButton;
