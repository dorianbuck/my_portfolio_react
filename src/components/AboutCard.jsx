import React from "react";
import { Item } from "semantic-ui-react";

const AboutCard = ({ about }) => {
  return (
    <div>
      <Item.Group>
        <Item>
          <Item.Content>
            <Item.Header>Name: {about.name}</Item.Header>
            <Item.Description>
              Nationality: {about.nationality}
            </Item.Description>
            <Item.Extra>Location: {about.location}</Item.Extra>
            <Item.Description>Intrerest: {about.hobbies}</Item.Description>
            <Item.Extra>Languages: {about.lang}</Item.Extra>
            <Item.Description>Keywords: {about.keyw}</Item.Description>
            <Item.Extra>{about.reference}</Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </div>
  );
};

export default AboutCard;
