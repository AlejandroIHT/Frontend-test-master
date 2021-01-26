import React, { useState, useEffect, useContext } from "react";
import AppContext from "../context/AppContext";
import Search from "../components/Search";
import AddButton from "../components/AddButton";
import Counter from "../components/Counter";
import Http from "../libs/http";

const API = "/api/v1/counter";

const MainScreen = () => {
  const [loading, setLoading] = useState(false);
  const { state, getCounters } = useContext(AppContext);
  //Take data base
  const get = async () => {
    setLoading(true);
    const data = await Http.instance.get(API);
    //Add global state
    getCounters(data);
    setLoading(false);
  }

  useEffect(() => {
    get();
  }, []);

  return (
    <div className="MainScreen">
      {loading && <h1>Loading...</h1>}
      <header className="MainScreen__container__header">
        <Search />
      </header>
      <div className="MainScreen__container__titles">{console.log(state)}</div>
      <div className="MainScreen__container__list">
        <Counter />
      </div>
      <footer>
        <AddButton />
      </footer>
    </div>
  );
};

export default MainScreen;
