import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Container from "./components/container";


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
