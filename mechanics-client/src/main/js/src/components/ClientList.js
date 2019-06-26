import React from "react";

function ClientElement({ client }) {
  return (
    <div>
      <h4>{client.name + " " + client.lastName}</h4>
      <h6>{"ID :" + client.id + "  Dni: " + client.dni}</h6>
    </div>
  );
}

export default function ClientList(props) {
  const length = props.clientList.length;
  return (
    <div>
      <h3>Clients List ({length})</h3>
      {props.clientList.map((client, i) => {
        return <ClientElement client={client} key={i} />;
      })}
    </div>
  );
}
