import React from "react";
import './index.css'

function TableComponent({ data }) {

  return (
    <table border="1">
      <thead>
        <tr>
          <th>名稱</th>
          <th>佐證資料</th>
          <th>智慧圖譜</th>
          <th>AI 合規完成度</th>
          <th>AI 評分說明</th>
          <th>參考資料</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.name}>
            <td>{item.name}</td>
            <td>{item.data}</td>
            <td>{item.kg}</td>
            <td>{item.aiResponse}</td>
            <td>{item.aiScore}</td>
            <td>{item.references}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableComponent;
