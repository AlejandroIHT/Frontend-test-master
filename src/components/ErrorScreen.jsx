import React from "react";
import '../styles/components/errorScreen.css';
import ButtonWhite from "./ButtonWhite";

const ErrorScreen = ({ title, body, handleClick }) => {
  return (
    <>
      <h2 className="ErrorScreen--title">{title}</h2>
      <p className="ErrorScreen--body">{body}</p>
      <ButtonWhite>Retry</ButtonWhite>
    </>
  );
};

export default ErrorScreen;
