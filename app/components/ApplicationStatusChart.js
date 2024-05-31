import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const ApplicationsStatusChart = ({ data }) => {
  const ref = useRef();

  useEffect(() => {
    const svg = d3.select(ref.current);
    svg.selectAll('*').remove(); // Clear previous content

    const margin = { top: 20, right: 30, bottom: 40, left: 40 },
      width = 600 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

    const statusCounts = d3.rollups(data, v => v.length, d => d.status);

    const x = d3.scaleBand()
      .domain(statusCounts.map(d => d[0]))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const y = d3.scaleLinear()
      .domain([0, d3.max(statusCounts, d => d[1])]).nice()
      .range([height - margin.bottom, margin.top]);

    const xAxis = g => g
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x).tickSizeOuter(0));

    const yAxis = g => g
      .attr('transform', `translate(${margin.left},0)`)
      .call(d3.axisLeft(y))
      .call(g => g.select('.domain').remove());

    svg.append('g')
      .selectAll('.bar')
      .data(statusCounts)
      .join('rect')
        .attr('class', 'bar')
        .attr('x', d => x(d[0]))
        .attr('y', d => y(d[1]))
        .attr('height', d => y(0) - y(d[1]))
        .attr('width', x.bandwidth());

    svg.append('g').call(xAxis);
    svg.append('g').call(yAxis);

    // Add legend
    const legend = svg.append('g')
      .attr('transform', `translate(${width - margin.right - 100}, ${margin.top})`);

    legend.selectAll('rect')
      .data(statusCounts)
      .join('rect')
        .attr('x', 0)
        .attr('y', (d, i) => i * 20)
        .attr('width', 18)
        .attr('height', 18)
        .attr('fill', 'steelblue');

    legend.selectAll('text')
      .data(statusCounts)
      .join('text')
        .attr('x', 24)
        .attr('y', (d, i) => i * 20 + 9)
        .attr('dy', '0.35em')
        .text(d => d[0]);
  }, [data]);

  return (
    <svg ref={ref} width={600} height={400}></svg>
  );
};

export default ApplicationsStatusChart;
