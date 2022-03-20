import React, { useState } from "react";
import "./Menubar.css";

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
      <div className="container">
        <div className="col-md-2">Logo</div>
        <div className="col-md-10 menu-container">
          <a href="">Home</a>
          <a href="">Contact</a>
          <a href="">Cart</a>
          <a href="">Login</a>
        </div>
      </div>
    </div>
  );
};
export default Menubar;
