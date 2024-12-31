import React from "react";
import ReactECharts from "echarts-for-react";

function PieChart() {
    const pieChartOption = {
        title: { text: "Pie Chart Example", left: "center" },
        tooltip: { trigger: "item" },
        series: [
            {
                type: "pie",
                data: [
                    { value: 1048, name: "Search Engine" },
                    { value: 735, name: "Direct" },
                    { value: 580, name: "Email" },
                ],
            },
        ],
    };

    return <ReactECharts option={pieChartOption} style={{ height: 400, width: "100%" }} />;
}

export default PieChart;