import React, { Component } from "react";
import "./css/home.css";

export class Home extends Component {
  render() {
    return (
      <div className="cont" id="home">
        <div className="home">
          <div className="home-flex">
            <div>
              <h1>CHAMPIONS</h1>
              <h1>
                <span> OF CUSTOMER </span>
              </h1>
              <h1>SERVICES</h1>
            </div>
            <div className="home-side-hdg">
              <div className="home-content">
                <h4>CustCare makes customers service better</h4>
                <h4>We build software for customer needs,</h4>
                <h4>set your team up for success</h4>
                <h4>and keep your business in sync</h4>
              </div>
              <button type="button">Explore Now</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
