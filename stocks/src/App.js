import React from "react";
import Header from "./components/Header/Header";
import Subheader from "/Users/vighneshms/Downloads/Stocks/stocks/src/components/Subheader/Subheader.jsx";
import ExchangeList from "./components/ExchangeList/ExchangeList.jsx";
import data from "./data.js";

function App() {
  return (
    <div className="App">
      <Header/>
      <Subheader>
        <ExchangeList exchanges={data.exchanges}/>
      </Subheader>
    </div>
  );
}

export default App;
