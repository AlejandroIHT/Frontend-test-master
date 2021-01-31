import React from "react";
import Modal from "./Modal";
import ButtonOrange from "../Buttons/ButtonOrange";
import ButtonWhite from "../Buttons/ButtonWhite";

const ModalErrorDelete = ({
  isOpen,
  data,
  handleClickClouse,
  handleClickDelete,
}) => {
  return (
    <Modal isOpen={isOpen} small>
      <div className="ModalNoMinus__body">
        <div className="ModalNoMinus__body__container">
          <h1 className="ModalNoMinus__body__container--title">
            {`Couldn’t delete “${data.counter.title}”`}
          </h1>
          <p className="ModalNoMinus__body__container--body">
            The Internet connection appears to be offline.
          </p>
          <div className="ModalNoMinus__body__container--btns">
            <ButtonOrange
              handleClick={handleClickDelete}
              styles="margin-right-10"
            >
              Retry
            </ButtonOrange>
            <ButtonWhite handleClick={handleClickClouse}>Dismiss</ButtonWhite>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalErrorDelete;
