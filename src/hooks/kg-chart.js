import { useEffect, useState } from "react";
import axios from "axios";

export const useChartObj = (url, titleName) => {
  const [graphData, setGraphData] = useState([]);
  const [graphLinks, setGraphLinks] = useState([]);
  const [highlightedNode, setHighlightedNode] = useState(null);

  useEffect(() => {
    axios.get(url).then((response) => {
      const { nodes, edges } = response.data;

      const nodeDegree = {};
      edges.forEach(edge => {
        nodeDegree[edge.source] = (nodeDegree[edge.source] || 0) + 1;
        nodeDegree[edge.target] = (nodeDegree[edge.target] || 0) + 1;
      });

      const processedNodes = nodes.map((node) => {
        const degree = nodeDegree[node.name] || 0;
        const size = getNodeSize(degree);
        const color = getColorByValue(node.value);
        return { ...node, itemStyle: { color }, symbolSize: size };
      });

      setGraphData(processedNodes);
      setGraphLinks(edges);
    });
  }, [url]);

  const getNodeSize = (degree) => {
    return Math.min(80, degree * 10 + 20);
  };

  const getColorByValue = (value) => {
    if (value >= 30) return '#ff0000';
    if (value >= 20) return '#ff7f00';
    if (value >= 10) return '#ffff00';
    return '#00ff00';
  };

  const option = {
    title: {
      text: titleName,
      left: "center",
    },
    tooltip: {
      show: true,
      formatter: function (params) {
        if (params.dataType === "node") {
          return `Node: ${params.data.name}`;
        } else if (params.dataType === "edge") {
          return `Relation: ${params.data.name}`;
        }
      },
    },
    series: [
      {
        type: "graph",
        layout: "force",
        force: {
          repulsion: 500,
          edgeLength: [50, 100],
        },
        roam: true,
        label: {
          show: true,
          position: "right",
        },
        lineStyle: {
          color: "source",
          curveness: 0.3,
        },
        data: graphData.map((node) => ({
          ...node,
          itemStyle: {
            opacity: highlightedNode === null || highlightedNode === node.name ? 1 : 0.3,
            color: node.itemStyle.color,
          },
        })),
        links: graphLinks,
      },
    ],
  };

  const handleHoverNode = (nodeName) => {
    setHighlightedNode(nodeName);
  };

  return { option, handleHoverNode };
};
