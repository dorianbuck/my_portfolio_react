import React from "react";
import { Card, Image, Popup } from "semantic-ui-react";

const ProjectCard = ({ project }) => {
  return (
    <Popup link 
      trigger={
        <Card href={project.url} >
          <Image src={project.image} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{project.name}</Card.Header>

            <Card.Description>{project.description}</Card.Description>
          </Card.Content>
        </Card>
      }
    >
      <Popup.Content>
        <Popup.Header inverted >{project.popupHeader}</Popup.Header>
      </Popup.Content>
    </Popup>
  );
};

export default ProjectCard;
