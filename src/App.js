import './App.css';
import React from 'react';
import Registration from "./components/Registration";
import MainPage from "./components/MainPage";
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      
        <Route path="/" exact component={Registration} />
        <Route path="/game" exact component={MainPage} />

    </Router>
  );
}

export default App;
