import React, { useState } from "react";
import Buttons from "../Buttons/Buttons";

const Menubar = () => {
  const [count, setCount] = useState(1);

  const counter = {
    plus: function () {
      let newCount = count + 1;
      setCount(newCount);
    },
    minus: function () {
      if (count <= 0) {
        return;
      }
      let newCount = count - 1;
      setCount(newCount);
    },
  };
  return (
    <div>
      <h1>{count}</h1>
      <Buttons count={counter}></Buttons>
    </div>
  );
};
export default Menubar;
