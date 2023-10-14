import React from "react";

const Title = ({heading,subHeading}) => {
  return (
    <>
      <div className="section-title">
        <h2>
          {heading} <span>{subHeading}</span>
        </h2>
      </div>
    </>
  );
};

export default Title;
