"use client";
import React from "react";
// import Typed from "typed.js";
import classNames from "classnames";
const Typed = require("typed.js");

const TypedQuotes = ({ className }: { className: string }) => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  const strings = [""];

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Relax, its only ONES and ZEROS !",
        "There are 10 types of people in the world: those who understand binary, and those who don't.",
        "to err is human... to really foul up requires the root password.",
      ],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 300,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className={classNames("text-lg sm:text-xl ", className)}>
      <span ref={el} />
    </div>
  );
};

export default TypedQuotes;
