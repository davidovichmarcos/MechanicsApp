import React, { Component } from "react";
import { FlexboxGrid } from "rsuite";

export default class Page404 extends Component {
  render() {
    return (
      <div>
        <FlexboxGrid justify="center">
          <FlexboxGrid.Item colspan={6}>
            <h1>404, NOT FOUND!</h1>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </div>
    );
  }
}
