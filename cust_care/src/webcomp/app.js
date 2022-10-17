import React, { Component } from "react";
import Contact from "./contact";
import CopyRight from "./footer";
import Footer from "./footer";
import Home from "./home";
import Nav from "./nav";
import Testimonials from "./testimonials";
import Uniqueideas from "./uniqueideas";

class app extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#161616" }}>
        <Nav />
        <Home />
        <Uniqueideas />
        <Testimonials />
        <Contact />
        <CopyRight />
      </div>
    );
  }
}

export default app;
