import React from "react";
import '../style/Table.css'

function TableComponent({ data }) {

  return (
    <table border="1">
      <thead>
        <tr>
          <th>水資源管理</th>
          <th>條款</th>
          <th>完成度</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableComponent;
