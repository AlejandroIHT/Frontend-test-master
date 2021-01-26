import React, { useEffect } from "react";
import './styles/globalStyle.css';
import MainScreen from "./containers/MainScreen";

// You don't have to use `fetch` btw, use whatever you want
const getCounters = () =>
  fetch("/api/v1/counter", { method: "get" }).then((res) => res.json());

const App = () => {
  useEffect(() => {
    getCounters().then(console.log, console.error);
  }, []);

  return <MainScreen />;
};

export default App;
