import React, { Component } from "react";
import styled from "styled-components";
import {
  FlexboxGrid,
  Panel,
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  ButtonToolbar,
  Button
} from "rsuite";

const Style = styled.div`
  width: 60vw;
  height: 30vh;
`;

export default class Login extends Component {
  render() {
    return (
      <FlexboxGrid justify="center">
        <FlexboxGrid.Item colspan={12}>
          <Panel header={<h3>Login</h3>} bordered>
            <Form fluid>
              <FormGroup>
                <ControlLabel>Username or email address</ControlLabel>
                <FormControl name="user" />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Password</ControlLabel>
                <FormControl name="password" type="password" />
              </FormGroup>
              <FormGroup>
                <ButtonToolbar>
                  <Button appearance="primary">Sign in</Button>
                  <Button appearance="link">Forgot password?</Button>
                </ButtonToolbar>
              </FormGroup>
            </Form>
          </Panel>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    );
  }
}
