import './App.css';
import React from 'react';
import Registration from "./components/Registration";
import MainPage from "./components/MainPage";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Header info={{lvl: 5, name: 'Sodiicc'}} />
      <div className="container">
      
        <Route path="/" exact component={Registration} />
        <Route path="/game" exact component={MainPage} />
      </div>

    </Router>
  );
}

export default App;
