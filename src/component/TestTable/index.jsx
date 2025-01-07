import React, { useEffect, useState } from 'react';
import "./index.css";

const TestTable = () => {
  const [data, setData] = useState([]);

  // 讀取 JSON 資料
  useEffect(() => {
    fetch('/TestTableData.json')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("無法讀取資料:", error));
  }, []);

  return (
    <div className="table-container">
      <table className="esg-table">
        <thead>
          <tr>
            <th>GRI200</th>
            <th>合規</th>
            <th>不合規</th>
            <th>改善方式</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.GRI200}</td>
              <td>{item.compliant === '是' ? '✔' : '❌'}</td>
              <td>
                {item.non_compliant && item.non_compliant.options.length > 0 && (
                  <select disabled>
                    {item.non_compliant.options.map((option, i) => (
                      <option key={i} value={option.sub_indicator}>
                        {option.sub_indicator} - {option.status}
                      </option>
                    ))}
                  </select>
                )}
              </td>
              <td>{item.improvement_method}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TestTable;
