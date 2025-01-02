import React from "react";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";
import { TreeChart as EChartsTreeChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([EChartsTreeChart, CanvasRenderer]);

const setItemStyle = (node) => {
  const level = node.level;
  let color;
  if (level === 'low') {
    color = '#1f77b4';
  } else if (level === 'medium') {
    color = '#ff7f0e';
  } else if (level === 'high') {
    color = '#2ca02c';
  } else {
    color = '#ccc';
  }
  node.itemStyle = {
    color: color
  };
  
  if (node.children) {
    node.children.forEach(setItemStyle);
  }
};

function TreeChartComponent({ data }) {
  // 設置每個節點的顏色
  setItemStyle(data);

  const option = {
    series: [
      {
        type: "tree",
        data: [data],
        top: "1%",
        left: "7%",
        bottom: "1%",
        right: "20%",
        symbolSize: 10,
        label: {
          position: "left",
          verticalAlign: "middle",
          align: "right",
          fontSize: 10,
        },
        leaves: {
          label: {
            position: "right",
            verticalAlign: "middle",
            align: "left",
          },
        },
        expandAndCollapse: true,
        initialTreeDepth: 2,
        animationDuration: 750,
      },
    ],
  };

  return (
    <ReactECharts
      option={option}
      style={{ height: "400px", width: "100%" }}
    />
  );
}

export default TreeChartComponent;
