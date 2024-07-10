import React, { createContext, useState } from "react";

export const ControlsContext = createContext();

export const ControlsProvider = ({ children }) => {
  const [color, setColor] = useState("#000000");
  const [xPosition, setXPosition] = useState(3);
  const [yPosition, setYPosition] = useState(3);
  const [blurValue, setBlurValue] = useState(10);
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
