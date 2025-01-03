import React from "react";
import { useChartObj } from "../../hooks/kg-chart";
import ReactECharts from "echarts-for-react"
import TableComponent from "../../component/Table/index"

function GRI300() {
    const { option } = useChartObj("http://140.119.164.71:1880/kg_test2");
    const data = [
        {
            name: "範例1",
            data: "文件A",
            kg: "節點1, 節點2, 節點3",
            aiCompletion: "85%",
            aiScoreDescription: "高度合規，僅需少量調整",
            references: "https://example1.com"
        },
        {
            name: "範例2", data: "報告B",
            kg: "節點4, 節點5, 節點6",
            aiCompletion: "92%",
            aiScoreDescription: "極高合規，無需進一步調整",
            references: "https://example2.com"
        },
        {
            name: "範例3", data: "證書C",
            kg: "節點7, 節點8, 節點9",
            aiCompletion: "78%",
            aiScoreDescription: "合規性中等，需中等調整",
            references: "https://example3.com"
        }];

    return (
        <div>
            <TableComponent data={data} />
            <ReactECharts option={option} titleName="GRI300" style={{ height: 600, width: "100%" }} />;
        </div>
    );
}

export default GRI300;