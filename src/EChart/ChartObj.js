import React from "react";
import ReactECharts from "echarts-for-react";

function ChartObj() {
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
        legend: [{
          data: ["Category1", "Category2", "Category3"], // 節點分類
          top: "bottom",
        }],
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
            data: [
              { name: "Node1", category: "Category1", value: 10 },
              { name: "Node2", category: "Category2", value: 20 },
              { name: "Node3", category: "Category3", value: 30 },
              { name: "Node4", category: "Category1", value: 15 },
            ],
            links: [
              { source: "Node1", target: "Node2", name: "Relation A" },
              { source: "Node2", target: "Node3", name: "Relation B" },
              { source: "Node3", target: "Node4", name: "Relation C" },
              { source: "Node4", target: "Node1", name: "Relation D" },
            ],
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
