
// import React, { useEffect, useState } from 'react';
// import ProgressReportsTable from '../../components/ProgressReportsTable'; 
import ProgressReportsTable from '@/app/ui/progressreports/ProgressReportsTable';
const ProgressReportsPage = () => {

  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch('/data/sampleData.json')
  //     .then((response) => response.json())
  //     .then((data) => setData(data.progressReports));
  // }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Progress Reports</h2>
      <div className="p-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg shadow-lg text-white mb-4">
        <p className="text-lg">Keep track of all the milestones, challenges, and future plans of our funded startups in a beautifully animated table.</p>
      </div>
      {/* {data ? (
        <ProgressReportsTable/>
      ) : (
        <p>Loading...</p>
      )} */}
      {
        <ProgressReportsTable />
      }
    </div>
  );
};

export default ProgressReportsPage;
