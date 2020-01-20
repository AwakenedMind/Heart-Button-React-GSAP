import React from "react";
import { ReactComponent } from "../images/cupid.svg";
import Heart from "./Heart";

const HeartButton = ({ count, incrementCount }) => {
  const [isClicked, setIsClicked] = React.useState(false);

  const handleClick = () => {
    // code here to update our isClick state
    setIsClicked(!isClicked);

    //update state in App
    incrementCount();
  };

  return (
    <div>
      <button className="button" onClick={handleClick}>
        <ReactComponent alt={"cupid heart"} className="cupid" />
        <Heart isClicked={isClicked} />
        <div className="counter">{count}</div>
      </button>
    </div>
  );
};

export default HeartButton;
