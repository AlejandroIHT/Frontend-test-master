import React, { useEffect } from "react";
import './styles/globalStyle.css';
import MainScreen from "./containers/MainScreen";
import Http from './libs/http';

// You don't have to use `fetch` btw, use whatever you want
const getCounters = () =>
  Http.instance.get("/api/v1/counter");

const App = () => {
  useEffect(() => {
    getCounters().then(console.log, console.error);
  }, []);

  return <MainScreen />;
};

export default App;
