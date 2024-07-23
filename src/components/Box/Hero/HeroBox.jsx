import React, { useContext, useEffect, useState } from "react";
import "./HeroBoxStyles.scss";
import RoundedCornerIcon from "@mui/icons-material/RoundedCorner";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import TitleRoundedIcon from "@mui/icons-material/TitleRounded";
import ImageRoundedIcon from "@mui/icons-material/ImageRounded";
import CheckBoxOutlineBlankRoundedIcon from "@mui/icons-material/CheckBoxOutlineBlankRounded";
import BuildCircleRoundedIcon from "@mui/icons-material/BuildCircleRounded";

import { ControlsContext } from "../../../hooks/ControlsContext";
import boxFillerData from "../../../data/boxFillerData";
import HeroText from "./HeroContent/HeroText";
import HeroTextControls from "./HeroContent/HeroTextControls";

const HeroBox = () => {
  const {
    boxShadows,
    backgroundColor,
    textColor,
    handleBackgroundColor,
    updateTextColor,
    heroBoxColor,
    handleHeroBoxColor,
    heroRadius,
    handleHeroRadius,
  } = useContext(ControlsContext);

  const [aspectRatio, setAspectRatio] = useState("1/1");
  const [scale, setScale] = useState(1);
  const [boxDisplay, setBoxDisplay] = useState(0);
  const [image, setImage] = useState(boxFillerData.image);
  const [imageURL, setImageURL] = useState(false);
  const [textSettings, setTextSettings] = useState(false);
  const [textAlign, setTextAlign] = useState("left");
  const [verticalAlign, setVerticalAlign] = useState("flex-start");
  const [textSize, setTextSize] = useState(16);
  const [textWeight, setTextWeight] = useState(400);
  const [customTextColor, setCustomTextColor] = useState(textColor);
  const boxShadowValue = boxShadows
    .map(
      (shadow) =>
        `${shadow.inset} ${shadow.xPosition}px ${shadow.yPosition}px ${shadow.blurValue}px ${shadow.spreadValue}px ${shadow.color}`
    )
    .join(", ");

  const boxStyle = {
    borderRadius: `${heroRadius}px`,
    aspectRatio: aspectRatio,
    backgroundColor: heroBoxColor,
    boxShadow: boxShadowValue,
    transform: `scale(${scale})`,
  };

  const boxStyleImage = {
    borderRadius: `${heroRadius}px`,
    aspectRatio: aspectRatio,
    backgroundColor: heroBoxColor,
    boxShadow: boxShadowValue,
    transform: `scale(${scale})`,
    backgroundImage: `url('${image}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const onRatioChange = (e) => {
    setAspectRatio(e.target.textContent);
  };

  const handleHeroBoxColorChange = (e) => {
    handleHeroBoxColor(e.target.value);
  };

  const handleHeroRadiusChange = (e) => {
    handleHeroRadius(e.target.value);
  };

  const handleBackgroundColorChange = (e) => {
    handleBackgroundColor(e.target.value);
  };

  const handleScaleIncrease = () => {
    setScale((prevScale) => Math.min(prevScale + 0.1, 1));
  };

  const handleScaleDecrease = () => {
    setScale((prevScale) => Math.max(prevScale - 0.1, 0.1));
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  const toggleImageURL = () => {
    setImageURL((prev) => !prev);
  };

  const toggleTextSettings = () => {
    setTextSettings((prev) => !prev);
  };

  useEffect(() => {
    updateTextColor(backgroundColor);
  }, [backgroundColor, updateTextColor]);

  const iconStyle = {
    width: "1rem",
    height: "1rem",
  };

  const iconStyle2 = {
    width: "1.25rem",
    height: "1.25rem",
  };

  return (
    <div
      className="hero-box-container"
      style={{ backgroundColor: backgroundColor, color: textColor }}
    >
      <div
        className="hero-box"
        style={boxDisplay <= 1 ? boxStyle : boxStyleImage}
      >
        {boxDisplay === 1 && (
          <HeroText
            textAlign={textAlign}
            verticalAlign={verticalAlign}
            customTextColor={customTextColor}
            textSize={textSize}
            textWeight={textWeight}
          />
        )}
      </div>
      <div className="hero-box-content-container">
        <div
          className="content-option"
          onClick={() => setBoxDisplay(0)}
          style={{
            color: textColor,
            border: `1px solid ${textColor}`,
          }}
        >
          <CheckBoxOutlineBlankRoundedIcon style={iconStyle} />
        </div>
        <div className="content-option-wrapper">
          <div
            className="content-option"
            onClick={() => setBoxDisplay(2)}
            style={{
              color: textColor,
              border: `1px solid ${textColor}`,
            }}
          >
            <ImageRoundedIcon style={iconStyle} />
            <div className="toggle-image-url" onClick={toggleImageURL}>
              {imageURL && <RemoveCircleRoundedIcon style={iconStyle2} />}
              {!imageURL && <AddCircleRoundedIcon style={iconStyle2} />}
            </div>
          </div>

          {imageURL && (
            <input
              className="image-input"
              value={image}
              onChange={handleImageChange}
              style={{
                color: textColor,
                border: `1px solid ${textColor}`,
              }}
            />
          )}
        </div>
        <div className="content-option-wrapper">
          <div
            className="content-option"
            onClick={() => setBoxDisplay(1)}
            style={{
              color: textColor,
              border: `1px solid ${textColor}`,
            }}
          >
            <TitleRoundedIcon style={iconStyle} />
            <div className="toggle-text-settings" onClick={toggleTextSettings}>
              {textSettings && <RemoveCircleRoundedIcon style={iconStyle2} />}
              {!textSettings && <BuildCircleRoundedIcon style={iconStyle2} />}
            </div>
          </div>
          {textSettings && (
            <HeroTextControls
              setTextAlign={setTextAlign}
              setVerticalAlign={setVerticalAlign}
              setTextWeight={setTextWeight}
              textSize={textSize}
              setTextSize={setTextSize}
              customTextColor={customTextColor}
              setCustomTextColor={setCustomTextColor}
              backgroundColor={heroBoxColor}
              borderColor={textColor}
            />
          )}
        </div>
      </div>
      <div className="hero-box-radius-container">
        <RoundedCornerIcon />
        <span>border-radius</span>
        <input
          type="range"
          min="0"
          max="200"
          className="hero-radius slider"
          value={heroRadius}
          onChange={handleHeroRadiusChange}
        />
        <input
          className="hero-radius"
          type="number"
          min="0"
          max="200"
          value={heroRadius}
          onChange={handleHeroRadiusChange}
          style={{ border: `1px solid ${textColor}`, color: textColor }}
        />
      </div>
      <div className="hero-box-aspect-ratio-container">
        {["1/1", "3/4", "4/3", "4/5", "5/4", "16/9"].map((ratio) => (
          <div
            key={ratio}
            className={`aspect-ratio ${aspectRatio === ratio ? "active" : ""}`}
            style={{
              border: `1px solid ${backgroundColor}`,
              backgroundColor:
                aspectRatio === ratio ? backgroundColor : "transparent",
              color: aspectRatio === ratio ? textColor : "white",
            }}
            onClick={onRatioChange}
          >
            {ratio}
          </div>
        ))}
      </div>
      <div className="hero-box-color-container">
        <div
          className="color-picker-display"
          style={{
            border: `1px solid ${textColor}`,
            backgroundColor: heroBoxColor,
          }}
        >
          <input
            className="color-picker"
            type="color"
            value={heroBoxColor}
            onChange={handleHeroBoxColorChange}
          />
        </div>
        <input
          className="simple-input"
          type="text"
          value={heroBoxColor}
          onChange={handleHeroBoxColorChange}
        />
        <div
          className="color-picker-display"
          style={{
            backgroundColor: backgroundColor,
            border: `1px solid ${textColor}`,
          }}
        >
          <input
            className="color-picker"
            type="color"
            value={backgroundColor}
            onChange={handleBackgroundColorChange}
          />
        </div>
        <input
          className="simple-input"
          type="text"
          value={backgroundColor}
          onChange={handleBackgroundColorChange}
        />
      </div>
      <div className="hero-box-scale-container">
        <div className="scale-icon" onClick={handleScaleDecrease}>
          <RemoveCircleRoundedIcon />
        </div>
        <div className="scale-icon">
          <AddCircleRoundedIcon onClick={handleScaleIncrease} />
        </div>
      </div>
    </div>
  );
};

export default HeroBox;
