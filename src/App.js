import React, { useState, useEffect } from "react";
import "./styles/globalStyle.css";
import useInitialState from "./hooks/useInitialState";
import AppContext from "./context/AppContext";
import MainScreen from "./containers/MainScreen";
import WelcomeScreen from "./containers/WelcomeScreen";
import Storage from "./libs/storage";

const App = () => {
  const [welcome, setWelcome] = useState(true);
  const initialState = useInitialState();
  useEffect(() => {
    const response = Storage.instance.get("welcome");
    if (response) setWelcome(false);
  }, []);

  const handleClickStart = () => {
    Storage.instance.post("welcome", "true");
    console.log("Entre")
    setWelcome(false);
  };

  return (
    <AppContext.Provider value={initialState}>
      {welcome && <WelcomeScreen handleClick={handleClickStart} />}
      {!welcome && <MainScreen />}
    </AppContext.Provider>
  );
};

export default App;
