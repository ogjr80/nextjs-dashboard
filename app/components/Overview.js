
'use client';

import React, { useEffect, useState } from 'react';
import BarChart from '../components/BarChart';
import PieChart from '../components/PieChart';

import ApplicationsStatusChart from '../components/ApplicationStatusChart'; 
import ProgressReportsSummary from '../components/ProgressReportsSummary';
import FinancialBreakdownChart from '../components/FinancialBreakdownChart';

import Link from 'next/link';

const Overview = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data/sampleData.json')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const barData = data && data.overview ? [
    { name: 'Total Grants Disbursed', value: data.overview.totalGrantsDisbursed },
    { name: 'Total Funds Utilized', value: data.overview.totalFundsUtilized },
    { name: 'Total Funds Remaining', value: data.overview.totalFundsRemaining }
  ] : [];

  const pieData = data && data.startups ? [
    { type: 'For-profit', count: data.startups.filter(s => s.type === 'For-profit').length },
    { type: 'Non-profit', count: data.startups.filter(s => s.type === 'Non-profit').length }
  ] : [];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Overview</h2>
      {data && data.overview && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-lg">Total Startups</h3>
            <p>{data.overview.totalStartups}</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-lg">Total Grants Disbursed</h3>
            <p>${data.overview.totalGrantsDisbursed.toLocaleString()}</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-lg">Total Funds Utilized</h3>
            <p>${data.overview.totalFundsUtilized.toLocaleString()}</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-lg">Total Funds Remaining</h3>
            <p>${data.overview.totalFundsRemaining.toLocaleString()}</p>
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">Charts</h3>
          <BarChart data={barData} />
        </div>
        <div>
          <PieChart data={pieData} className="mt-8" />
        </div>
        {data && data.applications && (
          <div className="col-span-1 md:col-span-2">
            <h3 className="mt-8 text-lg font-bold mb-4">Applications Status</h3>
            <ApplicationsStatusChart data={data.applications} />
          </div>
        )}
        {/* {data && data.progressReports && (
          <div className="col-span-1 md:col-span-2">
            <h3 className="mt-8 text-lg font-bold mb-4">Progress Reports Summary</h3>
            <ProgressReportsSummary data={data.progressReports} />
          </div>
        )} */}
        {data && data.financialTracking && (
          <div className="col-span-1 md:col-span-2">
            <h3 className="mt-8 text-lg font-bold mb-4">Financial Breakdown</h3>
            <FinancialBreakdownChart data={data.financialTracking} />
          </div>
        )}
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-bold mb-4">Startups</h3>
        {data && data.startups && (
          <ul>
            {data.startups.map((startup) => (
              <li key={startup.id} className="mb-2">
                <Link href={`/startups/${startup.id}`}>
                  <span className="text-blue-600">{startup.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Overview;

// import ApplicationsStatusChart from '../components/ApplicationStatusChart'; 
// import ProgressReportsSummary from '../components/ProgressReportsSummary';
// import FinancialBreakdownChart from '../components/FinancialBreakdownChart';
