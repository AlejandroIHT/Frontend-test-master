import React from "react";
import "../styles/components/counter.css";
import plusOrangeIcon from "../assets/counter/plusOrange.svg";
import minusOrangeIcon from "../assets/counter/minusOrange.svg";
import minusDisableIcon from "../assets/counter/minusDisable.svg";

const Counter = ({
  title,
  cuantity,
  minusDisable,
  handleClickNoMinusCounter,
  handleClickMinus,
  handleClickPLus,
}) => {
  return (
    <div className="Counter">
      <p className="Counter__title">{title}</p>
      <div className="Counter__container__count">
        <button
          className={
            minusDisable
              ? "Counter__container__count--button disable"
              : "Counter__container__count--button"
          }
          onClick={cuantity === 0 ? handleClickNoMinusCounter : handleClickMinus}
          type="button"
        >
          <img
            src={cuantity === 0 ? minusDisableIcon : minusOrangeIcon}
            alt="minus"
          />
        </button>
        <p className={`Coutner__container__count--number ${cuantity === 0 && "disable"}`}>{cuantity}</p>
        <button
          className="Counter__container__count--button"
          onClick={handleClickPLus}
          type="button"
        >
          <img src={plusOrangeIcon} alt="plus" />
        </button>
      </div>
    </div>
  );
};

export default Counter;
