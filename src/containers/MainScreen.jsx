import React, { useState, useEffect, useContext } from "react";
import "../styles/containers/mainScreen.css";
import AppContext from "../context/AppContext";
import Search from "../components/Search";
import ButtonOrange from "../components/ButtonOrange";
import Counter from "../components/Counter";
import Loader from "../components/Loader";
import Http from "../libs/http";
import plus from "../assets/mainScreen/plus.svg";
import refreshing from "../assets/mainScreen/refreshing.svg";

const API = "/api/v1/counter";

const MainScreen = () => {
  const [loading, setLoading] = useState(false);
  const [refreshingState, setRefreshingState] = useState(false);
  const { state, getCounters } = useContext(AppContext);
  //Take data base
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

  return (
    <div className="MainScreen">
      <div className="MainScreen__container">
        <header className="MainScreen__container__header">
          <Search />
        </header>
        {loading ? (
          <div className="MainScreen__container__loader">
            <Loader />
          </div>
        ) : (
          <>
            <div className="MainScreen__container__titles">
              <p className="MainScreen__container__titles--items">4 items</p>
              <p className="MainScreen__container__titles--time">17 times</p>
              <button
                className="MainScreen__container__titles--refreshingBtn"
                type="button"
              >
                <img src={refreshing} alt="refreshing icon" />
              </button>
              {refreshingState && <p className="MainScreen__container__titles--refreshing">Refreshing...</p>}
            </div>
            <div className="MainScreen__container__list">
              <Counter />
            </div>
          </>
        )}
      </div>

      <footer className="MainScreen__container__footer">
        <ButtonOrange styles="margin-right">
          <img src={plus} alt="add" />
        </ButtonOrange>
      </footer>
    </div>
  );
};

export default MainScreen;