import React from "react";
import "./App.css";
import Title from "./Components/Title";
import POPOSList from "./Components/POPOSList";
import Footer from "./Components/Footer";
import { HashRouter, Route, Routes, Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

const App = () => {
  return (
    <HashRouter>
      <div>
        <Navigation />
        <Routes>
          {" "}
          <Route exact path="/" component={Title} />
          <Route path="/about" component={Footer} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;
