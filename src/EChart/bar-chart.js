import React from "react";
import ReactECharts from "echarts-for-react";

function BarChart() {
    const barChartOption = {
        title: { text: "Bar Chart Example" },
        xAxis: { type: "category", data: ["A", "B", "C", "D", "E"] },
        yAxis: { type: "value" },
        series: [
          {
            type: "bar",
            data: [10, 52, 200, 334, 390],
          },
        ],
      };
      
      

    return <ReactECharts option={barChartOption} style={{ height: 400, width: "100%" }} />;
}

export default BarChart;