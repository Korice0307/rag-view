import React, { useEffect, useState } from "react";
import axios from "axios";

export const useChartObj = (url,titleName) => {
  const [graphData, setGraphData] = useState([]);
  const [graphLinks, setGraphLinks] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // 使用 axios 獲取數據
    axios.get(url).then((response) => {
      const { nodes, edges } = response.data;

      // 計算每個節點的度（degree）
      const nodeDegree = {};
      edges.forEach(edge => {
        nodeDegree[edge.source] = (nodeDegree[edge.source] || 0) + 1;
        nodeDegree[edge.target] = (nodeDegree[edge.target] || 0) + 1;
      });

      // 根據度設置節點大小和顏色
      const processedNodes = nodes.map((node) => {
        const degree = nodeDegree[node.name] || 0;
        const size = getNodeSize(degree);
        const color = getColorByCategory(node.category);
        return { ...node, itemStyle: { color }, symbolSize: size };
      });

      setGraphData(processedNodes);
      setGraphLinks(edges);

      // 提取唯一的分類
      const uniqueCategories = Array.from(new Set(nodes.map(node => node.category))).map(category => ({
        name: category,
        itemStyle: { color: getCategoryColor(category) },
      }));
      setCategories(uniqueCategories);
    });
  }, [url]);

  const getNodeSize = (degree) => {
    // 根據節點的度（degree）設置節點大小，並擴大幅度
    return Math.min(80, degree * 10 + 20); // 最小大小為 20，最大為 80
  };

  const getColorByCategory = (category) => {
    const categoryMap = {
      "Energy (302)": "#ff7f50",
      "Internal Energy Consumption": "#87cefa",
      "External Energy Consumption": "#da70d6",
      "Energy Intensity": "#32cd32",
      "Energy Reduction": "#4682b4",
      "Product/Service Energy Demand Reduction": "#8a2be2",
      "Category": "#ffd700",
      "Consumption": "#40e0d0",
      "Reduction": "#ff6347",
      "Intensity": "#8b0000",
      "Non-Renewable Energy (Internal)": "#ffa07a",
      "Renewable Energy (Internal)": "#7fff00",
      "Electricity (Internal)": "#dc143c",
      "Transportation (External)": "#00ced1",
      "Product Lifecycle (External)": "#4682b4",
      "Service Intensity": "#6a5acd",
      "Product Intensity": "#ff4500",
      "Reduction Initiatives": "#2e8b57",
      "Efficiency": "#b8860b",
    };
    return categoryMap[category] || "#cccccc"; // 默認顏色
  };

  const getCategoryColor = (category) => {
    const categoryMap = {
      "Energy (302)": "#ff7f50",
      "Internal Energy Consumption": "#87cefa",
      "External Energy Consumption": "#da70d6",
      "Energy Intensity": "#32cd32",
      "Energy Reduction": "#4682b4",
      "Product/Service Energy Demand Reduction": "#8a2be2",
      "Category": "#ffd700",
      "Consumption": "#40e0d0",
      "Reduction": "#ff6347",
      "Intensity": "#8b0000",
      "Non-Renewable Energy (Internal)": "#ffa07a",
      "Renewable Energy (Internal)": "#7fff00",
      "Electricity (Internal)": "#dc143c",
      "Transportation (External)": "#00ced1",
      "Product Lifecycle (External)": "#4682b4",
      "Service Intensity": "#6a5acd",
      "Product Intensity": "#ff4500",
      "Reduction Initiatives": "#2e8b57",
      "Efficiency": "#b8860b",
    };
    return categoryMap[category] || "#cccccc"; // 默認顏色
  };

  const option = {
    title: {
      text: titleName,
      left: "center",
    },
    tooltip: {
      show: true,
      formatter: function (params) {
        // 顯示節點或邊的資訊
        if (params.dataType === "node") {
          return `Node: ${params.data.name}`;
        } else if (params.dataType === "edge") {
          return `Relation: ${params.data.name}`;
        }
      },
    },
    legend: [
      {
        data: categories.map(category => category.name), // 使用分離的分類數據
        top: "bottom",
      },
    ],
    series: [
      {
        type: "graph",
        layout: "force", // 使用力導向布局
        force: {
          repulsion: 1000, // 節點間的排斥力
          edgeLength: [50, 150], // 邊的長度範圍
        },
        roam: true, // 可通過滾輪縮放和平移
        label: {
          show: true, // 顯示節點標籤
          position: "right",
        },
        lineStyle: {
          color: "source", // 邊的顏色與起點一致
          curveness: 0.3, // 邊的弧度
        },
        data: graphData, // 使用從後端獲取的節點數據
        links: graphLinks, // 使用從後端獲取的邊數據
        categories: categories, // 使用從數據中提取的分類
      },
    ],
  };

  return { option };
};
