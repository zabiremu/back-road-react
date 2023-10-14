import React, { useEffect, useState } from "react";
import { featuredTopics } from "../../data";
import Title from "../Title/Title";
const Tour = () => {
  const [tour, setTour] = useState([]);
  useEffect(() => {
    setTour(featuredTopics);
  });
  return (
    <>
      <section className="section" id="tours">
        <Title heading="featured" subHeading="Tours"/>

        <div className="section-center featured-center">
          {tour &&
            tour.map((item) => {
              return (
                <div  key={item.id}>
                  <article className="tour-card">
                    <div className="tour-img-container">
                      <img src={item.thumbnail} className="tour-img" alt="" />
                      <p className="tour-date">{item.date}</p>
                    </div>
                    <div className="tour-info">
                      <div className="tour-title">
                        <h4>{item.heading}</h4>
                      </div>
                      <p>{item.para}</p>
                      <div className="tour-footer">
                        <p>
                          <span>
                            <i className={item.icon}></i>
                          </span>{" "}
                          {item.country}
                        </p>
                        <p>{item.duration}</p>
                        <p>{item.payment}</p>
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
