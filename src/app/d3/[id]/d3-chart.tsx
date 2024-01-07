"use client";

import * as d3 from "d3";
import { useRouter } from "next/navigation";
import { useRef, useEffect } from "react";

const D3Chart: React.FC<{ items: Item[] }> = ({ items }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Clean up previous chart if it exists
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

    // Set the y-axis range
    const yScale = d3.scaleLinear().domain([0, 100]).range([300, 0]);

    // Add rectangles for each item
    svg
      .selectAll("rect")
      .data(items)
      .join("rect")
      .attr("x", (d, i) => i * 50)
      .attr("y", (d) => yScale(d.price))
      .attr("width", 40)
      .attr("height", (d) => 300 - yScale(d.price))
      .attr("fill", "orange");

    // Add labels for each item
    svg
      .selectAll("text")
      .data(items)
      .join("text")
      .text((d) => d.price)
      .attr("x", (d, i) => i * 50 + 20)
      .attr("y", (d) => yScale(d.price) - 5)
      .attr("text-anchor", "middle")
      .attr("fill", "black");
  }, [items]);

  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="flex flex-col items-center">
      <div ref={chartRef}></div>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default D3Chart;
