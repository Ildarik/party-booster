import React, { Component } from "react";
import { Button } from "react-bootstrap";
import logo from "./images/SMirC-party.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">PartyBooster</h1>
        </header>
        <main>
          <Button className="button" bsStyle="primary" bsSize="large">
            <span className="get-random btn-icon" />
            <span>Get Random PARTY!</span>
          </Button>
          <Button className="button" bsStyle="success" bsSize="large">
            <span className="create btn-icon" />
            <span>Create your PARTY!</span>
          </Button>
          <Button className="button" bsStyle="warning" bsSize="large">
            <span className="organization btn-icon" />
            <span>All for organization</span>
          </Button>
          <Button className="button" bsStyle="info" bsSize="large">
            <span className="buddy btn-icon" />
            <span>Drunk buddy</span>
          </Button>
        </main>
      </div>
    );
  }
}

export default App;
