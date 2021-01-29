import React, { useState, useEffect, useContext } from "react";
import AppContext from "../context/AppContext";
import Http from "../libs/http";
import MainScreen from "../components/MainScreen";

const API_GET = "/api/v1/counter";
const API_DECREMENT = "/api/v1/counter/dec";
const API_INCREMENT = "/api/v1/counter/inc";

const MainScreenContainer = () => {
  const [loading, setLoading] = useState(false);
  const [errorGet, setErrorGet] = useState(null);
  const [loadingCounter, setLoadingCounter] = useState(false);
  const [refreshingState, setRefreshingState] = useState(false);
  const [modalAddCounter, setModalAddCounter] = useState(false);
  const [modalNoMinus, setModalNoMinus] = useState({
    id: "",
    title: "",
    modal: false,
  });
  const { state, getCounters } = useContext(AppContext);
  const { counters } = state;
  const [search, setSearch] = useState([]);

  /*---- Take data base ----*/
  const get = async () => {
    if (refreshingState) {
      try {
        const data = await Http.instance.get(API_GET);
        if (data.message) throw Error(error);

        //Add global state
        getCounters(data);
        setSearch(data);
        setRefreshingState(false);
      } catch (error) {
        setErrorGet(error);
        setRefreshingState(false);
      }

      return;
    }

    setLoading(true);
    try {
      const data = await Http.instance.get(API_GET);
      if (data.message) throw Error(error);

      //Add global state
      getCounters(data);
      setSearch(data);
      setLoading(false);
      setRefreshingState(false);
    } catch (error) {
      setErrorGet(error);
      setLoading(false);
      setRefreshingState(false);
    }
  };

  /*---- Decrement counter ----*/
  const postDecrement = async (body) => {
    setLoadingCounter(true);
    const data = await Http.instance.post(API_DECREMENT, JSON.stringify(body));
    const upDateCounters = counters.map((item) => {
      if (item.id === data.id) item.count = data.count;
      return item;
    });

    //Add global state
    getCounters(upDateCounters);

    //Update search
    const searchData = search.filter((itemSearch) =>
      upDateCounters.filter((item) => item.id === itemSearch.id)
    );
    setSearch(searchData);
    setLoadingCounter(false);
  };

  /*---- Increment counter ----*/
  const postIncrement = async (body) => {
    setLoadingCounter(true);
    const data = await Http.instance.post(API_INCREMENT, JSON.stringify(body));
    const upDateCounters = counters.map((item) => {
      if (item.id === data.id) item.count = data.count;
      return item;
    });

    //Add global state
    getCounters(upDateCounters);

    //Update search
    const searchData = search.filter((itemSearch) =>
      upDateCounters.filter((item) => item.id === itemSearch.id)
    );
    setSearch(searchData);
    setLoadingCounter(false);
  };

  useEffect(() => {
    get();
  }, []);

  /*---- Retry get ----*/
  const handleClickRetryGet = () => get();

  /*---- Update search ----*/
  useEffect(() => {
    if (!loadingCounter) setSearch(counters);
  }, [counters]);

  /*---- Refreshing ----*/
  useEffect(() => {
    if (refreshingState) get();
  }, [refreshingState]);

  const handleClickRefreshing = () => {
    setRefreshingState(true);
  };

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
      setModalNoMinus({
        id: counter[0].id,
        title: counter[0].title,
        modal: !modalNoMinus.modal,
      });
      return;
    }

    postDecrement({ id: counter[0].id });
  };

  const handleClickIncrement = (e) => {
    const counter = counters.filter((item) => item.id === e);
    postIncrement({ id: counter[0].id });
  };

  const handleClickNoMinusCounter = () =>
    setModalNoMinus({ ...modalNoMinus, modal: !modalNoMinus.modal });

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
      errorGet={errorGet}
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
      handleClickIncrement={handleClickIncrement}
      handleClickNoMinusCounter={handleClickNoMinusCounter}
      handleClickRefreshing={handleClickRefreshing}
      handleClickRetryGet={handleClickRetryGet}
    />
  );
};

export default MainScreenContainer;
