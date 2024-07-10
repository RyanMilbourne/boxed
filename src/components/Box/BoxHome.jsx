import React from "react";
import "./BoxHomeStyles.scss";
import HeroBox from "./Hero/HeroBox";
import Controls from "./Controls/Controls";

const BoxHome = () => {
  return (
    <div className="box-home-container">
      <Controls />
      <HeroBox />
    </div>
  );
};

export default BoxHome;
