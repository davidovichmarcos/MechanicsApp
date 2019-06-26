import React, { Component } from "react";
import styled from "styled-components";
import { Input, Button } from "rsuite";

import CarList from "./CarList";

const Style = styled.div``;

function SelectOwner({ clients, clientChange }) {
  if (clients.length > 0) {
    return (
      <select
        name="client"
        id=""
        onChange={clientChange}
        defaultValue={"DEFAULT"}
        required
      >
        <option disabled value="DEFAULT">
          -- select an owner --
        </option>
        {clients.map((client, i) => {
          return (
            <option value={client.id} key={i}>
              {client.name + " " + client.lastName}{" "}
            </option>
          );
        })}
      </select>
    );
  } else {
    return "CREAR CLIENTES";
  }
}

export default class CarCreate extends Component {
  state = {
    formData: {},
    clientList: [],
    carList: []
  };

  handleChange = event => {
    this.setState({
      formData: {
        ...this.state.formData,
        [event.target.name]: event.target.value
      }
    });
  };

  clientChange = event => {
    let client = this.state.clientList[event.target.value - 1];
    this.setState({
      ...this.state,
      formData: {
        ...this.state.formData,
        client: client
      }
    });
  };

  //MODIFICAR!
  async submitForm() {
    /// meter en process.env
    var url = "http://localhost:8080/car";
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
        this.fetchCars();
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

  async fetchCars() {
    var url = "http://localhost:8080/car";
    return await fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          ...this.state,
          carList: res
        });
      })
      .catch(error => console.error("Error:", error));
  }

  async componentDidMount() {
    this.fetchClients();
    this.fetchCars();
  }

  render() {
    return (
      <Style>
        <h2>CAR CREATE</h2>
        <form
          action=""
          method="post"
          onSubmit={e => {
            e.preventDefault();
            this.submitForm();
          }}
        >
          {" "}
          <Input
            type="text"
            name="patent"
            id="patentInput"
            placeholder="Patente"
            onChange={this.handleChange}
            required
          />
          <Input
            type="text"
            name="brand"
            id="brandInput"
            placeholder="Marca"
            onChange={this.handleChange}
            required
          />
          <Input
            type="text"
            name="model"
            id="modelInput"
            placeholder="Modelo"
            onChange={this.handleChange}
            required
          />
          <Input
            type="number"
            name="year"
            id="yearInput"
            placeholder="Año"
            onChange={this.handleChange}
            required
          />
          <SelectOwner
            clients={this.state.clientList}
            clientChange={this.clientChange}
          />
          <Button color="green" type="submit">
            {" "}
            CREAR{" "}
          </Button>
        </form>
        <div>
          <CarList carList={this.state.carList} />
        </div>
      </Style>
    );
  }
}
