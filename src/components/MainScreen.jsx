import React from "react";
import "../styles/components/mainScreen.css";
import Search from "./Search";
import ButtonOrange from "./ButtonOrange";
import Counter from "./Counter";
import NoContentScreen from "./NoContentScreen";
import Loader from "./Loader";
import ErrorScreen from "./ErrorScreen";
import plus from "../assets/mainScreen/plus.svg";
import refreshing from "../assets/mainScreen/refreshing.svg";

const MainScreen = ({
  loading,
  state,
  counters,
  refreshingState,
  handleClickAddCounter,
}) => {
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
            {counters.length === 0 && !loading && (
              <div className="MainScreen__container__noContent">
                <NoContentScreen
                  title="No counters yet"
                  body="“When I started counting my blessings, my whole life turned around.”
        —Willie Nelson"
                />
              </div>
            )}
            {state.error && !loading && (
              <div className="MainScreen__container__error">
                <ErrorScreen
                  title="Couldn’t load the counters"
                  body="The Internet connection appears to be offline."
                />
              </div>
            )}
            {counters.length !== 0 && !loading && (
              <>
                <div className="MainScreen__container__titles">
                  <p className="MainScreen__container__titles--items">
                    4 items
                  </p>
                  <p className="MainScreen__container__titles--time">
                    17 times
                  </p>
                  <button
                    className="MainScreen__container__titles--refreshingBtn"
                    type="button"
                  >
                    <img src={refreshing} alt="refreshing icon" />
                  </button>
                  {refreshingState && (
                    <p className="MainScreen__container__titles--refreshing">
                      Refreshing...
                    </p>
                  )}
                </div>
                <div className="MainScreen__container__list">
                  <Counter title="Cups of coffee" cuantity="5" />
                </div>
              </>
            )}
          </>
        )}
      </div>

      <footer className="MainScreen__container__footer">
        <ButtonOrange styles="margin-right" handleClick={handleClickAddCounter}>
          <img src={plus} alt="add" />
        </ButtonOrange>
      </footer>
    </div>
  );
};

export default MainScreen;
