import React, { Component } from "react";
import styled from "styled-components";

const Style = styled.header`
  background: darkgrey;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export default class Footer extends Component {
  render() {
    return <Style>FOOTER</Style>;
  }
}
