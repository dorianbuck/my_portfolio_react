import React from "react";
import { Container, Image, Segment } from "semantic-ui-react";
import BeerImg from "../images/beer.svg";
import ContactForm from './ContactForm'

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

        <h1 id="contact">Contact</h1>
        <div>{<ContactForm /> }</div>
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
