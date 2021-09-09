import React from "react";
import { Container, Image, Segment } from "semantic-ui-react";
import JobImg from "../images/job.svg";

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
        <h1 id="hello">Welcome</h1>
        <p>
          This is my simple portfolio! Within you'll find a small collection with
          some of projects I've been working on. Feel free to contact me with
          any questions you might have.
        </p>
        <Image src={JobImg} alt="working" centered/>
      </Segment>
    </Container>
  );
};

export default Hello;
