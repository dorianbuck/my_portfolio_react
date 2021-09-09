import React from "react";
import { Container, Image, Segment } from "semantic-ui-react";
import bgColor from "../images/bgColor.png";

const Hello = () => {
  return (
    <Container>
      <Segment>
        <h1 id="hello">
          Welcome
          
        </h1>
        <Image
          src={bgColor}
          alt="bgColor"
          size="large"
          floated="right"
          rounded
        />
      </Segment>
    </Container>
  );
};

export default Hello;
