import React, { useEffect, useState } from 'react';
import "./index.css";

const TableComponent = () => {
  const [data, setData] = useState([]);

  // 讀取 JSON 資料
  useEffect(() => {
    fetch('/index.json')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("無法讀取資料:", error));
  }, []);

  console.log(data,setData)
  return (
    <div className="table-container">
      <table className="esg-table">
        <thead>
          <tr>
            <th>ESG永續規範</th>
            <th>GRI和規系統</th>
            <th>SASB和規系統</th>
            <th>是否上傳</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.esg}</td>
              <td>{row.gri}</td>
              <td>{row.sasb}</td>
              <td>{row.uploaded}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
