import React from "react";
import { useChartObj } from "../../hooks/kg-chart";
import ReactECharts from "echarts-for-react"
import TableComponent from "../../component/Table/index"
import EChartComponent from "../../hooks/ExampleEChart";

function GRI300() {
    const { option } = useChartObj("http://140.119.164.71:1880/kg_test4");
    const data = [
        {
            name: "302-1：組織內部的能源消耗量",
            data: "非再生能源的燃料類別及總消耗量",
            kg: "節點1, 節點2, 節點3",
            aiResponse: "電力、供熱、製冷、蒸汽等類別的消耗總量",
            aiScore: "合規性中等，需中等調整",
            references: "https://example1.com"
        },
        {
            name: "302-2：組織外部的能源消耗量",
            data: "上游與下游的能源消耗",
            kg: "節點4, 節點5, 節點6",
            aiResponse: "排除內部能源消耗量，僅計算外部能源消耗",
            aiScore: "極高合規，無需進一步調整",
            references: "https://example2.com"
        },
        {
            name: "302-3：能源密集度",
            data: "計算公式：能源密集度 = 能源消耗量 / 組織特定度量標準",
            kg: "節點7, 節點8, 節點9",
            aiResponse: "可依以下方式劃分密集度",
            aiScore: "合規性中等，需中等調整",
            references: "https://example3.com"
        },
        {
            name: "302-4：減少能源消耗",
            data: "節能與效率提升專案直接減少的能源消耗量（以焦耳或其倍數為單位）。",
            kg: "",
            aiResponse: "說明減少量是否採估算、模式分析或直接量測。",
            aiScore: "合規性中等，需中等調整",
            references: "https://example4.com",
        },
        {
            name: "302-5：降低產品和服務的能源需求",
            data: "計算產品或服務在使用期間內的能源需求減少量（以焦耳或其倍數為單位）。",
            kg: "",
            aiResponse: "說明基準年或基線及其選擇理由。",
            aiScore: "包含消耗模式相關資訊（如每小時或工作日平均減少的能源百分比)",
            references: "https://example5.com",
        }

    ];

    return (
        <div>
            <TableComponent data={data} />
            <ReactECharts option={option} titleName="GRI300" style={{ height: 600, width: "100%" }} />;
        </div>
    );
}

export default GRI300;