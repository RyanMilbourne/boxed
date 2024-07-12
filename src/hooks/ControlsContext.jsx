import React, { createContext, useState } from "react";

export const ControlsContext = createContext();

export const ControlsProvider = ({ children }) => {
  const presets = [
    [
      {
        color: "rgba(0, 0, 0, 1)",
        xPosition: 20,
        yPosition: 20,
        blurValue: 0,
        spreadValue: 0,
      },
    ],
    [
      {
        color: "rgba(255, 0, 0, 1)",
        xPosition: 10,
        yPosition: 10,
        blurValue: 0,
        spreadValue: 3,
      },
      {
        color: "rgba(0, 0, 255, 1)",
        xPosition: -10,
        yPosition: -10,
        blurValue: 0,
        spreadValue: 3,
      },
    ],
    [
      {
        color: "rgba(1,1,1,0.3)",
        xPosition: 5,
        yPosition: 5,
        blurValue: 20,
        spreadValue: 10,
      },
    ],
    [
      {
        color: "rgba(1,1,1,1)",
        xPosition: 0,
        yPosition: 0,
        blurValue: 0,
        spreadValue: 0,
      },
    ],
  ];

  const [boxShadows, setBoxShadows] = useState(presets[0]);

  const [backgroundColor, setBackgroundColor] = useState("#d4fdc9");
  const [textColor, setTextColor] = useState("#0b090d");

  const addBoxShadow = () => {
    setBoxShadows([
      ...boxShadows,
      {
        color: "rgba(0, 0, 0, 1)",
        xPosition: 0,
        yPosition: 0,
        blurValue: 0,
        spreadValue: 0,
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

  const selectPreset = (presetIndex) => {
    if (presetIndex >= 0 && presetIndex < presets.length) {
      setBoxShadows(presets[presetIndex]);
    }
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
      }}
    >
      {children}
    </ControlsContext.Provider>
  );
};
