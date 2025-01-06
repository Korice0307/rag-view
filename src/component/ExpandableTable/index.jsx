import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

const ExpandableTable = ({ url, handleHoverNode }) => {
  const [data, setData] = useState({ nodes: [], edges: [] });
  const [expandedNodes, setExpandedNodes] = useState([]);

  useEffect(() => {
    if (url) {
      axios
        .get(url)
        .then((response) => {
          const { nodes, edges } = response.data;
          if (Array.isArray(nodes) && Array.isArray(edges)) {
            setData(response.data);
          } else {
            console.error("Invalid data structure:", response.data);
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [url]);

  const toggleNode = (nodeName) => {
    setExpandedNodes((prev) =>
      prev.includes(nodeName)
        ? prev.filter((name) => name !== nodeName)
        : [...prev, nodeName]
    );
  };

  const organizeData = () => {
    const nodeMap = {};
    data.nodes.forEach((node) => {
      nodeMap[node.name] = { ...node, children: [] };
    });

    data.edges.forEach((edge) => {
      if (nodeMap[edge.source]) {
        nodeMap[edge.source].children.push({
          ...nodeMap[edge.target],
          relation: edge.name,
        });
      }
    });

    return Object.values(nodeMap).filter(
      (node) => !data.edges.some((edge) => edge.target === node.name)
    );
  };

  const groupedData = organizeData();

  const getNodeColor = (node) => {
    // 你可以根據節點的某些屬性返回顏色，這裡我們假設根據節點名稱來決定顏色
    if (node.name.includes("Category A")) {
      return "#FF5733"; // 紅色
    }
    if (node.name.includes("Category B")) {
      return "#33FF57"; // 綠色
    }
    return "#3375FF"; // 預設顏色：藍色
  };

  return (
    <div className="tables-container">
      <h1>GRI300規範</h1>
      {groupedData.map((node) => (
        <div key={node.name}>
          <div
            className="category-header"
            onClick={() => toggleNode(node.name)}
            onMouseEnter={() => handleHoverNode(node.name)}
            onMouseLeave={() => handleHoverNode(null)}
          >
            <h3>{node.name}</h3>
            <button>{expandedNodes.includes(node.name) ? "收起" : "展開"}</button>
          </div>
          {expandedNodes.includes(node.name) && node.children.length > 0 && (
            <table className="esg-table">
              <thead>
                <tr>
                  <th>{node.name}子項目</th>
                  <th>資料上傳</th>
                  <th>描述</th>
                  <th>知識圖譜座標</th>
                  <th>AI</th>
                  <th>AI評分</th>
                </tr>
              </thead>
              <tbody>
                {node.children.map((child) => (
                  <tr key={child.name}>
                    <td>{child.name}</td>
                    <td>{child.airesponse}</td>
                    <td>{child.category}</td>
                    <td>
                      {/* 在這裡顯示長方形顏色 */}
                      <div
                        className="node-color-box"
                        style={{
                          backgroundColor: getNodeColor(child),
                          width: "30px", // 設定長方形的寬度
                          height: "20px", // 設定長方形的高度
                          cursor: "pointer",
                        }}
                        onMouseEnter={() => handleHoverNode(child.name)}
                        onMouseLeave={() => handleHoverNode(null)}
                      ></div>
                    </td>
                    <td>{child.relation}</td>
                    <td>{child.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      ))}
    </div>
  );
};

export default ExpandableTable;
