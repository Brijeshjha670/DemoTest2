import React, { useState } from "react";

import { FaCircleArrowDown } from "react-icons/fa6";
import { FaCircleArrowUp } from "react-icons/fa6";

const Explorer = ({ data }) => {
  const [expand, setExpand] = useState(false);

  return (
    <div>
      <p 
      onClick={() => setExpand((prevState) => !prevState)}
      style={{cursor:"pointer",display:'flex',alignItems:'center',margin:'10px',padding:'10px'}}
      >
        {data.isFolder? expand ? <FaCircleArrowDown /> : <FaCircleArrowUp />:null}
        {data.name}
      </p>
      <div style={expand ? { display: "block" } : { display: "none" }}>
        {data.isFolder && (
          <div style={{ marginLeft: "15px" }}>
            {data.items.map((item) => (
              <Explorer key={item.name} data={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Explorer;
