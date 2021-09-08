import React from "react";
import { Container, Image } from "semantic-ui-react";

const Contact = () => {
  return <Container>
    <h1 id="contact-header">Contact</h1>
    <Image src='https://react.semantic-ui.com/images/wireframe/image-text.png'
  as='a'
  size='medium'
  href='http://google.com'
  target='_blank'
/></Container>;
};

export default Contact;
