import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const PieChart = ({ data }) => {
  const ref = useRef();

  useEffect(() => {
    const svg = d3.select(ref.current);
    svg.selectAll('*').remove(); // Clear previous content

    const width = 400, height = 400;
    const radius = Math.min(width, height) / 2;

    const color = d3.scaleOrdinal()
      .domain(data.map(d => d.type))
      .range(d3.schemeCategory10);

    const pie = d3.pie()
      .value(d => d.count);

    const arc = d3.arc()
      .innerRadius(0)
      .outerRadius(radius);

    const pieSvg = svg.append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    pieSvg.selectAll('path')
      .data(pie(data))
      .join('path')
        .attr('d', arc)
        .attr('fill', d => color(d.data.type));

    // Add legend
    const legend = svg.append('g')
      .attr('transform', `translate(${width - 100}, 20)`);

    legend.selectAll('rect')
      .data(data)
      .join('rect')
        .attr('x', 0)
        .attr('y', (d, i) => i * 20)
        .attr('width', 18)
        .attr('height', 18)
        .attr('fill', d => color(d.type));

    legend.selectAll('text')
      .data(data)
      .join('text')
        .attr('x', 24)
        .attr('y', (d, i) => i * 20 + 9)
        .attr('dy', '0.35em')
        .text(d => d.type);
  }, [data]);

  return (
    <svg ref={ref} width={400} height={400}></svg>
  );
};

export default PieChart;
