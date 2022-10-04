import React, { useState } from "react";
import "./styles.css";
import Landing from "./components/Landing";
import IfPhones from "./components/IfPhones";

export default function App() {
  const [isPhone, setIsPhone] = useState(true);

  // Check if phones are used
  const checkDevice = function() {
    let size = document.querySelector("html").offsetWidth;
    size < 800 ? setIsPhone(true) : setIsPhone(false);
  }
  window.onload = checkDevice;
  window.onresize = checkDevice;

  //If phones are used display coming soon message
  return <div className="App">{isPhone ? <IfPhones /> : <Landing />}</div>;
}
