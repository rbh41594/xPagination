import React from "react";

export default function TableItem({ id, name, email, role }) {
  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>{role}</td>
    </tr>
  );
}
