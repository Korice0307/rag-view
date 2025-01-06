// ExpandableTables.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

const ExpandableTables = ({ url }) => {
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

  return (
    <div className="tables-container">
      <h1>GRI300規範</h1>
      {groupedData.map((node) => (
        <div key={node.name}>
          <div className="category-header" onClick={() => toggleNode(node.name)}>
            <h3>
              {node.category} (Value: {node.value})
            </h3>
            <button>
              {expandedNodes.includes(node.name) ? "收起" : "展開"}
            </button>
          </div>
          {expandedNodes.includes(node.name) && node.children.length > 0 && (
            <table className="esg-table">
              <thead>
                <tr>
                  <th>{node.name}子項目</th>
                  <th>描述</th>
                  <th>AI</th>
                  <th>AI評分</th>
                </tr>
              </thead>
              <tbody>
                {node.children.map((child) => (
                  <tr key={child.name}>
                    <td>{child.name}</td>
                    <td>{child.category}</td>
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

export default ExpandableTables;
