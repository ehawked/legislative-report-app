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

      {/* New Horizontal Card */}
      <div className="report-card w-full mb-6">
        <div className="flex items-start gap-6">
          <div className="report-icon shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="flex-1">
            <h2 className="mb-4">Executive Summary</h2>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <h3 className="text-sm font-semibold text-gray-600 mb-2">Current Status</h3>
                <p className="text-base">In committee review with strong bipartisan support. Expected floor vote by June 2025.</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-600 mb-2">Primary Impact</h3>
                <p className="text-base">Streamlines territory transfer process for community college districts, affecting 15% of California's community colleges.</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-600 mb-2">Key Stakeholders</h3>
                <p className="text-base">Community college districts, faculty unions, student organizations, and local governance bodies.</p>
              </div>
            </div>
          </div>
        </div>
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2>Projected Costs</h2>
          <div className="mt-4">
            <div className="text-3xl font-bold text-purple-700 mb-2">$2.8M</div>
            <div className="text-gray-600 text-sm mb-4">Annual Program Cost</div>
            
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Administrative Costs</span>
                  <span className="font-medium">$1.2M</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-600 rounded-full" style={{ width: '43%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Technology Integration</span>
                  <span className="font-medium">$800K</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-600 rounded-full" style={{ width: '29%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Support Services</span>
                  <span className="font-medium">$500K</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-600 rounded-full" style={{ width: '18%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Training & Development</span>
                  <span className="font-medium">$300K</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-600 rounded-full" style={{ width: '10%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleReportPreview;