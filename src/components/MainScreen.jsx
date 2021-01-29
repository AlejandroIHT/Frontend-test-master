import React from "react";
import "../styles/components/mainScreen.css";
import Search from "./Search";
import ButtonOrange from "./ButtonOrange";
import Counter from "./Counter";
import NoContentScreen from "./NoContentScreen";
import Loader from "./Loader";
import ModalCreateCounterContainer from "../containers/ModalCreateCounterContainer";
import ModalNoMinus from "./ModalNoMinus";
import ErrorScreen from "./ErrorScreen";
import plus from "../assets/mainScreen/plus.svg";
import refreshing from "../assets/mainScreen/refreshing.svg";
import refreshingActive from "../assets/mainScreen/refreshingActive.svg";

const MainScreen = ({
  errorGet,
  loading,
  state,
  counters,
  search,
  searchValue,
  refreshingState,
  modalAddCounter,
  modalNoMinus,
  setModalAddCounter,
  times,
  handleClickAddCounter,
  handleChangeSearch,
  handleClickCancelSearch,
  handleClickMinus,
  handleClickIncrement,
  handleClickNoMinusCounter,
  handleClickRefreshing,
  handleClickRetryGet,
}) => {
  return (
    <div className="MainScreen">
      <div className="MainScreen__container">
        <header className="MainScreen__container__header">
          <Search
            value={searchValue}
            handleChange={handleChangeSearch}
            handleClick={handleClickCancelSearch}
          />
        </header>
        {loading ? (
          <div className="MainScreen__container__loader">
            <Loader />
          </div>
        ) : (
          <>
            {errorGet && (
              <div className="MainScreen__container__noContent">
                <NoContentScreen
                  error
                  handleClick={handleClickRetryGet}
                  title="Couldn’t load the counters"
                  body="The Internet connection appears to be offline."
                />
              </div>
            )}
            {counters.length === 0 && !loading && !errorGet && (
              <div className="MainScreen__container__noContent">
                <NoContentScreen
                  title="No counters yet"
                  body="“When I started counting my blessings, my whole life turned around.”
        —Willie Nelson"
                />
              </div>
            )}
            {state.error && !loading && !errorGet && (
              <div className="MainScreen__container__error">
                <ErrorScreen
                  title="Couldn’t load the counters"
                  body="The Internet connection appears to be offline."
                />
              </div>
            )}
            {search.length === 0 &&
              counters.length !== 0 &&
              !loading &&
              !errorGet && (
                <div className="MainScreen__container__noResults">
                  <h2 className="MainScreen__container__noResults--title">
                    No results
                  </h2>
                </div>
              )}
            {counters.length !== 0 &&
              !loading &&
              search.length !== 0 &&
              !errorGet && (
                <>
                  <div className="MainScreen__container__titles">
                    <p className="MainScreen__container__titles--items">
                      {`${search.length} items`}
                    </p>
                    <p className="MainScreen__container__titles--time">
                      {`${times()} times`}
                    </p>
                    <button
                      onClick={handleClickRefreshing}
                      className="MainScreen__container__titles--refreshingBtn"
                      type="button"
                    >
                      {refreshingState ? (
                        <img src={refreshingActive} alt="refreshing icon" />
                      ) : (
                        <img src={refreshing} alt="refreshing icon" />
                      )}
                    </button>
                    {refreshingState && (
                      <p className="MainScreen__container__titles--refreshing">
                        Refreshing...
                      </p>
                    )}
                  </div>
                  <div className="MainScreen__container__list">
                    {search.map((item) => (
                      <Counter
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        cuantity={item.count}
                        handleClickMinus={handleClickMinus}
                        handleClickIncrement={handleClickIncrement}
                      />
                    ))}
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
      {modalAddCounter && (
        <ModalCreateCounterContainer
          isOpen={modalAddCounter}
          setModalAddCounter={setModalAddCounter}
          handleClickClouse={handleClickAddCounter}
        />
      )}
      {modalNoMinus.modal && (
        <ModalNoMinus
          isOpen={modalNoMinus.modal}
          data={modalNoMinus}
          handleClickClouse={handleClickNoMinusCounter}
          handleClickMinus={handleClickMinus}
        />
      )}
    </div>
  );
};

export default MainScreen;
