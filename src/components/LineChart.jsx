/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import * as d3 from "d3";

const LineChart = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    // Set up dimensions and margins
    const margin = { top: 20, right: 30, bottom: 50, left: 60 };
    const width = 400 - margin.left - margin.right;
    const height = 200 - margin.top - margin.bottom;

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
      .scaleTime()
      .domain(d3.extent(data, (d) => new Date(d.year)))
      .range([0, width]);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .range([height, 0]);

    // Add X axis
    svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x).tickFormat(d3.timeFormat("%Y")))
      .append("text")
      .attr("fill", "#000")
      .attr("x", width / 2)
      .attr("y", margin.bottom - 10)
      .attr("text-anchor", "middle")
      .text("Year");

    // Add Y axis
    svg
      .append("g")
      .call(d3.axisLeft(y))
      .append("text")
      .attr("fill", "#000")
      .attr("transform", "rotate(-90)")
      .attr("x", -height / 2)
      .attr("y", -margin.left + 15)
      .attr("text-anchor", "middle")
      .text("Value");

    // Add line
    const line = d3
      .line()
      .x((d) => x(new Date(d.year)))
      .y((d) => y(d.value));

    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", line);

    // Add dots
    svg
      .selectAll("dot")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", (d) => x(new Date(d.year)))
      .attr("cy", (d) => y(d.value))
      .attr("r", 5)
      .attr("fill", "steelblue");
  }, [data]);

  return <svg ref={svgRef}></svg>;
};

export default LineChart;


/* import LineChart from "./LineChart";

const data = [
  { year: "2010", value: 5 },
  { year: "2011", value: 1 },
  { year: "2012", value: 4 },
  { year: "2013", value: 5 },
  { year: "2014", value: 2 },
];

const App = () => {
  return (
    <div>
      <h1>Ramiro Sabe D3</h1>
      <LineChart data={data} />
    </div>
  );
};

export default App;
 */