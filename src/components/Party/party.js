import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Party.css";

class Party extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    fetch("http://10.0.0.102:8000/api/get_party_info", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json; charset=utf8"
      }
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <h1 className="App-title">Party Booster</h1>
          </Link>
        </header>
        <form onSubmit={this.handleSubmit}>
          <label>How many people?</label>
          <br />
          <select name="people">
            <option value="less5">Less than 5</option>
            <option value="sixten">6-10</option>
            <option value="elevenfifteen">11-15</option>
            <option value="more16">More than 16</option>
          </select>
          <br />
          <br />
          <label>What type of party?</label>
          <br />
          <select name="type">
            <option value="meeting">Meeting with friends</option>
            <option value="birthday">Birthday</option>
            <option value="wedding">Wedding</option>
            <option value="graduation">Graduation</option>
            <option value="corporate">Corporate meeting</option>
          </select>
          <br />
          <br />
          <label>Where do plan to go?</label>
          <br />
          <select name="place">
            <option value="home">At home</option>
            <option value="cafe">Cafe\Bar</option>
            <option value="club">Club</option>
            <option value="other">Other</option>
          </select>
          <br />
          <br />
          <label>What do you plan to do?</label>
          <br />
          <select name="todo">
            <option value="drinking">Drinking</option>
            <option value="smoking">Smoking</option>
            <option value="gaming">Playing games</option>
            <option value="music">Listening to music</option>
            <option value="dancing">Dancing</option>
          </select>
          <br />
          <br />
          <label>Describe your ideal party</label>
          <br />
          <input
            id="textInput"
            name="ideal"
            type="text"
            placeholder="Enter text"
          />
          <br />
          <br />
          <Button type="submit">Submit</Button>
        </form>
      </div>
    );
  }
}

export default Party;
