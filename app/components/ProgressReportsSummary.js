import React from 'react';

const ProgressReportsSummary = ({ data }) => {
  const milestones = data.map(report => report.milestonesAchieved).join(', ');
  const challenges = data.map(report => report.challengesFaced).join(', ');
  const futurePlans = data.map(report => report.futurePlans).join(', ');

  return (
    <div className="p-4 bg-white rounded shadow">
      <h3 className="text-lg font-bold">Progress Reports Summary</h3>
      <p><strong>Milestones Achieved:</strong> {milestones}</p>
      <p><strong>Challenges Faced:</strong> {challenges}</p>
      <p><strong>Future Plans:</strong> {futurePlans}</p>
    </div>
  );
};

export default ProgressReportsSummary;
