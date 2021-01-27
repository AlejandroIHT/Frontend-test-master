import React from "react";
import "../styles/components/buttonWhite.css";

const ButtonWhite = ({ children, name, handleClick }) => {
  return (
    <button
      className="ButtonWhite"
      onClick={handleClick}
      name={name}
      type="button"
    >
      {children}
    </button>
  );
};

export default ButtonWhite;
