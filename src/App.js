import './App.css';
import { Component } from 'react';
import Container from "./components/container";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

// sentence / saying / note collector can remove or add
// chronologically ordered, will add more features later 

export default function App() {
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element = {<Container/>} />
        </Routes>
    </Router>
  );
}

/*class App extends Component {
  render () {
    return (
      <div className="App">
        <Container></Container>
      </div>
    );
  }
}

export default App;*/
