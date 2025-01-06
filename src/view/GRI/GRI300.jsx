import React from "react";
import { useChartObj } from "../../hooks/kg-chart";
import ReactECharts from "echarts-for-react";
import ExpandableTable from "../../component/ExpandableTable";
import "../../index.css"; // 全局样式

function GRI300() {
  const url = "http://140.119.164.71:1880/kg_test4";
  const { option, handleHoverNode } = useChartObj(url, "GRI300");

  return (
    <div className="page-container">
      <div className="content">
        {/* 左侧表格 */}
        <div className="table-container">
          <ExpandableTable url={url} 
          handleHoverNode={handleHoverNode}
          style={{ width: "100%" }} 
          />
        </div>

        {/* 右侧图表 */}
        <div className="chart-container">
          {option ? (
            <ReactECharts
              option={option}
              titleName="GRI300"
              style={{ height: "100%", width: "100%" }}
            />
          ) : (
            <p>Loading chart...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default GRI300;
