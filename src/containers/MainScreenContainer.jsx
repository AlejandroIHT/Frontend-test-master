import React, { useState, useEffect, useContext } from "react";
import AppContext from "../context/AppContext";
import Http from "../libs/http";
import { API, POST_INCREMENTS_COUNT, POST_DECREMENTS_COUNT } from "../res/api";
import MainScreen from "../components/Templates/MainScreen/MainScreen";

const MainScreenContainer = () => {
  const [loading, setLoading] = useState(false);
  const [errorGet, setErrorGet] = useState(null);
  const [loadingCounter, setLoadingCounter] = useState(false);
  const [refreshingState, setRefreshingState] = useState(false);
  const [selectedACounter, setSelectedACounter] = useState("");
  const [toolShare, setToolShare] = useState(false);
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
  
  /*---- Take Data Base ----*/
  const get = async () => {
    if (refreshingState) {
      try {
        const data = await Http.instance.get(API);
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
      const data = await Http.instance.get(API);
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
  /*---- End Take Data Base ----*/

  /*---- Delete Counter ----*/
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
        API,
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
      setSelectedACounter("");
      setSearchValue("")
      setErrorDelete(false);
    } catch (error) {
      setModalDeleteCounter({ ...modalDeleteCounter, modal: false });
      setErrorDelete(true);
    }
  };
  /*---- End Delete Counter ----*/

  /*---- Decrement Counter ----*/
  const postDecrement = async (body) => {
    setLoadingCounter(true);
    const data = await Http.instance.post(POST_DECREMENTS_COUNT, JSON.stringify(body));
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
  /*---- End Decrement Counter ----*/

  /*---- Increment Counter ----*/
  const postIncrement = async (body) => {
    setLoadingCounter(true);
    const data = await Http.instance.post(POST_INCREMENTS_COUNT, JSON.stringify(body));
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
  /*---- End Increment Counter ----*/

  /*---- Select A Counter ----*/
  const handleClickSelectCounter = (e) => {
    if (e === selectedACounter) {
      setSelectedACounter("");
      return;
    }
    setSelectedACounter(e);
  };
  /*---- End Select A Counter ----*/

  /*---- Retry Get ----*/
  const handleClickRetryGet = () => get();
  /*---- End Retry Get ----*/

  /*---- Update Search ----*/
  useEffect(() => {
    if (!loadingCounter) setSearch(counters);
  }, [counters]);
  /*---- End Update Search ----*/

  /*---- Refreshing ----*/
  useEffect(() => {
    if (refreshingState) get();
  }, [refreshingState]);

  const handleClickRefreshing = () => {
    setRefreshingState(true);
  };
  /*---- End Refreshing ----*/

  /*---- Open Modal ----*/
  const handleClickAddCounter = () => {
    setModalAddCounter(!modalAddCounter);
  };
  /*---- End Open Modal ----*/

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
  /*---- End Search ----*/

  /*---- Tool Share ----*/
  const handleClickToolShare = () => {
    if (toolShare.tool) {
      setToolShare({ counter: {}, tool: false });
      return;
    }
    const counter = counters.filter((item) => item.id === selectedACounter);
    setToolShare({ counter: counter[0], tool: true });
  };

  const handleClickCopyCounter = () => {
    try {
      navigator.clipboard.writeText(
        `${toolShare.counter.count} x ${toolShare.counter.title}`
      );
      setToolShare({ counter: {}, tool: false });
    } catch (error) {
      console.error(error);
      setToolShare({ counter: {}, tool: false });
    }
  };
  /*---- End Tool Share ----*/

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
  /*---- End No Minus Counter ----*/

  /*---- Times Amount ----*/
  const times = () => {
    let timesAmount = 0;
    search.forEach((item) => {
      timesAmount += item.count;
    });
    return timesAmount;
  };
  /*---- End Times Amount ----*/

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
      toolShare={toolShare}
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
      handleClickToolShare={handleClickToolShare}
      handleClickCopyCounter={handleClickCopyCounter}
    />
  );
};

export default MainScreenContainer;
