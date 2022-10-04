import React, { Suspense, lazy } from "react";
import "./styles.css";
// import Landing from "./components/Landing";
const Landing = lazy(() => import("./components/Landing"));

export default function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Editor is loading</div>}>
        <Landing />
      </Suspense>
    </div>
  );
}
