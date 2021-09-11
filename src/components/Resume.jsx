// import TimelineExperience from "./TimelineExperience";

import React, { useEffect, useState } from "react";
import { Container, Segment } from "semantic-ui-react";
import ResumeCard from "./ResumeCard";
import axios from "axios";
import Fade from "react-reveal/Fade";

const Resume = () => {
  const [employments, setEmployments] = useState([]);

  useEffect(() => {
    axios.get("./data/employment.json").then((response) => {
      setEmployments(response.data);
    });
  }, []);
  let employmentList = employments.map((employment) => {
    return (
      <div id={`employment-${employment.id}`} key={employment.id}>
        <ResumeCard employment={employment} />
      </div>
    );
  });
  return (
    <Container text>
      <Fade top>
        <h1 id="resume-header">My Resume</h1>
      </Fade>
      <Segment
        content
        piled
        padded="very"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(245, 223, 77) 0%, rgb(147, 149, 151) 100%)",
        }}
      >
        {employmentList}
      </Segment>
    </Container>
  );
};

export default Resume;
