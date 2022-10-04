import React, { useState } from "react";
import "./styles.css";
import Landing from "./components/Landing";
import IfPhones from "./components/IfPhones";

export default function App() {
  const [isPC, setIsPC] = useState(true);

  const checkDevice = function() {
    let size = document.querySelector("html").offsetWidth;
    size < 800 ? setIsPC(true) : setIsPC(false);
  }
  window.onload = checkDevice;
  window.onresize = checkDevice;
  return <div className="App">{isPC ? <IfPhones /> : <Landing />}</div>;
}
