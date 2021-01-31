import React, { useContext } from "react";
import "../../../styles/components/Singles/Modals/modalExampleCounters.css";
import Modal from "./Modal";
import ExamplesCountersSections from "../ExamplesCountersSections/ExamplesCountersSections";
import AppContext from "../../../context/AppContext";
import clouseIcon from "../../../assets/modal/clouse.svg";

const ModalExampleCounters = ({ isOpen, handleClickClouse, handleClickSelectOption }) => {
  const { state } = useContext(AppContext);
  const { examples } = state;

  return (
    <Modal isOpen={isOpen} fullWidth>
      <div className="ModalExampleCounters__header">
        <div className="ModalExampleCounters__header__container">
          <button
            className="ModalExampleCounters__header--clouseBtn"
            onClick={handleClickClouse}
          >
            <img src={clouseIcon} alt="clouse icon" />
          </button>
          <h1 className="ModalExampleCounters__header--title">Examples</h1>
        </div>
      </div>
      <div className="ModalExampleCounters__body">
        <div className="ModalExampleCounters__body__container">
          <p className="ModalExampleCounters__body__container--textHelp">
            Select an example to add it to your counters.
          </p>
          {examples.map((item) => (
            <ExamplesCountersSections
              key={item.title}
              data={item}
              handleClick={handleClickSelectOption}
            />
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default ModalExampleCounters;
