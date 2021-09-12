import React, { useState, useEffect } from "react";
import { Container, Segment, Image, Popup, Grid } from "semantic-ui-react";
import DevImg from "../images/dev.svg";
import Fade from "react-reveal/Fade";
import axios from "axios";
import AboutCard from "./AboutCard";
import HtmlIcon from "../images/html.svg";
import ReactIcon from "../images/react.svg";
import JsScript from "../images/javascript.svg";
import CssIcon from "../images/css.svg";
import DesignIcon from "../images/design.svg";
import CodeIcon from "../images/code.svg";
import GithubIcon from "../images/github.svg";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    axios.get("./data/about.json").then((response) => {
      setAbouts(response.data);
    });
  });
  let aboutList = abouts.map((about) => {
    return (
      <div id={`about-${about.id}`} key={about.id}>
        <AboutCard about={about} />
      </div>
    );
  });
  return (
    <Container text>
      <Popup
        header
        position="left center"
        trigger={
          <Segment
            padded="very"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgb(245, 223, 77) 0%, rgb(147, 149, 151) 100%)",
            }}
          >
            <Fade top>
              <h1 id="about-header">About Me</h1>
            </Fade>
            <Fade right big>
              <p>
                With a background in management, serving mostly as a boat
                captain and working in sales, the time has come to switch it up.
                My passion for <code>coding</code>, technology and problem
                solving lead me to this new career. My prefered process is{" "}
                <strong>Test Driven Development</strong> and adapting the{" "}
                <strong>Agile Methodology</strong> of software development.
              </p>
            </Fade>
            <Image src={DevImg} alt="developer" centered />
            <Fade bottom>
              <Grid padded="vertically" textAlign="center">
                <Grid.Row columns={6}>
                  <Image size="tiny" src={ReactIcon} />
                  <Image size="tiny" src={JsScript} />
                  <Image size="tiny" src={HtmlIcon} />
                  <Image size="tiny" src={CssIcon} />
                  <Image size="tiny" src={DesignIcon} />
                  <Image size="tiny" src={CodeIcon} />
                  <Image size="tiny" src={GithubIcon} />
                </Grid.Row>
              </Grid>
            </Fade>
          </Segment>
        }
      >
        <Popup.Content>
          <Popup.Header> {aboutList}</Popup.Header>
        </Popup.Content>
      </Popup>
    </Container>
  );
};

export default About;
