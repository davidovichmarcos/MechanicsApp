import React, { Component } from "react";
import { Header, Navbar, Nav, Icon, FlexboxGrid } from "rsuite";
import { Link } from "react-router-dom";
import styled from "styled-components";

import logo from "../static/img/logo.png";

const HeaderCont = styled.div`
  .rs-navbar,
  .rs-navbar-inverse {
    background-color: red;
  }
`;

const navdata = [
  { name: "Home", link: "/home", icon: "home" },
  { name: "Login", link: "/login", icon: "sign-in" },
  { name: "Clients", link: "/clients", icon: "avatar" },
  { name: "Cars", link: "/cars", icon: "car" },
  { name: "Help", link: "/help", icon: "question-circle" }
];

const NavLink = props => <Nav.Item componentClass={Link} {...props} />;

export default class myHeader extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      activeKey: null
    };
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }

  render() {
    const { activeKey } = this.state;

    const fillMenu = navdata.map((link, i) => {
      return (
        <NavLink to={link.link} key={i} icon={<Icon icon={link.icon} />}>
          {link.name}
        </NavLink>
      );
    });

    return (
      <HeaderCont>
        <Header className="fixedHeader">
          <Navbar appearance="inverse">
            <FlexboxGrid justify="center">
              <FlexboxGrid.Item colspan={20}>
                <Navbar.Header>
                  <img src={logo} alt="MECHANIKSAPP" className="mainLogo" />
                </Navbar.Header>
                <Navbar.Body>
                  <Nav
                    pullRight
                    pills="true"
                    activeKey={activeKey}
                    onSelect={this.handleSelect}
                  >
                    {fillMenu}
                  </Nav>
                </Navbar.Body>
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </Navbar>
        </Header>
      </HeaderCont>
    );
  }
}
