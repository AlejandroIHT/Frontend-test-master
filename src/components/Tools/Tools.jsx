import React from "react";
import "../../styles/components/Tools/tools.css";

const Tools = ({ children }) => {
  return (
    <div className="Tools">
      {children}
      <div className="Tools__arrow"></div>
    </div>
  );
};

export default Tools;
