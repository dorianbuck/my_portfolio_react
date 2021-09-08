import React from "react";
import Hello from "./Hello";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Projects from "./Projects";
import { Switch, Route } from "react-router-dom";
import Contact from "./Contact";

function Navigation() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Hello}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/projects" component={Projects}></Route>
        <Hello />
      </Switch>

      <Footer />
    </>
  );
}

export default Navigation;
