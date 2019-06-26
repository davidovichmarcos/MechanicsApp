import React from "react";

export function CarElement({ car }) {
  return (
    <div>
      <h2>{car.patent}</h2>
      Brand: <b>{car.brand} </b> Model: <b>{car.model} </b> Year:{" "}
      <b>{car.year} </b> <br />
      {car.client
        ? "Owner: " + car.client.name + " " + car.client.lastName
        : " "}
    </div>
  );
}

export default function CarList({ carList }) {
  return (
    <div>
      <h3>Car List ({carList.length})</h3>
      {carList.map((car, i) => {
        return <CarElement car={car} key={i} />;
      })}
    </div>
  );
}
