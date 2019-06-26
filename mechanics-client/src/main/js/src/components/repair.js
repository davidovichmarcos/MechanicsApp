import React, { Component } from "react";

export default class repair extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        totalPrice: 0
      }
    };
  }

  handleChange = event => {
    this.setState({
      formData: {
        ...this.state.formData,
        [event.target.name]: event.target.value
      }
    });
  };

  setTotalPrice = () => {
    const totalPrice =
      parseInt(this.state.formData.sparePrice) +
      parseInt(this.state.formData.workPrice);
    this.setState({
      formData: {
        ...this.state.formData,
        totalPrice
      }
    });
  };
  render() {
    return (
      <div>
        <h3>Repair ID # 000</h3>
        status: <b> open </b>
        <h4>Details</h4>
        <textarea name="details" id="" cols="80" rows="10" />
        <br />
        Costo de Repuestos:
        <br />
        <input type="number" name="sparePrice" onChange={this.handleChange} />
        <br />
        Mano de Obra: <br />
        <input type="number" name="workPrice" onChange={this.handleChange} />
        <br />
        <button type="button" onClick={this.setTotalPrice}>
          {" "}
          CALCULAR TOTAL
        </button>
        <h4>TOTAL $ {this.state.formData.totalPrice} </h4>
        <br />
        <button type="button">Guardar</button>
        <button type="button">Guardar y Cerrar</button>
      </div>
    );
  }
}
