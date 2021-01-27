import React, { useState, useEffect, useContext } from "react";
import AppContext from "../context/AppContext";
import Http from "../libs/http";
import MainScreen from "../components/MainScreen";

const API = "/api/v1/counter";

const MainScreenContainer = () => {
  const [loading, setLoading] = useState(false);
  const [refreshingState, setRefreshingState] = useState(false);
  const [modalAddCounter, setModalAddCounter] = useState(false);
  const { state, getCounters } = useContext(AppContext);
  const { counters } = state;

  /*---- Take data base ----*/
  const get = async () => {
    setLoading(true);
    const data = await Http.instance.get(API);
    //Add global state
    getCounters(data);
    setLoading(false);
  };

  useEffect(() => {
    get();
  }, []);

  /*---- Open modal ----*/
  const handleClickAddCounter = () => setModalAddCounter(!modalAddCounter);


  /*---- Times Amount ----*/
  const times = () => {
    let timesAmount = 0;
    counters.forEach((item) => {
      timesAmount += item.count;
    });
    return timesAmount;
  };

  return (
    <MainScreen
      loading={loading}
      state={state}
      counters={counters}
      refreshingState={refreshingState}
      modalAddCounter={modalAddCounter}
      times={times}
      handleClickAddCounter={handleClickAddCounter}
    />
  );
};

export default MainScreenContainer;
