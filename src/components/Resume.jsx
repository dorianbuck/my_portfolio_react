import React, { useEffect, useState } from "react";
import { Container, Grid, Segment } from "semantic-ui-react";
import ResumeCard from "./ResumeCard";
import axios from "axios";
import Fade from 'react-reveal/Fade'

const Resume = () => {
  const [resumes, setResumes] = useState([]);
  useEffect(() => {
    axios.get("./data/cvData.json").then((response) => {
      setResumes(response.data);
    });
  }, []);
  let resumeList = resumes.map((resume) => {
    return (
      <div id={`resume-${resume.id}`} key={resume.id}>
        <ResumeCard resume={resume} />
      </div>
    );
  });
  return (
    <Container textAlign="center">
      <Segment padded="very"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(245, 223, 77) 0%, rgb(147, 149, 151) 100%)",
        }}
      >
        <Fade top Big>
      <h1 id="resume-header">My Resume</h1>
      </Fade>
      <Grid padded container textAlign="center">{resumeList}</Grid>
    </Segment>
    </Container>
  );
};

export default Resume;
