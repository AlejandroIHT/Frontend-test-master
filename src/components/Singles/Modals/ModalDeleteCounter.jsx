import React from "react";
import Modal from "./Modal";
import ButtonOrange from "../Buttons/ButtonOrange";
import ButtonWhite from "../Buttons/ButtonWhite";

const ModalDeleteCounter = ({
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
            {`Delete the “${data.counter.title}” counter?`}
          </h1>
          <p className="ModalNoMinus__body__container--body">
            This cannot be undone.
          </p>
          <div className="ModalNoMinus__body__container--btns">
            <ButtonOrange
              handleClick={handleClickClouse}
              styles="margin-right-10"
            >
              Cancel
            </ButtonOrange>
            <ButtonWhite handleClick={handleClickDelete} styles="alert">Delete</ButtonWhite>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalDeleteCounter;
