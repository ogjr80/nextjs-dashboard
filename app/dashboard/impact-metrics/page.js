'use client';

import React, { useEffect, useState } from 'react';
import ImpactMetricsTable from '@/app/ui/impactmetrics/ImpactMetricsTable';
const ImpactMetricsPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data/sampleData.json')
      .then((response) => response.json())
      .then((data) => setData(data.progressReports));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Impact Metrics</h2>
      {data ? (
        <ImpactMetricsTable data={data} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ImpactMetricsPage;
