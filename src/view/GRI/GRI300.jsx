import React from "react";
import { useChartObj } from "../../hooks/kg-chart";
import ReactECharts from "echarts-for-react"
import ExpandableTable from "../../component/ExpandableTable"

function GRI300() {
    const { option } = useChartObj("http://140.119.164.71:1880/kg_test2");

    return (
        <div>
            <ExpandableTable url="http://140.119.164.71:1880/kg_test2" />
            <ReactECharts option={option} titleName="GRI300" style={{ height: 600, width: "100%" }} />;
        </div>
    );
}

export default GRI300;