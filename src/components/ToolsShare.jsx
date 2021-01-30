import React from "react";
import "../styles/components/toolsShare.css";
import Tools from "./Tools";
import ButtonWhite from "./ButtonWhite";

const ToolsShare = ({ data, handleClickCopyCounter }) => {
  return (
    <Tools>
      <div className="ToolsShare">
        <div className="ToolsShare__container">
          <p className="ToolsShare__container--title">Share 1 counter</p>
          <ButtonWhite handleClick={handleClickCopyCounter}>Copy</ButtonWhite>
        </div>
        <div className="ToolsShare__copy">
          <div className="ToolsShare__copy--circle">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="ToolsShare__copy--text">
            <p className="text">{`${data.counter.count} x ${data.counter.title}`}</p>
          </div>
        </div>
      </div>
    </Tools>
  );
};

export default ToolsShare;
