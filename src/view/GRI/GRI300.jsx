import React from "react";
import { useChartObj } from "../../hooks/kg-chart";
import ReactECharts from "echarts-for-react"
import ExpandableTable from "../../component/ExpandableTable"

function GRI300() {

    const url = "http://140.119.164.71:1880/kg_test4";
    const { option } = useChartObj(url);
    console.log("ECharts option:", option);
    return (
        <div>
            <ExpandableTable url={url} />

            {option ? (
                <ReactECharts
                    option={option}
                    titleName="GRI300"
                    style={{ height: 600, width: "100%" }}
                />
            ) : (
                <p>Loading chart...</p>
            )}
        </div>
    );
}

export default GRI300;