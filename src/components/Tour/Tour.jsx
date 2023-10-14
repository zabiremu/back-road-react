import React, { useEffect, useState } from "react";
import { featuredTopics } from "../../data";
import Title from "../Title/Title";
const Tour = () => {
  const [tour, setTour] = useState([]);
  useEffect(() => {
    setTour(featuredTopics);
  }, []);

  return (
    <>
      <section className="section" id="tours">
        <Title heading="featured" subHeading="Tours" />

        <div className="section-center featured-center">
          {tour &&
            tour.map((item) => {
              const {
                id,
                thumbnail,
                date,
                heading,
                para,
                icon,
                country,
                duration,
                payment,
              } = item;
              return (
                <div key={id}>
                  <article className="tour-card">
                    <div className="tour-img-container">
                      <img src={thumbnail} className="tour-img" alt="" />
                      <p className="tour-date">{date}</p>
                    </div>
                    <div className="tour-info">
                      <div className="tour-title">
                        <h4>{heading}</h4>
                      </div>
                      <p>{para}</p>
                      <div className="tour-footer">
                        <p>
                          <span>
                            <i className={icon}></i>
                          </span>
                          {country}
                        </p>
                        <p>{duration}</p>
                        <p>{payment}</p>
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
};

export default Tour;
