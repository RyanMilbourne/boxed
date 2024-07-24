import React, { createContext, useState } from "react";
import presetsData from "../data/presetsData";

export const ControlsContext = createContext();

export const ControlsProvider = ({ children }) => {
  const presets = presetsData;

  const [boxShadows, setBoxShadows] = useState(presets[0]);

  const [backgroundColor, setBackgroundColor] = useState("#fff480");
  const [heroBoxColor, setHeroBoxColor] = useState("#ffd500");
  const [heroRadius, setHeroRadius] = useState(30);
  const [textColor, setTextColor] = useState("#0b090d");
  const [aspectRatio, setAspectRatio] = useState("1/1");

  const addBoxShadow = () => {
    setBoxShadows([
      ...boxShadows,
      {
        color: "rgba(0, 0, 0, 1)",
        xPosition: 0,
        yPosition: 0,
        blurValue: 0,
        spreadValue: 0,
        inset: "",
      },
    ]);
  };

  const updateBoxShadow = (index, newShadow) => {
    const newBoxShadows = boxShadows.map((shadow, i) =>
      i === index ? newShadow : shadow
    );
    setBoxShadows(newBoxShadows);
  };

  const removeBoxShadow = (index) => {
    if (boxShadows.length > 1 && index >= 0 && index < boxShadows.length) {
      setBoxShadows((prevBoxShadows) => {
        const newBoxShadows = [...prevBoxShadows];
        newBoxShadows.splice(index, 1);
        return newBoxShadows;
      });
    }
  };

  const calculateLuminance = (hexColor) => {
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  const updateTextColor = (bgColor) => {
    const luminance = calculateLuminance(bgColor);
    const newTextColor = luminance > 128 ? "#000000" : "#ffffff";
    setTextColor(newTextColor);
  };

  const handleBackgroundColor = (newColor) => {
    setBackgroundColor(newColor);
    updateTextColor(newColor);
  };

  const handleHeroBoxColor = (newColor) => {
    setHeroBoxColor(newColor);
  };

  const handleHeroRadius = (newRadius) => {
    setHeroRadius(newRadius);
  };

  const selectPreset = (presetIndex) => {
    if (presetIndex >= 0 && presetIndex < presets.length) {
      const selectedPreset = presets[presetIndex];

      const newBackgroundColor =
        selectedPreset[0]?.backgroundColor || "#d4fdc9";

      const newHeroBoxColor = selectedPreset[0]?.heroBoxColor || "#42ff8b";

      const newHeroRadius = selectedPreset[0]?.heroRadius || 30;

      setBoxShadows(selectedPreset);
      handleBackgroundColor(newBackgroundColor);
      handleHeroBoxColor(newHeroBoxColor);
      handleHeroRadius(newHeroRadius);
    }
  };

  const handleHeroAspectRatio = (newRatio) => {
    setAspectRatio(newRatio);
  };

  return (
    <ControlsContext.Provider
      value={{
        boxShadows,
        addBoxShadow,
        updateBoxShadow,
        removeBoxShadow,
        calculateLuminance,
        updateTextColor,
        backgroundColor,
        handleBackgroundColor,
        textColor,
        selectPreset,
        heroBoxColor,
        handleHeroBoxColor,
        heroRadius,
        handleHeroRadius,
        aspectRatio,
        handleHeroAspectRatio,
      }}
    >
      {children}
    </ControlsContext.Provider>
  );
};
