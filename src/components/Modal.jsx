import React from "react";
import ReactDOM from "react-dom";
import "../styles/components/modal.css";

const Modal = ({ isOpen, small, children }) => {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="Modal">
      <div className={`Modal__container ${small ? "small" : ""}`}>
        {children}
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
