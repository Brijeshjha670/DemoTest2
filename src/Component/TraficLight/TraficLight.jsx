// code for interview

import React, { useEffect, useState } from "react";

import "./TraficLight.css";

const LIGHTS = {
  red: "red",
  green: "green",
  yellow: "yellow",
};

const TraficLight = () => {
  const [active, setActive] = useState(LIGHTS.red);


  useEffect(() => {
    switch (active) {
      case LIGHTS.red:
        setTimeout(() => {
          setActive(LIGHTS.yellow);
        }, 4000);
        break;
      case LIGHTS.yellow:
        setTimeout(() => {
          setActive(LIGHTS.green);
        }, 500);
        break;
      case LIGHTS.green:
        setTimeout(() => {
          setActive(LIGHTS.red);
        }, 3000);
        break;
    }
  }, [active]);

  return (
    <div className="wrapper">
      <div
        className=" light green"
        style={active !== "green" ? { opacity: "0.5" } : null}
      >
        A
      </div>
      <div
        className=" light yellow"
        style={active !== "yellow" ? { opacity: "0.5" } : null}
      >
        B
      </div>
      <div
        className=" light red"
        style={active !== "red" ? { opacity: "0.5" } : null}
      >
        C
      </div>
    </div>
  );
};

export default TraficLight;
