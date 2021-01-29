import React from "react";
import "../styles/components/buttonWhite.css";

const ButtonWhite = ({ children, name, styles, handleClick }) => {
  return (
    <button
      className={`ButtonWhite ${styles}`}
      onClick={handleClick}
      name={name}
      type="button"
    >
      {children}
    </button>
  );
};

export default ButtonWhite;
