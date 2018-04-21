import React, { Component } from "react";
import { Grid, Row, Col, Button } from "react-bootstrap";
import "./App.css";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Party Booster</h1>
        </header>
        <main>
          <Grid>
            <Row>
              <Col xs={12} md={2} mdOffset={3} className="button-column">
                <Button className="button" bsStyle="primary" bsSize="large">
                  <span className="get-random btn-icon" />
                  <span>Get Random PARTY!</span>
                </Button>
              </Col>
              <Col xs={12} md={2} mdOffset={1}>
                <Link to="/create">
                  <Button className="button" bsStyle="success" bsSize="large">
                    <span className="create btn-icon" />
                    <span>Create your PARTY!</span>
                  </Button>
                </Link>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={2} mdOffset={3}>
                <Button className="button" bsStyle="warning" bsSize="large">
                  <span className="organization btn-icon" />
                  <span>All for organization</span>
                </Button>
              </Col>
              <Col xs={12} md={2} mdOffset={1}>
                <Button className="button" bsStyle="info" bsSize="large">
                  <span className="buddy btn-icon" />
                  <span>Drunk buddy</span>
                </Button>
              </Col>
            </Row>
          </Grid>
        </main>
      </div>
    );
  }
}

export default App;
