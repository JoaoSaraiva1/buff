"use client";

import * as d3 from "d3";
import { useRef, useEffect } from "react";

const D3Chart: React.FC<{ items: Item[] }> = ({ items }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Clean up previous chart
    const existingChart = d3.select(chartRef.current).select("svg");
    if (!existingChart.empty()) {
      existingChart.remove();
    }

    // Create the chart using d3
    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("width", 400)
      .attr("height", 300);

    // Add rectangles for each item
    svg
      .selectAll("rect")
      .data(items)
      .join("rect")
      .attr("x", (d, i) => i * 50)
      .attr("y", (d) => 300 - d.price * 100)
      .attr("width", 40)
      .attr("height", (d) => d.price * 100)
      .attr("fill", "orange");

    // Add labels for each item
    svg
      .selectAll("text")
      .data(items)
      .join("text")
      .text((d) => d.price)
      .attr("x", (d, i) => i * 50 + 20)
      .attr("y", (d) => 300 - d.price * 100 - 5)
      .attr("text-anchor", "middle")
      .attr("fill", "black");
  }, [items]);

  return (
    <div>
      <div ref={chartRef}></div>
    </div>
  );
};

export default D3Chart;
