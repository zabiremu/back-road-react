import React, { useEffect, useState } from "react";
import { aboutData } from "../../data";
import Title from "../Title/Title";
const About = () => {
  const [about, setAbout] = useState({});
  useEffect(() => {
    setAbout(aboutData);
  }, []);
  return (
    <>
      <section className="section" id="about">
       <Title heading={"About"} subHeading={"Us"}/>

        <div className="section-center about-center">
          <div className="about-img">
            <img
              src={about.thumbnail}
              className="about-photo"
              alt="awesome beach"
            />
          </div>
          <article className="about-info">
            <h3>{about.subHeading}</h3>
            <p>{about.para}</p>
            <a href={about.href} className="btn">
              read more
            </a>
          </article>
        </div>
      </section>
    </>
  );
};

export default About;
