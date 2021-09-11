import React from "react";
import { Item, Label, Image } from "semantic-ui-react";



const ResumeCard = ({ employment }) => {
  return (
    <Item.Group divided link>
      <Item>
        <Item.Image size="tiny">
          <Image src={employment.image} /></Item.Image>

        <Item.Content>
          <Item.Header as="a">{employment.title}</Item.Header>

          <Item.Description>{employment.details}</Item.Description>
          <Item.Extra>
          <Label>{employment.date}</Label>
            <Label icon="globe" content="Additional Languages" />
          </Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
  );
};

export default ResumeCard;
