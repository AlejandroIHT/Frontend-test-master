import React from "react";
import "../../../styles/components/Singles/Buttons/buttonOrange.css";

const ButtonOrange = ({ children, name, disable, styles, handleClick }) => {
  return (
    <button
      className={`ButtonOrange ${styles} ${disable && "disable"}`}
      onClick={handleClick}
      name={name}
      type="button"
      disable={disable}
    >
      {children}
    </button>
  );
};

export default ButtonOrange;
