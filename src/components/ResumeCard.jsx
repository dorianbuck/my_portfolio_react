import React from 'react'
import { Card, Image, Popup } from "semantic-ui-react";

const ResumeCard = ({ resume }) => {
  return (
    // <Popup 
      // trigger={
        <Card>
          
          <Card.Content>
            <Card.Header>{resume.title}</Card.Header>

            <Card.Description>{resume.details}{resume.date}</Card.Description>
          </Card.Content>
        </Card>
    //   }
    // >
    //   <Popup.Content>
    //     <Popup.Header inverted >{resume.popupHeader}</Popup.Header>
    //   </Popup.Content>
    // </Popup>
  )
}

export default ResumeCard
