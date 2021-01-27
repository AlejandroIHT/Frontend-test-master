import React from "react";
import "../styles/components/buttonOrange.css";

const ButtonOrange = ({ children, name, styles, handleClick }) => {
  return (
    <button
      className={`ButtonOrange ${styles}`}
      onClick={handleClick}
      name={name}
      type="button"
    >
      {children}
    </button>
  );
};

export default ButtonOrange;
