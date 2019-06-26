import React, { Component } from "react";
import { FlexboxGrid } from "rsuite";

import CarSearch from "../CarSearch";
import CarCreate from "../CarCreate";
import CarData from "../CarData";

export default class CarPage extends Component {
  render() {
    return (
      <div>
        <FlexboxGrid justify="center">
          <FlexboxGrid.Item colspan={20}>
            <CarSearch />
            <CarCreate />
            <CarData />
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </div>
    );
  }
}
