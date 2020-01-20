import React from "react";
import { ReactComponent } from "../images/cupid.svg";

const HeartButton = ({ count, incrementCount }) => (
  <div>
    <button className="button" onClick={incrementCount}>
      <ReactComponent alt={"cupid heart"} className="cupid" />
      <div className="counter">{count}</div>
    </button>
  </div>
);

export default HeartButton;
