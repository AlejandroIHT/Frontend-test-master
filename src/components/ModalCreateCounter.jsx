import React, { useState, useContext } from "react";
import "../styles/components/modalCreateCounter.css";
import AppContext from "../context/AppContext";
import Modal from "./Modal";
import ModalErrorCreateCounter from "./ModalErrorCreateCounter";
import Loader from "./Loader";
import ButtonOrange from "./ButtonOrange";
import clouseIcon from "../assets/modal/clouse.svg";
import Http from "../libs/http";

const API = "/api/v1/counter";

const ModalCreateCounter = ({ isOpen, handleClickClouse }) => {
  const [counter, setCounter] = useState({ title: "" });
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [error, setError] = useState(null);
  const { addCounters } = useContext(AppContext);

  /*---- Change state title of the new counter ----*/
  const handleChangeNewCounter = (e) => setCounter({ title: e.target.value });

  /*---- Create new counter ----*/
  const handleClickSendNewCounter = async () => {
    if (counter.title.length !== 0) {
      setLoading(true);
      try {
        const data = await Http.instance.post(API, JSON.stringify(counter));

        if (data.message) throw Error(data.message);

        addCounters(data);
        setCounter({ title: "" });
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
        setModal(true);
      }
    }
  };

  /*---- Clouse Modal in Modal ----*/
  const handleClickClouseModalInModal = () => setModal(!modal);

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
