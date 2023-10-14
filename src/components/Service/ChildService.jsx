import React from "react";

const ChildService = ({ id, icon, heading, text }) => {
  return (
    <div key={id}>
      <article className="service" key={id}>
        <span className="service-icon">
          <i className={icon}></i>
        </span>
        <div className="service-info">
          <h4 className="service-title">{heading}</h4>
          <p className="service-text">{text}</p>
        </div>
      </article>
    </div>
  );
};

export default ChildService;
