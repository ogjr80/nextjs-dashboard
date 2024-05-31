

import {fetchFinancialTracking} from '@/app/lib/prismaQueries'

const FinancialTrackingTable = async () => {

  const data = await fetchFinancialTracking(); 

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead className="bg-gray-100">
          <tr>
            {/* <th className="py-3 px-4 border-b">Startup ID</th> */}
            <th className="py-3 px-4 border-b">Date</th>
            <th className="py-3 px-4 border-b">Amount</th>
            <th className="py-3 px-4 border-b">Category</th>
            <th className="py-3 px-4 border-b">Description</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((entry, index) => (
            <tr key={index} className="hover:bg-gray-50 transition-all">
              {/* <td className="py-3 px-4 border-b">{entry.startupId}</td> */}
              <td className="py-3 px-4 border-b">{entry.date.toLocaleString()}</td>
              <td className="py-3 px-4 border-b">${entry.amount.toLocaleString()}</td>
              <td className="py-3 px-4 border-b">{entry.category}</td>
              <td className="py-3 px-4 border-b">{entry.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FinancialTrackingTable;
