import { Avatar } from "@mui/material";
import React, { Component } from "react";

class Testimonials extends Component {
  render() {
    return (
      <div className="cont">
        {" "}
        <section className="test">
          <div className="line"></div>
          <h3>Testimonials</h3>
          <div className="main-test">
            <h1>
              What Clients Say <span style={{ color: " #3187E4" }}>.</span>
            </h1>
            <p className="mainpara">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo illum
              voluptate magni facere saepe similique.
            </p>
            <div className="reviews">
              <div className="review1">
                <div className="review-flex">
                  <Avatar>N</Avatar>
                  <br></br>
                  <div className="review-heading">
                    {" "}
                    <h5>Nishanth Sebastin</h5>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Molestias modi eos corporis vitae cupiditate omnis
                  consequuntur quae, at repellat perspiciatis sequi! Deserunt
                  atque illo id, accusamus ducimus repellendus vel facere.
                </p>
              </div>

              <div className="review2">
                <div className="review-flex">
                  <Avatar>N</Avatar>
                  <div className="review-heading">
                    <h5>Nishanth Sebastin</h5>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Molestias modi eos corporis vitae cupiditate omnis
                  consequuntur quae, at repellat perspiciatis sequi! Deserunt
                  atque illo id, accusamus ducimus repellendus vel facere.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Testimonials;
