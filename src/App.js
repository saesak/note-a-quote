import './App.css';
import { Component } from 'react';
import Container from "./components/container";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// sentence / saying / note collector can remove or add
// chronologically ordered, will add more features later 

class App extends Component {
  render () {
    return (
      <div className="App">
        <Container></Container>
      </div>
    );
  }
}

export default App;
