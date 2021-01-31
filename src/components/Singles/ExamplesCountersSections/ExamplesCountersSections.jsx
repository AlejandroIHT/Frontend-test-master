import React from "react";
import "../../../styles/components/Singles/ExamplesCountersSections/examplesCountersSections.css";

const ExamplesCountersSections = ({ data, handleClick }) => {
  return (
    <div className="ExamplesCountersSections">
      <h2 className="ExamplesCountersSections__title">{data.title}</h2>
      <div className="ExamplesCountersSections__body">
        {data.options.map((option) => (
          <button
            className="ExamplesCountersSections__body--buttonType"
            type="button"
            key={option}
            name={option}
            onClick={handleClick}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ExamplesCountersSections;
