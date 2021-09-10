import React from "react";
import { Container, Image, Segment } from "semantic-ui-react";
import JobImg from "../images/job.svg";
import Fade from "react-reveal/Fade";

const Hello = () => {
  return (
    <Container text>
      <Segment
        padded="very"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(245, 223, 77) 0%, rgb(147, 149, 151) 100%)",
        }}
      >
        <Fade top big>
          <h1 id="hello">Welcome</h1>
        </Fade>
        <Fade right>
          <p>
            This is my simple portfolio! Within you'll find a small collection
            with some of projects I've been working on. Feel free to contact me
            with any questions you might have.
          </p>
        </Fade>
        <Image src={JobImg} alt="working" centered />
      </Segment>
    </Container>
  );
};

export default Hello;
