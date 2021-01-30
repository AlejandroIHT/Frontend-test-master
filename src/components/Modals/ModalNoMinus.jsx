import React from "react";
import "../../styles/components/Modals/modalNoMinus.css";
import ModalInModal from "./ModalInModal";
import ButtonOrange from "../Buttons/ButtonOrange";
import ButtonWhite from "../Buttons/ButtonWhite";

const ModalNoMinus = ({
  isOpen,
  data,
  handleClickClouse,
  handleClickMinus,
}) => {
  return (
    <ModalInModal isOpen={isOpen}>
      <div className="ModalNoMinus__body">
        <div className="ModalNoMinus__body__container">
          <h1 className="ModalNoMinus__body__container--title">
            {`Couldn’t update “${data.title}” to 1`}
          </h1>
          <p className="ModalNoMinus__body__container--body">
            The Internet connection appears to be offline.
          </p>
          <div className="ModalNoMinus__body__container--btns">
            <ButtonOrange
              handleClick={() => handleClickMinus(data.id)}
              styles="margin-right-10"
            >
              Retry
            </ButtonOrange>
            <ButtonWhite handleClick={handleClickClouse}>Dismiss</ButtonWhite>
          </div>
        </div>
      </div>
    </ModalInModal>
  );
};

export default ModalNoMinus;
