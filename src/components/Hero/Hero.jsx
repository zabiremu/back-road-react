import React, { useEffect, useState } from "react";
import { heroData } from "../../data";
const Hero = () => {
  const [hero, setHero] = useState({});
  useEffect(() => {
    setHero(heroData);
  },[]);
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-banner">
          <h1>{hero.heading}</h1>
          <p>
            {hero.para}
          </p>
          <a href={hero.href} className="btn hero-btn">
            explore tours
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
