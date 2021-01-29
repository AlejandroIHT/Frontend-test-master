import React from "react";
import "../styles/components/noContentScreen.css";
import ButtonWhite from "./ButtonWhite";

const NoContentScreen = ({ title, body, error, handleClick }) => {
  return (
    <>
      <h2 className="NoContentScreen--title">{title}</h2>
      <p className="NoContentScreen--body">{body}</p>
      {error && <ButtonWhite handleClick={handleClick}>Retry</ButtonWhite>}
    </>
  );
};

export default NoContentScreen;
