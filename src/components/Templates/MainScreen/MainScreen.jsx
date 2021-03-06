import React from "react";
import "../../../styles/components/Templates/MainScreen/mainScreen.css";
import Search from "../../Singles/Searchs/Search";
import ButtonOrange from "../../Singles/Buttons/ButtonOrange";
import ButtonWhite from "../../Singles/Buttons/ButtonWhite";
import Counter from "../../Singles/Counters/Counter";
import NoContentScreen from "../../Singles/Screens/NoContentScreen";
import Loader from "../../Singles/Loaders/Loader";
import ModalCreateCounterContainer from "../../../containers/ModalCreateCounterContainer";
import ModalDeleteCounter from "../../Singles/Modals/ModalDeleteCounter";
import ModalErrorDelete from "../../Singles/Modals/ModalErrorDelete";
import ModalNoMinus from "../../Singles/Modals/ModalNoMinus";
import ErrorScreen from "../../Singles/Screens/ErrorScreen";
import ToolsShare from "../../Singles/Tools/ToolsShare";
import plus from "../../../assets/mainScreen/plus.svg";
import refreshing from "../../../assets/mainScreen/refreshing.svg";
import refreshingActive from "../../../assets/mainScreen/refreshingActive.svg";
import deleteIcon from "../../../assets/counter/deleteIcon.svg";
import shareIcon from "../../../assets/counter/shareIcon.svg";

const MainScreen = ({
  errorGet,
  loading,
  state,
  counters,
  selectedACounter,
  search,
  searchValue,
  refreshingState,
  modalDeleteCounter,
  errorDelete,
  toolShare,
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
  handleClickSelectCounter,
  handleClickDeleteModal,
  handleClickDeleteCounter,
  handleClickClouseErrorDeleteModal,
  handleClickToolShare,
  handleClickCopyCounter,
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
                    {!selectedACounter ? (
                      <>
                        <p className="MainScreen__container__titles--items">
                          {`${search.length} items`}
                        </p>
                        <p className="MainScreen__container__titles--time">
                          {`${times()} times`}
                        </p>
                      </>
                    ) : (
                      <p className="MainScreen__container__titles--selected">
                        1 selected
                      </p>
                    )}
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
                        selected={selectedACounter}
                        handleClickMinus={handleClickMinus}
                        handleClickIncrement={handleClickIncrement}
                        handleClickSelectCounter={handleClickSelectCounter}
                      />
                    ))}
                  </div>
                </>
              )}
          </>
        )}
      </div>

      <footer className="MainScreen__container__footer">
        <div className="MainScreen__container__footer--containerBtns">
          {selectedACounter && (
            <>
              <ButtonWhite
                styles="margin-right-18"
                handleClick={handleClickDeleteModal}
              >
                <img src={deleteIcon} alt="delete icon" />
              </ButtonWhite>
              <div className="containerBtns__containerTool">
                {toolShare.tool && (
                  <ToolsShare
                    data={toolShare}
                    handleClickCopyCounter={handleClickCopyCounter}
                  />
                )}
                <ButtonWhite handleClick={handleClickToolShare}>
                  <img src={shareIcon} alt="share icon" />
                </ButtonWhite>
              </div>
            </>
          )}
        </div>
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
      {modalDeleteCounter.modal && (
        <ModalDeleteCounter
          isOpen={modalDeleteCounter.modal}
          data={modalDeleteCounter}
          handleClickClouse={handleClickDeleteModal}
          handleClickDelete={handleClickDeleteCounter}
        />
      )}
      {errorDelete && (
        <ModalErrorDelete
          isOpen={errorDelete}
          data={modalDeleteCounter}
          handleClickClouse={handleClickClouseErrorDeleteModal}
          handleClickDelete={handleClickDeleteCounter}
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
