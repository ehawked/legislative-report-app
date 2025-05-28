import React from 'react';

const SampleReportPreview: React.FC = () => {
  return (
    <div className="report-preview-container mx-auto mb-8">
      <div className="text-center mb-4">
        <span className="inline-block px-3 py-1 text-sm font-medium bg-purple-100 text-purple-800 rounded-full">Report Overview</span>
      </div>
      
      <div className="report-header">
        <h1>California SB 226: Community colleges: territory transfers between districts</h1>
        <p className="text-gray-600">Comprehensive Legislative Analysis</p>
      </div>
      
      <div className="report-grid">
        <div className="report-card">
          <div className="report-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2>Bill Overview</h2>
          <ul className="report-list">
            <li>Introduced by Senator Christopher Cabaldon on January 28, 2025</li>
            <li>Establishes alternative process for California Community College district territory transfers</li>
            <li>Specifically targets transfers between districts in counties with multiple CCC districts</li>
            <li>Current status: In Progress (Set for hearing May 23, 2025)</li>
            <li>Projected cost: $2.8M annually for program administration</li>
          </ul>
        </div>
        
        <div className="report-card">
          <div className="report-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h2>Key Provisions</h2>
          <ul className="report-list">
            <li>Authorizes Board of Governors to approve territory transfers without standard petition process</li>
            <li>Applies to districts in counties divided among three or more CCC districts</li>
            <li>Ensures employee classification and rights protection during transfers</li>
            <li>Allows territory transfers to be approved without election</li>
          </ul>
        </div>
        
        <div className="report-card">
          <div className="report-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h2>Political Analysis</h2>
          <ul className="report-list">
            <li>Strong committee support with 5-2 vote in Senate Education Committee</li>
            <li>7-0 vote to place on suspense file in Senate Appropriations Committee</li>
            <li>Primary intent is to streamline transfer of Woodland College from Yuba CCD to Los Rios CCD</li>
            <li>Key opposition from faculty unions citing governance concerns</li>
            <li>Likelihood of passage: High, with potential amendments in Appropriations</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SampleReportPreview;