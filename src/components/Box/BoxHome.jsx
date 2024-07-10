import React from "react";
import "./BoxHomeStyles.scss";
import HeroBox from "./Hero/HeroBox";
import ControlsHome from "./Controls/ControlsHome";

const BoxHome = () => {
  return (
    <div className="box-home-container">
      <ControlsHome />
      <HeroBox />
    </div>
  );
};

export default BoxHome;
