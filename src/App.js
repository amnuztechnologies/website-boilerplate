import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import LandingPage from './Pages/Landing Page/LandingPage';

import './App.css'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <LandingPage />} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
