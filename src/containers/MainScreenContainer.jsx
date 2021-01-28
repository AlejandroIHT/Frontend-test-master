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
  const [search, setSearch] = useState([]);

  /*---- Take data base ----*/
  const get = async () => {
    setLoading(true);
    const data = await Http.instance.get(API);
    //Add global state
    getCounters(data);
    setSearch(data);
    setLoading(false);
  };

  useEffect(() => {
    get();
  }, []);

  /*---- Update search ----*/
  useEffect(() => {
    setSearch(counters);
  }, [counters]);

  /*---- Open modal ----*/
  const handleClickAddCounter = () => setModalAddCounter(!modalAddCounter);

  /*---- Search ----*/
  const handleChangeSearch = (e) => {
    const filterSearch = counters.filter((item) =>
      item.title.toUpperCase().includes(e.target.value.toUpperCase())
    );

    setSearch(filterSearch);
  };

  /*---- Times Amount ----*/
  const times = () => {
    let timesAmount = 0;
    search.forEach((item) => {
      timesAmount += item.count;
    });
    return timesAmount;
  };

  return (
    <MainScreen
      loading={loading}
      state={state}
      counters={counters}
      search={search}
      refreshingState={refreshingState}
      modalAddCounter={modalAddCounter}
      setModalAddCounter={setModalAddCounter}
      times={times}
      handleClickAddCounter={handleClickAddCounter}
      handleChangeSearch={handleChangeSearch}
    />
  );
};

export default MainScreenContainer;
