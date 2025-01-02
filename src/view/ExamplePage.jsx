import React from "react";
import { useChartObj } from "../hooks/kg-chart";
import ReactECharts from "echarts-for-react"

export default function ExamplePage() {
    const tableData = [
        { id: 203, name: '***', score: 90 },
        { id: 204, name: '***', score: 85 },
        { id: 304, name: '***', score: 92 },
    ]

    const { option } = useChartObj("http://140.119.164.71:1880/kg_test2");
    return (
        <div>
            {/* <TableComponent data={tableData} /> */}
            <ReactECharts option={option} style={{ height: 600, width: "100%" }} />;
        </div>
    );
};