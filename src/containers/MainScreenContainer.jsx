import React, { useState, useEffect, useContext } from "react";
import AppContext from "../context/AppContext";
import Http from "../libs/http";
import MainScreen from "../components/MainScreen";

const API_GET = "/api/v1/counter";
const API_DECREMENT = "/api/v1/counter/dec";

const MainScreenContainer = () => {
  const [loading, setLoading] = useState(false);
  const [refreshingState, setRefreshingState] = useState(false);
  const [modalAddCounter, setModalAddCounter] = useState(false);
  const [modalNoMinus, setModalNoMinus] = useState(false);
  const { state, getCounters } = useContext(AppContext);
  const { counters } = state;
  const [search, setSearch] = useState([]);

  /*---- Take data base ----*/
  const get = async () => {
    setLoading(true);
    const data = await Http.instance.get(API_GET);
    //Add global state
    getCounters(data);
    setSearch(data);
    setLoading(false);
  };

  /*---- Decrement counter ----*/
  const postDecrement = async (body) => {
    setLoading(true);
    const data = await Http.instance.post(API_DECREMENT, JSON.stringify(body));
    const upDateCounters = counters.map((item) => {
      if (item.id === data.id) item.count = data.count;
      return;
    });
    //Add global state
    getCounters(upDateCounters);
    setSearch(upDateCounters);
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

  /*---- No Minus Counter ----*/
  const handleClickMinus = (e) => {
    const counter = counters.filter((item) => item.id === e);
    if (counter[0].count === 0) {
      setModalNoMinus(!modalNoMinus);
      return;
    }

    postDecrement({ id: counter[0].id });
  };

  const handleClickNoMinusCounter = () => setModalNoMinus(!modalNoMinus);

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
      modalNoMinus={modalNoMinus}
      setModalAddCounter={setModalAddCounter}
      times={times}
      handleClickAddCounter={handleClickAddCounter}
      handleChangeSearch={handleChangeSearch}
      handleClickMinus={handleClickMinus}
      handleClickNoMinusCounter={handleClickNoMinusCounter}
    />
  );
};

export default MainScreenContainer;
