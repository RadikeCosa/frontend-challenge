/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import * as d3 from "d3";

const LineChart = ({ data }) => {
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

    // Add background color
    svg
      .append("rect")
      .attr("width", width)
      .attr("height", height)
      .attr("fill", "rgba(50, 78, 122, 1)");

    // Set up scales
    const x = d3
      .scaleTime()
      .domain([new Date(1920, 0, 1), new Date(2000, 0, 1)]) // Set domain from 1920 to 2000
      .range([0, width]);

    const y = d3
      .scaleLinear()
      .domain([0, 5]) // Set domain from 0 to 5
      .range([height, 0]);

    // Add gridlines for Y axis
    svg
      .append("g")
      .attr("class", "grid")
      .call(d3.axisLeft(y).ticks(5).tickSize(-width).tickFormat("")) // No etiquetas, solo líneas
      .selectAll(".tick line")
      .attr("stroke", "rgba(255,255,255,0.3)");

    // Add gridlines for X axis
    svg
      .append("g")
      .attr("class", "grid")
      .call(
        d3
          .axisBottom(x)
          .ticks(d3.timeYear.every(10))
          .tickSize(-height)
          .tickFormat("")
      )
      .selectAll(".tick line")
      .attr("stroke", "rgba(255,255,255,0.3)");

    // Add X axis
    svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(
        d3
          .axisBottom(x)
          .ticks(d3.timeYear.every(10))
          .tickFormat(d3.timeFormat("%Y"))
      ) // Ticks every 10 years
      .selectAll("text")
      .attr("fill", "white");

    // Add Y axis
    svg
      .append("g")
      .call(d3.axisLeft(y).ticks(5)) // Ensure y-axis has ticks from 0 to 5
      .selectAll("text")
      .attr("fill", "white");

    // Add line
    const line = d3
      .line()
      .x((d) => x(new Date(d.year, 0, 1)))
      .y((d) => y(d.averageRating));

    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "white")
      .attr("stroke-width", 1) // Reduce the stroke width
      .attr("d", line);

    // Add dots with tooltips
    svg
      .selectAll("dot")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", (d) => x(new Date(d.year, 0, 1)))
      .attr("cy", (d) => y(d.averageRating))
      .attr("r", 3) // Reduce the radius of the points
      .attr("fill", "white")
      .on("mouseover", (event, d) => {
        // Show tooltip on mouseover
        svg
          .append("rect")
          .attr("id", "tooltip-bg")
          .attr("x", x(new Date(d.year, 0, 1)) + 5) // Posición x del rectángulo
          .attr("y", y(d.averageRating) - 20) // Posición y del rectángulo
          .attr("width", 100) // Ancho del rectángulo
          .attr("height", 20) // Altura del rectángulo
          .attr("fill", "white"); // Color blanco

        svg
          .append("text")
          .attr("id", "tooltip")
          .attr("x", x(new Date(d.year, 0, 1)) + 10)
          .attr("y", y(d.averageRating) - 5) // Ajuste de posición para el texto dentro del rectángulo
          .attr("fill", "black")
          .text(`${d.averageRating.toFixed(2)} (${d.year})`);
      })
      .on("mouseout", () => {
        // Remove tooltip on mouseout
        svg.select("#tooltip").remove();
        svg.select("#tooltip-bg").remove();
      });

    // Add gridlines for X axis decades
    svg
      .append("g")
      .attr("class", "grid-decades")
      .attr("transform", `translate(0, ${height})`)
      .call(
        d3
          .axisBottom(x)
          .ticks(d3.timeYear.every(10))
          .tickSize(-height)
          .tickFormat("")
      )
      .selectAll(".tick line")
      .attr("stroke", "white");
  }, [data]);

  return <svg ref={svgRef}></svg>;
};

export default LineChart;
