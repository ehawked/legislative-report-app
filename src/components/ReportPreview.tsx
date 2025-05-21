// src/components/ReportPreview.tsx

import React from 'react';

interface ReportPreviewProps {
  billNumber: string;
}

const ReportPreview: React.FC<ReportPreviewProps> = ({ 
  billNumber
}) => {
  // Format bill number for display
  const formattedBillNumber = billNumber || "AB-123";
  
  // Mock data for the preview
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="report-preview-container">
      {/* Header Section */}
      <div className="report-header">
        <h1>Bill Analysis: {formattedBillNumber}</h1>
        <p>From Legislative Intelligence to Strategic Action</p>
      </div>

      {/* Three Column Grid - Main Sections */}
      <div className="report-grid-3">
        {/* Background Section */}
        <div className="report-card">
          <div className="report-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <h2>Bill Overview</h2>
          <ul className="report-list">
            <li>Introduced on January 15, 2025</li>
            <li>Author: Assembly Member Johnson</li>
            <li>Co-sponsors: 5 Assembly Members, 2 Senators</li>
            <li>Current status: In committee</li>
            <li>Last action: Referred to Appropriations</li>
          </ul>
        </div>

        {/* Key Provisions Section */}
        <div className="report-card">
          <div className="report-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <h2>Key Provisions</h2>
          <ul className="report-list">
            <li>Establishes new emissions reduction targets</li>
            <li>Creates $500M annual fund for infrastructure</li>
            <li>Requires state agencies to develop plans</li>
            <li>Mandates climate risk disclosure</li>
            <li>Sets implementation timeline of 24 months</li>
          </ul>
        </div>

        {/* Fiscal Impact Section */}
        <div className="report-card">
          <div className="report-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="1" x2="12" y2="23"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
          </div>
          <h2>Fiscal Impact</h2>
          <p className="report-subtitle">Estimated total cost: $2.8 billion over 5 years</p>
          <div className="report-chart">
            <div className="chart-bar" style={{ height: '60px' }}>
              <div className="chart-label">2025</div>
            </div>
            <div className="chart-bar" style={{ height: '80px' }}>
              <div className="chart-label">2026</div>
            </div>
            <div className="chart-bar" style={{ height: '100px' }}>
              <div className="chart-label">2027</div>
            </div>
            <div className="chart-bar" style={{ height: '120px' }}>
              <div className="chart-label">2028</div>
            </div>
          </div>
        </div>
      </div>

      {/* Two Column Grid - Additional Sections */}
      <div className="report-grid-2">
        {/* Stakeholder Positions */}
        <div className="report-card">
          <div className="report-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <h2>Stakeholder Positions</h2>
          <div className="stakeholder-section">
            <h3>Support</h3>
            <ul className="report-list">
              <li>California Environmental Coalition</li>
              <li>Clean Energy Business Association</li>
              <li>Urban Planning Institute</li>
            </ul>
          </div>
          <div className="stakeholder-section">
            <h3>Opposition</h3>
            <ul className="report-list">
              <li>State Manufacturing Alliance</li>
              <li>Transportation Industry Group</li>
              <li>Rural Counties Association</li>
            </ul>
          </div>
        </div>

        {/* Political Analysis */}
        <div className="report-card">
          <div className="report-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <h2>Political Analysis</h2>
          <p>Likelihood of passage: <span className="highlight">Moderate to High</span></p>
          <ul className="report-list">
            <li>Strong support from majority party leadership</li>
            <li>Potential amendments likely in Appropriations</li>
            <li>Governor has signaled support for core provisions</li>
            <li>Election year considerations may accelerate timeline</li>
            <li>Key opposition focused on implementation timeline, not core goals</li>
          </ul>
        </div>
      </div>

      {/* Full Width Sections */}
      <div className="report-grid-1">
        {/* Strategic Recommendations */}
        <div className="report-card">
          <div className="report-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
          </div>
          <h2>Strategic Recommendations</h2>
          <div className="recommendations-grid">
            <div className="recommendation">
              <h3>Short-term Actions</h3>
              <ul className="report-list">
                <li>Engage with Appropriations Committee members before vote</li>
                <li>Prepare impact analysis for affected client operations</li>
                <li>Develop messaging strategy highlighting economic benefits</li>
              </ul>
            </div>
            <div className="recommendation">
              <h3>Medium-term Strategy</h3>
              <ul className="report-list">
                <li>Position for implementation phase input</li>
                <li>Build coalition with supportive stakeholders</li>
                <li>Identify potential amendment opportunities</li>
              </ul>
            </div>
            <div className="recommendation">
              <h3>Long-term Considerations</h3>
              <ul className="report-list">
                <li>Prepare compliance framework for client operations</li>
                <li>Monitor related legislative initiatives</li>
                <li>Evaluate opportunities in new funding programs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="report-footer">
        <p>Report generated on {currentDate} | LegisVoice Intelligence</p>
        <p>This analysis is based on current information and subject to change as the legislative process evolves.</p>
      </div>
    </div>
  );
};

export default ReportPreview;
