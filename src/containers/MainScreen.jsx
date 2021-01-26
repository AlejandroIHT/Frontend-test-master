import React from "react";
import Search from "../components/Search";
import AddButton from "../components/AddButton";
import Counter from "../components/Counter";

const MainScreen = () => {
  return (
    <div className="MainScreen">
      <header className="MainScreen__container__header">
        <Search />
      </header>
      <div className="MainScreen__container__titles"></div>
      <div className="MainScreen__container__list">
        <Counter />
      </div>
      <footer>
        <AddButton />
      </footer>
    </div>
  );
};

export default MainScreen;
