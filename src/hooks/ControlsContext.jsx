import React, { createContext, useState } from "react";

export const ControlsContext = createContext();

export const ControlsProvider = ({ children }) => {
  const [color, setColor] = useState("rgba(0, 0, 0, 1)");
  const [xPosition, setXPosition] = useState(20);
  const [yPosition, setYPosition] = useState(20);
  const [blurValue, setBlurValue] = useState(0);
  const [spreadValue, setSpreadValue] = useState(0);

  return (
    <ControlsContext.Provider
      value={{
        color,
        setColor,
        xPosition,
        setXPosition,
        yPosition,
        setYPosition,
        blurValue,
        setBlurValue,
        spreadValue,
        setSpreadValue,
      }}
    >
      {children}
    </ControlsContext.Provider>
  );
};
