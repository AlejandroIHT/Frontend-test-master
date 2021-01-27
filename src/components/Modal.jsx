import React from "react";
import ReactDOM from "react-dom";
import "../styles/components/modal.css";

const Modal = ({ isOpen, children }) => {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="Modal">
      <div className="Modal__container">{children}</div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
