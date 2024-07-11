import React, { createContext, useState } from "react";

export const ControlsContext = createContext();

export const ControlsProvider = ({ children }) => {
  const [boxShadows, setBoxShadows] = useState([
    {
      color: "rgba(0, 0, 0, 1)",
      xPosition: 20,
      yPosition: 20,
      blurValue: 0,
      spreadValue: 0,
    },
  ]);

  const addBoxShadow = () => {
    setBoxShadows([
      ...boxShadows,
      {
        color: "rgba(0, 0, 0, 1)",
        xPosition: 20,
        yPosition: 20,
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
    setBoxShadows(boxShadows.filter((_, i) => i !== index));
  };

  return (
    <ControlsContext.Provider
      value={{
        boxShadows,
        addBoxShadow,
        updateBoxShadow,
        removeBoxShadow,
      }}
    >
      {children}
    </ControlsContext.Provider>
  );
};
