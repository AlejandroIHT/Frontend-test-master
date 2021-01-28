import React from "react";
import "../styles/components/modalCreateCounter.css";
import Modal from "./Modal";
import ModalErrorCreateCounter from "./ModalErrorCreateCounter";
import Loader from "./Loader";
import ButtonOrange from "./ButtonOrange";
import clouseIcon from "../assets/modal/clouse.svg";

const ModalCreateCounter = ({
  isOpen,
  counter,
  loading,
  error,
  modal,
  handleClickClouse,
  handleClickSendNewCounter,
  handleChangeNewCounter,
  handleClickClouseModalInModal
}) => {
  return (
    <Modal isOpen={isOpen}>
      <div className="ModalCreateCounter__header">
        <div className="ModalCreateCounter__header__container">
          <button
            className="ModalCreateCounter__header--clouseBtn"
            onClick={handleClickClouse}
          >
            <img src={clouseIcon} alt="clouse icon" />
          </button>
          <h1 className="ModalCreateCounter__header--title">Create counter</h1>
        </div>
        <ButtonOrange handleClick={handleClickSendNewCounter}>
          Save
        </ButtonOrange>
      </div>
      <div className="ModalCreateCounter__body">
        <div className="ModalCreateCounter__body__container">
          <label
            className="ModalCreateCounter__body__container--label"
            htmlFor="newCounterInput"
          >
            Name
          </label>
          <input
            className="ModalCreateCounter__body__container--input"
            type="text"
            id="newCounterInput"
            placeholder="Cups of coffee"
            value={counter.title}
            onChange={handleChangeNewCounter}
          />
          <p className="ModalCreateCounter__body__container--textHelp">
            Give it a name. Creative block? See{" "}
            <button type="button">examples</button>.
          </p>
        </div>
        {loading && (
          <div className="ModalCreateCounter__body__container--loader">
            <Loader />
          </div>
        )}
        {error && (
          <ModalErrorCreateCounter
            isOpen={modal}
            handleClickClouse={handleClickClouseModalInModal}
          />
        )}
      </div>
    </Modal>
  );
};

export default ModalCreateCounter;
