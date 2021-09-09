import React from "react";
import { Container, Image } from "semantic-ui-react";
import contactImage from "../images/contact.png";

const Contact = () => {
  return <Container>
    <h1 id="contact-header">Contact</h1>
    <Image src={contactImage} alt="contact"
  as='a'
  size='medium'
  href='mailto:dorianbuck@protonmail.com'
  target='_blank'
/></Container>;
};

export default Contact;
