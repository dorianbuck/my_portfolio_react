import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";

export default class MenuTabularOnTop extends Component {
  state = { activeItem: "my portfolio" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    
    const { activeItem } = this.state;
    return (
      <Menu attached="top" tabular>
        <Menu.Item
          id="header"
          name="my portfolio"
          as={Link}
          to={{ pathname: "/" }}
          icon="briefcase"
          active={activeItem === "my portfolio"}
          onClick={this.handleItemClick}
          
        />
        <Menu.Item
          position="right"
          id="about-tab"
          name="about me"
          as={NavLink}
          to={{ pathname: "/about" }}
          active={activeItem === "about me"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          id="projects-tab"
          name="my projects"
          as={NavLink}
          to={{ pathname: "/projects" }}
          active={activeItem === "my projects"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          id="contact-tab"
          name="Contact"
          as={NavLink}
          to={{ pathname: "/contact" }}
          active={activeItem === "contact"}
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }
}

// export default Header;
