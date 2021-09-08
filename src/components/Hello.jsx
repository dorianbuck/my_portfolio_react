import React from "react";
import { Container } from "semantic-ui-react";

const Hello = ({ project }) => {
  return (
    <Container>
      
      {/* <Image src={project.bgColor} wrapped ui={false} /> */}
        <h1 id="hello">Hello World!</h1>
    </Container>
      
  );
};

export default Hello;
