import React, { useEffect, useState } from "react";
import { Container, Grid, Segment } from "semantic-ui-react";
import ProjectCard from "./ProjectCard";
import axios from "axios";
import LightSpeed from 'react-reveal/LightSpeed'
import Fade from 'react-reveal/Fade'

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios.get("./data/projects.json").then((response) => {
      setProjects(response.data);
    });
  });
  let projectsList = projects.map((project) => {
    return (
      <div id={`project-${project.id}`} key={project.id}>
        <ProjectCard project={project} />
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
        <Fade top>
      <h1 id="projects-header">My Projects</h1>
        </Fade>
        <LightSpeed right>
      <Grid padded container textAlign="center">{projectsList}</Grid>
    </LightSpeed></Segment>
    </Container>
  );
};
export default Projects;



// class Projects extends Component {
//   state = {
//     projects: [],
//   };
//   componentDidMount() {
//     axios.get("./data/projects.json").then((response) => {
//       this.setState({ projects: response.data });
//     });
//   }

//   render() {
//     const { projects } = this.state;

//     let projectsList = projects.map((project) => {
//       return (
//         <div id={`project-${project.id}`} key={project.id}>
//           <ProjectCard project={project} />
//         </div>
//       );
//     });
//     return (
//       <Container>
//         <h1 id="projects-header">My Projects</h1>
//         <Grid>{projectsList}</Grid>
//       </Container>
//     );
//   }
// }


