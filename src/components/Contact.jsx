import React from "react";
import { Container, Image, Segment } from "semantic-ui-react";
import BeerImg from "../images/beer.svg";

const Contact = () => {
  return (
    <Container text>
      <Segment
        padded="very"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(245, 223, 77) 0%, rgb(147, 149, 151) 100%)",
        }}
      >
        <h1 id="contact-header">Contact</h1>
        <Image
          centered
          src={BeerImg}
          alt="contact"
          as="a"
          size="medium"
          href="mailto:dorianbuck@protonmail.com"
          target="_blank"
        />
      </Segment>
    </Container>
  );
};

export default Contact;
