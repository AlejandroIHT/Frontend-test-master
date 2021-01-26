import React from "react";
import Storage from "../libs/storage";

const WelcomeScreen = () => {
  return (
    <div className="WelcomeScreen">
      <div className="WelcomeScreen__container--icons"></div>
      <div className="WelcomeScreen__container--title">
        <h1 className="title__text">Welcome to Counters</h1>
      </div>
      <div className="WelcomeScreen__container--p">
        <p className="p__text">
          Capture cups of lattes, frapuccinos, or anything else that can be
          counted.
        </p>
      </div>
      <button className="WelcomeScreen__start">Get started</button>
    </div>
  );
};

export default WelcomeScreen;
