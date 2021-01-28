import React, { useState, useContext } from "react";
import AppContext from "../context/AppContext";
import ModalCreateCounter from "../components/ModalCreateCounter";
import Http from "../libs/http";

const API = "/api/v1/counter";

const ModalCreateCounterContainer = ({ isOpen, setModalAddCounter, handleClickClouse }) => {
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
        setLoading(false);
        setModalAddCounter(!isOpen);
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
    <ModalCreateCounter
      isOpen={isOpen}
      counter={counter}
      loading={loading}
      error={error}
      modal={modal}
      handleClickClouse={handleClickClouse}
      handleClickSendNewCounter={handleClickSendNewCounter}
      handleChangeNewCounter={handleChangeNewCounter}
      handleClickClouseModalInModal={handleClickClouseModalInModal}
    />
  );
};

export default ModalCreateCounterContainer;
