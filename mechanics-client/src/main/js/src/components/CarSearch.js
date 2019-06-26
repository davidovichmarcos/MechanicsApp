import React, { Component } from "react";
import styled from "styled-components";

import CarElement from "./CarList";

const Style = styled.div``;

export default class CarSearch extends Component {
  state = {
    keyword: ""
  };

  handleChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };

  //modificar!
  async submitForm() {
    /// meter en process.env
    var url = "http://localhost:8080/car/?id=" + this.state.keyword;
    console.log(`Fetching ${this.state.keyword} to ${url}`);
    return await fetch(url)
      .then(res => res.json())
      .then(res => {
        console.log(res);
      })
      .catch(error => console.error("Error:", error));
  }
  render() {
    return (
      <Style>
        <h2>CAR SEARCH</h2>
        <form
          action=""
          method="post"
          onSubmit={e => {
            e.preventDefault();
            this.submitForm();
          }}
        >
          <input
            type="text"
            name="keyword"
            id=""
            placeholder="Ingrese patente..."
            onChange={this.handleChange}
          />
          <button type="submit">Search</button>
        </form>
      </Style>
    );
  }
}
