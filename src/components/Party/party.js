import React from "react";
import { Link } from "react-router-dom";
import { FormGroup, ControlLabel } from "react-bootstrap";

const Party = () => (
  <div className="App">
    <header className="App-header">
      <Link to="/">
        <h1 className="App-title">Party Booster</h1>
      </Link>
    </header>
    <FormGroup controlId="form">
      <ControlLabel>How many people?</ControlLabel>
    </FormGroup>
  </div>
);

export default Party;
