import React from "react";
import "../styles/components/modalErrorCreateCounter.css";
import ButtonOrange from "./ButtonOrange";
import ModalInModal from "./ModalInModal";

const ModalErrorCreateCounter = ({ isOpen, handleClickClouse }) => {
  return (
    <ModalInModal isOpen={isOpen}>
      <div className="ModalErrorCreateCounter__body">
        <div className="ModalErrorCreateCounter__body__container">
          <h1 className="ModalErrorCreateCounter__body__container--title">
            Couldn’t create counter
          </h1>
          <p className="ModalErrorCreateCounter__body__container--body">
            The Internet connection appears to be offline.
          </p>
          <ButtonOrange handleClick={handleClickClouse}>Dismiss</ButtonOrange>
        </div>
      </div>
    </ModalInModal>
  );
};

export default ModalErrorCreateCounter;
