import React, { useEffect, useState } from "react";
import { ourServices } from "../../data";
import Title from "../Title/Title";
import ChildService from "./ChildService";
const Service = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    setServices(ourServices);
  },[]);
  return (
    <>
      <section className="section services" id="services">
        <Title heading={"Our"} subHeading={"Services"} />

        <div className="section-center services-center">
          {services &&
            services.map((item) => {
              const { id, icon, heading, text } = item;
              return (
                <div  key={item.id}>
                  <ChildService {...item} />
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
};

export default Service;
