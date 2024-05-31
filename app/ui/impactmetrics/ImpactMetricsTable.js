import React from 'react';

const ImpactMetricsTable = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-3 px-4 border-b">Startup ID</th>
            <th className="py-3 px-4 border-b">Reporting Period</th>
            <th className="py-3 px-4 border-b">Impact Metrics</th>
          </tr>
        </thead>
        <tbody>
          {data.map((report, index) => (
            <tr key={index} className="hover:bg-gray-50 transition-all">
              <td className="py-3 px-4 border-b">{report.startupId}</td>
              <td className="py-3 px-4 border-b">{report.reportingPeriod}</td>
              <td className="py-3 px-4 border-b">{JSON.stringify(report.impactMetrics)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ImpactMetricsTable;
