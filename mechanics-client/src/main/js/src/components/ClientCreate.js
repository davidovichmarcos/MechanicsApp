import React, { Component } from "react";
import styled from "styled-components";
import { Input, Button } from "rsuite";

import ClientList from "./ClientList";

import workers from "../static/img/workers.png";

const Style = styled.div``;

const Hero = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-template-rows: 1fr;
  min-height: 80vh;
`;

const BackCont = styled.div`
  width: 100%;
  background-image: url(${workers});
  background-size: 450px;
  background-repeat: no-repeat;
  background-position: center center;
`;

const FormCont = styled.div`
  align-self: center;
  input {
    margin: 10px 0px;
  }
`;

export default class ClientCreate extends Component {
  state = {
    formData: {},
    clientList: [{}]
  };

  handleChange = (value, event) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [event.target.name]: value
      }
    });
  };

  async submitForm(e) {
    /// meter en process.env
    var url = "http://localhost:5555/client";
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
    var url = "http://localhost:5555/client";
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
        <Hero>
          <BackCont />
          <FormCont>
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
              <Button color="green" type="submit" block>
                CREAR
              </Button>
            </form>
          </FormCont>
        </Hero>
        {this.state.clientList.length > 0 ? (
          <ClientList clientList={this.state.clientList} />
        ) : (
          ""
        )}
      </Style>
    );
  }
}
