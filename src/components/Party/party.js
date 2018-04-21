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
    <form onSubmit={handleSubmit()}>
      <FormGroup controlId="people">
        <ControlLabel>How many people?</ControlLabel>
        <FormControl componentClass="select" placeholder="select">
          <option value="less5">Less than 5</option>
          <option value="sixten">6-10</option>
          <option value="elevenfifteen">11-15</option>
          <option value="more16">More than 16</option>
        </FormControl>
      </FormGroup>

      <FormGroup controlId="type">
        <ControlLabel>What type of party?</ControlLabel>
        <FormControl componentClass="select" placeholder="select">
          <option value="meeting">Meeting with friends</option>
          <option value="birthday">Birthday</option>
          <option value="wedding">Wedding</option>
          <option value="graduation">Graduation</option>
          <option value="corporate">Corporate meeting</option>
        </FormControl>
      </FormGroup>

      <FormGroup controlId="place">
        <ControlLabel>Where do plan to go?</ControlLabel>
        <FormControl componentClass="select" placeholder="select">
          <option value="home">At home</option>
          <option value="cafe">Cafe\Bar</option>
          <option value="club">Club</option>
          <option value="other">Other</option>
        </FormControl>
      </FormGroup>

      <FormGroup controlId="todo">
        <ControlLabel>What do you plan to do?</ControlLabel>
        <FormControl componentClass="select" placeholder="select">
          <option value="drinking">Drinking</option>
          <option value="smoking">Smoking</option>
          <option value="gaming">Playing games</option>
          <option value="music">Listening to music</option>
          <option value="dancing">Dancing</option>
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
