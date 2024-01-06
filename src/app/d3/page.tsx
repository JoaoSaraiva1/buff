"use client";

import * as d3 from "d3";
import { useEffect, useRef } from "react";
import { prisma } from "@/../prisma/index";

export default async function Home() {
  const chartRef = useRef(null);

  useEffect(() => {
    // Fetch data from API or use the items array directly
    const fetchData = async () => {
      /* const items = await prisma.price_history.findMany({
                where: {
                    buff_id: "927964",
                },
            }); */
      const items = [
        {
          id: 4420,
          buff_id: "927964",
          price: 1.19,
          date: "2024-01-04T00:00:00.000Z",
        },
        {
          id: 5027,
          buff_id: "927964",
          price: 1.21,
          date: "2024-01-05T00:00:00.000Z",
        },
        {
          id: 5634,
          buff_id: "927964",
          price: 1.2,
          date: "2024-01-06T00:00:00.000Z",
        },
      ];

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
        .enter()
        .append("rect")
        .attr("x", (d, i) => i * 50)
        .attr("y", (d) => 300 - d.price * 100)
        .attr("width", 40)
        .attr("height", (d) => d.price * 100)
        .attr("fill", "orange");

      // Add labels for each item
      svg
        .selectAll("text")
        .data(items)
        .enter()
        .append("text")
        .text((d) => d.price)
        .attr("x", (d, i) => i * 50 + 20)
        .attr("y", (d) => 300 - d.price * 100 - 5)
        .attr("text-anchor", "middle")
        .attr("fill", "black");
    };

    fetchData();
  }, []);

  return (
    <div className="bg-orange-300 w-screen h-screen">
      <h1>D3 Chart</h1>
      <div ref={chartRef}></div>
    </div>
  );
}
