import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import axios from "axios";

function ChartObj() {
  const [graphData, setGraphData] = useState([]);
  const [graphLinks, setGraphLinks] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // 使用 axios 獲取數據
    axios.get("http://140.119.164.71:1880/kg_test2").then((response) => {
      const { nodes, edges } = response.data;

      // 根據 value 分配顏色
      const coloredNodes = nodes.map((node) => {
        const color = getColorByValue(node.value);
        return { ...node, itemStyle: { color } };
      });

      setGraphData(coloredNodes);
      setGraphLinks(edges);

      // 提取唯一的分類
      const uniqueCategories = Array.from(new Set(nodes.map(node => node.category))).map(category => ({
        name: category,
        itemStyle: { color: getCategoryColor(category) },
      }));
      setCategories(uniqueCategories);
    });
  }, []);

  const getColorByValue = (value) => {
    if (value >= 40) return "#ff4500"; // 深橙色
    if (value >= 30) return "#ffa500"; // 橙色
    if (value >= 20) return "#ffd700"; // 金色
    return "#87cefa"; // 淡藍色
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
      text: "Knowledge Graph Example",
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

  return <ReactECharts option={option} style={{ height: 400, width: "100%" }} />;
}

export default ChartObj;

