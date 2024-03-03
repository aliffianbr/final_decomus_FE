import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Crud from "./crud";

const Navbar = () => {
  return(
    <div>
      <h5>Navbar</h5>
    </div>
  )
}

function App() {
  return(
  <div className="app">
  <Crud/>
  </div>
  );
}

export default App;
