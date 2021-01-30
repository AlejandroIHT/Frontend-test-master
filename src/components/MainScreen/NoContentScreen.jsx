import React from "react";
import "../../styles/components/MainScreen/noContentScreen.css";
import ButtonWhite from "../Buttons/ButtonWhite";

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
