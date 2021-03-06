import React from "react";
import RouteComponent from "./components/route/route";
import HeaderTop from "./components/header/headerTop";
import HeaderBottom from "./components/header/headerBottom";
import GlobalState from "./components/context";

function App() {
  return (
    <GlobalState>
      <HeaderTop />
      <HeaderBottom />
      <RouteComponent />
    </GlobalState>
  );
}

export default App;
