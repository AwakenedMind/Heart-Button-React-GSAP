import React, { useState, useEffect } from "react";
import { ReactComponent } from "../images/cupid.svg";
import { ReactComponent as Heart } from "../images/heart.svg";
import gsap from "gsap";

const HeartButton = ({ count, incrementCount }) => {
  // let HeartDiv = React.useRef(null);
  const [tl] = useState(gsap.timeline({ paused: true }));

  const handleClick = () => {
    // gsap.to("#Layer_1", {
    //   duration: 1.5,
    //   ease: "slow(0.7, 0.7, false)",
    //   opacity: 1,
    //   y: -150
    // });

    tl.("#Layer_1", {
      duration: 1.5,
      ease: "slow(0.7, 0.7, false)",
      opacity: 1,
      y: -150
    });

    //update state in app
    incrementCount();
  };

  // useEffect(() => {}, []);

  return (
    <div className="container">
      <button className="btn" onClick={handleClick}>
        <div className="cupid-icon">
          <ReactComponent alt={"cupid"} />
          <Heart className="heart-icon" />
          <div className="clicky">{count}</div>
        </div>
      </button>
    </div>
  );
};

export default HeartButton;
