import {fetchProgressReports} from '@/app/lib/prismaQueries'

const ProgressReportsTable = async  () => {
  const data = await fetchProgressReports(); 
  console.log(data); 

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gopherlabs.co.... - Opher Laray-200 rounded-lg shadow-md">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-3 px-4 border-b">Startup ID</th>
            <th className="py-3 px-4 border-b">Reporting Period</th>
            <th className="py-3 px-4 border-b">Milestones Achieved</th>
            <th className="py-3 px-4 border-b">Funds Utilized</th>
            <th className="py-3 px-4 border-b">Impact Metrics</th>
            <th className="py-3 px-4 border-b">Challenges Faced</th>
            <th className="py-3 px-4 border-b">Future Plans</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((report, index) => (
            <tr key={index} className="hover:bg-gray-50 transition-all duration-300 ease-in-out">
              <td className="py-3 px-4 border-b">{report.startupId}</td>
              <td className="py-3 px-4 border-b">{report.reportingPeriod.toLocaleString()}</td>
              <td className="py-3 px-4 border-b">{report.milestonesAchieved}</td>
              <td className="py-3 px-4 border-b">${report.fundsUtilized.toLocaleString()}</td>
              <td className="py-3 px-4 border-b">{JSON.stringify(report.impactMetrics)}</td>
              <td className="py-3 px-4 border-b">{report.challengesFaced}</td>
              <td className="py-3 px-4 border-b">{report.futurePlans}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProgressReportsTable;
