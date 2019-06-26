import React, { Component } from "react";
import styled from "styled-components";
import { Input, Button } from "rsuite";

import ClientList from "./ClientList";

const Style = styled.div``;

export default class ClientCreate extends Component {
  state = {
    formData: {},
    clientList: [{}]
  };

  handleChange = event => {
    this.setState({
      formData: {
        ...this.state.formData,
        [event.target.name]: event.target.value
      }
    });
  };

  async submitForm(e) {
    /// meter en process.env
    var url = "http://localhost:8080/client";
    var data = this.state.formData;
    var settings = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    };
    return await fetch(url, settings)
      .then(res => res.json())
      .then(res => {
        if (res.id == null) {
          //hacer algo cuando resive ok.
          console.log("------ LLEGO MAL!");
        } else {
          this.fetchClients();
        }
      })
      .catch(error => console.error("Error:", error));
  }

  async fetchClients() {
    var url = "http://localhost:8080/client";
    return await fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          ...this.state,
          clientList: res
        });
      })
      .catch(error => console.error("Error:", error));
  }

  resetForm = () => {
    this.setState({
      ...this.state,
      formData: {}
    });
  };

  async componentDidMount() {
    this.fetchClients();
  }

  render() {
    return (
      <Style>
        <h2>CLIENT CREATE</h2>
        <form
          action=""
          method="post"
          onSubmit={e => {
            e.preventDefault();
            this.submitForm(e);
          }}
        >
          <Input
            type="text"
            name="name"
            id=""
            placeholder="Nombre"
            onChange={this.handleChange}
            required
          />
          <Input
            type="text"
            name="lastName"
            id=""
            placeholder="Apellido"
            onChange={this.handleChange}
            required
          />
          <Input
            type="number"
            name="dni"
            id=""
            min="0"
            placeholder="Dni"
            required
            onChange={this.handleChange}
          />
          <Input
            type="number"
            name="phone"
            id=""
            min="0"
            placeholder="Telefono"
            onChange={this.handleChange}
          />
          <Input
            type="email"
            name="email"
            id=""
            placeholder="Email"
            onChange={this.handleChange}
          />
          <Input
            type="text"
            name="address"
            id=""
            placeholder="Direccion"
            onChange={this.handleChange}
          />
          <Button color="green" type="submit">
            CREAR
          </Button>
        </form>
        {this.state.clientList.length > 0 ? (
          <ClientList clientList={this.state.clientList} />
        ) : (
          ""
        )}
      </Style>
    );
  }
}
