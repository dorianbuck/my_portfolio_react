import React from "react";
import { Container, Image, Segment } from "semantic-ui-react";
import bgColor from "../images/bgColor.png";

const Hello = () => {
  return (
    <Container text >
      <Segment style={{backgroundImage: "linear-gradient(to right, rgb(245, 223, 77) 0%, rgb(147, 149, 151) 100%)"}}>
        <h1 id="hello">
          Welcome
          
        </h1>
          <p>
            This is my simple portfolio! Within you find a small collection with some of projects I've been working on. Feel free to conatct me with any questions you might have.  
          </p>
        <Image
          src={bgColor}
          alt="bgColor"
          size="large"
          
          rounded
        />
      </Segment>
    </Container>
  );
};

export default Hello;
