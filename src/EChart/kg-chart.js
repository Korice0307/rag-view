import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import axios from "axios";

function ChartObj() {
  const [graphData, setGraphData] = useState([]);
  const [graphLinks, setGraphLinks] = useState([]);

  useEffect(() => {
    // 使用 axios 獲取數據
    axios.get("http://140.119.164.71:1880/kg_test").then((response) => {
      const { nodes, edges } = response.data;
      setGraphData(nodes);
      setGraphLinks(edges);
    });
  }, []);

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
        data: ["Category1", "Category2", "Category3"], // 節點分類
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
        categories: [
          { name: "Category1", itemStyle: { color: "#ff7f50" } },
          { name: "Category2", itemStyle: { color: "#87cefa" } },
          { name: "Category3", itemStyle: { color: "#da70d6" } },
        ],
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: 400, width: "100%" }} />;
}

export default ChartObj;

