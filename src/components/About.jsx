import React from "react";
import { Container, Segment } from "semantic-ui-react";
import DevImg from "../images/dev.svg";

const About = () => {
  return (
    <Container text>
      <Segment
        padded="very"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(245, 223, 77) 0%, rgb(147, 149, 151) 100%)",
        }}
      >
        <h1 id="about-header">About Me</h1>
        <p>
          With a background in management, serving mostly as a boat captain and
          working in sales, the time has come to switch it up. My passion for{" "}
          <code>coding</code>, technology and problem solving lead me to this
          new career. My prefered process is{" "}
          <strong>Test Driven Development</strong> and adapting the{" "}
          <strong>Agile Methodology</strong> of software development.
        </p>
        <div>
          <img src={DevImg} alt="developer" />
        </div>
      </Segment>
    </Container>
  );
};

export default About;
