import React from 'react';

const SampleReportPreview: React.FC = () => {
  return (
    <div className="report-preview-container mx-auto mb-8">
      <div className="text-center mb-4">
        <span className="inline-block px-3 py-1 text-sm font-medium bg-purple-100 text-purple-800 rounded-full">Sample Report Preview</span>
      </div>
      
      <div className="report-header">
        <h1>California AB-123: Clean Energy Investment Act</h1>
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
            <li>Introduced by Assemblymember Johnson on January 15, 2025</li>
            <li>Allocates $2.5 billion for renewable energy infrastructure</li>
            <li>Creates tax incentives for clean energy businesses</li>
            <li>Establishes oversight committee for fund distribution</li>
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
            <li>Section 1: $1.2B for solar infrastructure development</li>
            <li>Section 2: $800M for wind energy projects</li>
            <li>Section 3: $500M for energy storage research</li>
            <li>Section 4: Tax credits for businesses (10-25%)</li>
          </ul>
        </div>
        
        <div className="report-card">
          <div className="report-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2>Fiscal Impact</h2>
          <p>Projected economic impact over 5 years:</p>
          <div className="chart-container">
            <div className="chart-bar" style={{ height: '60%' }}>
              <div className="chart-label">2025</div>
            </div>
            <div className="chart-bar" style={{ height: '75%' }}>
              <div className="chart-label">2026</div>
            </div>
            <div className="chart-bar" style={{ height: '90%' }}>
              <div className="chart-label">2027</div>
            </div>
            <div className="chart-bar" style={{ height: '100%' }}>
              <div className="chart-label">2028</div>
            </div>
            <div className="chart-bar" style={{ height: '110%' }}>
              <div className="chart-label">2029</div>
            </div>
          </div>
        </div>
        
        <div className="report-card">
          <div className="report-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h2>Stakeholder Positions</h2>
          <div className="stakeholder-section">
            <h3>Support:</h3>
            <ul className="report-list">
              <li>California Clean Energy Coalition</li>
              <li>Sierra Club</li>
              <li>Tech Industry Association</li>
            </ul>
          </div>
          <div className="stakeholder-section">
            <h3>Opposition:</h3>
            <ul className="report-list">
              <li>Petroleum Association</li>
              <li>Taxpayers Alliance</li>
            </ul>
          </div>
        </div>
        
        <div className="report-card">
          <div className="report-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h2>Political Analysis</h2>
          <ul className="report-list">
            <li>Strong support from Democratic caucus (92%)</li>
            <li>Mixed reception from Republicans (35% support)</li>
            <li>Governor has signaled support if passed</li>
            <li>Key committee vote expected on June 15</li>
            <li>Floor vote projected for early July</li>
          </ul>
        </div>
        
        <div className="report-card">
          <div className="report-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <h2>Strategic Recommendations</h2>
          <ul className="report-list">
            <li>Focus advocacy on moderate Republicans</li>
            <li>Emphasize job creation aspects in communications</li>
            <li>Prepare amendments for Section 4 tax provisions</li>
            <li>Engage with Appropriations Committee members</li>
            <li>Develop coalition with tech industry stakeholders</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SampleReportPreview;
