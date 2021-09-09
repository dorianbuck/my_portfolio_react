import React from "react";
import { Container, Segment } from "semantic-ui-react";
import DevImg from '../images/dev.svg'

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
          With a background in management, serving as a boat captain and working
          in sales, the time has come to switch it up. My passion for{" "}
          <code>coding</code>, technology and problem solving lead me to this
          new career. I plan to contribute by being a good team player, lead
          when prudent and utilize my life experience to the fullest. I
          self-manage during independent projects, as well as collaborate as
          part of a productive team.
        </p>
        <div>
          <img src={DevImg} alt="developer image" />
        </div>
      </Segment>
    </Container>
  );
};

export default About;
