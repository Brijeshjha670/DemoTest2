import React from "react";

import "./Moveable.css";

const Movable = () => {
  return (
    <div>
      <div>
        <button className="horizontal">Up</button>
      </div>
      <div style={{ display: "flex" ,justifyContent:'space-between'}}>
        <button className="vertical">Left</button>
        
          <div className="block"></div>
        
        <div>
          <button className="vertical">Right</button>
        </div>
      </div>

      <div>
        <button className="horizontal">Down</button>
      </div>
    </div>
  );
};

export default Movable;
