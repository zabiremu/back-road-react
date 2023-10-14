import React, { useEffect, useState } from "react";
import { pageLink } from "../../data";
const PageLinks = ({ parentClass, childClass }) => {
  const [link, setLink] = useState([]);
  useEffect(() => {
    setLink(pageLink);
  }, []);
  return (
    <>
      <ul className={parentClass} id="nav-links">
        {link &&
          link.map((item) => {
            return (
              <div key={item.id}>
                <li>
                  <a href={item.href} className={childClass} style={{color:"red"}}>
                    {item.text}
                  </a>
                </li>
              </div>
            );
          })}
      </ul>
    </>
  );
};

export default PageLinks;
