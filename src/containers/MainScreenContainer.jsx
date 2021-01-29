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
  const [selectedACounter, setSelectedACounter] = useState("");
  const [modalDeleteCounter, setModalDeleteCounter] = useState({
    counter: {},
    modal: false,
  });
  const [errorDelete, setErrorDelete] = useState(false);
  const [modalAddCounter, setModalAddCounter] = useState(false);
  const [modalNoMinus, setModalNoMinus] = useState({
    id: "",
    title: "",
    modal: false,
  });
  const { state, getCounters } = useContext(AppContext);
  const { counters } = state;
  const [search, setSearch] = useState([]);
  const [searchValue, setSearchValue] = useState("");

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

  /*---- Delete counter ----*/
  const handleClickDeleteModal = () => {
    if (modalDeleteCounter.modal) {
      setModalDeleteCounter({ counter: {}, modal: false });
      return;
    }
    const counter = counters.filter((item) => item.id === selectedACounter);
    setModalDeleteCounter({ counter: counter[0], modal: true });
  };

  const handleClickClouseErrorDeleteModal = () => setErrorDelete(false);

  const handleClickDeleteCounter = async () => {
    try {
      const data = await Http.instance.delete(
        API_GET,
        JSON.stringify({ id: selectedACounter })
      );
      if (data.message) throw Error(error);

      const upDateCounters = counters.filter((item) => item.id !== data);
      //Add global state
      getCounters(upDateCounters);

      //Update search
      const searchData = search.filter((itemSearch) =>
        upDateCounters.filter((item) => item.id === itemSearch.id)
      );
      setSearch(searchData);
      setModalDeleteCounter({ counter: {}, modal: false });
      setSelectedACounter("")
      setErrorDelete(false);
    } catch (error) {
      setModalDeleteCounter({ ...modalDeleteCounter, modal: false });
      setErrorDelete(true);
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

  /*---- Select a counter ----*/
  const handleClickSelectCounter = (e) => {
    if (e === selectedACounter) {
      setSelectedACounter("");
      return;
    }
    setSelectedACounter(e);
  };

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
  const handleClickAddCounter = () => {
    setModalAddCounter(!modalAddCounter);
  };

  /*---- Search ----*/
  const handleChangeSearch = (e) => {
    setSearchValue(e.target.value);
    const filterSearch = counters.filter((item) =>
      item.title.toUpperCase().includes(e.target.value.toUpperCase())
    );

    setSearch(filterSearch);
  };

  const handleClickCancelSearch = () => {
    setSearchValue("");
    setSearch(counters);
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
      selectedACounter={selectedACounter}
      search={search}
      refreshingState={refreshingState}
      modalDeleteCounter={modalDeleteCounter}
      errorDelete={errorDelete}
      modalAddCounter={modalAddCounter}
      modalNoMinus={modalNoMinus}
      setModalAddCounter={setModalAddCounter}
      times={times}
      searchValue={searchValue}
      handleClickAddCounter={handleClickAddCounter}
      handleChangeSearch={handleChangeSearch}
      handleClickCancelSearch={handleClickCancelSearch}
      handleClickMinus={handleClickMinus}
      handleClickIncrement={handleClickIncrement}
      handleClickNoMinusCounter={handleClickNoMinusCounter}
      handleClickRefreshing={handleClickRefreshing}
      handleClickRetryGet={handleClickRetryGet}
      handleClickSelectCounter={handleClickSelectCounter}
      handleClickDeleteModal={handleClickDeleteModal}
      handleClickDeleteCounter={handleClickDeleteCounter}
      handleClickClouseErrorDeleteModal={handleClickClouseErrorDeleteModal}
    />
  );
};

export default MainScreenContainer;
