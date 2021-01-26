import React from "react";
import "../styles/components/search.css";
import glass from '../assets/mainScreen/glass.svg';

const Search = ({ handleChange }) => {
  return (
    <div className="search">
      <img src={glass} alt="search icon"/>
      <input
        id="search"
        className="search__input"
        type="text"
        placeholder="Search Counters"
        onChange={handleChange}
      />
      <label className="tasks__search__container" htmlFor="search" />
    </div>
  );
};

export default Search;
