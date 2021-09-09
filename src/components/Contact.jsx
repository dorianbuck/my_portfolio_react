import React from "react";
import { Container, Image, Segment } from "semantic-ui-react";
import contactImage from "../images/contact.png";
import BeerImg from "../images/beer.svg";

const Contact = () => {
  return (
    <Container>
      <Segment
        padded="very"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(245, 223, 77) 0%, rgb(147, 149, 151) 100%)",
        }}
      >
        <h1 id="contact-header">Contact</h1>
        <Image
          src={contactImage}
          alt="contact"
          as="a"
          size="small"
          href="mailto:dorianbuck@protonmail.com"
          target="_blank"
        />
        <div>
          <img src={BeerImg} alt="beer" />
        </div>
      </Segment>
    </Container>
  );
};

export default Contact;
