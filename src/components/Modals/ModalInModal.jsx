import React from "react";
import ReactDOM from "react-dom";
import "../../styles/components/Modals/modalInModal.css";

const ModalInModal = ({ isOpen, children }) => {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="ModalInModal">
      <div className="ModalInModal__container">{children}</div>
    </div>,
    document.getElementById("modalInModal")
  );
};

export default ModalInModal;