import React from "react";
import ReactDOM from "react-dom";
import "../../styles/components/Modals/modal.css";

const Modal = ({ isOpen, small, children, fullWidth }) => {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className={`Modal ${fullWidth ? "fullWidth" : ""}`}>
      <div className={`Modal__container ${small ? "small" : ""}`}>
        {children}
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
