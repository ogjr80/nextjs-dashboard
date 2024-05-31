// import React from 'react';
// import Link from 'next/link';

// const Sidebar = () => {
//   return (
//     <aside className="w-64 bg-gray-800 text-white min-h-screen p-4">
//       <nav>
//         <ul>
//           <li><Link href="/">Overview</Link></li>
//           <li><Link href="/startups">Startups</Link></li>
//           <li><Link href="/applications">Applications</Link></li>
//           <li><Link href="/progress-report">Progress Reports</Link></li>
//           <li><Link href="/financial-tracking">Financial Tracking</Link></li>
//           <li><Link href="/impact-metrics">Impact Metrics</Link></li>
//           <li><Link href="/settings">Settings</Link></li>
//         </ul>
//       </nav>
//     </aside>
//   );
// };

// export default Sidebar;
'use client';

import Link from 'next/link';
import { PowerIcon } from '@heroicons/react/24/outline';
import NavLinks from './NavLinks';
import AcmeLogo from './AcmeLogo'; 

const Sidebar = () => {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-gray-800 text-white">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <AcmeLogo /> {/* Replace with your actual logo component */}
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sidebar;

