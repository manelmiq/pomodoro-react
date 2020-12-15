import React from "react";

import AnimatedLoad from "./hoc/AnimatedLoad";
import Lengths from "./components/Lengths/Lengths";
import Timer from "./components/Timer/Timer";
import TimerControl from "./components/Timer/TimerControl";

const App = props => {
  return (
    <div className="main-wrapper" id="app">
      <h2 className="title">Productive Tool</h2>
      <Lengths />
      <Timer />
      <TimerControl />
    </div>
  );
};

export default AnimatedLoad(App);
