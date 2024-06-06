import { useEffect, useRef } from "react";
import * as d3 from "d3";

const Histograma = ({ datos }) => {
  const svgRef = useRef();

  useEffect(() => {
    // Set up dimensions and margins
    const margin = { top: 20, right: 30, bottom: 50, left: 60 };
    const width = 700 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    // Clear previous SVG content
    d3.select(svgRef.current).selectAll("*").remove();

    // Append SVG element
    const svg = d3
      .select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Set up scales
    const x = d3
      .scaleBand()
      .domain(Object.keys(datos))
      .range([0, width])
      .padding(0.1);

    const y = d3
      .scaleLinear()
      .domain([0, 15000]) // Set domain from 0 to 14000
      .nice()
      .range([height, 0]);

    // Add bars
    svg
      .selectAll(".bar")
      .data(Object.entries(datos))
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", ([key]) => x(key))
      .attr("width", x.bandwidth())
      .attr("y", ([, value]) => y(value))
      .attr("height", ([, value]) => height - y(value))
      .attr("fill", "rgba(50, 78, 122, 1)");

    // Add labels
    svg
      .selectAll(".label")
      .data(Object.entries(datos))
      .enter()
      .append("text")
      .attr("class", "label")
      .attr("x", ([key]) => x(key) + x.bandwidth() / 2)
      .attr("y", ([, value]) => y(value) - 5)
      .attr("text-anchor", "middle")
      .attr("fill", "white")
      .text(([, value]) => value);

    // Add X axis
    svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("fill", "white");

    // Add Y axis with transparent, dashed, thin lines
    svg
      .append("g")
      .call(
        d3
          .axisLeft(y)
          .ticks(14) // Adjust the number of ticks
          .tickSize(-width)
          .tickFormat("")
          .tickSizeOuter(0)
      )
      .selectAll("line")
      .attr("stroke-opacity", 0.2)
      .attr("stroke", "white")
      .attr("stroke-width", 0.5)
      .attr("stroke-dasharray", "2");
  }, [datos]);

  return <svg ref={svgRef}></svg>;
};

export default Histograma;
