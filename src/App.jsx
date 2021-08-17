import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

import Routes from "./Routes";

const App = () => (
  <Router>
    <Header />
    <Routes />
    <Footer />
  </Router>
);

export default App;
