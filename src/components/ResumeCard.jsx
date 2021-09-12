import React from "react";
import { Item, Label, Image, Divider } from "semantic-ui-react";

const ResumeCard = ({ employment }) => {
  return (
    <Item.Group divided link href={employment.url} target="_blank">
      <Item>
        <Item.Image size="tiny">
          <Image src={employment.image} />
        </Item.Image>

        <Item.Content>
          <Item.Header as="a">{employment.title}</Item.Header>

          <Item.Description>{employment.details}</Item.Description>
          <Item.Extra>
            <Label>{employment.date}</Label>
          </Item.Extra>
        </Item.Content>
      </Item>
      <Divider horizontal inverted>
        ♡
      </Divider>
    </Item.Group>
  );
};

export default ResumeCard;
