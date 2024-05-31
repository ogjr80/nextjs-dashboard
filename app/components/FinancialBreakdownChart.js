import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const FinancialBreakdownChart = ({ data }) => {
  const ref = useRef();

  useEffect(() => {
    const svg = d3.select(ref.current);
    svg.selectAll('*').remove(); // Clear previous content

    const width = 400, height = 400;
    const radius = Math.min(width, height) / 2;

    const categorySums = d3.rollups(data, v => d3.sum(v, d => d.amount), d => d.category);

    const color = d3.scaleOrdinal()
      .domain(categorySums.map(d => d[0]))
      .range(d3.schemeCategory10);

    const pie = d3.pie()
      .value(d => d[1]);

    const arc = d3.arc()
      .innerRadius(0)
      .outerRadius(radius);

    const pieSvg = svg.append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    pieSvg.selectAll('path')
      .data(pie(categorySums))
      .join('path')
        .attr('d', arc)
        .attr('fill', d => color(d.data[0]));

    // Add legend
    const legend = svg.append('g')
      .attr('transform', `translate(${width - 100}, 20)`);

    legend.selectAll('rect')
      .data(categorySums)
      .join('rect')
        .attr('x', 0)
        .attr('y', (d, i) => i * 20)
        .attr('width', 18)
        .attr('height', 18)
        .attr('fill', d => color(d[0]));

    legend.selectAll('text')
      .data(categorySums)
      .join('text')
        .attr('x', 24)
        .attr('y', (d, i) => i * 20 + 9)
        .attr('dy', '0.35em')
        .text(d => d[0]);
  }, [data]);

  return (
    <svg ref={ref} width={400} height={400}></svg>
  );
};

export default FinancialBreakdownChart;
