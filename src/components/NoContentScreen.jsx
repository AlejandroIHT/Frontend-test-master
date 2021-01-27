import React from "react";
import '../styles/components/noContentScreen.css';

const NoContentScreen = ({ title, body }) => {
  return (
    <>
      <h2 className="NoContentScreen--title">{title}</h2>
      <p className="NoContentScreen--body">{body}</p>
    </>
  );
};

export default NoContentScreen;
