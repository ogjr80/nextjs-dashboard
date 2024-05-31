// 'use client';

// import React, { useEffect, useState } from 'react';
import ApplicationsTable from '@/app/ui/applications/ApplicationsTable';

const ApplicationsPage = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch('/data/sampleData.json')
//       .then((response) => response.json())
//       .then((data) => setData(data.applications));
//   }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Applications</h2>
      {/* {data ? (
        <ApplicationsTable />
      ) : (
        <p>Loading...</p>
      )} */}
      {
        <ApplicationsTable /> 
      }
    </div>
  );
};

export default ApplicationsPage;
