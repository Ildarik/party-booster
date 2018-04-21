import React from "react";
import { Link } from "react-router-dom";
import { Button, FormGroup, ControlLabel, FormControl } from "react-bootstrap";
import "./Party.css";

const Party = () => (
  <div className="App">
    <header className="App-header">
      <Link to="/">
        <h1 className="App-title">Party Booster</h1>
      </Link>
    </header>
    <form>
      <FormGroup controlId="people">
        <ControlLabel>How many people?</ControlLabel>
        <FormControl componentClass="select" placeholder="select">
          <option value="1">Less than 5</option>
          <option value="2">6-10</option>
          <option value="3">11-15</option>
          <option value="4">More than 16</option>
        </FormControl>
      </FormGroup>

      <FormGroup controlId="type">
        <ControlLabel>What type of party?</ControlLabel>
        <FormControl componentClass="select" placeholder="select">
          <option value="1">Meeting with friends</option>
          <option value="2">Birthday</option>
          <option value="3">Wedding</option>
          <option value="4">Graduation</option>
          <option value="5">Corporate meeting</option>
        </FormControl>
      </FormGroup>

      <FormGroup controlId="place">
        <ControlLabel>Where do plan to go?</ControlLabel>
        <FormControl componentClass="select" placeholder="select">
          <option value="1">At home</option>
          <option value="2">Cafe\Bar</option>
          <option value="3">Club</option>
          <option value="4">Other</option>
        </FormControl>
      </FormGroup>

      <FormGroup controlId="todo">
        <ControlLabel>What do you plan to do?</ControlLabel>
        <FormControl componentClass="select" placeholder="select">
          <option value="1">Drinking</option>
          <option value="2">Smoking</option>
          <option value="3">Playing games</option>
          <option value="4">Listening to music</option>
          <option value="5">Dancing</option>
        </FormControl>
      </FormGroup>

      <FormGroup controlId="ideal">
        <ControlLabel>Describe your ideal party</ControlLabel>
        <FormControl type="text" placeholder="Enter text" />
      </FormGroup>
      <Button type="submit">Submit</Button>
    </form>
  </div>
);

export default Party;
