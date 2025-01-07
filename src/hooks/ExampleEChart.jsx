import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import axios from 'axios';

const EChartComponent = ({ url }) => {
  const [option, setOption] = useState(null);

  // 使用色彩漸變函數來設置顏色
  const getColorByValue = (value) => {
    const min = 0; // 設置最小值
    const max = 50; // 設置最大值
    const hue = ((value - min) / (max - min)) * 240-100; // 計算色調 (0到240度，從紅色到藍色)
    return `hsl(${hue}, 100%, 50%)`; // 返回 HSL 顏色值
  };

  // 使用 useEffect 當組件加載時抓取資料
  useEffect(() => {
    const fetchData = async () => {
      try {
        // 使用 fetch 來抓取本地 JSON 文件
        const response = await fetch('/src/data.json');
        const graph = await response.json();

        // 根據節點的 value 屬性來設定顏色
        graph.nodes.forEach(function (node) {
          const color = getColorByValue(node.value);
          node.itemStyle = {
            color: color
          };
        });

        // 設定 ECharts 的選項
        const option = {
          tooltip: {},
          legend: [
            {
              data: graph.categories.map(function (a) {
                return a.name;
              })
            }
          ],
          series: [
            {
              name: 'Graph Representation',
              type: 'graph',
              layout: 'force',  // 力導向圖
              data: graph.nodes, // 使用從 JSON 文件中取得的節點資料
              links: graph.edges, // 使用從 JSON 文件中取得的連接資料
              categories: graph.categories, // 使用從 JSON 文件中取得的分類資料
              roam: true, // 啟用圖形移動
              label: {
                show: true,
                position: 'right',
                formatter: '{b}'
              },
              force: {
                repulsion: 300 // 節點排斥力
              },
              lineStyle: {
                color: 'source',
                curveness: 0.3
              }
            }
          ]
        };

        // 設定圖表選項
        setOption(option);

      } catch (error) {
        console.error('資料獲取錯誤:', error);
      }
    };

    fetchData();
  }, []); // 空依賴數組確保只在組件初次渲染時執行

  // 渲染 ReactECharts 元件
  return (
    <div style={{ height: '100%', width: '100%' }}> {/* 調整外框的高度 */}
      {option ? <ReactECharts option={option} style={{ height: '100%', width: '100%' }} /> : 'Loading...'}
    </div>
  );
};

export default EChartComponent;
