'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

const StartupPage = () => {
  const [data, setData] = useState(null);
  const pathname = usePathname();
  const router = useRouter(); 
  const id = pathname.split('/').pop();  // Extract id from the path

  useEffect(() => {
    if (id) {
      fetch('/data/sampleData.json')
        .then((response) => response.json())
        .then((jsonData) => {
          const startup = jsonData.startups.find((s) => s.id === parseInt(id));
          setData(startup);
        });
    }
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <button onClick={() => router.back()} className="text-blue-600 mb-4">Back</button>
      <h2 className="text-xl font-bold">{data.name}</h2>
      <p><strong>Founder:</strong> {data.founderDetails}</p>
      <p><strong>Contact:</strong> {data.contactInformation}</p>
      <p><strong>Type:</strong> {data.type}</p>
      <p><strong>Grant Amount:</strong> ${data.grantAmountApproved.toLocaleString()}</p>
      <p><strong>Disbursement Date:</strong> {data.grantDisbursementDate}</p>
      <h3 className="mt-4 text-lg font-bold">Progress Reports</h3>
      {data.progress && data.progress.length > 0 ? (
        data.progress.map((report, index) => (
          <div key={index} className="bg-white p-4 rounded shadow mt-2">
            <p><strong>Reporting Period:</strong> {report.reportingPeriod}</p>
            <p><strong>Milestones Achieved:</strong> {report.milestonesAchieved}</p>
            <p><strong>Funds Utilized:</strong> ${report.fundsUtilized.toLocaleString()}</p>
            <p><strong>Impact Metrics:</strong> {JSON.stringify(report.impactMetrics)}</p>
            <p><strong>Challenges Faced:</strong> {report.challengesFaced}</p>
            <p><strong>Future Plans:</strong> {report.futurePlans}</p>
          </div>
        ))
      ) : (
        <p>No progress reports available.</p>
      )}
    </div>
  );
};

export default StartupPage;
