import React from 'react';
import db from '@/app/lib/db'; 
import {fetchApplications} from '@/app/lib/prismaQueries'; 


const ApplicationsTable = async  () => {
  
  const data = await fetchApplications(); 

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead className="bg-gray-100">
          <tr>
            {/* <th className="py-3 px-4 border-b">Startup ID</th> */}
            <th className="py-3 px-4 border-b">Application Date</th>
            <th className="py-3 px-4 border-b">Status</th>
            <th className="py-3 px-4 border-b">Requested Amount</th>
            <th className="py-3 px-4 border-b">Project Description</th>
            <th className="py-3 px-4 border-b">Reviewer Comments</th>
          </tr>
        </thead>
        <tbody>
          {data.map((application, index) => (
            <tr key={index} className="hover:bg-gray-50 transition-all">
              {/* <td className="py-3 px-4 border-b">{application.startupId}</td> */}
              <td className="py-3 px-4 border-b">{application.applicationDate.toLocaleString()}</td>
              <td className="py-3 px-4 border-b">{application.status}</td>
              <td className="py-3 px-4 border-b">${application.requestedAmount.toLocaleString()}</td>
              <td className="py-3 px-4 border-b">{application.projectDescription}</td>
              <td className="py-3 px-4 border-b">{application.reviewerComments}</td>
            
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicationsTable;
