import React from "react";
import "../../../styles/components/Singles/Searchs/search.css";
import glass from "../../../assets/mainScreen/glass.svg";

const Search = ({ value, handleChange, handleClick }) => {
  return (
    <>
      <div className="search">
        <img src={glass} alt="search icon" />
        <input
          id="search"
          className={`search__input ${value.length !== 0 ? "active" : null}`}
          type="text"
          placeholder="Search Counters"
          onChange={handleChange}
          value={value}
        />
        <label
          className={`tasks__search__container ${
            value.length !== 0 ? "active" : null
          }`}
          htmlFor="search"
        />
        <button
          className={`search__cancelBtn ${
            value.length !== 0 ? "active" : null
          }`}
          type="button"
          onClick={handleClick}
        >
          Cancel
        </button>
      </div>
    </>
  );
};

export default Search;
