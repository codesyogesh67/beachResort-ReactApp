import React from "react";
import "./Hero.css";

function Hero({ children, hero }) {
  return <header className={hero}>{children}</header>;
}

Hero.defaultProps = {
  hero: "hero__default",
};

export default Hero;
