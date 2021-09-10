import React, { Component } from "react";
import { Container, Form, Button, TextArea } from "semantic-ui-react";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));
    e.preventDefault();
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email } = this.state;
    return (
      <Container>
        <Form onSubmit={this.handleSubmit} netlify name="contact">
          <input type="hidden" name="form-name" value="contact" />
          <Form.Field>
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              placeholder="Your name"
            />
          </Form.Field>
          <Form.Field>
            <label>Your Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              placeholder="name@example.com"
            />
          </Form.Field>
          <Form.TextArea
            label="Message"
            control={TextArea}
            placeholder="How can I help you?"
            // value={message}
            onChange={this.handleChange}
            />
          <Button type="submit">Send</Button>
        </Form>
      </Container>
    );
  }
}

export default ContactForm;
