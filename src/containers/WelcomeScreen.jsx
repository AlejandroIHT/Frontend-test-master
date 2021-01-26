import React from "react";
import "../styles/containers/welcomeScreen.css";
import ButtonOrange from "../components/ButtonOrange";
import rabbit from "../assets/welcome/Rabbit.svg";
import add from "../assets/welcome/Add.svg";
import bell from "../assets/welcome/Bell.svg";
import stopwatch from "../assets/welcome/Stopwatch.svg";

const WelcomeScreen = ({ handleClick }) => {
  return (
    <div className="WelcomeScreen">
      <div className="WelcomeScreen__container--icons">
        <div className="Icons__square--topLeft">
          <img
            className="Icons__square--icon rabbit"
            src={rabbit}
            alt="rabbit"
          />
        </div>
        <div className="Icons__square--topRight">
          <img className="Icons__square--icon" src={bell} alt="bell" />
        </div>
        <div className="Icons__square--bottomLeft">
          <img
            className="Icons__square--icon"
            src={stopwatch}
            alt="stopwatch"
          />
        </div>
        <div className="Icons__square--bottomRight">
          <img className="Icons__square--icon" src={add} alt="add" />
        </div>
      </div>
      <h1 className="WelcomeScreen__title">Welcome to Counters</h1>
      <p className="WelcomeScreen__body--p">
        Capture cups of lattes, frapuccinos, or anything else that can be
        counted.
      </p>
      <div className="Welcome__container__button">
        <ButtonOrange handleClick={handleClick}>Get started</ButtonOrange>
      </div>
    </div>
  );
};

export default WelcomeScreen;
