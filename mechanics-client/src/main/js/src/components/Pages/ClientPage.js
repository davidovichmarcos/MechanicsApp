import React, { Component } from "react";
import { FlexboxGrid } from "rsuite";

import ClientCreate from "../ClientCreate";
import FlexboxGridItem from "rsuite/lib/FlexboxGridItem";

export default class ClientPage extends Component {
  render() {
    return (
      <div>
        <FlexboxGrid justify="center">
          <FlexboxGridItem colspan={20}>
            <ClientCreate />
          </FlexboxGridItem>
        </FlexboxGrid>
      </div>
    );
  }
}
