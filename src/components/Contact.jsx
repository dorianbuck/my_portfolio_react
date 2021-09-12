import React from "react";
import { Container, Image, Segment } from "semantic-ui-react";
import BeerImg from "../images/sync.svg";
import ContactForm from "./ContactForm";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";

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
        <Fade top>
          <h1 id="contact">Contact</h1>
        </Fade>
        <Bounce>
          <div>{<ContactForm />}</div>
        </Bounce>
        <Fade right big>
          <Image
            verticalAlign="top"
            src={BeerImg}
            alt="contact"
            as="a"
            size="medium"
            href="mailto:dorianbuck@protonmail.com"
            target="_blank"
          />
        </Fade>
      </Segment>
    </Container>
  );
};

export default Contact;
